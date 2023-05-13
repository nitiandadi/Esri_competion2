<template>
    <div class="container">
        <div class="header">
            <el-select v-model="yearValue" placeholder="请选择年份" popper-class="gray-list" :popper-append-to-body="false"
                @change="select_Changed">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-radio-group v-model="radio" class="radio" @change="radio_changed">
                <el-radio :label="1" size="large">国内游客</el-radio>
                <el-radio :label="2" size="large">世界游客</el-radio>
            </el-radio-group>
        </div>
        <div class="body" id="main_pro" ref="body">
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, ref, watch } from 'vue';
//@ts-ignore
import * as echarts from 'echarts';
import TopFeaturesQuery from "@arcgis/core/rest/support/TopFeaturesQuery.js";
import TopFilter from "@arcgis/core/rest/support/TopFilter.js";
import chinaLayer from '@/features/Layer/visitorLayer';
import { worldLayer } from '@/features/Layer/visitorLayer';
//@ts-ignore
import { useViewStore } from '../../../store/mapViewstore';
import EchartLayer from '../../../hooks/EhcartsLayer';
import type FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import visitostyle from '@/style/visitor.scss?inline'
const body = ref<HTMLElement | null>(null);
const store = useViewStore();
const yearValue = ref('2018');
const radio = ref(1)
const props = defineProps({
    visiable: Boolean,
})
const options = [
    {
        value: '2020',
        label: '2020',
    },
    {
        value: '2019',
        label: '2019',
    },
    {
        value: '2018',
        label: '2018',
    },
    {
        value: '2017',
        label: '2017',
    },
    {
        value: '2016',
        label: '2016',
    },
    {
        value: '2015',
        label: '2015',
    },
]
const query = new TopFeaturesQuery({
    where: `year = '${yearValue.value}'`,
    outFields: ["*"],
    topFilter: new TopFilter({
        topCount: 7,
        groupByFields: ["GeometryType"],
        orderByFields: ["number DESC"]
    })
});
let xData: string[] = [];
let seriesData: string[] = []
let myChart: echarts.ECharts | null = null;
let flightData: { coords: number[][] }[] = [];
let echartLayer: EchartLayer | null = null;
let option1: echarts.EChartsOption = {
    xAxis: {
        type: 'category',
        data: xData,
        axisLabel: {
            fontSize: 11,
            color: '#4c9bfd',
            interval: 0,
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#4c9bfd',
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
let option2: echarts.EChartsOption = {
    series: [{
        type: 'lines',
        coordinateSystem: 'arcgis',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            color: '#a6c84c',
            width: 0.8,
            curveness: 0.3
        },
        data: flightData,
    },
    {
        type: 'effectScatter',
        coordinateSystem: 'arcgis',
        itemStyle: {
            color: '#b02a02'
        },
        rippleEffect: {
            brushType: 'stroke'
        },
        symbolSize: function (val) {
            console.log(val[2]);
            return val[2] / 30;
        },
        data: flightData.map(function (dataItem, index) {
            console.log(seriesData[index]);
            dataItem.coords[0].push(seriesData[index] as unknown as number);
            return {
                value: dataItem.coords[0],
            }
        })
    }

    ]

}
function reRender(type: '2d' | '3d') {
    myChart?.setOption({
        xAxis: {
            data: xData,
        },
        series: [
            {
                data: seriesData,
            }
        ]
    });
    echartLayer?.Redraw({
        series: [
            {
                type: 'lines',
                data: flightData,
            },
            {
                type: 'effectScatter',
                data: flightData.map(function (dataItem, index) {
                    dataItem.coords[0].push(seriesData[index] as unknown as number);
                    console.log(seriesData[index]);

                    return {
                        value: dataItem.coords[0],
                    }
                }),
                symbolSize: function (val: number[]) {
                    if (type === '2d') {
                        return val[2] / 30;
                    }
                    else {
                        return val[2] / 60;
                    }
                }
            },]
    });
}
async function select_Changed(val: string) {
    if (radio.value === 1) {
        let results = await queryFromLayer(chinaLayer);
        results.features.forEach((grahphic, index) => {
            seriesData[index] = grahphic.attributes.number;
            xData[index] = grahphic.attributes.province;
            flightData[index].coords[0][0] = grahphic.attributes.longitude;
            flightData[index].coords[0][1] = grahphic.attributes.latitude;
        })
        reRender('2d');
    }
    else {
        let results = await queryFromLayer(worldLayer);
        results.features.forEach((grahphic, index) => {
            seriesData[index] = grahphic.attributes.number;
            xData[index] = grahphic.attributes.ChinaName;
            flightData[index].coords[0][0] = grahphic.attributes.Longitude;
            flightData[index].coords[0][1] = grahphic.attributes.Latitude;
        }
        )
        reRender('3d');
    }
}
async function queryFromLayer(queryLayer: FeatureLayer) {
    let results: __esri.FeatureSet | null = null;
    await queryLayer.load();
    console.log(yearValue.value);
    queryLayer.definitionExpression = `year = '${yearValue.value}'`;
    query.where = `year = '${yearValue.value}'`;
    results = await queryLayer.queryTopFeatures(query);
    return results;
}
function radio_changed(val: number) {
    if (val === 1) {
        radio.value = 1;
        /**
         * 创建mapView在最开始的容器div上
         */
        store.CreateMapView();
        let view = store.getView() as __esri.MapView;
        echartLayer?.setVisiable(false);
        echartLayer?.destroy();
        view.when(async () => {
            let results = await queryFromLayer(chinaLayer);
            results.features.forEach((grahphic, index) => {
                seriesData[index] = grahphic.attributes.number;
                xData[index] = grahphic.attributes.province;
                flightData[index].coords[0][0] = grahphic.attributes.longitude;
                flightData[index].coords[0][1] = grahphic.attributes.latitude;
            })
            //@ts-ignore
            option2.series[1].symbolSize = function (val: number[]) {
                return val[2] / 30;
            }
            //@ts-ignore
            option2.series[1].data = flightData.map(function (dataItem, index) {
                dataItem.coords[0].push(seriesData[index] as unknown as number);
                return {
                    value: dataItem.coords[0],
                }
            });
            echartLayer = new EchartLayer(view, option2);
            reRender('2d');
        });
    }
    else {
        radio.value = 2;
        /**
         * 创建scenseView在最开始的容器div上,容器在basemapview中就已经创建了
         */
        echartLayer?.setVisiable(false);
        echartLayer?.destroy();
        store.CreateSceneView();
        let view = store.getView() as __esri.SceneView;
        view.when(async () => {
            let results = await queryFromLayer(worldLayer);
            results.features.forEach((grahphic, index) => {
                seriesData[index] = grahphic.attributes.number;
                xData[index] = grahphic.attributes.ChinaName;
                flightData[index].coords[0][0] = grahphic.attributes.Longitude;
                flightData[index].coords[0][1] = grahphic.attributes.Latitude;
            }
            )
            //@ts-ignore
            option2.series[1].symbolSize = function (val: number[]) {
                return val[2] / 60;
            }
            //@ts-ignore
            option2.series[1].data = flightData.map(function (dataItem, index) {
                dataItem.coords[0].push(seriesData[index] as unknown as number);
                return {
                    value: dataItem.coords[0],
                }
            });
            echartLayer = new EchartLayer(view, option2);
            reRender('3d');
        })
    }
}
watch(props, () => {
    echartLayer?.setVisiable(props.visiable);
})
onMounted(() => {
    chinaLayer.load().then(async () => {
        const results = await chinaLayer.queryTopFeatures(query);
        results.features.forEach((grahphic, index) => {
            seriesData[index] = grahphic.attributes.number;
            xData[index] = grahphic.attributes.province;
            flightData[index] = { coords: [[0, 0], [101.75, 36.56667]] };
            flightData[index].coords[0][0] = grahphic.attributes.longitude;
            flightData[index].coords[0][1] = grahphic.attributes.latitude;
        })
        let chartDom = document.getElementById('main_pro');
        myChart = echarts.init(chartDom as HTMLDivElement);
        myChart.setOption(option1);
        let view = store.getView() as __esri.MapView;
        view.when(() => {
            //@ts-ignore
            option2.series[1].symbolSize = function (val: number[]) {
                return val[2] / 30;
            }
            //@ts-ignore
            option2.series[1].data = flightData.map(function (dataItem, index) {
                dataItem.coords[0].push(seriesData[index] as unknown as number);
                return {
                    value: dataItem.coords[0],
                }
            });
            view.zoom = 4;
            echartLayer = new EchartLayer(view, option2);
            echartLayer?.setVisiable(false);
        })
    });

});
onUnmounted(() => {
    echartLayer?.destroy();
    echartLayer = null;
})
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = visitostyle;
document.head.appendChild(style);
</script>
  
<style lang="scss" scoped>
.el-select .el-input__inner {
    font-size: 2rem;
}

.el {
    &-select {
        margin-left: 2%;
        width: 30%;
        font-size: 15px;
    }
}

.container {
    position: absolute;
    background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
    top: 10%;
    right: 0%;
    border-radius: 6px;
    width: 500px;
    height: 400px;
    pointer-events: auto;
    border: 0px solid var(--el-card-border-color);
    display: flex;
    flex-direction: column;
    z-index: 1000;

    .header {
        display: flex;
        top: 4px;
        left: 5px;
        width: 100%;
        height: 8%;
        border-radius: 3px;
        flex-direction: row;

        .el-radio-group {
            display: inline-flex;
            position: relative;
            align-items: center;
            flex-wrap: nowrap;
            margin-left: 10%;
        }


    }

    .body {
        position: absolute;
        top: 10%;
        right: 2px;
        width: 500px;
        height: 350px;
        margin: 1px;
    }
}
</style>
  