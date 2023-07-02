<template>
    <div class="envirment" ref="envirmentRef">
        <div class="envirment-panel line">
            <div class="envirment-panel-title">
                <span>湿度温度监测</span>
            </div>
            <div class="envirment-panel-chart" ref="chartLineRef"></div>
            <div class="envirment-panel-footer"></div>
        </div>
        <div class="envirment-panel bar">
            <div class="envirment-panel-title">
                <span>空气污染指数</span>
            </div>
            <div class="envirment-panel-chart" ref="chartRadarRef"></div>
            <div class="envirment-panel-footer"></div>
        </div>
        <div class="envirment-panel pie">
            <div class="envirment-panel-title">
                <span>景点水质监测</span>
            </div>
            <div class="envirment-panel-chart" ref="chartBarRef"></div>
            <div class="envirment-panel-footer"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw, onUnmounted, onBeforeMount, } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import 'echarts-liquidfill';
import * as echarts from 'echarts';
import { useHeatmapStore } from '@/store/environment/heatmapstore'
import { useTimesliderStore } from '@/store/environment/timesliderstore'
import { useOnlayerStore } from '@/store/environment/onLayerstore'
import Lineoptions from "./chartOptions/Lineoptions";//引入折线图配置项
import Baroptions from "./chartOptions/Baroptions";//引入柱状图配置项
import Radaroptions from "./chartOptions/Radaroptions";//引入雷达图配置项
const HeatmapStore = useHeatmapStore();
const TimesliderStore = useTimesliderStore();
const OnlayerStore = useOnlayerStore();

const envirmentRef = ref<HTMLElement | null>(null);


// 定义引用需要渲染的DOM元素的ref对象
const chartLineRef = ref<HTMLElement | null>(null);
const chartRadarRef = ref<HTMLElement | null>(null);
const chartBarRef = ref<HTMLElement | null>(null);

// 时间滑块
const timeslider = toRaw(TimesliderStore.timeSlider) as __esri.TimeSlider;
// 创建图层点击事件
OnlayerStore.createOnlayer();
onMounted(() => { 
    // 实例化ECharts对象
    let ChartLine: echarts.ECharts | null = null;
    let ChartRadar: echarts.ECharts | null = null;
    let ChartBar: echarts.ECharts | null = null;
    if (chartLineRef.value) {
        ChartLine = echarts.init(chartLineRef.value);
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartLine as echarts.ECharts, Lineoptions);
        // 将图表上传store
        OnlayerStore.setChartLine(ChartLine);
    }
    if (chartRadarRef.value) {
        ChartRadar = echarts.init(chartRadarRef.value);   
        (Radaroptions.baseOption?.toolbox as echarts.ToolboxComponentOption).feature = {
            myTool1: {
                show: true,
                title: 'AQI热力图',
                icon: 'image://https://img.icons8.com/color/48/000000/fire-element.png',
                onclick: function () {
                    //判断热力图是否存在
                    if (HeatmapStore.isHeatmapLoaded()) {
                        //显示时间热力图
                        HeatmapStore.toggleHeatmap();
                        //时间滑块控制显示热力图
                        timeslider.visible = !timeslider.visible;
                        timeslider.playRate = 3000;
                    } else {
                        alert('请先创建热力图');
                    }
                }
            },
        },
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartRadar as echarts.ECharts, Radaroptions);
        // 将图表上传到store中
        OnlayerStore.setChartRadar(ChartRadar);
    }
    if (chartBarRef.value) {
        ChartBar = echarts.init(chartBarRef.value);        
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartBar as echarts.ECharts, Baroptions);
        // 将图表上传到store中
        OnlayerStore.setChartBar(ChartBar);
    }
    
});
onUnmounted(() => {
    // 销毁手柄
    OnlayerStore.destroyOnlayer();
    timeslider.visible = false;
    // 销毁热力图
    HeatmapStore.cancelTimeHeatmap();
});

</script>

<style lang="scss" scoped>
@import '@/style/envirment.scss';
</style>
