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
                <div class="panel-side esri-widget">
                    <h3>景点列表</h3>
                    <ul id="nyc_graphics">
                    <li>Loading&hellip;</li>
                    </ul>
                </div>
                <div v-if="isbuffer" style="display: flex;position: absolute;right:5%;top: 5%;pointer-events: auto;height: auto;">
                    <el-tag style=" color:#21c2ef;">
                        缓冲区半径
                        <el-input type="number" v-model="input" placeholder="请输入数字(单位：km)" style="width: 60px;height: 16px;color: aqua;"/>
                        (km)
                    </el-tag>
                </div>
                <cluster ref="clusterRef" v-if="iscluster"/>
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
                    <el-button  color="#345f92" size="small" round style="margin-right: 5px;" :disabled="isService" @click="createBuffer">
                        <el-icon :size="18">
                            <Edit />
                        </el-icon>
                        几何统计
                    </el-button>
                    <el-button  color="#345f92" size="small" round style="margin-right: 5px;" :disabled="isService" @click="createCluster">
                        <el-icon :size="18">
                            <ChatLineSquare />
                        </el-icon>
                        聚合统计
                    </el-button>
                    <el-button color="#345f92"  size="small" round style="margin-right: 5px;" :disabled="isService" @click="createrelation">
                        <el-icon :size="18">
                            <Clock />
                        </el-icon>
                        特征关联
                    </el-button>
                </div>
                <img src="../images/screen2d-title.png" alt="" />
            </div>
            <div class="screen2d-ct-cb-content">
                <service ref="serviceRef" v-if="isservice" />
                <buffer ref="bufferRef" v-if="isbuffer"/>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted, provide, watch, Ref} from 'vue';
import { useScreen } from '@/hooks/useScreen';
import { ElButton,ElTag,ElIcon,ElInput } from 'element-plus';
import { ChatLineSquare, Edit, Clock } from '@element-plus/icons-vue'
import 'echarts-liquidfill';
import type { ECharts, number } from "echarts";
// 获取子组件的ref
interface ChartExpose {
	initChart: (params: any) => ECharts;
}
const showchartRef = ref<ChartExpose>();
const serviceRef = ref<ChartExpose>();
const bufferRef = ref<ChartExpose>();
const tagchartRef = ref<HTMLElement | null>(null);
const screen2dRef = ref<HTMLElement | null>(null);
const MapchartRef = ref<HTMLDivElement | null>(null);
useScreen(screen2dRef);

//@ts-ignore
import { useViewStore } from '@/store/mapviewstore';
import WebMap from '@arcgis/core/WebMap';
import { createPointslayer,AQIfeatures,getpoints } from '@/features';
import MapView from '@arcgis/core/views/MapView';
import introduction from './components/introduction.vue';
import service from './components/serviceChart.vue';
import chatContent from './components/listContent.vue';
import titleTag from './components/titleTag.vue';
import styles from '@/style/popularization.scss?inline';
import showchart from './components/showChart.vue';
import buffer from './components/bufferChart.vue';
import cluster from './components/clusterChart.vue';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import { SimpleRenderer, UniqueValueRenderer } from '@arcgis/core/renderers';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { useBufferStore } from  '@/store/mapservice/bufferstore';
import {useRelationStore} from '@/store/mapservice/relationstore';
// 获得景点数据
interface points {
    name: string,
    poiID: number,
    location: string,
    intro: string,
    tags: string[],
    features: any,
    typeName: string,
    img: string,
}
let points: points[] = [
    {
        "poiID": 5718131,
        "name": "三江源国家公园",
        "typeName": "游山玩水",
        "location": "果洛藏族自治州,纬度35.219015经度98.970595",
        "img": "https://youimg1.c-ctrip.com/target/01060120009d1h3l94D11.jpg",
        "intro": "三江源国家公园地处青藏高原腹地，是长江、黄河、澜沧江发源地，区域总面积12.31万平方公里，涉及治多、曲麻莱、玛多、杂多四县和可可西里自然保护区管辖区域，共12个乡镇、53个行政村。区域内有著名的昆仑山、巴颜喀拉山、唐古拉山等山脉，逶迤纵横，冰川耸立。这里平均海拔4500米以上，雪原广袤，河流、沼泽与湖泊众多，面积大于1平方公里的湖泊有167个。三江源国家公园包含长江源园区、黄河源园区、澜沧江源园区三个园区，长江源区以俊美的高山冰川著称；黄河源头湖泊星罗棋布，呈现“千湖”奇观，鄂陵湖和扎陵湖如两颗镶嵌在高原草地的明珠，澜沧江源头峡谷两岸不仅风光无限，更是高原生灵的天堂。2021年10月12日，三江源国家公园被列入第一批国家公园名单。",
        "tags":  ["自然风光", "生态保护", "高原", "湖泊", "草原", "山峰", "自然保护区", "野生动物", "徒步旅游", "户外探险", "摄影创作"],
        "features": [
            {"名称": "高原湖泊", "占比": 0.4},
            {"名称": "草原", "占比": 0.4},
            {"名称": "山峰", "占比": 0.2},
            {"名称": "自然保护区", "占比": 0.2},
            {"名称": "野生动物", "占比": 0.2},
            {"名称": "河流", "占比": 0.1}
        ]
    }
];
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
        title: "{name}",
        content: [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "typeName",
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
                    fieldName: "city",
                    label: "城市"
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
	chartshow: null,
    chartservice: null,
    chartbuffer: null,
};
// 初始化show echarts
const initCharts = ( data:any ): void => {
    dataScreen.chartshow = showchartRef.value?.initChart(data) as ECharts;
    // @ts-ignore
    dataScreen.chartshow.currentIndex = -1;
};
// 初始化sevice echarts
const initServiceCharts = ( data:any ): void => {
   dataScreen.chartservice = serviceRef.value?.initChart(data) as ECharts;
};
// 初始化buffer echarts
const initBufferCharts = ( data:any ): void => {
    dataScreen.chartbuffer = bufferRef.value?.initChart(data) as ECharts;
};
// 创建手柄
let handle: __esri.Handle | null = null;
// 创建存储被高亮要素的位置
let highlightGraphic: __esri.Graphic | null = null;
/*****************************  创建景点列表    ********************************************** */ 
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
                    orderByFields: ["OBJECTID"]
                }).then(function (results) {
                    graphics = results.features;
                    const fragment = document.createDocumentFragment();
                    graphics.forEach(function (result, index) {
                        const featureLayer = result.layer; // 获取要素所在的要素图层对象
                        const rendererType = featureLayer.renderer.type; // 获取渲染器
                        if(rendererType === "simple"){
                            const ObjectId = result.attributes.ObjectId;
                            const name = AQIfeatures[ObjectId-1].name;
                            // Create a list zip codes in NY
                            const li = document.createElement("li");
                            li.classList.add("panel-result");
                            li.tabIndex = 0;
                            li.setAttribute("data-result-id", ObjectId.toString());
                            li.textContent = name;

                            fragment.appendChild(li);     
                        }else if(rendererType === "unique-value"){
                            // 获取要素在渲染器中的信息
                            const uniqueValueInfos = featureLayer.renderer.uniqueValueInfos;
                            const ObjectId = result.attributes.ObjectId;
                            const name = result.attributes.name;
                            for (let i = 0; i < uniqueValueInfos.length; i++) {
                                const uniqueValueInfo = uniqueValueInfos[i];
                                if (uniqueValueInfo.value === name) {
                                    // Create a list zip codes in NY
                                    const li = document.createElement("li");
                                    li.classList.add("panel-result");
                                    li.tabIndex = 0;
                                    li.setAttribute("data-result-id", ObjectId.toString());
                                    li.textContent = name;
                                    fragment.appendChild(li);
                                    break;
                                }
                            }                                              
                        }       
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
        query.where = "OBJECTID = 1";
        // 更新图表数据
        chartdata.value = getChartdata(points[0].features);
        initCharts(chartdata.value);
        //  更新景点数据
        scenicData.value = getScenicData(points[0]);
        // 更新标签数据
        tagdata.value = getTagData(points[0].tags);
        // 更新推荐数据
        typeName.value = points[0].typeName;
        ListData.value = getListData(points,typeName.value);
        // 更新service景点数据
        pointsData.value = getPointsData(ListData.value);
        initServiceCharts(pointsData.value);
        pointslayer.queryFeatures(query).then(async function (results: __esri.FeatureSet) {
            highlightGraphic = results.features[0];
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
        query.where = "OBJECTID = " + (parseInt(resultId, 10));
        // 更新show图表数据
        chartdata.value = getChartdata(points[parseInt(resultId, 10)-1].features);
        initCharts(chartdata.value);
        //  更新景点数据
        scenicData.value = getScenicData(points[parseInt(resultId, 10)-1]);
        // 更新标签数据
        tagdata.value = getTagData(points[parseInt(resultId, 10)-1].tags);
        // 更新推荐数据
        typeName.value = points[parseInt(resultId, 10)-1].typeName;
        ListData.value = getListData(points,typeName.value);
        // 更新service景点数据
        pointsData.value = getPointsData(ListData.value);
        initServiceCharts(pointsData.value);
        // 查询要素
        await  pointslayer.queryFeatures(query).then(function (results) {
            highlightGraphic = results.features[0];
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

// 获得show图表数据
function getChartdata(data:{[key:string]:any}){
    const chartdata = [];
    for (const key in data) {
        let value = {
            value: data[key].占比,
            name: data[key].名称,
            percentage: ((data[key].占比)*100).toString() + '%',
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
        img: data.img,
    };
    return value ;
}
const scenicData = ref(getScenicData(points[0]));

// 获得标签数据
function getTagData(data:any[]){
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
            img: string,
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
                img: data[i].img,
            };
            valueList.push(value);
        }
    }
    return valueList;  
}
const typeName = ref('游山玩水');
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

// 获得地理服务service的景点的所有特色数据
function getPointsData(data:{[key:string]:any}){
    const pointsData:[
        {
            feature: string,
            value: number,
        }
    ]= [] as any;
    data.forEach((item:any) => {
        points[item.id].features.forEach((feature:any) => {
            const point = {
                feature: feature.名称,
                value: feature.占比*100 as number,
            }
            pointsData.push(point);
        });
    });
    console.log(pointsData);
    return pointsData;
}
const pointsData = ref();
// 获得缓冲区buffer的景点的所有特色数据
const nameList:Ref<string[]> = ref([]);
function getBufferPointsData(data:any[]){
    const recordname: any[] = [];
    const pointsData:[
        {
            feature: string,
            value: number,
        }
    ]= [] as any;
    data.forEach((item) => {
        nameList.value.forEach((name:string)=>{
            if(item.name == name){
                item.features.forEach((feature:any) => {
                    if(feature.占比*100>=80 && recordname.length == 0){
                        const point = {
                            feature: feature.名称,
                            value: feature.占比*100 as number,
                        }
                        recordname.push(feature.名称);
                        pointsData.push(point);
                    }else if(feature.占比*100>=80){
                        let flag = false;
                        // 通过字符串相似度判断是否重复
                        //@ts-ignore
                        stringSimilarity.findBestMatch(feature.名称, recordname).ratings.forEach((result:any) => {
                            if(result.rating>=0.4){
                                flag = true;
                                console.log(feature.名称,recordname);
                                return;
                            }
                        });
                        if(flag){
                            return;
                        }
                        const point = {
                            feature: feature.名称,
                            value: feature.占比*100 as number,
                        }
                        recordname.push(feature.名称);
                        pointsData.push(point);
                    }
                });
            }
        });
    });
    return pointsData;
}
const bufferPointsData = ref();

// 将景点进行渲染
function createRenderer(){
    const myFeatureLayer = view?.map.findLayerById("points") as __esri.FeatureLayer;
    let index = 0;
    switch(typeName.value){
        case '游山玩水':
            index=0;
            break;
        case '文化古迹':
            index=1;
            break;
        case '森林草原':
            index=2;
            break;
        case '探险奇趣':
            index=3;
            break;
        case '地标观景':
            index=4;
            break;
    }

    // 定义颜色数组,从浅到深
    const innerColors = [
        [0, 255, 0, 0.5],   // 浅绿色,级别1 
        [0, 200, 40, 0.6], //深绿色,级别2
        [0, 80, 210, 0.8], //浅蓝色,级别3   
        [255, 255, 0, 0.8], // 黄色,级别4
        [255, 0, 0, 0.8],   // 红色,级别5
    ];
    // 定义外部轮廓颜色数组,与内部填充颜色对应
    const outerColors = [
        "#17f5a7",   // 浅绿,与浅绿色对应 
        "#0B610B",   // 深绿,与深绿色对应
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
        field: "name",  // 要根据哪个字段的值进行渲染
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
    isbuffer.value = false;
    isservice.value = false;
    iscluster.value = false;
    view!.zoom = 6;
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
        isservice.value = true;     
    }, 100);
    setTimeout(() => {
        createScenicList(view!);
        initServiceCharts(pointsData.value);
    }, 300);
}
// 景点列表的显示
const ispointsList = ref(true);
provide('isService', isService);
provide('createRenderer', createRenderer);
provide('resetRenderer', resetRenderer);

// 创建缓冲区服务
const input = ref(53);
const isservice = ref(true);
const isbuffer = ref(false);
const createBuffer = () => {
    isservice.value = false;
    setTimeout(() => {
        isservice.value = true;
        isbuffer.value = true;      
    }, 100);
    setTimeout(() => {
        initServiceCharts(pointsData.value);
        useBufferStore().drawBufferPolygon(highlightGraphic,view!,input.value);
    }, 200);
    setTimeout(() => {
        nameList.value = useBufferStore().nameList;
        bufferPointsData.value = getBufferPointsData(points);
        initBufferCharts(bufferPointsData.value);
    }, 2500);
}

// 创建关联服务
const createrelation = async () => {
    useRelationStore().RelateFeatures(typeName.value,view!,points);
}

// 创建聚合服务
const iscluster = ref(false);
const createCluster = () => {
    iscluster.value = true;      
}
onMounted(() => {
    // 初始化show图表
    chartdata.value = getChartdata(points[0].features)
    initCharts(chartdata.value);
    // 初始化service图表
    pointsData.value = getPointsData(ListData.value)
    initServiceCharts(pointsData.value);

    // 鼠标悬停时暂停定时器
    dataScreen.chartshow?.on('mouseover', function () {
        clearInterval(intervalId);
    });
    // 鼠标移开时重新启动定时器
    dataScreen.chartshow?.on('mouseout', function () {
        showtimer();
    });
    // 鼠标悬停时暂停定时器
    dataScreen.chartservice?.on('mouseover', function () {
        clearInterval(serviceIntervalId);
    });
    // 鼠标移开时重新启动定时器
    dataScreen.chartservice?.on('mouseout', function () {
        serviceShowtimer();
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
    setTimeout(async() => {
        // 初始化points数据
        points = await getpoints();
    }, 200);
});
// 定义show定时器 ID 和计数器变量
let intervalId: number | undefined;
const showtimer = ( ()=> {
    intervalId = setInterval(function () {
        var dataLen = chartdata.value.length;
        // 取消之前高亮的图形
        dataScreen.chartshow?.dispatchAction({
            type: 'downplay',
            dataIndex: (dataScreen.chartshow as any).currentIndex,
        });
        (dataScreen.chartshow as any).currentIndex = ((dataScreen.chartshow as any).currentIndex + 1) % dataLen;
        // 高亮当前图形
        dataScreen.chartshow?.dispatchAction({
            type: 'highlight',
            dataIndex: (dataScreen.chartshow as any).currentIndex,
        });
    }, 1000);
});
showtimer();
// 定义service定时器 ID 和计数器变量
let serviceIntervalId: number | undefined;
const serviceShowtimer = (()=> {
    let num = 6;
    serviceIntervalId = setInterval(function () {
        // debugger
        num++;
        if (num >= pointsData.value.length) {
            num = 0;
        }
        let optionBar = dataScreen.chartservice?.getOption() as any;
        const data0 = optionBar.series[0].data;
        data0.shift();
        data0.push(pointsData.value[num]["value"]);

        optionBar.xAxis[0].data.shift();
        optionBar.xAxis[0].data.push(pointsData.value[num]["feature"]);

        dataScreen.chartservice?.setOption(optionBar);
    }, 2000);
});
serviceShowtimer();
onUnmounted(() => {
    useViewStore().CreateMapView();
    clearInterval(intervalId);
    clearInterval(serviceIntervalId);
});
/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang='scss' scoped>
</style>
  