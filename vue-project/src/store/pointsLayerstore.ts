import { defineStore } from 'pinia'
import { useViewStore } from '@/store/mapViewstore'
import { pointslayer } from '@/features'
import PopupTemplate from "@arcgis/core/PopupTemplate.js";

export const usepointslayerStore = defineStore('pointslayer', () => {
    // 获取到view实例
    const view = useViewStore().getView() as __esri.MapView;
    // 将要素图层添加到view中
    function addpointslayer() {
        view.map.add(pointslayer);
        view.when(() => {
            //自定义弹窗模板     
            view.on("click", () => {
                //设置pointslayer弹窗模板
                const popupTemplate = new PopupTemplate({
                    // title: "<span class='esri-popup__header-title'>{{layer.title}}</span>", // 添加一个带有标题文本的 span 元素
                    title: "{名称}",
                    content: [{
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "名称",
                                label: "名称"
                            },
                            {
                                fieldName: "类型名",
                                label: "类型名"
                            },
                            {
                                fieldName: "经度",
                                label: "经度"
                            },
                            {
                                fieldName: "纬度",
                                label: "纬度"
                            },
                            {
                                fieldName: "高程",
                                label: "高程"
                            }
                        ]
                    }]
                });
                pointslayer.popupTemplate = popupTemplate;
                // view.popup.dockEnabled = true;
                view.popup.dockOptions = {
                    buttonEnabled: false,
                    breakpoint: false,
                    position: "bottom-right"
                };
            });
        });
    }
    // 监测要素图层是否加载完毕
    function ispointslayerLoaded(){
        
    }
    // 将要素图层从view中移除
    function removepointslayer() {
        view.map.remove(pointslayer);
    }

    return { addpointslayer, removepointslayer }
})