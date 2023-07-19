import { defineStore } from 'pinia'
//@ts-ignore
import { useViewStore } from '@/store/mapViewstore'
import { initHeatmap } from '@/utils/timeheatmapUtils'
import { createtimePointslayer, AQIfeatures,city } from '@/features'
import { useUpdate } from '@/hooks/useUpdata';
import { useTime } from '@/hooks/useTime';
import Legend from "@arcgis/core/widgets/Legend.js";
import axios from 'axios';
//@ts-ignore
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
// @ts-ignore
import { Ref, ref } from 'vue';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

export const useHeatmapStore = defineStore('heatmap', () => {
    //图例
    let legend: __esri.Legend | null = null;
    //时间序列图层
    let timepointslaers: __esri.FeatureLayer[] = [];
    //图例容器
    let legendRef: HTMLDivElement | null = null;
    //创建带有时间属性的热力图
    async function createTimeHeatmap(  LegendRef: HTMLDivElement | null ,percentage: Ref<number>, isActive: Ref<boolean> ,falg: Ref<boolean>) {
        //获取mapview实例
        const view = useViewStore().getView() as __esri.MapView;
        //图例容器
        legendRef = LegendRef;
        timepointslaers = createtimePointslayer();
        //获取当日时间
        const time = useTime();
        const year = time.year;
        const month = time.month;
        const day = time.day;
        const currentTime = new Date(year.value, month.value - 1, day.value); // 设置初始值为现在
        let date = new Date(currentTime.getTime());

        // 获取过去2天到后2天的日期数组
        const dates: any[] = [];
        for (let i = -4; i <= 0; i++) {
            date = new Date(year.value, month.value - 1, day.value + i);
            dates.push(date);
        }
        if(falg.value){
            await reactiveUtils.whenOnce(() => view.ready).then(async () => {
                isActive.value = true
                percentage.value = 0
                let i = 0;
                setTimeout(() => { isActive.value = false; }, 30000);
                try {
                    //获取城市的aqi
                    const cityAQI:[{city: string,AQIs: number[];}] = [] as any;
                    for (const feature of city) {
                        for (const coordinate of feature.coordinates) {
                                //将坐标转换为json格式
                                const data = {
                                "location": coordinate,
                            };
                            try {
                                await axios.post("http://81.70.22.42:9000/quality/airLast5d",data).then(async (res) => {
                                    i++
                                    percentage.value = Math.floor((i / (city.length*3 + AQIfeatures.length*5)) * 100);
                                    console.log(percentage.value);
                                    cityAQI.push({city: feature.name, AQIs: res.data.aqi});
                                });
                            } catch (error) {
                                console.log(error);
                            }
                        };
                    }
                    // 创建 GraphicsLayers
                    const graphicsLayers = [];
                    for(let j = 0; j < 5; j++){
                        const graphicsLayer = new GraphicsLayer({
                            id: `AQI${j}`
                        });
                        graphicsLayers.push(graphicsLayer);
                    }   
                    // //为图层提供AQI数据
                    for (const feature of AQIfeatures) {
                        const query = timepointslaers[0].createQuery();
                        query.where = `name='${feature.name}'`;
                        const results = await timepointslaers[0].queryFeatures(query);
                        if (results.features.length > 0) {
                            const city = results.features[0].attributes.city;
                            //随机获得该城市的一个AQI序列
                            const AQIs = cityAQI.filter((item) => item.city === city).map((item) => item.AQIs);
                            const randomAQIs = AQIs[Math.floor(Math.random() * AQIs.length)];
                            console.log(city,randomAQIs);
                            // 创建 Graphic 对象
                            for (let j = 0; j < timepointslaers.length; j++) {
                                const graphic = new Graphic({
                                    geometry: results.features[0].geometry,
                                    attributes: {
                                        name: results.features[0].attributes.name,
                                        city: results.features[0].attributes.city,
                                        aqi: randomAQIs[j],
                                        date: dates[j].getTime(),
                                    }
                                });
                                // 添加或更新 Graphic 对象
                                const graphicsLayer = graphicsLayers[j];
                                graphicsLayer.add(graphic);
                                i++;
                                percentage.value = Math.floor((i /  (city.length*3 + AQIfeatures.length*5)) * 100);
                                if (i ===  (city.length*3 + AQIfeatures.length*5)) {
                                    setTimeout(() => { isActive.value = false; }, 600);
                                }
                                console.log(percentage.value);
                            }
                        }
                    };
                    // 进行热力图渲染
                    for (const [index,graphicsLayer] of graphicsLayers.entries()) {
                        const heatMapLayer = await initHeatmap(graphicsLayer as __esri.GraphicsLayer, 'AQI',dates[index]) as __esri.FeatureLayer;
                        view.map.add(heatMapLayer);
                    }
                    falg.value = false;
                } catch (error) {
                    // 在这里处理请求失败的情况，例如输出错误日志或者给出一个提示
                    console.error(error);
                }
            });
        }
    }


    //删除带有时间属性的热力图
    function cancelTimeHeatmap() {
        //获取mapview实例
        const view = useViewStore().getView() as __esri.MapView;
        if (legend) {
            legend.visible = false;
        }
        // 销毁图例
        view.ui.remove(legend as __esri.Legend);
        // 将mapview.map中第三图层之后的热力图层移除
        for (let i = 0; i < 5; i++) {
            view.map.findLayerById(`AQI${i}`).visible = false;                 
        }
        view.map.allLayers.getItemAt(1).visible = true
    }


    //控制热力图的显示与隐藏
    function toggleHeatmap() {
        //获取mapview实例
        const view = useViewStore().getView() as __esri.MapView;
        // 隐藏图例
        if (legendRef) {
            // 为view上的一个热力图创建图例，用于显示热力图的颜色分布
            legend = new Legend({
                container: legendRef as HTMLDivElement,
                view: view,
                layerInfos: [{
                    layer: view.map.allLayers.find((layer) => { return layer.id === 'AQI2' }) as __esri.FeatureLayer,
                    title: 'AQI热力图图例'
                }],
                style: "card",
            });
            legendRef = null;
        }else{
            if(legend)legend.visible = !legend?.visible;
        }
        // 视图恢复到初始位置
        view.goTo({
            center: [97, 36],
            zoom: 6,
        });
        // 该mapview.map中第三图层之后的热力图层可见性取反
        for (let i = 0; i < 5; i++) {
            view.map.findLayerById(`AQI${i}`).visible = !view.map.findLayerById(`AQI${i}`).visible;                
        }
        // 该mapview.map中第二图层的可见性取反
        view.map.allLayers.getItemAt(1).visible = !view.map.allLayers.getItemAt(1).visible;
    }

    //判断热力图是否全部加载完成
    function isHeatmapLoaded() {
        //获取mapview实例
        const view = useViewStore().getView() as __esri.MapView;
        // 该mapview.map中第三图层之后的热力图层是否全部加载完成
        for (let i = 2; i < view.map.allLayers.length; i++) {
            if (view.map.allLayers.getItemAt(i).loaded === false) {
                return false;
            }
        }
        return true;
    }
    return { createTimeHeatmap, cancelTimeHeatmap, toggleHeatmap, isHeatmapLoaded}
})