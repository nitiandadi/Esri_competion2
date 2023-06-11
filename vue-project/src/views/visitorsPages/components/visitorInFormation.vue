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
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item" />
                </el-select>
                <el-select v-model="attractions1" placeholder="选择省份">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item" />
                </el-select>
                <el-button type="primary" @click="onSubmit" :disabled="isDisabled">查询</el-button>
                <el-button type="primary" @click="move" class="realtime">{{buttontext}}</el-button>
            </el-form-item>
        </el-form>
        <myTable ref="table"></myTable>
    </div>
</template>
<script lang="ts" setup>
import { computed, markRaw, onMounted, onUnmounted, reactive, ref, toRaw, watch } from 'vue'
import myTable from './table.vue'
import { useViewStore } from '@/store/mapViewstore';
import { taershiLayer, roadsLayer, pointsLayer } from '@/features/Layer/visitorLayers';
import { usevisitor2Store } from '@/store/visitor/visitor2Store';
import type { tableData } from '@/type/table';
//@ts-ignore
import Point from '@arcgis/core/geometry/Point';
import visitostyle2 from '@/style/visitorhead.scss?inline'
import type FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import type Polygon from '@arcgis/core/geometry/Polygon';
let visitor2Store = usevisitor2Store();
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
let spots: __esri.FeatureSet;
let myPolygon: __esri.Polygon;
let isPlaying = ref(false);
function move() {
    if (isPlaying.value) {
        clearInterval(internal);
        isPlaying.value = false;
    }
    else {
        isPlaying.value = true;
        internal = setInterval(() => {
        // 创建一个新的点对象，基于旧的点对象，但是更改了经纬度
        for (let i = 0; i < visitors.length; i++) {
            let newPoint = new Point({
                latitude: (visitors[i].geometry as Point).latitude + Math.random() * 0.0001 - 0.00005,
                longitude: (visitors[i].geometry as Point).longitude + Math.random() * 0.0001 - 0.00005,
            });
            if (myPolygon!.contains(newPoint)) {
                visitors[i].geometry = newPoint;
            }
            else {
                visitors[i].geometry = spots.features[Math.floor(Math.random() * spots.features.length / 4)].geometry;
            }
        }
    }, 500);
    }
   

}
const options = [
    {
        value: '塔尔寺',
        label: '塔尔寺',
        layer: markRaw(taershiLayer),
    },
    {
        value: '青海湖',
        label: '青海湖',
    },
    {
        value: '鄂陵湖湿地',
        label: '鄂陵湖湿地',
    },
    {
        value: '盘道',
        label: '盘道',
    },
    {
        value: '扎陵湖湿地',
        label: '扎陵湖湿地',
    },
]
const options1 = [
    {
        value: '广东',
        label: '广东'

    },
    {
        value: '江苏',
        label: '江苏'
    },
    {
        value: '浙江',
        label: '浙江'
    },
    {
        value: '青海',
        label: '青海',
    },
    {
        value: '甘肃',
        label: '甘肃',
    },
    {
        value: '新疆',
        label: '新疆',
    },
    {
        value: '西藏',
        label: '西藏',
    },
    {
        value: '四川',
        label: '四川',
    },
    {
        value: '云南',
        label: '云南',
    },
    {
        value: '内蒙',
        label: '内蒙',
    },
    {
        value: '宁夏',
        label: '宁夏',
    },
    {
        value: '陕西',
        label: '陕西',
    },

]
const radio_changed = () => {
}
const props = defineProps({
    visiable: Boolean,
})
const onSubmit = () => {
    let province = attractions1.value.value;
    console.log(province, radio.value);
    let queryedVisitors = visitor2Store.queryVisitors(beginAge.value, endAge.value, province, radio.value,);
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
let data: tableData[] = Array<tableData>(10);
const buttontext = computed(() => {
    return isPlaying.value ? '暂停' : '实时'
})
interface tableExpose {
    setTableData: (data: tableData[]) => void;
}
function setDataforTable(visitorGraphics: __esri.Graphic[]) {
    data = Array<tableData>(0);
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
    view.map.add(val.layer);
    await val.layer.when();
    view.center = val.layer.fullExtent.center;
    view.extent = val.layer.fullExtent;
    visitors = await visitor2Store.generateVisitors(val.layer);
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
onMounted(async () => {
    view.map.basemap.baseLayers.getItemAt(1).visible = false;
    spots = await pointsLayer.queryFeatures();
    let result = await taershiLayer.queryFeatures();
    myPolygon = result.features[0].geometry as Polygon;
})
onUnmounted(() => {
    clearInterval(internal);
    view.graphics.removeAll();
    view.map.layers.removeAll();
    view.map.basemap.baseLayers.getItemAt(1).visible = true;
})
</script>
<style lang="scss" scoped>
@import '@/style/visitor2.scss'
</style>