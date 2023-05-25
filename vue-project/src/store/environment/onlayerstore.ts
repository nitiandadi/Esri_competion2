import { defineStore } from 'pinia'
import { Ref,ref } from "vue";

//@ts-ignore
import { useViewStore } from '@/store/mapViewstore'
import { useGetdata } from '@/hooks/useGetseries'

export const useOnlayerStore = defineStore('onlayer', () => {
    // 获取mapview实例
    const view = useViewStore().getView() as __esri.MapView;

    // 获取view中的id为points的图层
    const pointslayer = view.map.findLayerById("points") as __esri.FeatureLayer;

    // 获取上述图层的视图
    const pointslayerView = view.layerViews.find(layerView => layerView.layer.id === "points") as __esri.FeatureLayerView;

    // 创建一个ref对象，用于存储查询到的要素的唯一值id
    const IdRef = ref<number>(0);

    // 创建手柄
    let handle: __esri.Handle | null = null; 

    // 实例化ECharts对象
    let ChartLine: echarts.ECharts | null = null;
    let ChartRadar: echarts.ECharts | null = null;
    let ChartBar: echarts.ECharts | null = null;

    //获取自己创建的折线图表实例
    function setChartLine(chart: echarts.ECharts) {
        ChartLine = chart;
    };
    //获取自己创建的雷达图表实例
    function setChartRadar(chart: echarts.ECharts) {
        ChartRadar = chart;
    };
    //获取自己创建的柱状图表实例
    function setChartBar(chart: echarts.ECharts) {
        ChartBar = chart;
    };

    // 为图层创建点击事件
    async function createOnlayer( ){
        // 将view缩小级别
        view.zoom = 6;
        // 查找要素图层中objectid为1的要素，选中该要素
        const query = pointslayer.createQuery();
        query.where = "objectid = 1";
        await pointslayer.queryFeatures(query).then(async function (results: __esri.FeatureSet) {
            
            // 选中要素
            handle = pointslayerView.highlight(results.features[0]);
            // 刷新图层
            pointslayer.refresh();
            // 跟踪到要素
            view.goTo(results.features);
            await useGetdata(results, "tempMax" , ChartLine , ChartRadar , ChartBar);
        });         
      
        
        // 创建点击事件
        view.on("click", (event) => {
            // 取消选中要素
            if (handle) handle.remove();
            // 跟踪到要素
            view.goTo(event.mapPoint);
            // 获得点击位置的要素ID
            view.hitTest(event).then(async function(response: __esri.HitTestResult){
                if (response.results.length === 1) {
                    // 获取查询到的要素的唯一值id
                    IdRef.value = (response.results[0] as __esri.GraphicHit).graphic.attributes["objectid"];
                    // 查找要素图层中FID的要素,为图表添加新的数据
                    query.where = `objectid = ${IdRef.value}`;
                    await pointslayer.queryFeatures(query).then(async function(results: __esri.FeatureSet){
                        await useGetdata(results, "tempMax" , ChartLine , ChartRadar , ChartBar);
                    });  
                }                             
            });        
        });
    }

    // 销毁点击事件和相关手柄
    function destroyOnlayer( ){
        handle!.remove();
        handle = null;
        // 视图恢复到初始位置
        view.goTo({
            center: [97, 36],
            zoom: 6,
        });
        // 销毁点击事件

    }

    return { destroyOnlayer, createOnlayer , setChartLine , setChartRadar , setChartBar , IdRef }

});
