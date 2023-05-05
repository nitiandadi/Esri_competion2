import { defineStore } from 'pinia'
import { toRaw } from 'vue'

export const useMapviewStore = defineStore('mapview', () => {
    let sceneView: __esri.SceneView;
    //获取自己创建的mapview实例
    function setMapview(sceneView: __esri.SceneView) {
        sceneView = sceneView
    };
    //转换为可编辑的view供其他pinia使用
    function getView() {
        if (sceneView) {
            return sceneView = toRaw(sceneView);
        }
        else {
            throw console.error('please register Mapview first or wait the sceneView to be ready');
        }
    };
    return { setMapview, getView }
})