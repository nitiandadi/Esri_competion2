<template>
	<div class="myEcharts">
		<div class="echarts" id="showChart"></div>
	</div>
</template>

<script setup lang="ts">
import { ECharts, EChartsOption, init } from "echarts";
interface ChartProp {
	value: string;
	name: string;
	percentage: string;
}
const initChart = (data: any): ECharts => {
	const charEle = document.getElementById("showChart") as HTMLElement;
	const charEch: ECharts = init(charEle);
	/* echarts colors */
	const colors = ["#F6C95C", "#EF7D33", "#1F9393", "#184EA1", "#81C8EF", "#9270CA"];
	const option: EChartsOption = {
		color: colors,
		legend: {
			orient: "vertical",
			right: "20px",
			top: "38px",
			itemGap: 15,
			itemWidth: 14,
			formatter: function (name) {
				let text = "";
				data.forEach((val: ChartProp) => {
					if (val.name === name) {
						text = " " + name + "　 " + val.percentage;
					}
				});
				return text;
			},
			textStyle: {
				color: "#fff"
			}
		},
		grid: {
			top: "bottom",
			left: 10,
			bottom: 10
		},
		series: [
			{
				zlevel: 1,
				name: "特色展区",
				type: "pie",
				selectedMode: "single",
				radius: [50, 90],
				center: ["35%", "50%"],
				startAngle: 60,
				// hoverAnimation: false,
				label: {
					position: "inside",
					show: true,
					color: "#fff",
					formatter: function (params: any) {
						return params.data.percentage;
					},
					rich: {
						b: {
							fontSize: 16,
							lineHeight: 30,
							color: "#fff"
						}
					}
				},
				itemStyle: {
					shadowColor: "rgba(0, 0, 0, 0.2)",
					shadowBlur: 10
				},
				data: data.map((val: ChartProp, index: number) => {
					return {
						value: val.value,
						name: val.name,
						percentage: val.percentage,
						itemStyle: {
							borderWidth: 10,
							shadowBlur: 20,
							borderColor: colors[index],
							borderRadius: 10
						}
					};
				})
			},
			{
				name: "",
				type: "pie",
				selectedMode: "single",
				radius: [50, 90],
				center: ["35%", "50%"],
				startAngle: 60,
				silent: true,
				label: {
				show: true,
				formatter: function (params: any) {
					return params.data.name + "\n" + params.data.percentage;
				},
				rich: {
					a: {
					align: "center",
					color: "rgb(98,137,169)",
					fontSize: 13,
					}
				},
				position: "center"
				},
				data: data.map((val: ChartProp) => {
					return {
						value: val.value,
						name: val.name,
						percentage: val.percentage,
					};
				})
			}
		]
	};
	charEch.setOption(option);
	return charEch;
};
defineExpose({
	initChart
});
</script>
<style lang="scss" scoped>
.myEcharts {
	width: 100%;
	height: 100%;
}
.echarts {
	position: relative;
	width: 100%;
	height: 100%;
}
</style>
