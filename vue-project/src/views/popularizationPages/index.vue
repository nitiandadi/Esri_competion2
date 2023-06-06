<template>
<div ref="screen2dRef" class="screen2d">
    <div class="screen2d-lf">
        <div class="screen2d-lf-top">
            <div class="screen2d-lf-title">
                <span>景点简介</span>
                <img src="../images/title_con.png"/>
            </div>
            <div class="screen2d-lf-content" style="background: url('../src/views/images/bor1_4.png') center;background-size: 100% 100%;">
                <introduction/>
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
                <titleTag ref="tagchartRef" />
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
                            <p>环境评估：差</p>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="screen2d-ct-top-rg">
                <div class="screen2d-ct-rg-top">
                    <div class="screen2d-main-title">
                        <span>特征词相关推荐</span>
                        <img src="../images/ksh33.png" alt="" />
                    </div>
                    <div class="screen2d-main-content" style="background: url('../src/views/images/bor1_1.png');background-size: 100% 100%;">                      
                        <chatContent />
                    </div>
                </div>
            </div>
        </div>
        <div class="screen2d-ct-cb">
            <div class="screen2d-ct-cb-title">
                <div class="screen2d-ct-cb-title-header">
                    <span>chat问答专区</span>
                    <el-button  color="#345f92" size="small" round style="margin-right: 5px;">
                        <el-icon :size="18">
                            <Edit />
                        </el-icon>
                        聊天
                    </el-button>
                    <el-button  color="#345f92" size="small" round style="margin-right: 5px;">
                        <el-icon :size="18">
                            <ChatLineSquare />
                        </el-icon>
                        模板
                    </el-button>
                    <el-button color="#345f92"  size="small" round style="margin-right: 5px;">
                        <el-icon :size="18">
                            <Clock />
                        </el-icon>
                        历史
                    </el-button>
                    <el-tag  style="margin-top: 5px;margin-right: 5px;position: absolute;right: 10%;">
                        <el-icon class="chaticon" :size="18">
                            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00957 0.332031H6.56403C6.59289 0.341166 6.62235 0.348301 6.65221 0.353385C7.4802 0.444271 8.18093 0.788281 8.76443 1.37396C8.78711 1.39415 8.81379 1.40947 8.84278 1.41898C8.87178 1.42848 8.90245 1.43195 8.93287 1.42917C9.35822 1.35885 9.78225 1.35286 10.205 1.43984C12.1852 1.84818 13.363 3.75755 12.8188 5.67864C12.8064 5.71234 12.8039 5.74884 12.8118 5.78385C12.8196 5.81887 12.8375 5.85094 12.8632 5.8763C13.1507 6.21094 13.3709 6.5862 13.4937 7.00781C13.5694 7.26823 13.6109 7.53958 13.6679 7.80599V8.22265C13.6503 8.33776 13.6327 8.45278 13.6151 8.56771C13.4229 9.86771 12.4056 10.9792 11.1166 11.2867C10.9978 11.3151 10.9426 11.3695 10.9007 11.4758C10.4856 12.5272 9.72874 13.2137 8.63004 13.5354C8.4299 13.594 8.2208 13.6229 8.01565 13.6656H7.43532C7.4153 13.658 7.39462 13.6521 7.37353 13.6482C6.54528 13.5628 5.83769 13.2315 5.26 12.6375C5.19479 12.5706 5.13618 12.5495 5.04245 12.5661C4.23109 12.7094 3.4633 12.5771 2.75387 12.1682C1.37776 11.3737 0.75545 9.83724 1.18555 8.31797C1.20852 8.23724 1.19849 8.18307 1.14304 8.11927C0.848724 7.7887 0.630797 7.39897 0.504361 6.97708C0.429113 6.72031 0.388981 6.45364 0.333008 6.19141V5.7487C0.343041 5.68099 0.353602 5.61302 0.362843 5.54505C0.55479 4.14088 1.5169 3.05781 2.89908 2.69635C3.00812 2.66797 3.06383 2.61823 3.10528 2.51224C3.49525 1.52474 4.2002 0.852865 5.2175 0.510677C5.47254 0.42526 5.74555 0.390365 6.00957 0.332031ZM2.89591 3.6263C2.80878 3.66016 2.7433 3.68281 2.68047 3.71068C2.18093 3.93125 1.80918 4.29088 1.53829 4.75234C0.898552 5.84609 1.26476 7.36016 2.35677 8.02578C3.22806 8.55599 4.12812 9.0414 5.00891 9.55599C5.16865 9.64948 5.28429 9.66015 5.44403 9.55781C5.74132 9.36693 6.05578 9.20182 6.37974 9.01666C6.32218 8.98203 6.28231 8.95677 6.24139 8.93333C5.22093 8.35208 4.20179 7.76875 3.17868 7.19193C2.98225 7.08125 2.8901 6.93646 2.89169 6.70937C2.89802 5.74219 2.89433 4.77474 2.89433 3.80729L2.89591 3.6263ZM5.54198 5.45807C5.63017 5.40833 5.69037 5.37474 5.7503 5.34062C6.75518 4.76771 7.76139 4.19844 8.7639 3.62187C8.96007 3.50911 9.13644 3.50703 9.33182 3.62187C9.90238 3.95677 10.4774 4.28359 11.0509 4.61328C11.3727 4.79844 11.6951 4.98307 12.0592 5.19193C12.0592 4.94896 12.0751 4.73724 12.0568 4.52838C11.9048 2.79557 10.0328 1.70182 8.40957 2.52161C7.45617 3.00312 6.54581 3.56771 5.61776 4.0974C5.58502 4.11615 5.54568 4.1599 5.54515 4.19219C5.5404 4.60286 5.54198 5.01406 5.54198 5.45807ZM9.07782 6.51614V6.70052C9.07782 7.86302 9.07518 9.02578 9.0802 10.1885C9.0802 10.4128 8.99492 10.5635 8.79769 10.6745C8.06898 11.0844 7.34264 11.5016 6.61684 11.9161C6.44654 12.0133 6.2765 12.1109 6.09829 12.2128C6.13684 12.2453 6.16218 12.269 6.1899 12.2896C6.85472 12.7807 7.59188 12.9003 8.38845 12.6984C9.39175 12.4437 10.2071 11.4745 10.2279 10.4646C10.2498 9.39687 10.2372 8.32916 10.2366 7.26302C10.2366 7.22578 10.2184 7.17057 10.1904 7.15417C9.83056 6.94401 9.46832 6.73828 9.07782 6.51614ZM4.92152 7.47812V7.29583C4.92152 6.15469 4.92654 5.01354 4.91756 3.8724C4.91571 3.6013 5.01921 3.42969 5.25763 3.29687C6.10251 2.82604 6.94264 2.34167 7.7841 1.86224C7.8208 1.84115 7.85565 1.81693 7.89419 1.79271C7.88575 1.77932 7.87603 1.76676 7.86515 1.75521C7.82766 1.725 7.79043 1.69427 7.75056 1.66745C7.20456 1.30026 6.60548 1.15521 5.94779 1.23854C4.76865 1.38672 3.79703 2.40365 3.7709 3.56667C3.74713 4.62031 3.76271 5.67604 3.76429 6.72943C3.76429 6.76979 3.78779 6.82891 3.81921 6.84739C4.17406 7.05547 4.53288 7.25729 4.92152 7.47812ZM8.46713 8.53932C8.38185 8.58646 8.32482 8.61745 8.26885 8.64896C7.2674 9.21875 6.2641 9.78541 5.26608 10.3609C5.0567 10.4818 4.87426 10.4865 4.66357 10.3643C3.82951 9.88125 2.98991 9.40807 2.15215 8.93203C2.09723 8.90078 2.04152 8.87057 1.97446 8.83333C1.92173 9.11786 1.91959 9.40927 1.96812 9.69453C2.23215 11.2984 4.12284 12.2508 5.57525 11.4857C6.52839 10.9833 7.45433 10.4302 8.39083 9.89713C8.42383 9.87838 8.46344 9.83541 8.4637 9.80312C8.46872 9.39193 8.46713 8.98073 8.46713 8.53932ZM11.1338 10.3755C11.1866 10.3578 11.2249 10.3495 11.2595 10.3331C12.1535 9.91875 12.6802 9.22864 12.7628 8.25885C12.8468 7.2737 12.455 6.47292 11.6035 5.94766C10.7058 5.39401 9.77353 4.89323 8.85763 4.36641C8.78845 4.32656 8.73908 4.33828 8.67703 4.37422C8.36627 4.55443 8.0534 4.73125 7.74159 4.90989C7.70806 4.92891 7.67664 4.95156 7.6336 4.97943C7.67664 5.00703 7.70832 5.02917 7.74159 5.04818C8.76786 5.63672 9.79228 6.22864 10.8225 6.81042C11.0435 6.93516 11.1378 7.0987 11.1359 7.34765C11.1288 8.30651 11.133 9.26536 11.133 10.2245L11.1338 10.3755ZM8.46713 7.00338C8.46713 6.76484 8.46396 6.52604 8.46898 6.28776C8.47083 6.20026 8.44654 6.14687 8.36469 6.10156C7.93908 5.86588 7.5169 5.625 7.09525 5.38229C7.03162 5.34583 6.98357 5.3388 6.91598 5.37786C6.49142 5.6237 6.06502 5.86675 5.63677 6.10703C5.56258 6.14844 5.53274 6.19479 5.5338 6.28073C5.53961 6.76224 5.5367 7.24427 5.54462 7.725C5.54674 7.75487 5.55536 7.78394 5.56989 7.81023C5.58442 7.83652 5.60453 7.85941 5.62885 7.87734C6.05974 8.12977 6.49397 8.37647 6.93155 8.61745C6.95543 8.62819 6.98136 8.63374 7.00759 8.63374C7.03383 8.63374 7.05976 8.62819 7.08363 8.61745C7.51637 8.37708 7.94462 8.1289 8.37736 7.88698C8.44865 7.84687 8.47109 7.79818 8.46951 7.72005C8.46502 7.48047 8.46766 7.24193 8.46766 7.00338H8.46713Z" fill="currentColor"></path></svg>
                        </el-icon>
                        GPT-3.5
                    </el-tag>
                </div>
                <img src="../images/screen2d-title.png" alt="" />
            </div>
            <div class="screen2d-ct-cb-content">
                <chat />
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted} from 'vue';
import { useScreen } from '@/hooks/useScreen';
import { ElButton,ElTag,ElIcon } from 'element-plus';
import { ChatLineSquare, Edit, Clock } from '@element-plus/icons-vue'
import { useEcharts } from "@/hooks/useEcharts";
import 'echarts-liquidfill';
import  type { ECharts } from "echarts";
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
import MapView from '@arcgis/core/views/MapView';
import introduction from './components/introduction.vue';
import chat from './components/chat.vue';
import chatContent from './components/chatContent.vue';
import titleTag from './components/titleTag.vue';
import styles from '@/style/popularization.scss?inline';
import showchart from './components/showChart.vue';
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
    myView = new MapView({
        map: webmap,  // The WebMap instance created above
        container: container,
        center: [117, 36],
        zoom: 4
    });
    myView.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
    return myView;
}
/** 创建图表实例 */
// 初始化 charts参数
let ageData = [
	{
		value: 200,
		name: "10岁以下",
		percentage: "16%"
	},
	{
		value: 110,
		name: "10 - 18岁",
		percentage: "8%"
	},
	{
		value: 150,
		name: "18 - 30岁",
		percentage: "12%"
	},
	{
		value: 310,
		name: "30 - 40岁",
		percentage: "24%"
	},
	{
		value: 250,
		name: "40 - 60岁",
		percentage: "20%"
	},
	{
		value: 260,
		name: "60岁以上",
		percentage: "20%"
	}
];
// 声明echarts实例
interface ChartProps {
	[key: string]: ECharts | null;
}
const dataScreen: ChartProps = {
	chart: null,
};
// 初始化 echarts
const initCharts = (): void => {
    dataScreen.chart = showchartRef.value?.initChart(ageData) as ECharts;
    // @ts-ignore
    dataScreen.chart.currentIndex = -1;
};
/**创建标签云 */


onMounted(() => {
    initCharts();
    // 鼠标悬停时暂停定时器
    dataScreen.chart?.on('mouseover', function () {
        clearInterval(intervalId);
    });
    // 鼠标移开时重新启动定时器
    dataScreen.chart?.on('mouseout', function () {
        timer();
    });
    setTimeout(() => {
        const myView = useViewStore().getView() as __esri.MapView;
        const view =  initMapView(MapchartRef.value!,myView);
        //@ts-ignore
        view.center = [96.178, 36.623];
        view.zoom = 6;
        const viewDiv = document.getElementById('viewDiv');
        if (viewDiv) {
            // viewDiv.style.background = 'url("../src/views/images/loginBg.jpg") no-repeat center center';
            viewDiv.style.backgroundImage = 'linear-gradient(to left top, #0f6ba1 5%, #4c4c4c 90%)';
        }
    }, 100);
});
// 定义定时器 ID 和计数器变量
let intervalId: number | undefined;
const timer = ( ()=> {
    intervalId = setInterval(function () {
    var dataLen = ageData.length;
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
  