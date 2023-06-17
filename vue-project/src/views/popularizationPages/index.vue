<template>
<div ref="screen2dRef" class="screen2d">
    <div class="screen2d-lf">
        <div class="screen2d-lf-top">
            <div class="screen2d-lf-title">
                <span>景点简介</span>
                <img src="../images/title_con.png"/>
            </div>
            <div class="screen2d-lf-content" style="background: url('../src/views/images/bor1_4.png') center;background-size: 100% 100%;">
                <introduction :initParam="scenicData"/>
            </div>
        </div>
        <div class="screen2d-lf-center">
            <div class="screen2d-lf-title">
                <span>特色展区</span>
                <img src="../images/title_con.png" alt="" />
            </div>
            <div class="screen2d-lf-content"  style="background: url('../src/views/images/bor1_6.png') center;background-size: 100% 100%;">
                <showchart ref="showchartRef"/>
            </div>
        </div>
        <div class="screen2d-lf-bottom">
            <div class="screen2d-lf-title">
                <span>景点标签</span>
                <img src="../images/title_con.png" alt="" />
            </div>
            <div class="screen2d-lf-content"  style="background: url('../src/views/images/invalid_name.png');background-size: 100% 100%;">
                <titleTag ref="tagchartRef" :initText="tagdata"/>
            </div>
        </div>
    </div>
    <div class="screen2d-ct">
        <div class="screen2d-ct-top">
            <div class="screen2d-ct-top-map"  ref="MapchartRef">
                <div class="screen2d-ct-top-map-title">景点地图</div>
                <div class="screen2d-ct-top-map-tip"> 
                    <span>标签</span>
                    <dl>
                        <dd>
                            <p>旅游评估：优</p>
                            <p>设施评估：良</p>
                            <p>环境评估：{{ commentData.environment }}</p>
                        </dd>
                    </dl>
                </div>
                <div class="panel-side esri-widget" v-if="ispointsList">
                    <h3>景点列表</h3>
                    <ul id="nyc_graphics">
                    <li>Loading&hellip;</li>
                    </ul>
                </div>
            </div>
            <div class="screen2d-ct-top-rg">
                <div class="screen2d-ct-rg-top">
                    <div class="screen2d-main-title">
                        <div class="screen2d-main-title-header" style="display: flex;">
                            <span>特征词相关推荐</span>
                            <span style="margin-left: 20px;font-size: 14px;color: aqua;">{{ typeName }}</span>
                        </div>
                        <img src="../images/ksh33.png" alt="" />
                    </div>
                    <div class="screen2d-main-content" style="background: url('../src/views/images/bor1_1.png');background-size: 100% 100%;">                      
                        <chatContent :init-list="ListData"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="screen2d-ct-cb">
            <div class="screen2d-ct-cb-title">
                <div class="screen2d-ct-cb-title-header">
                    <span>地理服务专区</span>
                    <el-button  color="#345f92" size="small" round style="margin-right: 5px;" :disabled="isService">
                        <el-icon :size="18">
                            <Edit />
                        </el-icon>
                        几何统计
                    </el-button>
                    <el-button  color="#345f92" size="small" round style="margin-right: 5px;" :disabled="isService">
                        <el-icon :size="18">
                            <ChatLineSquare />
                        </el-icon>
                        聚合统计
                    </el-button>
                    <el-button color="#345f92"  size="small" round style="margin-right: 5px;" :disabled="isService">
                        <el-icon :size="18">
                            <Clock />
                        </el-icon>
                        特征关联
                    </el-button>
                </div>
                <img src="../images/screen2d-title.png" alt="" />
            </div>
            <div class="screen2d-ct-cb-content">
                <service  />
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted, provide, watch} from 'vue';
import { useScreen } from '@/hooks/useScreen';
import { ElButton,ElTag,ElIcon } from 'element-plus';
import { ChatLineSquare, Edit, Clock } from '@element-plus/icons-vue'
import 'echarts-liquidfill';
import type { ECharts } from "echarts";
// 获取子组件的ref
interface ChartExpose {
	initChart: (params: any) => ECharts;
}
const showchartRef = ref<ChartExpose>();
const tagchartRef = ref<HTMLElement | null>(null);
const screen2dRef = ref<HTMLElement | null>(null);
const MapchartRef = ref<HTMLDivElement | null>(null);
useScreen(screen2dRef);

//@ts-ignore
import { useViewStore } from '@/store/mapviewstore';
import WebMap from '@arcgis/core/WebMap';
import { createPointslayer,AQIfeatures,points } from '@/features';
import MapView from '@arcgis/core/views/MapView';
import introduction from './components/introduction.vue';
import service from './components/service.vue';
import chatContent from './components/listContent.vue';
import titleTag from './components/titleTag.vue';
import styles from '@/style/popularization.scss?inline';
import showchart from './components/showChart.vue';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import { SimpleRenderer, UniqueValueRenderer } from '@arcgis/core/renderers';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

/**
 * @description: 初始化地图
 * @param {HTMLDivElement} container
 * @param {__esri.MapView} myView
 * @return {*}
 */
function initMapView( container: HTMLDivElement,myView:__esri.MapView) {
    myView?.destroy();
    const webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
            id: "c8e3d51ec07246b58238eed8056c9000"
        },
    });
    const pointslayer =  createPointslayer();
    myView = new MapView({
        map: webmap,  // The WebMap instance created above
        container: container,
        center: [117, 36],
        zoom: 4
    });
    myView.map.add(pointslayer);
     //设置pointslayer弹窗模板
     const popupTemplate = new PopupTemplate({
        // title: "<span class='esri-popup__header-title'>{{layer.title}}</span>", // 添加一个带有标题文本的 span 元素
        title: "{名称}",
        content: [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "名称",
                    label: "名称"
                },
                {
                    fieldName: "类型名称",
                    label: "类型名称"
                },
                {
                    fieldName: "longitude",
                    label: "经度"
                },
                {
                    fieldName: "latitude",
                    label: "纬度"
                },
                {
                    fieldName: "高程",
                    label: "高程"
                }
            ]
        }],
    });
    pointslayer.popupTemplate = popupTemplate;
    myView.popup.dockEnabled = false;
    myView.popup.collapsed = true;
    myView.popup.dockOptions = {
        buttonEnabled: false,
        breakpoint: false,
        position: "bottom-right"
    };
    myView.ui.remove(['attribution', 'zoom', ]);
    return myView;
}
// 初始化view实例
let view: __esri.MapView | null = null;
// 声明echarts实例
interface ChartProps {
	[key: string]: ECharts | null;
}
const dataScreen: ChartProps = {
	chart: null,
};
// 初始化 echarts
const initCharts = ( data:any ): void => {
    dataScreen.chart = showchartRef.value?.initChart(data) as ECharts;
    // @ts-ignore
    dataScreen.chart.currentIndex = -1;
};
// 创建手柄
let handle: __esri.Handle | null = null;
// 创建景点列表
function createScenicList( view: __esri.MapView ){
    const listNode = document.getElementById("nyc_graphics");
    let graphics: any[];
    const pointslayer = view.map.layers.find((layer) => {return layer.id === 'points';}) as __esri.FeatureLayer;
    const query = pointslayer.createQuery();
    
    view.whenLayerView(pointslayer).then(async (layerView) => {
        layerView.watch("updating",function (value) {
            if (!value) {
                //等待层视图完成更新查询所有可用于绘图的特征。
                layerView.queryFeatures({
                    geometry: view!.extent,
                    returnGeometry: true,
                    orderByFields: ["FID"]
                }).then(function (results) {
                    graphics = results.features;
                    const fragment = document.createDocumentFragment();
                    graphics.forEach(function (result, index) {
                        const FID = result.attributes.FID;
                        const name = AQIfeatures[FID-1].name;
                        // Create a list zip codes in NY
                        const li = document.createElement("li");
                        li.classList.add("panel-result");
                        li.tabIndex = 0;
                        li.setAttribute("data-result-id", index.toString());
                        li.textContent = name;

                        fragment.appendChild(li);                
                    });
                        //清空当前列表
                        listNode!.innerHTML = "";
                        listNode!.appendChild(fragment);
                })
                .catch(function (error) {
                    console.error("query failed: ", error);
                });
            }
        });
        const pointslayerView = view!.allLayerViews.find((layerView) => {return layerView.layer.id === 'points';}) as __esri.FeatureLayerView;
        query.where = "FID = 1";
        // 更新图表数据
        chartdata.value = getChartdata(points[0].feature);
        initCharts(chartdata.value);
        //  更新景点数据
        scenicData.value = getScenicData(points[0]);
        // 更新标签数据
        tagdata.value = getTagData(points[0].tags);
        // 更新推荐数据
        typeName.value = points[0].typeName;
        ListData.value = getListData(points,typeName.value);
        pointslayer.queryFeatures(query).then(async function (results: __esri.FeatureSet) {
            // 选中要素
            handle = pointslayerView.highlight(results.features[0]);
            // 跟踪到要素
            view!.goTo(results.features);
            // 更新评估数据
            commentData.value = getCommentData(results.features[0].attributes);
        }); 
    });
    // listen to click event on the zip code list
    listNode!.addEventListener("click", onListClickHandler);

    async function onListClickHandler(event: { target: any; }) {
        const pointslayerView = view!.allLayerViews.find((layerView) => {return layerView.layer.id === 'points';}) as __esri.FeatureLayerView;
        const target = event.target;
        const resultId = target.getAttribute("data-result-id");
        query.where = "FID = " + (parseInt(resultId, 10) + 1);
        // 更新图表数据
        chartdata.value = getChartdata(points[parseInt(resultId, 10)].feature);
        initCharts(chartdata.value);
        //  更新景点数据
        scenicData.value = getScenicData(points[parseInt(resultId, 10)]);
        // 更新标签数据
        tagdata.value = getTagData(points[parseInt(resultId, 10)].tags);
        // 更新推荐数据
        typeName.value = points[parseInt(resultId, 10)].typeName;
        ListData.value = getListData(points,typeName.value);
        // 查询要素
        await  pointslayer.queryFeatures(query).then(function (results) {
                // 取消选中要素
            if (handle) handle.remove();
            const result = results.features[0];
            // 选中要素
            handle = pointslayerView.highlight(result);
            // 更新评估数据
            commentData.value = getCommentData(results.features[0].attributes);
            // 跟踪到要素
            view!.goTo(results.features).then(function () {
                view!.popup.open({
                    features: [result],
                    location: result.geometry
                });
            })
            .catch(function (error) {
                if (error.name != "AbortError") {
                    console.error(error);
                }
            });
        });
    }
}

// 获得图表数据
function getChartdata(data:{[key:string]:any}){
    const chartdata = [];
    for (const key in data) {
        let value = {
            value: data[key],
            name: key,
            percentage: data[key].toString() + '%',
        };
        chartdata.push(value);
    }
    return chartdata;
}
const chartdata = ref();

// 获得景点简介数据
function getScenicData(data:{[key:string]:any}){
    let value = {
        title: data.name,
        location: data.location,
        content: data.intro,
        img: null,
    };
    return value ;
}
const scenicData = ref(getScenicData(points[0]));

// 获得标签数据
function getTagData(data:{[key:string]:any}){
    const tagdata = data;
    return tagdata;
}
const tagdata = ref(getTagData(points[0].tags));

// 获得推荐数据
function getListData(data:any[],typeName:string){
    let valueList:[
        {
            id: number,
            name: string,
            location: string,
            hot: number,
            type: string,
            content: string,
            img: null,
        }
   ]=[] as any;
    for (let i = 0; i < data.length; i++) {
        if(data[i].typeName == typeName){
            let value = {
                id: i,
                name: data[i].name,
                location: data[i].location,
                hot: 0,
                type: data[i].typeName,
                content: data[i].intro,
                img: null,
            };
            valueList.push(value);
        }
    }
    return valueList;  
}
const typeName = ref('地质地貌');
const ListData = ref(getListData(points,typeName.value));

// 获得评价数据
function getCommentData(data:{[key:string]:any}){
    let valueList:{
        environment: string,
        device: string,
        visitor: string,
    }={} as any;
    valueList.environment = data.class;
    valueList.device = "";
    valueList.visitor = "";
    return valueList;  
}
const commentData = ref({
    environment: "",
    device: "",
    visitor: "",
});
// 是否开启地理服务
const isService = ref(true);

// 将景点进行渲染
function createRenderer(){
    const myFeatureLayer = view?.map.findLayerById("points") as __esri.FeatureLayer;
    let index = 0;
    switch(typeName.value){
        case '游山玩水':
            index=0;
            break;
        case '历史人文':
            index=1;
            break;
        case '地质地貌':
            index=2;
            break;
        case '探险奇趣':
            index=3;
            break;
    }

    // 定义颜色数组,从浅到深
    const innerColors = [
        [0, 255, 0, 0.5],   // 浅绿色,级别1 
        [0, 80, 210, 0.8], //浅蓝色,级别3   
        [255, 255, 0, 0.8], // 黄色,级别4
        [255, 0, 0, 0.8],   // 红色,级别5
    ];
    // 定义外部轮廓颜色数组,与内部填充颜色对应
    const outerColors = [
        "#17f5a7",   // 浅绿,与浅绿色对应 
        "#1A6EA5",   // 浅蓝,与浅蓝色对应
        "#A59825",   // 棕色, 与黄色对应
        "#7F1A1C"    // 深红色,与红色对应
    ];
    // 创建新的符号
    const symbol = new SimpleMarkerSymbol({
        style: "path",  
        path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",            
        color: innerColors[index],
        outline: {                
            color: outerColors[index],  
            width: 2                
        },               
        size: 7
    });
    // 创建一个新的渲染器
    const renderer = new UniqueValueRenderer({
        field: "名称",  // 要根据哪个字段的值进行渲染
        uniqueValueInfos: []     
    });
    ListData.value.forEach((item:any) => {
        //@ts-ignore
        renderer.uniqueValueInfos.push({
            value: item.name,  // 要素的名称
            symbol: symbol
        });
    });
    // 将渲染器分配给要素图层
    myFeatureLayer.renderer = renderer;
}
// 将景点还原
function resetRenderer(){
    // 取消选中要素
    if (handle) handle.remove();
    const myFeatureLayer = view?.map.findLayerById("points") as __esri.FeatureLayer;
    // 创建一个新的符号
    const symbol = new SimpleMarkerSymbol({
        style: "path",
        path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",
        color: "#17e3f5", // 中间浅色
        outline: {
        color: '#115687', // 外部深色
        width: 2
        },
        size: 7
    });

    // 创建一个新的渲染器
    const renderer = new SimpleRenderer({
        label:"景点",
        symbol:symbol
    });

    // 将渲染器分配给要素图层
    myFeatureLayer.renderer = renderer;
    setTimeout(() => {
        createScenicList(view!);
    }, 300);
}
// 景点列表的显示
const ispointsList = ref(true);
provide('isService', isService);
provide('createRenderer', createRenderer);
provide('resetRenderer', resetRenderer);
provide('ispointsList', ispointsList);

onMounted(() => {
    chartdata.value = getChartdata(points[0].feature)
    initCharts(chartdata.value);
    // 鼠标悬停时暂停定时器
    dataScreen.chart?.on('mouseover', function () {
        clearInterval(intervalId);
    });
    // 鼠标移开时重新启动定时器
    dataScreen.chart?.on('mouseout', function () {
        timer();
    });
    setTimeout( async() => {
        const myView = useViewStore().getView() as __esri.MapView;
        view =  initMapView(MapchartRef.value!,myView);
        //@ts-ignore
        view.center = [96.178, 36.623];
        view.zoom = 6;
        const viewDiv = document.getElementById('viewDiv');
        if (viewDiv) {
            // viewDiv.style.background = 'url("../src/views/images/loginBg.jpg") no-repeat center center';
            viewDiv.style.backgroundImage = 'linear-gradient(to left top, #0f6ba1 5%, #4c4c4c 90%)';
        }
        createScenicList(view);  
    }, 100);
});
// 定义定时器 ID 和计数器变量
let intervalId: number | undefined;
const timer = ( ()=> {
    intervalId = setInterval(function () {
        var dataLen = chartdata.value.length;
        // 取消之前高亮的图形
        dataScreen.chart?.dispatchAction({
            type: 'downplay',
            dataIndex: (dataScreen.chart as any).currentIndex,
        });
        (dataScreen.chart as any).currentIndex = ((dataScreen.chart as any).currentIndex + 1) % dataLen;
        // 高亮当前图形
        dataScreen.chart?.dispatchAction({
            type: 'highlight',
            dataIndex: (dataScreen.chart as any).currentIndex,
        });
    }, 1000);
});
timer();
onUnmounted(() => {
    useViewStore().CreateMapView();
    clearInterval(intervalId);
});
/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang='scss' scoped>
</style>
  