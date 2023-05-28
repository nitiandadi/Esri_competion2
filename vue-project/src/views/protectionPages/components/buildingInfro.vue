<template>
    <div class="Container" ref="envirmentRef">
        <div class="Container-panel-head">当前人数：</div>
        <div class="Container-panel-body">
            <div>入口1:人数{{ num1 }}</div>
            <video src=""></video>
        </div>
        <div class="Container-panel-body">
            <div>入口1:人数{{ num2 }}</div>
            <video src=""></video>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
let num1 = ref(0);
let num2 = ref(0);
// import { ref, onMounted } from "vue";
// //@ts-ignore
// import { useViewStore } from '@/store/mapviewstore';
// import Map from '@arcgis/core/Map';
// import SceneLayer from '@arcgis/core/layers/SceneLayer';
// import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import { SimpleRenderer } from "@arcgis/core/renderers";
// import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D.js";
// import PopupTemplate from "@arcgis/core/PopupTemplate";
// onMounted(() => {
//     let store = useViewStore();
//     store.CreateSceneView();
//     let view = store.getView() as __esri.SceneView;
//     //set basemap for sceneview
//     view.map = new Map({
//         basemap: "satellite",
//         ground: "world-elevation"
//     });
//     let symbol = new PolygonSymbol3D({
//         symbolLayers: [
//             {
//                 type: "water",
//                 waveDirection: 260,
//                 color: "#25427c",
//                 waveStrength: "moderate",
//                 waterbodySize: "medium"
//             }
//         ]
//     })
//     let waterRender = new SimpleRenderer({
//         symbol: symbol
//     })
//     let buildingLayer = new SceneLayer({
//         url: "https://tiles.arcgis.com/tiles/R5nxHh77a68zEsEp/arcgis/rest/services/DuJiangYan/SceneServer"
//     })
//     let waterLayer = new FeatureLayer({
//         url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/dujiangyang2/FeatureServer",
//         renderer: waterRender,
//         elevationInfo: {
//             mode: "on-the-ground",
//             offset: 100
//         },
//     })
//     view.when(() => {
//         view.map.add(buildingLayer);
//         view.map.add(waterLayer);
//         // buildingLayer.when(() => {
//         //     view.goTo(buildingLayer.fullExtent);
//         // })
//         waterLayer.when(() => {
//             view.goTo(waterLayer.fullExtent);
//             console.log('waterlayer');
//             //    view.map.visible=false;
//             //    view.visible = true;
//             view.environment!.lighting!.directShadowsEnabled = true;
//         })
//         view.ui.add('navigation-toggle', 'top-left');
//     })
//     view.on("click", function (event) {
//         // the hitTest() checks to see if any graphics in the view
//         // intersect the given screen x, y coordinates
//         view.hitTest(event)
//             .then(function (response) {
//                 const result = response.results[0] as __esri.SceneViewGraphicHit;

//             });


//         // Set the PopupTemplate on the selected graphic

//     });

// })
</script>
<style lang="scss" scoped>
@import '@/style/protection.scss';
</style>