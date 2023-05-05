<template>
  <div id="viewDiv" ref="viewDivRef">
    <slot></slot>
  </div>
  <div id="timeSlider" ref="timeSliderRef"></div>
</template>

<script setup lang="ts">
import { onMounted,ref,Ref } from 'vue';
import MapView from "@arcgis/core/views/MapView.js";
import WebMap from "@arcgis/core/WebMap.js";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import esriConfig from "@arcgis/core/config";
import styles from "@/style/esri.scss?inline";
import {useTimesliderStore} from '@/store/environment/timesliderstore.js'
import { useMapviewStore } from '@/store/mapviewstore.js'
import { pointslayer} from '@/features'
const viewDivRef =  ref<HTMLDivElement | null>(null);
const timeSliderRef =  ref<HTMLDivElement | null>(null);
const mapviewStore = useMapviewStore();

onMounted(() => {
  esriConfig.apiKey = "AAPK787b700a1e3b4acfa3e242e51c892e11I_WaMFXTKd_ZT55uirhG7rr7faPIvr2T13cep7x0iqh-L-AwgIwyh9_UW7pjEyFd";
  const mymap = new WebMap({
    portalItem: {
      id:"a4e01842a5424d5883de46634546965a"
    }
  });

  const view = new MapView({
    map: mymap,  // The WebMap instance created above
    container:  viewDivRef.value as HTMLDivElement,
    center: [97, 36],
    // extent: extent,
  });

  view.constraints ={
        minZoom: 4,
        maxZoom: 20
  };
  //调节地图样式
  const zoom = view.ui.find('zoom') as __esri.Widget;
  zoom.visible = false;
  view.ui.remove("attribution");

  view.map.add(pointslayer);
  
  view.when(() => {
      //将view传入mapviewStore供全局使用
      mapviewStore.setMapview(view);  
      //创建时间滑块
      useTimesliderStore().createTimeslider(timeSliderRef as Ref<HTMLDivElement>);
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

});
//弹窗
//修改popup样式
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);

</script>
 
<style scoped lang="scss">
#viewDiv {
  width: 100%;
}
#timeSlider {
  position: absolute;
  left: 1.2%;
  right: 5%;
  bottom: 18%;
  max-height: 100px;
  max-width: 600px;
}
</style>
