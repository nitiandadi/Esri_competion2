<template>
    <div class="envirment" id="main_pro">
    </div>
</template>
  
<script setup lang="ts">
import { Ref, inject, onMounted } from 'vue';
import * as echarts from 'echarts';
import TopFeaturesQuery from "@arcgis/core/rest/support/TopFeaturesQuery.js";
import TopFilter from "@arcgis/core/rest/support/TopFilter.js";
onMounted(() => {
    const sourceLayer = inject('sourceLayer') as __esri.FeatureLayer;
    sourceLayer.load().then(async () => {
        const query = new TopFeaturesQuery({
            where: "1=1",
            outFields: ["Province,Peo_Number"],
            topFilter: new TopFilter({
                topCount: 6,
                groupByFields: ["GeometryType"],
                orderByFields: ["Peo_Number DESC"]
            })
        });
        const results = await sourceLayer.queryTopFeatures(query);
        let xData: string[] = []
        let seriesData: string[] = []
        results.features.forEach((grahphic, index) => {
            seriesData[index] = grahphic.attributes.Peo_Number;
            xData[index] = grahphic.attributes.Province;
        })
        type EChartsOption = echarts.EChartsOption;
        var chartDom = document.getElementById('main_pro')!;
        var myChart = echarts.init(chartDom);
        let option: EChartsOption = {
            xAxis: {
                type: 'category',
                data: xData,
                axisLabel: {
                    fontSize: 11,
                    color: 'red',
                    interval: 0,
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: 'red',
                    fontSize: 13,
                }

            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '3%',
                top: '3%',
                width: '90%',
                containLabel: true
            },
            series: [
                {
                    data: seriesData,
                    type: 'bar',
                    barWidth: '70%',
                    color: 'red',
                }
            ]
        };
        option && myChart.setOption(option);
    });


});
</script>
  
<style lang="scss" scoped>
.envirment {
    position: relative;
    top: 8%;
    left: 67.2%;
    width: 400px;
    height: 300px;
    opacity: 0.5;
    border-radius: 6px;
    background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
    pointer-events: auto;
    border: 0px solid var(--el-card-border-color);
    margin-inline: 7px;
}
</style>
  