<template>
    <div class="container">
        <div class="top">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" @click="showFencetools">地理围栏</el-menu-item>
                <el-sub-menu index="2" @select="handleSelect">
                    <template #title>缓冲区分析</template>
                    <el-menu-item index="2-1">景点缓冲区分析</el-menu-item>
                    <el-menu-item index="2-2">路网缓冲区分析</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3" @click="julei">游客热度分析</el-menu-item>
                <!-- <el-menu-item index="4">游客分级</el-menu-item> -->
            </el-menu>
            <el-select v-model="attractions" placeholder="选择景点" @change="ininitSpots">
                <el-option v-for="item in spotOptions" :key="item.value" :label="item.label" :value="item" />
            </el-select>
        </div>
        <geoFencing v-if="show1"></geoFencing>
        <div class="buffer" v-if="show2">
            <div class="top">
                <span class="text"> 半径:{{ radius }}</span>
                <el-slider v-model="radius" @change="drawBuffer" />
                <el-button @click="analyse" type="primary" :disabled="disable">开始分析</el-button>
            </div>
            <div class="chart" id="chart"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useViewStore } from '@/store/mapViewstore';
import { onMounted, reactive, ref, watch, onUnmounted, computed, onUpdated, provide } from 'vue'
import * as echarts from 'echarts';
import { useoptionStore } from '@/store/visitor/optionStore';
import * as heatmapRendererCreator from "@arcgis/core/smartMapping/renderers/heatmap.js";
import VisitorHandler from '@/store/visitor/visitor2Store';
import visitostyle2 from '@/style/visitorhead1.scss?inline'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { spotOptions } from '../option';
import geoFencing from './analysis/geofencing.vue';
let store = useViewStore();
let view = store.getView() as __esri.MapView;
let optionStore = useoptionStore();
let option1 = optionStore.getbarOption();
let visitorHandler: VisitorHandler = {} as any;
let show1 = ref(true);
let show2 = ref(false);
let graphicsLayer: __esri.GraphicsLayer;
let radius = ref(5);
let disable = ref(false);
let buffers: __esri.Graphic[] = [];
let buffertype: 'roads' | 'spots' = 'spots';
let center: __esri.Point;
let extent: __esri.Extent;
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = visitostyle2;
document.head.appendChild(style);
let attractions = ref();
let a = { handler: visitorHandler };
provide('visitorHandler', a);
async function ininitSpots(val: any) {
    view.map.add(val.polygonLayer);
    await val.polygonLayer.when();
    center = view.center = val.polygonLayer.fullExtent.center;
    extent = view.extent = val.polygonLayer.fullExtent;
    visitorHandler = new VisitorHandler(val);
    a.handler = visitorHandler;
    await visitorHandler.ininit();

}
function showFencetools() {
    show1.value = true;
}
async function handleSelect(index: string) {
    view.center=center;
    view.extent=extent;
    graphicsLayer.removeAll();
    view.graphics.removeAll();
    await visitorHandler.ininit();
    show1.value = false;
    show2.value = true;
    if (index === '2-1') {
        let pointsLayer = visitorHandler.spotPointsLayer;
        view.map.add(pointsLayer);
        await pointsLayer.when();
        buffertype = 'spots';
    }
    else {
        view.map.layers.removeAll();
        view.map.add(visitorHandler.spotAreaLayer);
        let roadsLayer = visitorHandler.roadsLayer;
        view.map.add(roadsLayer);
        await roadsLayer.when();
        buffertype = 'roads';
    }
    view.graphics.addMany(visitorHandler.visitors);
}
function drawBuffer() {
    view.graphics.removeMany(buffers);
    buffers = visitorHandler.generateBuffer(radius.value, buffertype)
    view.graphics.addMany(buffers);
}
async function analyse() {
    visitorHandler.getVisitorsinPolygons(buffers);
    let chartDom = document.getElementById('chart');
    let myChart = echarts.init(chartDom as HTMLDivElement);
    let xData = [];
    let yData = [];
    let count = visitorHandler.pointFeatureset.features.length;
    for (let i = 0; i < count; i++) {
        if (buffertype === 'spots') {
            xData.push(visitorHandler.pointFeatureset.features[i].attributes.name);
        }
        else {
            xData.push(visitorHandler.roadsFeatureset!.features[i].attributes.name);
        }
        yData.push(buffers[i].attributes.tourists.length);
    }
    optionStore.SetDataForbarOption(xData, yData)
    myChart.setOption(option1);
    let heatmapLayer = await visitorHandler.generateLayer(buffertype);
    view.map.add(heatmapLayer);
    view.graphics.removeMany(buffers);
    view.graphics.forEach(element => {
        element.visible = false;
    });
    myChart.on('click', function (params) {
        let index = params.dataIndex;
        let graphic = buffers[index];
        view.goTo(graphic);
    });
}
function julei() {
    let heatlayer = visitorHandler.julei();
    heatmapRendererCreator.createRenderer({
        layer: heatlayer,
        view: view,
    }).then(function (response) {
        response.renderer.radius = 25;
        console.log(response.renderer.colorStops);
        visitorHandler.spotAreaLayer.visible = false;
        heatlayer.renderer = response.renderer; // 将创建的热力图渲染器应用到图层
        view.graphics.removeMany(buffers);
        view.zoom = view.zoom;
        view.map.add(heatlayer);
    });
}
onMounted(async () => {
    view.map.basemap.baseLayers.getItemAt(1).visible = false;
    await ininitSpots(spotOptions[0]);
    graphicsLayer = new GraphicsLayer();
    graphicsLayer.graphics.addMany(visitorHandler.visitors);
    view.map.add(graphicsLayer);
    attractions.value = spotOptions[0].value;
})
onUnmounted(() => {
    view.graphics.removeAll();
    view.map.layers.removeAll();
    view.map.basemap.baseLayers.getItemAt(1).visible = true;
})

</script>
<style lang="scss">
@import '@/style/visitor3.scss';
</style>