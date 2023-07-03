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
import chinaLayer from '@/features/Layer/visitorLayer1';
import { worldLayer } from '@/features/Layer/visitorLayer1';
//@ts-ignore
import { useViewStore } from '../../../store/mapViewstore';
import EchartLayer from '../../../hooks/EhcartsLayer';
import type FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { ECharts, EChartsOption, init,graphic } from "echarts";
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
        topCount: 30,
        groupByFields: ["GeometryType"],
        orderByFields: ["number DESC"]
    })
});
let xData: string[] = [];
let seriesData: string[] = []
let myChart: echarts.ECharts | null = null;
//存储的是起点和终点的经纬度，终点的经纬度定死了的
let flightData: { coords: number[][] }[] = [];
let echartLayer: EchartLayer | null = null;
let startIndex = 0;
let endIndex = 10;
let option1: echarts.EChartsOption = {
    xAxis: {
        type: 'category',
        data: xData,
        axisLabel: {
            color: '#4c9bfd',
        }
    },
    yAxis: {
        name: '数量(万人)',
        type: 'value',
        axisLabel: {
            color: '#4c9bfd',
            fontSize: 15,
        },
        nameTextStyle: {
            color: '#4c9bfd',
            fontSize: 14,
        },

    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '11%',
        top: '8%',
        width: '90%',
        containLabel: true
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
            color: '#000',
            fontSize: 14
        },
        extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 80px;',
        formatter: function (params: any) {
            var dataIndex = params[0].dataIndex; // 获取当前柱子的索引
            var value = params[0].value; // 获取当前柱子的值
            var xAxisValue = params[0].axisValue;
            return '省份排名：' + dataIndex + '<br>省份名称：' + xAxisValue + '<br>省份游客：' + value;
        }
    },
    series: [
        {
            data: seriesData,
            type: 'bar',
            barWidth: '70%',
            color: 'red',
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
        }
    ],
    dataZoom: [{
        type: 'slider', // 使用滑动条型的数据缩放组件
        start: 0, // 数据窗口范围的起始百分比
        end: 20, // 数据窗口范围的结束百分比
    }],
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
            return val[2] / 30;
        },
        data: flightData.map(function (dataItem, index) {
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
        ],
        dataZoom: type === '2d' ? [{
            type: 'slider', // 使用滑动条型的数据缩放组件
            start: 0, // 数据窗口范围的起始百分比
            end: 20, // 数据窗口范围的结束百分比
        }] : [{
            type: 'slider', // 使用滑动条型的数据缩放组件
            start: 0, // 数据窗口范围的起始百分比
            end: 80, // 数据窗口范围的结束百分比
        }],
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
                    return {
                        value: dataItem.coords[0],
                    }
                }),
                symbolSize: function (val: number[]) {
                    if (type === '2d') {
                        return val[2] / 30;
                    }
                    else {
                        return val[2] / 160;
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
    startIndex = 0;
    endIndex = 10;
    showflighData();
}
async function queryFromLayer(queryLayer: FeatureLayer) {
    let results: __esri.FeatureSet | null = null;
    await queryLayer.load();
    queryLayer.definitionExpression = `year = '${yearValue.value}'`;
    query.where = `year = '${yearValue.value}'`;
    query.topFilter.topCount = 10;
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
            xData = [];
            seriesData = [];
            flightData = [];
            results.features.forEach((grahphic, index) => {
                seriesData[index] = grahphic.attributes.number;
                xData[index] = grahphic.attributes.ChinaName;
                flightData[index] = { coords: [[0, 0], [101.75, 36.56667]] };
                flightData[index].coords[0][0] = grahphic.attributes.Longitude;
                flightData[index].coords[0][1] = grahphic.attributes.Latitude;
            })

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
            //@ts-ignore
            option1.dataZoom[0].end = 80;
            echartLayer = new EchartLayer(view, option2);
            reRender('3d');
        })
    }
    showflighData();
}
function showflighData() {
    let newData = flightData.filter((element, index) => index >= startIndex && index <= endIndex);
    //@ts-ignore
    option2.series[1].data = newData.map(function (dataItem, index) {
        dataItem.coords[0].push(seriesData[index] as unknown as number);
        return {
            value: dataItem.coords[0],
        }
    });
    echartLayer?.Redraw({
        series: [
            {
                type: 'lines',
                data: newData,
            },
            {
                type: 'effectScatter',
                data: newData.map(function (dataItem, index) {
                    dataItem.coords[0].push(seriesData[index] as unknown as number);
                    return {
                        value: dataItem.coords[0],
                    }
                }),
                symbolSize: function (val: number[]) {
                    return radio.value === 1 ? val[2] / 30 : val[2] / 160;
                }
            },]
    });
}
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
            //在经纬度后面加上人数数据
            //@ts-ignore
            option2.series[1].data = flightData.map(function (dataItem, index) {
                dataItem.coords[0].push(seriesData[index] as unknown as number);
                return {
                    value: dataItem.coords[0],
                }
            });
            view.zoom = 4;
            echartLayer = new EchartLayer(view, option2);
            showflighData();
            echartLayer?.setVisiable(true);
            myChart!.on('datazoom', function (params: any) {
                let option = myChart!.getOption();
                //@ts-ignore
                startIndex = Math.round(params.start / 100 * (option.xAxis[0].data.length - 1));
                //@ts-ignore
                endIndex = Math.round(params.end / 100 * (option.xAxis[0].data.length - 1));
                showflighData();
            });
        })
    });

});
onUnmounted(() => {
    echartLayer?.destroy();
    echartLayer = null;
    store.isViewType();
})
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = visitostyle;
document.head.appendChild(style);
</script>
  
<style lang="scss" scoped>
.el {
    &-select {
        margin-left: 0%;
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
    height: 500px;
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
        height: 30px;
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
        height: 450px;
        margin: 1px;
    }
}
</style>
  