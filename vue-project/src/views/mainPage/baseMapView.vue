<template>
  <div id="viewDiv">
    <slot></slot>
  </div>
  <div id="timeSlider" ref="timeSliderRef"></div>
</template>


<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import esriconfig from "@arcgis/core/config.js";
import styles from "../../style/esri.scss?inline";
import { useViewStore } from '@/store/mapviewstore';
import { useTimesliderStore } from '@/store/environment/timesliderstore.js';

const timeSliderRef = ref<HTMLDivElement | null>(null);
const store = useViewStore();
onMounted(() => {
  esriconfig.apiKey = "AAPK73d1f032eb4243ecb5e8a63c99c39fd12BNLILjg2lhqCNOKDvIHP_4FVEzPIt6cRUZRtNWw7oBST4fXE3NBOaq7XcI76cXz";
  let container = document.getElementById("viewDiv") as HTMLDivElement;
  store.setContainer(container);
  store.CreateMapView();
  const view = store.getView() as __esri.MapView;
  view.when(() => {
    //创建时间滑块
    useTimesliderStore().createTimeslider(timeSliderRef as Ref<HTMLDivElement>);
  });
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
#timeSlider {
  position: absolute;
  left: 1.2%;
  right: 5%;
  bottom: 18%;
  max-height: 100px;
  max-width: 600px;
}
</style>
