<template>
  <div id="viewDiv"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// import WebMap from "@arcgis/core/WebMap.js";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriconfig from "@arcgis/core/config.js";
import Extent from "@arcgis/core/geometry/Extent.js";
onMounted(() => {
  esriconfig.apiKey = "AAPK38a95a31090f4db7af0665c5f4ad34996GXd4nU-HoOwfI68DHDryRWBagf1jRCFl-zOHFdrsipPV6sHAcJXfniZzD7HS8BB";
  const webmap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: "5d8067a7969f4c58afe196046fe30b91"
    },
    // basemap: "streets"
  });
  const view = new MapView({
    map: webmap,  // The WebMap instance created above
    container: "viewDiv",
    center: [100, 36],
  });
  view.extent = new Extent({
    xmin: 88.740128,
    ymin: 31.032755,
    xmax: 103.0398,
    ymax: 39.377155,
    spatialReference: {
      wkid: 4326
    }
  });
});
</script>

<style scoped>
#viewDiv {
  width: 100%;
}
</style>
