<template>
  <div id="main">/*style="width: 400px; height: 400px" */
  <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, reactive, ref, toRef } from 'vue';
import Featurelayer from "@arcgis/core/layers/FeatureLayer"
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import { createPointslayer } from '@/features';
import { useViewStore } from "@/store/mapViewstore";
//import myChart from '@/features/device/radar';
import * as echarts from "echarts";
import { viewDepthKey } from 'vue-router';
onMounted(() => {
  let roadline=new Featurelayer({
    // 图层配置参数
    // ...
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%9D%92%E6%B5%B7%E7%9C%81/FeatureServer",
})
  let poplayer=new MapImageLayer({
    // 图层配置参数
    // ...
    url: "https://edutrial.geoscene.cn/geoscene/rest/services/青海省人口密度/MapServer",
  });
  let view=useViewStore().getView();
  let feature = createPointslayer();
  view.map.add(roadline);
  view.map.add(feature); 
})
onUnmounted(() => {
  // 从地图上移除图层
  let view=useViewStore().getView();
  view.map.removeAll();
});
</script>
<style scoped lang="scss">
//加载高德路况数据
// #main {
//     display: flex;
//   flex-wrap: wrap;
//   margin-top: 0.5rem;
//   justify-content: center;
//     position: fixed;
//     left: 0%;
//     top: 40%;
//     width: 25%;
//     height: 50%;
//     border-radius: 6px; /* 添加边角弧度 */
//     // background: linear-gradient(to right, rgba(30, 70, 94, 0.7) 0%,rgba(19, 104, 147, 0.5) 50%);/* 添加渐变半透明背景 */
//     background-image: linear-gradient(-90deg, #182940 0%, #115687 100%); /* 添加 */
//     pointer-events: auto;
//     border: 0px solid var(--el-card-border-color);
//   }
//加载高德路况数据
</style>