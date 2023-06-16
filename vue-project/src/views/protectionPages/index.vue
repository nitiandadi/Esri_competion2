<template>
    <div ref="screen3dRef" class="screen3d">
        <div class="screen3d-navigation" ref="navigationRef"></div>
        <widget3d />
        <buildingInfro v-if="buildvisual" />
        <!-- <videoInfro v-if="videovisual" />
    <areaInfro v-if="areavisual" /> -->
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted, provide } from 'vue';
import { useScreen } from '@/hooks/useScreen';
import buildingInfro from "./components/buildingInfro.vue";
const screen3dRef = ref<HTMLElement | null>(null);
useScreen(screen3dRef);
//@ts-ignore
import { useViewStore } from '@/store/mapviewstore';
import Map from '@arcgis/core/Map';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { SimpleRenderer } from "@arcgis/core/renderers";
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D.js";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import NavigationToggle from "@arcgis/core/widgets/NavigationToggle.js";
import widget3d from "./components/widget3d.vue";
import esriConfig from "@arcgis/core/config.js";
const navigationRef = ref<HTMLElement | null>(null);
const buildvisual = ref(false);
const videovisual = ref(false);
const areavisual = ref(false);
esriConfig.apiKey = "AAPK38a95a31090f4db7af0665c5f4ad34996GXd4nU-HoOwfI68DHDryRWBagf1jRCFl-zOHFdrsipPV6sHAcJXfniZzD7HS8BB";
onMounted(() => {
    setTimeout(() => {
        let store = useViewStore();
        store.CreateSceneView();
        let view = store.getView() as __esri.SceneView;
        console.log(view.type);

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
            id: "building",
            url: 'https://tiles.arcgis.com/tiles/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%BB%84%E6%B2%B3%E6%BC%82%E6%B5%81%E5%B9%BF%E5%9C%BA_%E5%86%9C%E5%AE%B6%E9%99%A2/SceneServer'
        })
        // let buildingLayer = new SceneLayer({
        //     id: "building",
        //     url: "https://tiles.arcgis.com/tiles/U26uBjSD32d7xvm2/arcgis/rest/services/%E9%BB%84%E6%B2%B3%E6%BC%82%E6%B5%81%E5%B9%BF%E5%9C%BA_%E5%86%9C%E5%AE%B6%E9%99%A2/SceneServer"
        // })
        let model = new SceneLayer({
            id: "model",
            url: "https://tiles.arcgis.com/tiles/R5nxHh77a68zEsEp/arcgis/rest/services/%E7%99%BD%E6%A8%A1/SceneServer"
        })
        let waterLayer = new FeatureLayer({
            url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%BB%84%E6%B2%B3/FeatureServer/2",
            renderer: waterRender,
            elevationInfo: {
                mode: "on-the-ground",
                offset: 100
            },
        })
        let modelPopupTemplate = new PopupTemplate({
            title: "{name}",
            content: [{
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "area",
                        label: "面积",
                        format: {
                            places: 2, // 保留小数点后两位
                            digitSeparator: true // 使用千分位分隔符
                        }
                    },
                    {
                        fieldName: "destory",
                        label: "损坏程度"
                    },
                    {
                        fieldName: "year",
                        label: "建造年限"
                    },
                ]
            }],
        })
        view.when(async () => {
            model.popupTemplate = modelPopupTemplate;
            view.map.add(buildingLayer);
            view.map.add(waterLayer);
            view.map.add(model);
            await waterLayer.when(() => {
                view.goTo(buildingLayer.fullExtent);
                // view.goTo(waterLayer.fullExtent);
                view.environment!.lighting!.directShadowsEnabled = true;
            })
            const navigationToggle = new NavigationToggle({
                view: view,
                container: navigationRef.value!,
                iconClass: "screen3d-icon-pan2"
            });
            view.ui.add(navigationToggle);

        })
    }, 1000);

})

onUnmounted(() => {
    let store = useViewStore();
    store.isViewType();
})

provide("buildvisual", buildvisual)
provide("videovisual", videovisual)
provide("areavisual", areavisual)
</script>

<style lang='scss' scoped>
.screen3d {
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: 0.3s;
    background: rgba(255, 0, 0, 0.001);
    overflow: hidden;
    z-index: 2;

    &-navigation {
        position: absolute;
        top: 10%;
        left: 0;
        pointer-events: auto;
        height: auto;
        width: auto;
        background-image: linear-gradient(-90deg, #182940 0%, #184f75 100%);
    }
}
</style>
