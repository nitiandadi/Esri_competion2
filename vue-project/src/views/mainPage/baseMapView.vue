<template>
  <div id="viewDiv">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref, toRef } from 'vue';
import esriconfig from "@arcgis/core/config.js";
import styles from "../../style/esri.scss?inline";
import { useViewStore } from '../../stores/mapView';
const store = useViewStore();
onMounted(() => {
  esriconfig.apiKey = "AAPK73d1f032eb4243ecb5e8a63c99c39fd12BNLILjg2lhqCNOKDvIHP_4FVEzPIt6cRUZRtNWw7oBST4fXE3NBOaq7XcI76cXz";
  let container = document.getElementById("viewDiv") as HTMLDivElement;
  store.setContainer(container);
  store.CreateMapView();
});
//修改popup样式
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>
 
<style scoped lang="scss">
#viewDiv {
  width: 100%;
}
</style>
