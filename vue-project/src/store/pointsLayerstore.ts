import { defineStore } from 'pinia'
import { useViewStore } from '@/store/mapviewstore' 
import { createPointslayer } from '@/features'
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
//@ts-ignore
import { ref,Ref} from 'vue';
import WebMap from '@arcgis/core/WebMap';

export const usepointslayerStore = defineStore('pointslayer', () => {
    // 获取到pointslayer要素图层
    let pointslayer: __esri.FeatureLayer | null = null;
    // 将要素图层添加到view中，同时设置弹窗模板，
    function addpointslayer( ) {
           // 获取到view实例
        let view = useViewStore().getView() as __esri.MapView;
        pointslayer = createPointslayer() as __esri.FeatureLayer;
        // 将要素图层添加到view中
        view.map.add( pointslayer );
        //设置pointslayer弹窗模板
        const popupTemplate = new PopupTemplate({
            // title: "<span class='esri-popup__header-title'>{{layer.title}}</span>", // 添加一个带有标题文本的 span 元素
            title: "{name}",
            content: [{
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "longitude",
                        label: "经度"
                    },
                    {
                        fieldName: "latitude",
                        label: "纬度"
                    },
                    {
                        fieldName: "city",
                        label: "城市"
                    },
                    {
                        fieldName: "typeName",
                        label: "景点类型"
                    },
                ]
            }],
        });
        pointslayer.popupTemplate = popupTemplate;
        view.popup.dockEnabled = false;
        view.popup.collapsed = true;
        view.popup.dockOptions = {
            buttonEnabled: false,
            breakpoint: false,
            position: "bottom-right"
        };
    }


    // 监视要素图层的view是否加载完成，加载完成后放回true,否则返回false
    function ispointslayerLoaded( isDisabled: any) {  
           // 获取到view实例
        let view = useViewStore().getView() as __esri.MapView;     
        // 监视点图层是否加载完成
        view.watch('updating', (val) => {
            if (!val) {
                // 将开关设置为可用
                isDisabled.value = false;
            }
        });
    }

    // 将要素图层从view中移除
    function removepointslayer() {
           // 获取到view实例
        let view = useViewStore().getView() as __esri.MapView;
        // 将除了底图的所有图层移除
        view.map.removeAll();
    }

    return { addpointslayer, removepointslayer,ispointslayerLoaded}
})