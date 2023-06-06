<template>
<div id="main">/*style="width: 400px; height: 400px" */
    <slot></slot>
</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useroadconditionStore } from '@/store/device/roadcondition'
import Featurelayer from "@arcgis/core/layers/FeatureLayer"
let roadconditionStore = useroadconditionStore();
onMounted(()=>{
    let roadline=new Featurelayer({
        // 图层配置参数
        // ...
        url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%9D%92%E6%B5%B7%E7%9C%81/FeatureServer",
    })
    roadconditionStore.fetchCongestionEvaluationData();
    roadconditionStore.updateFeatureLayerAttributes(roadline,roadconditionStore.roadDataList);
    roadconditionStore.renderFeatureLayer(roadline);
})
</script>
