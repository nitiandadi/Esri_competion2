<template>
    <div class="container">
        <el-form class="form">
            <el-form-item class="item-top">
                <div class="min">
                    <span class="min">年龄最小值:</span>
                    <span class="min-text"> {{ beginAge }}</span>
                    <el-slider v-model="beginAge" class="beginage" />
                </div>
                <div class="max-div">
                    <span class="max-span">年龄最大值</span>
                    <span class="max-text"> {{ endAge }}</span>
                    <el-slider v-model="endAge" class="endage" />
                </div>
            </el-form-item>
            <el-form-item class="item-bottom">
                <el-radio-group v-model="radio" class="radio" @change="radio_changed" large>
                    <el-radio label="男" size="large">男</el-radio>
                    <el-radio label="女" size="large">女</el-radio>
                </el-radio-group>
                <el-select v-model="attractions" placeholder="选择景点" @change="select_Changed">
                    <el-option v-for="item in spotOptions" :key="item.value" :label="item.label" :value="item" />
                </el-select>
                <el-select v-model="attractions1" placeholder="选择省份">
                    <el-option v-for="item in provinceOption" :key="item.value" :label="item.label" :value="item" />
                </el-select>
                <el-button type="primary" @click="onSubmit" :disabled="isDisabled">查询</el-button>
                <el-button type="primary" @click="move" class="realtime">{{ buttontext }}</el-button>
            </el-form-item>
        </el-form>
        <myTable ref="table"></myTable>
    </div>
</template>
<script lang="ts" setup>
import { computed, markRaw, onMounted, onUnmounted, reactive, ref, toRaw, watch } from 'vue'
import myTable from './table.vue'
import { useViewStore } from '@/store/mapviewstore';
import VisitorHandler from '@/store/visitor/visitor2Store';
import type { tableData1 } from '@/type/table';
//@ts-ignore
import Point from '@arcgis/core/geometry/Point';
import visitostyle2 from '@/style/visitorhead.scss?inline'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { spotOptions, provinceOption } from '../option';
let store = useViewStore();
let beginAge = ref(20);
let endAge = ref(80);
let radio = ref('男');
let attractions = ref();
let view = store.getView() as __esri.MapView;
let table = ref<tableExpose>();
let internal: number | undefined;
let attractions1 = ref();
let isDisabled = ref(true);
let visitors: __esri.Graphic[] = [];
let isPlaying = ref(false);
let visitorHandler: VisitorHandler;
function move() {
    if (isPlaying.value) {
        visitorHandler.stopRealtime();
        isPlaying.value = false;
    }
    else {
        isPlaying.value = true;
        visitorHandler.enableRealtime();
    }
}
const radio_changed = () => {
}
const onSubmit = () => {
    let province = attractions1.value.value;
    let queryedVisitors = visitorHandler.queryVisitors(beginAge.value, endAge.value, province, radio.value,);
    visitors = queryedVisitors;
    console.log(queryedVisitors);
    setDataforTable(queryedVisitors)
    view.graphics.removeAll();
    view.graphics.addMany(queryedVisitors);
}
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = visitostyle2;
document.head.appendChild(style);
let data: tableData1[] = Array<tableData1>(10);
const buttontext = computed(() => {
    return isPlaying.value ? '暂停' : '实时'
})
interface tableExpose {
    setTableData: (data: tableData1[]) => void;
}
function setDataforTable(visitorGraphics: __esri.Graphic[]) {
    data = Array<tableData1>(0);
    for (let i = 0; i < visitorGraphics.length; i++) {
        let latitude = (visitorGraphics[i].geometry as Point).latitude.toFixed(4)
        let longitude = (visitorGraphics[i].geometry as Point).longitude.toFixed(4)
        visitorGraphics[i].symbol = new SimpleMarkerSymbol({
            color: [255, 0, 0],
            size: 4,
            outline: {
                color: [255, 255, 255],
                width: 0.1
            }
        })
        let visitor = {
            name: visitorGraphics[i].attributes.name,
            age: visitorGraphics[i].attributes.age,
            province: visitorGraphics[i].attributes.province,
            latitude: Number(latitude),
            longitude: Number(longitude),
            gender: visitorGraphics[i].attributes.gender
        }
        data.push(visitor);
    }
    table.value?.setTableData(data);
}
async function select_Changed(val: any) {
    view.map.layers.removeAll();
    view.map.add(val.polygonLayer);
    await val.polygonLayer.when();
    view.center = val.polygonLayer.fullExtent.center;
    view.extent = val.polygonLayer.fullExtent;
    visitorHandler = new VisitorHandler(val);
    await visitorHandler.ininit();
    visitors = visitorHandler.visitors;
    for (let i = 0; i < visitors.length; i++) {
        let latitude = (visitors[i].geometry as Point).latitude.toFixed(4)
        let longitude = (visitors[i].geometry as Point).longitude.toFixed(4)
        let visitor = {
            name: visitors[i].attributes.name,
            age: visitors[i].attributes.age,
            province: visitors[i].attributes.province,
            latitude: Number(latitude),
            longitude: Number(longitude),
            gender: visitors[i].attributes.gender
        }
        data.push(visitor);
    }
    table.value?.setTableData(data);
    view.graphics.addMany(visitors);
    isDisabled.value = false;
}
onMounted(() => {
    view = store.getView() as __esri.MapView;
    view.when(() => {
        view.map.basemap.loadAll().then(() => {
            view.goTo({
                center: [101.546145,  36.619484],
                zoom: 10
            })
        })
    })
})
onUnmounted(() => {
    clearInterval(internal);
    view.graphics.removeAll();
    view.map.layers.removeAll();
})
</script>
<style lang="scss" scoped>
@import '@/style/visitor2.scss'
</style>