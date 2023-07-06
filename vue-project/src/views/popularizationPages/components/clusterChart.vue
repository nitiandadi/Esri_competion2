<template>
  <div class="cluster">
    <div class="chart" id="clusterChart"></div>
    <div class="hotspot">
        <el-button type="primary" @click="gethotspot" style="width: 100%;height: 100%;">热点分析</el-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ECharts, EChartsOption, init,graphic } from "echarts";
import { inject } from "vue";
const initChart = (data: any): ECharts => {
    const categories = data.map((item: { range: any[]; }) => `${item.range[0]}-${item.range[1]}`);
    const counts = data.map((item: { count: any; }) => item.count);
    const charEle = document.getElementById("clusterChart") as HTMLElement;
	const charEch: ECharts = init(charEle);
    const optionBar: EChartsOption = {
        title: {
        text: "用户评价热点分析表",
        textStyle: {
            color: '#fff'
        }
        },
        //@ts-ignore
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
            extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 60px;',
            formatter: function (params: any[]) {
                let html = '<div style="font-size: 12px; font-weight: bold;height: 30px; ">' +'user评分范围：' + params[0].name + '</div>';
                params.forEach(function (item) {

                    html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: ' + "#07bffb" + ';"></span>' + "计数：" + '：' + item.value + '<br>';
                });
                // html += '</div>';
                return html;
            },
        },
        xAxis: {
            type: "category",
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#07bffb'
                }
            },
            data: categories,
        },
        yAxis: {
            name: "计数",
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#07bffb'
                }
            },
            min: 0,
            position: 'left',
        },
        series: [{
            type: 'bar',
            label: {
                //@ts-ignore
                normal: {
                    show: true,
                    position: 'top',
                    color: '#fff'
                }
            },
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
            data: counts,
        }]
    }
    charEch.setOption(optionBar);
	return charEch;
};
defineExpose({
	initChart
});
const ishotspot = inject('ishotspot') as any;
const gethotspot = () => {
    console.log('yidianji')
    ishotspot.value = !ishotspot.value;
}
</script>

<style lang='scss' scoped>
.cluster{
    width: 30%;
    height: 50%;
    position: absolute;
    top: 20%;
    right: 3%;
    pointer-events: auto;
    border: 0.5px solid #18cdc1;
    background-color: #16588b;
    padding-top: 20px;
    border-radius: 5px;
    overflow: hidden;
}
.cluster::-webkit-scrollbar {
  width: 6px; /* 设置滚动条宽度 */
  height: 6px; /* 设置滚动条高度 */
  
}
.cluster::-webkit-scrollbar-thumb {
  border-radius: 3px; /* 设置滚动条圆角 */
  background-image: linear-gradient(135deg, #14c0e3 0%, rgba(8, 196, 219, 0.5) 72%, rgba(0, 182, 234, 0.3) 100%);
}
.cluster .chart{
  height: 92%;
}
.cluster .hotspot{
  height: 8%;
  pointer-events: auto;
}
</style>
