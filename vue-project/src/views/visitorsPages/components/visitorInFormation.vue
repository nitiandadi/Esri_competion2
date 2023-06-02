<template>
    <div class="container">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-radio-group v-model="radio" class="radio" @change="radio_changed">
                    <el-radio :label="1" size="large">男</el-radio>
                    <el-radio :label="2" size="large">女</el-radio>
                </el-radio-group>
                <el-slider v-model="beginAge" />
                <el-slider v-model="endAge" />
                <el-select v-model="attractions" placeholder="景点">
                    <!-- <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" /> -->
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <myTable></myTable>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import myTable from './table.vue'
import { useViewStore } from '@/store/mapViewstore';
import { polygonLayer, roadsLayer, pointsLayer } from '@/features/Layer/visitorLayers';
import { usevisitor2Store } from '@/store/visitor/visitor2Store';
import type Point from '@arcgis/core/geometry/Point';
let visitor2Store = usevisitor2Store();
let store = useViewStore();
let beginAge = ref(0);
let endAge = ref(100);
let radio = ref(1);
let attractions = ref('');
let view = store.getView() as __esri.MapView;
const radio_changed = () => {
    console.log(radio.value)
}
const props = defineProps({
    visiable: Boolean,
})
const onSubmit = () => {
    console.log('submit!')
}
watch(props, () => {
    if (props.visiable) {
        view.map.basemap.baseLayers.getItemAt(1).visible = false;
        view.map.add(polygonLayer);
        view.map.add(roadsLayer);
        roadsLayer.when(async () => {
            view.center = roadsLayer.fullExtent.center;
            view.zoom = 15;
            view.goTo(roadsLayer.fullExtent.center);
            let points = await visitor2Store.generateVisitors(polygonLayer);
            for (let i = 0; i < points.length; i++) {
                view.graphics.add(points[i]);
            }
        });
    }
})
onMounted(() => {

})
</script>
<style lang="scss" scoped>
.container {
    position: absolute;
    top: 12%;
    left: 70.2%;
    width: 600px;
    height: 500px;
    pointer-events: auto;
    background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
    padding: 0px;
    display: flex;
    flex-direction: column;

    .el-form {
        margin: 0px;

        .el-select {
            height: 30px;
            width: 130px;
        }

        .el-button {
            height: 30px;
            width: 100px;
            margin-left: -20px;
        }
    }

    .table {
        height: 450px;
        width: 100%;
    }

}
</style>