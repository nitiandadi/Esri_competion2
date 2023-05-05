import { defineStore } from 'pinia'
import {toRaw} from 'vue'


export const useMapviewStore = defineStore('mapview', () => {
    let mapview:__esri.MapView;
    let view: __esri.MapView;
    //获取自己创建的mapview实例
    function setMapview(myMapview: __esri.MapView ) {
        mapview = myMapview
    };
    //转换为可编辑的view供其他pinia使用
    function getView(){
        if (mapview) {
            return view = toRaw(mapview);
        }
    };
    return { setMapview ,getView}
})