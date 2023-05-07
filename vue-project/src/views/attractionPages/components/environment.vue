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
import { useScreen } from "@/hooks/useScreen";
import { ref, onMounted, toRaw, onUnmounted, onBeforeMount } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import 'echarts-liquidfill';
import * as echarts from 'echarts';
import { useHeatmapStore } from '@/store/environment/heatmapstore'
import { useTimesliderStore } from '@/store/environment/timesliderstore'
import { useOnlayerStore } from '@/store/environment/onlayerstore'
import Lineoptions from "./chartOptions/Lineoptions";//引入折线图配置项
import Baroptions from "./chartOptions/Baroptions";//引入柱状图配置项
const HeatmapStore = useHeatmapStore();
const TimesliderStore = useTimesliderStore();
const OnlayerStore = useOnlayerStore();

const envirmentRef = ref<HTMLElement | null>(null);

// 定义引用需要渲染的DOM元素的ref对象
const chartLineRef = ref<HTMLElement | null>(null);
const chartRadarRef = ref<HTMLElement | null>(null);
const chartBarRef = ref<HTMLElement | null>(null);
useScreen(envirmentRef, 500, 880);

// 时间滑块
const timeslider = toRaw(TimesliderStore.timeSlider) as __esri.TimeSlider;
// 创建热力图
HeatmapStore.createTimeHeatmap();
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
        const Radaroptions: echarts.EChartsOption = {
            baseOption: {
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: '10',
                    top: '-10',
                    feature: {
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
                    itemSize: 25,
                },
                animation: true,
                timeline: {
                    data: [],
                    axisType: 'category',
                    orient: 'vertical',
                    left: '15%',  // 调整时间轴位置
                    top: 'center',
                    width: '15%',  // 设置时间轴的宽度
                    height: '200px',
                    autoPlay: true,
                    playInterval: 1500, 
                    label: {
                        fontSize: 12,
                        color: '#4c9bfd'
                    },
                    tooltip: {
                        show: false,
                    }
                },
                tooltip:  {
                    trigger: 'axis',
                },
                radar: {
                    indicator: [
                        { name: 'PM2.5', max: 50,color:'#4c9bfd'},
                        { name: 'PM10', max: 100 ,color:'#4c9bfd'},
                        { name: 'SO₂', max: 50 ,color:'#4c9bfd'},
                        { name: 'NO₂', max: 50,color:'#4c9bfd' },
                        { name: 'CO', max: 1 ,color:'#4c9bfd'},
                    ],  
                    center: ['70%', '50%'],             
                },
                series: {                       
                    name: '污染指数',
                    type: 'radar',
                    data: [],
                },
            },
            options: [],
        };
        // 配置数据
        const dataMap: { [key: string]: number[] }  = {
            '周一': [],
            '周二': [],
            '周三': [],
            '周四': [],
            '周五': [],
            '周六': [],
            '周日': []
        };  
        // 获取雷达图的指标信息
        const radarOption: echarts.RadarComponentOption = Radaroptions.baseOption?.radar as echarts.RadarComponentOption;
        // 填充雷达图的配置项
        for (let date in dataMap) {
            let data = dataMap[date];
            let item: echarts.EChartsOption = {
                series:{
                    data: [{
                        value: data,
                        name: date,
                        itemStyle: {
                            color: '#17e3f5', // 系列折线颜色
                        },
                    }],                    
                },
                tooltip:  {
                    trigger: 'item',
                    backgroundColor: '#115687',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    padding: [5, 10],
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    },
                    extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 130px;',
                    formatter: function (params: any) {
                        let html = '<div style="font-size: 18px; font-weight: bold;height: 30px; ">' + params.name + '</div>';
                        if(radarOption.indicator){
                            // 显示各项指标数据
                            for (let i = 0; i < params.value.length; i++) {                                       
                                html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 18px; border-radius: 50%; background-color: ' + params.color + ';"></span>' + radarOption.indicator[i].name + '：' +  params.value[i]+ '<br>';
                            }
                        }
                        return html;
                    },
                },
            };
            // 将数据添加到雷达图的options中
            Radaroptions.options?.push(item);
            // 将时间添加到时间轴中
            Radaroptions.baseOption?.timeline?.data?.push(date);
        }
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
