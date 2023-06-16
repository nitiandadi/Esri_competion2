import { defineStore } from 'pinia'
import { toRaw } from 'vue'
import SceneView from "@arcgis/core/views/SceneView.js";
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Basemap from '@arcgis/core/Basemap';
export const useViewStore = defineStore('view', () => {
    let myView: __esri.View | null = null;
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
        if (myView) {
            return myView = toRaw(myView);
        }
        else {
            throw console.error('please create view first');
        }
    };
    function CreateSceneView() {
        myView?.destroy();
        myView = null;
        const webmap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: "c8e3d51ec07246b58238eed8056c9000"
            },
        });
        myView = new SceneView({
            map: webmap,
            container: myContainer,
            padding: {
                top: 40
            },
            center: [117, 36],
            zoom: 4,
        });
        myView.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
        myView.map = webmap;
    }

    function CreateMapView() {
        myView?.destroy();
        myView = null;
        const webmap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: "c8e3d51ec07246b58238eed8056c9000"
            },
        });
        myView = new MapView({
            map: webmap,  // The WebMap instance created above
            container: myContainer,
            center: [117, 36],
            zoom: 4
        });
        let nightBasemap = Basemap.fromId("streets-night-vector");
        myView.when(() => {
            nightBasemap.load().then(() => {
                let nightStreetLayer = nightBasemap.baseLayers.getItemAt(0);
                myView!.map.basemap.baseLayers.add(nightStreetLayer, 0);
            }
            );
        });
        myView.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
    }

    
    
    function destroyMapView() {
        myView?.destroy();
        myView = null;
    }
    // 判断创建view实例为sceneView还是mapView
    function isViewType() {
        if (myView?.type == '2d') {
            return;
        }
        else if (myView?.type == '3d') {
            CreateMapView();
        } else {
            throw console.error('please input mapView or sceneView');
        }
    }
    return { setView, setContainer, getView, CreateSceneView, CreateMapView, destroyMapView, isViewType }
})