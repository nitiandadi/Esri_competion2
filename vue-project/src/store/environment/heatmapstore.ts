import { defineStore } from 'pinia'
//@ts-ignore
import { useViewStore } from '@/store/mapViewstore'
import { initHeatmap } from '@/utils/timeheatmapUtils'
import { createtimePointslayer, AQIfeatures } from '@/features'
import { useUpdate } from '@/hooks/useUpdata';
import { useTime } from '@/hooks/useTime';
import Legend from "@arcgis/core/widgets/Legend.js";
import axios from 'axios';

export const useHeatmapStore = defineStore('heatmap', () => {
    //获取mapview实例
    const view = useViewStore().getView() as __esri.MapView;
    //图例
    let legend: __esri.Legend | null = null;
    //时间序列图层
    let timepointslaers: __esri.FeatureLayer[] = [];
    //图例容器
    let legendRef: HTMLDivElement | null = null;
    //创建带有时间属性的热力图
    function createTimeHeatmap(  LegendRef: HTMLDivElement | null ) {
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

        // 对timepointslaers的每个图层进行遍历，渲染为热力图
        timepointslaers.forEach(async (timelayer, index) => {
            if(index === 0 || index === 6) return;
            //为图层提供AQI数据
            for (const feature of AQIfeatures) {
                const query = timelayer.createQuery();
                query.where = `名称='${feature.name}'`;
                await timelayer.queryFeatures(query).then( async (results: __esri.FeatureSet) => {
                    //获得feature的坐标
                    const geometry = results.features[0].geometry;
                    const point = geometry as __esri.Point;
                    //将坐标转换为json格式
                    const data = {
                        "location": `${point.longitude},${point.latitude}`
                    };
                    //获得feature的AQI值
                    await axios.post("http://81.70.22.42:9000/quality/airLast5d",data).then(async (res) => {
                        //为图层提供数据  
                        const where = `名称='${feature.name}'`;                     
                        const attributeUpdates = { aqi: res.data.aqi[index] };
                        const queryOpts: {
                            where: string;
                            attributeUpdates: {
                                [key: string]: any;
                            }
                        } = {
                            where: where,
                            attributeUpdates: attributeUpdates
                        };
                        //提供数据
                        await useUpdate(timelayer, queryOpts);
                    });
                });
            };
            //为图层提供时间数据
            for (const feature of AQIfeatures) {
                const where = `名称='${feature.name}'`;
                const attributeUpdates = { time: dates[index-1].getTime() };
                const queryOpts: {
                    where: string;
                    attributeUpdates: {
                        [key: string]: any;
                    }
                } = {
                    where: where,
                    attributeUpdates: attributeUpdates
                };
                //提供数据
                await useUpdate(timelayer, queryOpts);
            };


            initHeatmap(view, timelayer as __esri.FeatureLayer, 'AQI') as __esri.FeatureLayer;

        });

    }

    //删除带有时间属性的热力图
    function cancelTimeHeatmap() {
        // 销毁图例
        view.ui.remove(legend as __esri.Legend);
        // 将mapview.map中第三图层之后的热力图层移除
        for (let i = 0; i < 7; i++) {
            view.map.remove(view.map.findLayerById(`AQI${i}`));           
        }
        view.map.allLayers.getItemAt(1).visible = true
    }

    //控制热力图的显示与隐藏
    function toggleHeatmap() {
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
        for (let i = 2; i < view.map.allLayers.length; i++) {
            view.map.allLayers.getItemAt(i).visible = !view.map.allLayers.getItemAt(i).visible;
        }
        // 该mapview.map中第二图层的可见性取反
        view.map.allLayers.getItemAt(1).visible = !view.map.allLayers.getItemAt(1).visible;
    }

    //判断热力图是否全部加载完成
    function isHeatmapLoaded() {
        // 该mapview.map中第三图层之后的热力图层是否全部加载完成
        for (let i = 2; i < view.map.allLayers.length; i++) {
            if (view.map.allLayers.getItemAt(i).loaded === false) {
                return false;
            }
        }
        return true;
    }
    return { createTimeHeatmap, cancelTimeHeatmap, toggleHeatmap, isHeatmapLoaded,legend }
})