<template>
  <div id="viewDiv">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref, toRef } from 'vue';
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriconfig from "@arcgis/core/config.js";
import styles from "../../style/esri.scss?inline";
import Point from "@arcgis/core/geometry/Point.js";
import sourceLayer from '@/Layer/visitorLayer';
import { mapViewStore } from '../../stores/mapView';
const store = mapViewStore();
let view: __esri.MapView;
onMounted(() => {
  esriconfig.apiKey = "AAPK73d1f032eb4243ecb5e8a63c99c39fd12BNLILjg2lhqCNOKDvIHP_4FVEzPIt6cRUZRtNWw7oBST4fXE3NBOaq7XcI76cXz";
  const webmap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: "c8e3d51ec07246b58238eed8056c9000"
    },
    // basemap: "streets"
  });
  // view = store.getView() as __esri.MapView;
  view = new MapView({
    map: webmap,  // The WebMap instance created above
    container: "viewDiv",
    center: new Point({
      x: 117,
      y: 36,
    }),
  });
  view.constraints = {
    minZoom: 4,
    maxZoom: 20
  };
  store.registereView(view);
  view = store.getView() as __esri.MapView;
  const zoom = view.ui.find('zoom') as __esri.Widget;
  zoom.visible = false;
  view.ui.remove("attribution");
  // let a={
  //   count:1,
  //   number:2,
  // }
  // let b=reactive(a);
  // b=a;
  // console.log(b);
});
//修改popup样式
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
provide('sourceLayer', sourceLayer)
function addSourceLayer() {
  view.map.add(sourceLayer);
  view.zoom = 4;
}
defineExpose({ addChinaLayer: addSourceLayer });

</script>
 
<style scoped lang="scss">
#viewDiv {
  width: 100%;
}
</style>
