import { defineStore } from 'pinia'
//@ts-ignore
import { useViewStore } from '@/store/mapViewstore' 
import { createPointslayer } from '@/features'
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
//@ts-ignore
import { ref,Ref, } from 'vue';


export const usepointslayerStore = defineStore('pointslayer', () => {
    // 获取到view实例
    const view = useViewStore().getView() as __esri.MapView;
    // 获取到pointslayer要素图层
    const pointslayer = createPointslayer();
    // 将要素图层添加到view中，同时设置弹窗模板，
    function addpointslayer(  ) {
        view.when(() => {
            view.map.add( pointslayer );
            console.log(view.map.allLayers);
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
            });
        });
    }


    // 监视要素图层的view是否加载完成，加载完成后放回true,否则返回false
    function ispointslayerLoaded( isDisabled: any) {
        
       // 监视点图层是否加载完成,加载完成后将开关设置为可用
        view.when(() => {
            // 监视点图层是否加载完成
            view.watch('updating', (val) => {
                if (!val) {
                    // 将开关设置为可用
                    isDisabled.value = false;
                }
            });
        });
    
    }

    // 将要素图层从view中移除
    function removepointslayer() {
        // 将除了底图的所有图层移除
        view.map.removeAll();
        
    }

    return { addpointslayer, removepointslayer,ispointslayerLoaded,pointslayer }
})