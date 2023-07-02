<template>
  <div class="buffer" id="bufferChart">
  </div>
</template>

<script setup lang='ts'>
import { ECharts, EChartsOption, init,graphic } from "echarts";
const initChart = (data: any): ECharts => {
	const charEle = document.getElementById("bufferChart") as HTMLElement;
	const charEch: ECharts = init(charEle);
  const bufferoption: EChartsOption = {
    legend: {
      data: ['景点群特色'],
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#07bffb'
            }
        },
      },
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#07bffb'
            }
        },
        data: (function () {
            var tt = [];
            for (var i = 0; i < data.length; i++) {
                tt.push(data[i]["feature"]);
            }
            return tt;
        })(),
      }
    ],
    series: [
      {
        name: '景点群特色',
        type: 'bar',
        label: {
          //@ts-ignore
          normal: {
              show: true,
              color: '#fff'
          }
        },
        barWidth: '40%',
        barGap: 1,
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
            for (var i = 0; i < data.length; i++) {
                tt.push(data[i]["value"])

            }
            return tt;
        })(),
      }
    ]
  };
  charEch.setOption(bufferoption);
	return charEch;
}
defineExpose({
	initChart
});
    
</script>

<style lang='scss' scoped>
.buffer{
  width: 100%;
  height: 90%;
  overflow: hidden;
  padding-top: 20px;
  border: 0.5px solid #16588b;
}
</style>
