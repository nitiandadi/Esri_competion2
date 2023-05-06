import { defineStore } from 'pinia'
import { toRaw } from 'vue'
import WebScene from "@arcgis/core/WebScene.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
export const useViewStore = defineStore('mapview', () => {
    let view: __esri.View | null = null;
    let myContainer: string | HTMLDivElement;
    //获取自己创建的mapview实例
    function setView(view: __esri.View) {
        view = view
    };
    function setContainer(container: string | HTMLDivElement) {
        myContainer = container;
    }
    //转换为可编辑的view供其他pinia使用
    function getView() {
        if (view) {
            // console.log(view);
            return view = toRaw(view);
        }
        else {
            throw console.error('please register Mapview first or wait the sceneView to be ready');
        }
    };
    function CreateSceneView() {
        if (view) {
            view.destroy();
            view = null;
            const webmap = new WebMap({
                portalItem: { // autocasts as new PortalItem()
                    id: "c8e3d51ec07246b58238eed8056c9000"
                },
            });
            view = new SceneView({
                map: webmap,
                container: myContainer,
                padding: {
                    top: 40
                },
                center: [117, 36],
                zoom: 5,
            });
            view.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass'])
        }
    }

    function CreateMapView() {
        if (view) {
            view.destroy();
            view = null;
            const webmap = new WebMap({
                portalItem: { // autocasts as new PortalItem()
                    id: "c8e3d51ec07246b58238eed8056c9000"
                },
            });
            view = new MapView({
                map: webmap,  // The WebMap instance created above
                container: myContainer,
                center: [117, 36],
                zoom: 4
            });
            view.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
        }
        else {
            const webmap = new WebMap({
                portalItem: { // autocasts as new PortalItem()
                    id: "c8e3d51ec07246b58238eed8056c9000"
                },
            });

            view = new MapView({
                map: webmap,  // The WebMap instance created above
                container: myContainer,
                center: [117, 36],
                zoom: 4
            });
            view.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
        }

    }
    return { setView, setContainer, getView, CreateSceneView, CreateMapView }
})