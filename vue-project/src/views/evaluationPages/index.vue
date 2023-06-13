<template>
	<div class="main-box" ref="mainboxRef">
        <div class="container-box">
            <TreeFilter
                title="列表(单选)"
                label="name"
                :data="treedata"
                :defaultValue="treeFilterValues.departmentId"
                @change="changeTreeFilter"
            />
            <div class="chart-box">
                <div class="chart-box-title">
                    <span>特色展区</span>
                    <img src="../images/title_con.png" alt="" />
                </div>
                <chart ref="chartRef" />
            </div>
            <div class="table-box">
                <div class="card mb10 pt0 pb0">
                    <SelectFilter :data="selectFilterData" :defaultValues="selectFilterValues" @change="changeSelectFilter" />
                </div>
                <div class="card-box">
                    <commentCard  ref="commentcard" :initParam="Object.assign(treeFilterValues,selectFilterValues)">
                        <!-- 表格 header 按钮 -->
                        <template #cardHeader>
                            <el-button type="primary" :icon="CirclePlus">新增用户</el-button>
                            <el-button type="primary" :icon="Upload">批量添加用户</el-button>
                            <el-button type="primary" :icon="Download">导出用户数据</el-button>
                        </template>
                    </commentCard>
                </div>
            </div>      
        </div>
        <div class="footer-box">
            <span class="footer-text">{{ footertitle }}的用户综合评分为</span>
            <el-rate
            v-model= score
            :max="5"
            show-score
            :disabled="true"
          />
        </div>
	</div>
</template>

<script setup lang="ts" name="useSelectFilter">
import { ref, reactive, watch,onMounted, onUnmounted,provide } from 'vue'
import { useScreen } from '@/hooks/useScreen';
import { useViewStore } from '@/store/mapViewstore';
import TreeFilter from "./components/TreeFilter/index.vue";
import SelectFilter from "./components/SelectFilter/index.vue";
import commentCard from "./components/commentCard/index.vue";
import chart from "./components/chart/index.vue";
import { ElMessage } from 'element-plus';
import { CirclePlus, Download, Upload, } from "@element-plus/icons-vue";
import { treedata,selectFilterData,ageData } from '@/features';
import styles from '@/style/evaluation.scss?inline';
import 'echarts-liquidfill';
import  type { ECharts } from "echarts";
const mainboxRef = ref<HTMLElement|null>(null);
useScreen(mainboxRef);
// 默认 chart 参数
interface ChartExpose {
	initChart: (params: any) => ECharts;
}
const chartRef = ref<ChartExpose>();
    interface ChartProps {
	[key: string]: ECharts | null;
}
const dataScreen: ChartProps = {
	chart: null,
};
const initCharts = (): void => {
    dataScreen.chart = chartRef.value?.initChart(ageData) as ECharts;
    // @ts-ignore
    dataScreen.chart.currentIndex = -1;
};
// 默认 footer 参数
const footertitle = ref("羌塘组湖积地层");
const score = ref(0);
// 默认 treeFilter 参数
const treeFilterValues = reactive({ departmentId: "1-1" });
const changeTreeFilter = (val: string ) => {
    // 判断val字符串的内容是否是数字
    if(!isNaN(Number(val))) {
        ElMessage.error(`请选择正确的景点 o(╥﹏╥)o`);
    } else {
        ElMessage.success(`请注意查看参数变化 🤔`);
        treeFilterValues.departmentId = val;
        treedata.find( (item) => footertitle.value =item.children?.find((item) => item.id === val)?.name || "" );
    }

};
// 默认 selectFilter 参数
const selectFilterValues = ref({ userStatus: 0, userRole: [""] });
const changeSelectFilter = (value: typeof selectFilterValues.value) => {
	ElMessage.success(`请注意查看参数变化 🤔`);
	selectFilterValues.value = value;
};

onMounted(() => {
    // 初始化图表
    initCharts();
    // 背景
    const viewDiv = document.getElementById('viewDiv');
    if (viewDiv) {
        // viewDiv.style.background = 'url("../src/views/images/loginBg.jpg") no-repeat center center';
        viewDiv.style.backgroundImage = 'linear-gradient(to left top, #0f6ba1 5%, #4c4c4c 90%)';
    }
    setTimeout(() => {
        useViewStore().destroyMapView();
    }, 100);
});

onUnmounted(() => {
    useViewStore().CreateMapView();
});
provide('score', score);
/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang="scss" scoped>
</style>
