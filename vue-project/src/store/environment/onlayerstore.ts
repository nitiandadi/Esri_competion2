import { defineStore } from 'pinia'
import { Ref,ref } from "vue";
import { useViewStore } from '@/store/mapviewstore'
import { useGetdata } from '@/hooks/useGetseries'
import { useTimeoption} from '@/hooks/useTimeoption'
import { climate,pollution,waterquality } from '@/features';

export const useOnlayerStore = defineStore('onlayer', () => {
    // 获取mapview实例
    const view = useViewStore().getView() as __esri.MapView;

    // 获取view中的要素图层
    const pointslayer = view.map.allLayers.getItemAt(1) as __esri.FeatureLayer;
    // 获取view中的要素图层视图
    const pointslayerView = view.allLayerViews.getItemAt(1) as __esri.FeatureLayerView;

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

    // 为图表添加新的数据
    function addData( series: any[] , chart: echarts.ECharts | null ) {
        if (chart) {
            chart.setOption({
                series: series
            });
        };
    };

    // 为图层创建点击事件
    function createOnlayer( ){

        // 将view缩小级别
        view.zoom = 6;

        // 创建一个name，用于存储查询到的要素的名称
        let name: string = "";

        // 查找要素图层中FID为1的要素，选中该要素
        const query = pointslayer.createQuery();
        query.where = "FID = 1";
        pointslayer.queryFeatures(query).then(function (results: __esri.FeatureSet) {
            // 选中要素
            handle = pointslayerView.highlight(results.features[0]);
            // 跟踪到要素
            view.goTo(results.features);
            // 获得要素的属性值中的名称字段
            name = results.features[0].attributes["名称"];

            // 根据FID为1的要素，为图表添加新的数据
            let series = []; // 初始化子对象
            series = useGetdata(climate, name);// 获取到id值对应的climate对象中的series对象
            addData(series, ChartLine);
            series = useGetdata(waterquality, name);// 获取到id值对应的waterquality对象中的数据集
            addData(series, ChartBar);
            useTimeoption(pollution, ChartRadar, name);// id值对应的pollution对象中的数据集来修改相关时间配置
        });         
      
        
        // 创建点击事件
        view.on("click", (event) => {
            // 取消选中要素
            handle!.remove();
            // 跟踪到要素
            view.goTo(event.mapPoint);
            // 获得点击位置的要素ID
            view.hitTest(event).then(function(response: __esri.HitTestResult){
                if (response.results.length === 1) {
                    // 获取查询到的要素的唯一值id
                    IdRef.value = (response.results[0] as __esri.GraphicHit).graphic.attributes["FID"];
                    // 查找要素图层中FID的要素,为图表添加新的数据
                    query.where = `FID = ${IdRef.value}`;
                    pointslayer.queryFeatures(query).then(function(results: __esri.FeatureSet){
                        // 获得要素的属性值中的名称字段
                        name = results.features[0].attributes["名称"];
                        // 根据FID要素，为图表添加新的数据
                        let series = []; // 初始化子对象
                        series = useGetdata(climate, name);// 获取到id值对应的climate对象中的series对象
                        addData(series, ChartLine);
                        series = useGetdata(waterquality, name);// 获取到id值对应的waterquality对象中的数据集
                        addData(series, ChartBar);
                        useTimeoption(pollution, ChartRadar, name);// id值对应的pollution对象中的数据集来修改相关时间配置
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
    }

    return { destroyOnlayer, createOnlayer , setChartLine , setChartRadar , setChartBar , IdRef }

});
