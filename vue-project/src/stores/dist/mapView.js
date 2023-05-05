"use strict";
exports.__esModule = true;
exports.useViewStore = void 0;
var pinia_1 = require("pinia");
var vue_1 = require("vue");
var SceneView_js_1 = require("@arcgis/core/views/SceneView.js");
var WebMap_1 = require("@arcgis/core/WebMap");
var MapView_1 = require("@arcgis/core/views/MapView");
exports.useViewStore = pinia_1.defineStore('mapview', function () {
    var view = null;
    var myContainer;
    //获取自己创建的mapview实例
    function setView(view) {
        view = view;
    }
    ;
    function setContainer(container) {
        myContainer = container;
    }
    //转换为可编辑的view供其他pinia使用
    function getView() {
        if (view) {
            // console.log(view);
            return view = vue_1.toRaw(view);
        }
        else {
            throw console.error('please register Mapview first or wait the sceneView to be ready');
        }
    }
    ;
    function CreateSceneView() {
        if (view) {
            view.destroy();
            view = null;
            var webmap = new WebMap_1["default"]({
                portalItem: {
                    id: "c8e3d51ec07246b58238eed8056c9000"
                }
            });
            view = new SceneView_js_1["default"]({
                map: webmap,
                container: myContainer,
                padding: {
                    top: 40
                },
                center: [117, 36],
                zoom: 5
            });
            view.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
        }
    }
    function CreateMapView() {
        if (view) {
            view.destroy();
            view = null;
            var webmap = new WebMap_1["default"]({
                portalItem: {
                    id: "c8e3d51ec07246b58238eed8056c9000"
                }
            });
            view = new MapView_1["default"]({
                map: webmap,
                container: myContainer,
                center: [117, 36],
                zoom: 4
            });
            view.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
        }
        else {
            var webmap = new WebMap_1["default"]({
                portalItem: {
                    id: "c8e3d51ec07246b58238eed8056c9000"
                }
            });
            view = new MapView_1["default"]({
                map: webmap,
                container: myContainer,
                center: [117, 36],
                zoom: 4
            });
            view.ui.remove(['attribution', 'zoom', 'navigation-toggle', 'compass']);
        }
    }
    return { setContainer: setContainer, getView: getView, CreateSceneView: CreateSceneView, CreateMapView: CreateMapView };
});
