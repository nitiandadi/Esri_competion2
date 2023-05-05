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
import { ref,onMounted,toRaw,onUnmounted} from "vue";
import {useEcharts} from "@/hooks/useEcharts";
import { useTime } from '@/hooks/useTime';
import 'echarts-liquidfill';
import * as echarts from 'echarts';
import { useHeatmapStore } from '@/store/environment/heatmapstore'
import {useTimesliderStore} from '@/store/environment/timesliderstore'   
import { useOnlayerStore } from '@/store/environment/onlayerstore'

const HeatmapStore = useHeatmapStore();
const TimesliderStore = useTimesliderStore();
const OnlayerStore = useOnlayerStore();

const envirmentRef = ref<HTMLElement | null>(null);
const time = useTime();
// 定义引用需要渲染的DOM元素的ref对象
const chartLineRef = ref<HTMLElement | null>(null);
const chartRadarRef = ref<HTMLElement | null>(null);
const chartBarRef = ref<HTMLElement | null>(null);
useScreen(envirmentRef,500,880);

// 时间滑块
const timeslider = toRaw(TimesliderStore.timeSlider) as __esri.TimeSlider;
// 创建热力图
HeatmapStore.createTimeHeatmap();
onMounted(() => { 
    // 创建图层点击事件
    OnlayerStore.createOnlayer();
    // 实例化ECharts对象
    let ChartLine: echarts.ECharts | null = null;
    let ChartRadar: echarts.ECharts | null = null;
    let ChartBar: echarts.ECharts | null = null;
    if(chartLineRef.value){
        ChartLine = echarts.init(chartLineRef.value);
        // 在onMounted生命周期钩子中,设置Echarts配置项
            const Lineoptions = {
            title: {
                text: time.nowTime.value,
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1,
                        type: 'solid'
                    }
                },
                backgroundColor: '#115687',
                borderColor: '#ccc',
                borderWidth: 1,
                padding: [5, 10],
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 90px;',
                formatter: function (params: any[]) {
                    let html = '<div style="font-size: 18px; font-weight: bold;height: 30px; ">' + params[0].name + '</div>';
                    params.forEach(function (item) {
                        let suffix = '';
                        if (item.seriesIndex === 0) {
                            suffix = '%';
                        } else {
                            suffix = '°C';
                        }
                        html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 18px; border-radius: 50%; background-color: ' + item.color + ';"></span>' + item.seriesName + '：' + item.value + suffix +'<br>';
                    });
                        // html += '</div>';
                    return html;
                },
            },
            legend: {
                textStyle: {
                    color: '#4c9bfd'
                },
                right: '3%',
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: "#012f4a",
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisTick: {
                    show:false,
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false,
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: '#4c9bfd'
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a'
                    }
                },
            },
            series: [
                {
                    name: '湿度',
                    type: 'line',
                    smooth: true,
                    data: [20, 32, 70, 34, 50, 30, 50]
                },
                {
                    name: '最低温度',
                    type: 'line',
                    smooth: true,
                    data: [12, 5, 3, 4, 10, 14, 12]
                },
                {
                    name: '最高温度',
                    type: 'line',
                    smooth: true,
                    data: [20, 12, 11, 24, 29, 33, 31]
                },
            ]
        };
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartLine as echarts.ECharts, Lineoptions);
    }
    if(chartRadarRef.value){
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
                            onclick: function (){
                                //判断热力图是否存在
                                if(HeatmapStore.isHeatmapLoaded()){
                                    //显示时间热力图
                                    HeatmapStore.toggleHeatmap();
                                    //时间滑块控制显示热力图
                                    timeslider.visible = !timeslider.visible;
                                    timeslider.playRate = 3000;
                                }else{
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
                    autoPlay: false,
                    playInterval: 1500, 
                    label: {
                        fontSize: 12,
                        color:'#4c9bfd'
                    },
                    tooltip: {
                        show: false,
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                radar: {                                       
                    indicator: [
                        { name: 'PM2.5', max: 250,color:'#4c9bfd'},
                        { name: 'PM10', max: 300 ,color:'#4c9bfd'},
                        { name: 'SO₂', max: 100 ,color:'#4c9bfd'},
                        { name: 'NO₂', max: 200,color:'#4c9bfd' },
                        { name: 'CO', max: 5 ,color:'#4c9bfd'},
                    ],  
                    center: ['70%', '50%'],             
                },
                series: [{                       
                    name: '污染指数',
                    type: 'radar',
                    data: []
                }],
            },
            options: [],
        };
        // 模拟数据
        const dataMap: { [key: string]: number[] }  = {
            '周一': [150, 80, 50, 35, 1.7],
            '周二': [200, 120, 60, 50, 2.5],
            '周三': [100, 90, 30, 25, 1.5],
            '周四': [120, 75, 40, 30, 2.0],
            '周五': [130, 85, 45, 32, 2.2],
            '周六': [180, 100, 55, 45, 2.7],
            '周日': [250, 150, 65, 60, 3.5]
        };  

        // 获取雷达图的指标信息
        const radarOption: echarts.RadarComponentOption = Radaroptions.baseOption?.radar as echarts.RadarComponentOption;
        for (let date in dataMap) {
            let data = dataMap[date];
            let item: echarts.EChartsOption = {
                series:[{
                    data: [{
                        value: data,
                        name: date,
                        itemStyle: {
                            color: '#17e3f5', // 系列折线颜色
                            },
                            areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(128, 255, 165, 0.3)'
                            }, {
                                offset: 1,
                                color: 'rgba(1, 191, 236, 0.3)'
                            }], false),
                            opacity: 0.8 // 设置透明度
                        }
                    }],                    
                    tooltip: {
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
                    }
                }]
            };

            Radaroptions.options?.push(item) ;

            Radaroptions.baseOption?.timeline?.data?.push(date);
        }
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartRadar as echarts.ECharts, Radaroptions);
    }
    if(chartBarRef.value){
        ChartBar = echarts.init(chartBarRef.value);
        const Baroptions = {
            grid: {
                top:'12%',
                left:'15%',
                bottom:'10%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {  // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 显示为直线，对于柱状图，可以设置为 'shadow'，表示显示阴影
                },
                backgroundColor: '#115687',
                borderColor: '#ccc',
                borderWidth: 1,
                padding: [5, 10],
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 110px;',
                formatter: function (params: any[]) {
                    let html = '<div style="font-size: 18px; font-weight: bold;height: 30px; ">' + params[0].name + '</div>';
                    params.forEach(function (item) {

                        html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 18px; border-radius: 50%; background-color: ' + item.color + ';"></span>' + item.seriesName + '：' + item.value +'<br>';
                    });
                        // html += '</div>';
                    return html;
                },
            },
            xAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    color:'#4c9bfd'
                }

            },
            legend: {
                data: ['pH值', '溶解氧', '化学需氧量', '总氮'],
                textStyle: {
                    color: '#4c9bfd'
                },

            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    color:'#4c9bfd'
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                showTitle: false,
                feature: {
                    magicType: { show: true, type: ['line', 'bar'] },
                },
                iconStyle: {
                    color: '#4c9bfd',
                    borderColor: '#4c9bfd'
                }
            },
            series: [
                {
                    name: 'pH值',
                    type: 'bar',
                    data: [7.2, 7.1, 7.3, 7.4, 7.2, 7.1, 7.0],
                    itemStyle: {
                        borderRadius: 20,
                    },
                },
                {
                    name: '溶解氧',
                    type: 'bar',
                    data: [7.7, 8.1, 7.5, 7.9, 8.0, 8.2, 7.8],
                    itemStyle: {
                        borderRadius: 20,
                    },
                },
                {
                    name: '化学需氧量',
                    type: 'bar',
                    data: [3.3, 2.5, 3.1, 2.8, 3.2, 2.1, 2.2],
                    itemStyle: {
                        borderRadius: 20,
                    },
                },
                {
                    name: '总氮',
                    type: 'bar',
                    data: [3.7, 3.5, 3.9, 4.2, 3.3, 3.2, 3.1],
                    itemStyle: {
                        borderRadius: 20,
                    },
                },
            ]
        };
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartBar as echarts.ECharts, Baroptions);
    }
});
onUnmounted(() => {
    timeslider.visible = false;
    // 销毁热力图
    HeatmapStore.cancelTimeHeatmap();
});

</script>

<style lang="scss" scoped>
@import '../style/envirment.scss';
</style>
