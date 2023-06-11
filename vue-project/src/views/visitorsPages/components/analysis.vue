<template>
    <div class="container">
        <el-form class="form">
            <el-form-item class="item-top">
                <!-- <el-select v-model="attractions" placeholder="选择景点" @change="select_Changed">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item" />
                </el-select> -->
                <div class="min">
                    <span class="min">缓冲半径</span>
                    <el-slider v-model="radius" @change="drawBuffer" class="beginage" />
                </div>
                <div class="max-div">
                    <el-button class="max-span" @click="analyse">开始分析</el-button>
                    <el-button class="max-span" @click="showResult">结果展示</el-button>
                    <!-- <el-button class="max-span" @click="showResult">提取道路</el-button> -->
                </div>
            </el-form-item>
            <el-form-item class="item-bottom">
            </el-form-item>
        </el-form>
        <div class="chart" id="chart"></div>
    </div>
</template>
<script lang="ts" setup>
import { useViewStore } from '@/store/mapViewstore';
import { onMounted, reactive, ref, watch } from 'vue'
import { roadsLayer, pointsLayer } from '@/features/Layer/visitorLayers';
import Graphic from '@arcgis/core/Graphic';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import * as echarts from 'echarts';
import { useoptionStore } from '@/store/visitor/optionStore';
import * as heatmapRendererCreator from "@arcgis/core/smartMapping/renderers/heatmap.js";
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { usevisitor2Store } from '@/store/visitor/visitor2Store';
let radius = ref(0);
let endAge = ref(100);
let store = useViewStore();
let visitor2Store = usevisitor2Store();
let view = store.getView() as __esri.MapView;
let spots: __esri.FeatureSet;
let optionStore = useoptionStore();
let option1 = optionStore.getbarOption();
function drawBuffer() {
    if (view.graphics.length > 1000) {
        let deleteCount = view.graphics.length - 1000;  // 计算需要删除的元素数量
        view.graphics.splice(1000, deleteCount);
    }
    spots.features.forEach(function (feature) {
        var buffer = geometryEngine.buffer(feature.geometry, radius.value, "meters") as __esri.Polygon;
        var bufferGraphic = new Graphic({
            geometry: buffer,
            symbol: new SimpleFillSymbol({
                color: [100, 149, 237, 0.8],
                style: "solid",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            })
        });
        //添加buffer属性,后面分析用
        feature.attributes = {
            ...feature.attributes,
            buffer: bufferGraphic
        }
        view.graphics.add(bufferGraphic);
    });

}
function analyse() {
    let myArray = view.graphics.toArray();
    let attractions = spots.features;
    let visitors = myArray.slice(0, 1000);
    attractions.forEach((attratction) => {
        let buffer = attratction.attributes.buffer;
        let touristsInBuffer = [];
        for (let i = 0; i < visitors.length; i++) {
            if (geometryEngine.contains(buffer.geometry, visitors[i].geometry)) {
                touristsInBuffer.push(visitors[i]);
            }
        }
        attratction.attributes.tourists = touristsInBuffer;
    })
}
function showResult() {
    let chartDom = document.getElementById('chart');
    let myChart = echarts.init(chartDom as HTMLDivElement);
    let xData = [];
    let yData = [];
    for (let i = 0; i < 7; i++) {
        xData.push(spots.features[i].attributes.name);
        yData.push(spots.features[i].attributes.tourists.length);
    }
    optionStore.SetDataForbarOption(xData, yData)
    myChart.setOption(option1);
    let heatmapLayer = new FeatureLayer({
        source: spots.features,
        objectIdField: "ObjectID",
    })
    // pointsLayer.queryFeatures().then(function (response) {
    //     console.log(response.fields);
    //     console.log(response.features);
    // })
    view.graphics.forEach(graphic => {
        graphic.visible = false;
    });
    heatmapRendererCreator.createRenderer({
        layer: pointsLayer,
        view: view
    }).then(function (response) {
        console.log(response.renderer.colorStops);
        pointsLayer.visible = true;
        pointsLayer.renderer = response.renderer; // 将创建的热力图渲染器应用到图层
        view.zoom=view.zoom-1;
    });
}
function getBusyroads(){

}
onMounted(async () => {
    view.map.basemap.baseLayers.getItemAt(1).visible = false;
    view.map.add(pointsLayer);
    await pointsLayer.load();
    spots = await pointsLayer.queryFeatures();
    // visitor2Store.generateVisitors()
})

</script>
<style lang="scss">
@import '@/style/visitor3.scss';
</style>