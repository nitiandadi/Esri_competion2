import { defineStore } from 'pinia'
import { Ref,ref } from "vue";
import { useMapviewStore } from '@/store/mapviewstore'
import { climate,pollution,waterquality } from '@/features';

export const useOnlayerStore = defineStore('onlayer', () => {
    // 获取mapview实例
    const view = useMapviewStore().getView() as __esri.MapView;
    // 获取view中的要素图层
    const pointslayer = view.map.allLayers.getItemAt(1) as __esri.FeatureLayer;
    // 获取view中的要素图层视图
    const pointslayerView = view.allLayerViews.getItemAt(1) as __esri.FeatureLayerView;

    // 创建一个ref对象，用于存储查询到的要素的唯一值id
    const IdRef = ref<number>(0);

    // 实例化ECharts对象
    let ChartLine: echarts.ECharts | null = null;
    let ChartRadar: echarts.ECharts | null = null;
    let ChartBar: echarts.ECharts | null = null;

    //获取自己创建的折线图表实例
    function setChartLine( chart: echarts.ECharts ) {
        ChartLine = chart;
    };
    //获取自己创建的雷达图表实例
    function setChartRadar( chart: echarts.ECharts ) {
        ChartRadar = chart;
    };
    //获取自己创建的柱状图表实例
    function setChartBar( chart: echarts.ECharts ) {
        ChartBar = chart;
    };

    // 为图表添加新的数据
    function addData( datas: any, chart: echarts.ECharts | null ) {
        if (chart) {
            chart.setOption({
                series: [{
                    data: datas,
                }]
            });
        };
    };

    // 为图层创建点击事件
    function createOnlayer( ){
        // 创建手柄
        let handle: __esri.Handle; 
        // 查找要素图层中FID为1的要素，选中该要素
        const query = pointslayer.createQuery();
        query.where = "FID = 1";
        pointslayer.queryFeatures(query).then(function(results: __esri.FeatureSet){
            // 选中要素
            handle = pointslayerView.highlight(results.features[0]);
            // 放大到要素
            view.goTo(results.features);
        });
        // 对FID为1的要素拿到数值，为图表添加数据
        

        // 创建点击事件
        view.on("click", (event) => {   
            // 取消选中要素
            handle.remove();
            // 放大到要素
            view.goTo(event.mapPoint);
            // 返回点击位置的要素
            view.hitTest(event).then(function(response: __esri.HitTestResult){
                if (response.results.length === 1) {
                    // 获取查询到的要素的唯一值id
                    IdRef.value = (response.results[0] as __esri.GraphicHit).graphic.attributes["FID"];
                }
                // 为图表添加新的数据
                               
            });

        });
    }

    return {   createOnlayer , setChartLine , setChartRadar , setChartBar , IdRef }

});
