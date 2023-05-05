"use strict";
exports.__esModule = true;
exports.useMapviewStore = void 0;
var pinia_1 = require("pinia");
var vue_1 = require("vue");
exports.useMapviewStore = pinia_1.defineStore('mapview', function () {
    var sceneView;
    //获取自己创建的mapview实例
    function setMapview(sceneView) {
        sceneView = sceneView;
    }
    ;
    //转换为可编辑的view供其他pinia使用
    function getView() {
        if (sceneView) {
            return sceneView = vue_1.toRaw(sceneView);
        }
        else {
            throw console.error('please register Mapview first or wait the sceneView to be ready');
        }
    }
    ;
    return { setMapview: setMapview, getView: getView };
});
