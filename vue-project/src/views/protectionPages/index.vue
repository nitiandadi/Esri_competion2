<template>
  <div ref="screenRef" class="screen">
    <buildingInfro />
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted} from 'vue';
import { useScreen } from '@/hooks/useScreen';
import buildingInfro from "./components/buildingInfro.vue";
const screenRef = ref<HTMLElement | null>(null);
useScreen(screenRef);
//@ts-ignore
import { useViewStore } from '@/store/mapviewstore';
import Map from '@arcgis/core/Map';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { SimpleRenderer } from "@arcgis/core/renderers";
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D.js";
import PopupTemplate from "@arcgis/core/PopupTemplate";
onMounted(() => {
  setTimeout(() => {
      let store = useViewStore();
      store.CreateSceneView();
      let view = store.getView() as __esri.SceneView;
      //set basemap for sceneview
      view.map = new Map({
          basemap: "satellite",
          ground: "world-elevation"
      });
      let symbol = new PolygonSymbol3D({
          symbolLayers: [
              {
                  type: "water",
                  waveDirection: 260,
                  color: "#25427c",
                  waveStrength: "moderate",
                  waterbodySize: "medium"
              }
          ]
      })
      let waterRender = new SimpleRenderer({
          symbol: symbol
      })
      let buildingLayer = new SceneLayer({
          url: "https://tiles.arcgis.com/tiles/U26uBjSD32d7xvm2/arcgis/rest/services/%E9%BB%84%E6%B2%B3%E6%BC%82%E6%B5%81%E5%B9%BF%E5%9C%BA_%E5%86%9C%E5%AE%B6%E9%99%A2/SceneServer"
      })
      let waterLayer = new FeatureLayer({
          url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%BB%84%E6%B2%B3/FeatureServer/2",
          renderer: waterRender,
          elevationInfo: {
              mode: "on-the-ground",
              offset: 100
          },
      })
      view.when(() => {
          view.map.add(buildingLayer);
          view.map.add(waterLayer);
          // buildingLayer.when(() => {
          //     view.goTo(buildingLayer.fullExtent);
          // })
          waterLayer.when(() => {
              view.goTo(buildingLayer.fullExtent);
              view.environment!.lighting!.directShadowsEnabled = true;
          })
          view.ui.add('navigation-toggle', 'top-left');
      })
      view.on("click", async function (event) {
          // the hitTest() checks to see if any graphics in the view
          // intersect the given screen x, y coordinates
          await view.hitTest(event)
              .then(function (response) {
                  const result = response.results[0] as __esri.SceneViewGraphicHit;

              });


          // Set the PopupTemplate on the selected graphic

      });
  }, 100);

})

onUnmounted(() => {
  let store = useViewStore();
  store.isViewType();
})

</script>

<style lang='scss' scoped>
.screen {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  background: rgba(255, 0, 0, 0.001);
  overflow: hidden;
  z-index: 2;
}
</style>
