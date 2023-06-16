<template>
    <div class="container">
        <div class="top">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" @click="showFencetools">地理围栏</el-menu-item>
                <el-sub-menu index="2" @select="handleSelect">
                    <template #title>缓冲区分析</template>
                    <el-menu-item index="2-1" @click="pointsBuffer">景点缓冲区分析</el-menu-item>
                    <el-menu-item index="2-2" @click="pointsBuffer">路网缓冲区分析</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3" @click="julei">游客热度分析</el-menu-item>
                <!-- <el-menu-item index="4">游客分级</el-menu-item> -->
            </el-menu>
            <el-select v-model="attractions" placeholder="选择景点" @change="ininitSpots">
                <el-option v-for="item in spotOptions" :key="item.value" :label="item.label" :value="item" />
            </el-select>
        </div>
        <div class="middle" v-if="show1">
            <div class="sketch" id="sketch"></div>
            <el-button type="primary" @click="geoFencing">{{ buttontext }}</el-button>
            <el-input type="textarea" v-model="inputText" class="input"></el-input>
        </div>
        <div class="buffer" v-if="show2">
            <div class="top">
                <span class="text"> {{ radius }}</span>
                <el-slider v-model="radius" @change="drawBuffer" />
                <el-button type="primary" @click="analyse" :disabled="disable">分析</el-button>
            </div>
            <div class="chart" id="chart"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useViewStore } from '@/store/mapViewstore';
import { onMounted, reactive, ref, watch, onUnmounted, computed, onUpdated } from 'vue'
import * as echarts from 'echarts';
import { useoptionStore } from '@/store/visitor/optionStore';
import * as heatmapRendererCreator from "@arcgis/core/smartMapping/renderers/heatmap.js";
import VisitorHandler from '@/store/visitor/visitor2Store';
import visitostyle2 from '@/style/visitorhead.scss?inline'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Sketch from "@arcgis/core/widgets/Sketch.js";
import { spotOptions } from '../option';
let store = useViewStore();
let view = store.getView() as __esri.MapView;
let optionStore = useoptionStore();
let option1 = optionStore.getbarOption();
let visitorHandler: VisitorHandler;
let show1 = ref(true);
let show2 = ref(false);
let isPlaying = ref(false);
let boundary: __esri.Polygon;
let inputText = ref('');
let sketch: __esri.Sketch | null;
let graphicsLayer: __esri.GraphicsLayer;
let radius = ref(0);
let disable = ref(false);
let buffers: __esri.Graphic[] = [];
let buffertype: 'roads' | 'spots' = 'spots';
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = visitostyle2;
document.head.appendChild(style);
let attractions = ref();
const buttontext = computed(() => {
    return isPlaying.value ? '暂停实时' : '开启实时'
})
function geoFencing() {
    if (isPlaying.value) {
        visitorHandler.stopRealtime();
        isPlaying.value = false;
    }
    else {
        isPlaying.value = true;
        visitorHandler.enableRealtime(boundary, inputText);
    }
}
async function ininitSpots(val: any) {
    view.map.add(val.polygonLayer);
    await val.polygonLayer.when();
    view.center = val.polygonLayer.fullExtent.center;
    view.extent = val.polygonLayer.fullExtent;
    visitorHandler = new VisitorHandler(val);
    await visitorHandler.ininit();
}
function ininitSketch() {
    // if (sketch) {
    //     sketch.destroy();
    //     sketch = null;
    // }
    // else {
    sketch = new Sketch({
        view: view,
        layer: graphicsLayer,
        container: "sketch"  // replace with your <div> element's ID
    });
    sketch.on("create", function (event) {
        if (event.state === "complete") {
            boundary = event.graphic.geometry as __esri.Polygon
        }
    });
    // }
}
function showFencetools() {
    show1.value = true;
}
async function handleSelect(index: string) {
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
async function pointsBuffer() {
}
async function analyse() {
    visitorHandler.getVisitorsinPolygons(buffers);
    let chartDom = document.getElementById('chart');
    let myChart = echarts.init(chartDom as HTMLDivElement);
    let xData = [];
    let yData = [];
    for (let i = 0; i < 7; i++) {
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
    let heatmapLayer = await visitorHandler.generateHeatmapLayer(buffertype);
    view.map.add(heatmapLayer);
    view.graphics.removeMany(buffers);
    // heatmapRendererCreator.createRenderer({
    //     layer: heatmapLayer,
    //     view: view,
    //     field: "peoNumber"
    // }).then(function (response) {
    //     response.renderer.radius = 25;
    //     heatmapLayer.renderer = response.renderer; // 将创建的热力图渲染器应用到图层
    //     view.graphics.removeMany(buffers);
    //     view.zoom = view.zoom - 1;
    //     view.map.add(heatmapLayer);
    // });
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
// onUpdated(() => {
//     ininitSketch();
// })
watch(show1, (val) => {
    if (val) {
        ininitSketch();
    }
})
onMounted(async () => {
    view.map.basemap.baseLayers.getItemAt(1).visible = false;
    await ininitSpots(spotOptions[0]);
    graphicsLayer = new GraphicsLayer();
    graphicsLayer.graphics.addMany(visitorHandler.visitors);
    view.map.add(graphicsLayer);
    attractions.value = spotOptions[0].value;
    ininitSketch();
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