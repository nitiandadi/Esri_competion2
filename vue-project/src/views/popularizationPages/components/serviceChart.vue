<template>
    <div class="card" id="cardChart">
    </div>
</template>

<script setup lang='ts'>
import { ECharts, EChartsOption, init,graphic } from "echarts";
const initChart = (data: any): ECharts => {
	const charEle = document.getElementById("cardChart") as HTMLElement;
	const charEch: ECharts = init(charEle);
    var num = 0;
    if (data.length <= 6) {
        num = data.length;
    }else{
        num = 6;
    }
    
    const optionBar: EChartsOption = {
        grid: {
            top: 50,
            bottom: '20%',
        },
        legend: {
            data: ['景点群特色'],
            right: '8%',
            itemWidth: 22,
            itemHeight: 15,
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: [{
            data: (function () {
                var tt = [];
                for (var i = 0; i < num; i++) {
                    tt.push(data[i]["feature"]);
                }
                return tt;
            })(),
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#07bffb'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0
            }
        }],
        yAxis: [{
            name: "占比",
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#07bffb'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            // interval:10,
            min: 0,
            max: 100,
            position: 'left'
        }],
        series: [{
            name: '景点群特色',
            type: 'bar',
            label: {
                //@ts-ignore
                normal: {
                    show: true,
                    position: 'top',
                    color: '#fff'
                }
            },
            barWidth: '40%',
            barGap: 1,
            showBackground: true,
            itemStyle: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
                ])
            },
            emphasis: {
                itemStyle: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#2378f7' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' }
                ])
                }
            },
            data: (function () {
                var tt = [];
                for (var i = 0; i < num; i++) {
                    tt.push(data[i]["value"])
                }
                return tt;
            })(),
        }]
    }

    charEch.setOption(optionBar);
	return charEch;
};
defineExpose({
	initChart
});
</script>

<style lang='scss' scoped>
.card {
    padding-top: 20px;
    overflow: hidden;
    width: 100%;
    height: 90%;
    border: 0.5px solid #16588b;
}
</style>
