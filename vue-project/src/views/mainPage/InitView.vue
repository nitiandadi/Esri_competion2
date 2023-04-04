<template>
  <div id="viewDiv">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// import WebMap from "@arcgis/core/WebMap.js";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriconfig from "@arcgis/core/config.js";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import styles from "../../style/esri.scss?inline";

onMounted(() => {
  esriconfig.apiKey = "AAPK73d1f032eb4243ecb5e8a63c99c39fd12BNLILjg2lhqCNOKDvIHP_4FVEzPIt6cRUZRtNWw7oBST4fXE3NBOaq7XcI76cXz";
  const webmap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: "5d8067a7969f4c58afe196046fe30b91"
    },
    // basemap: "streets"
  });
  const view = new MapView({
    map: webmap,  // The WebMap instance created above
    container:  "viewDiv" ,
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
  //弹窗
  view.on("click", () => {
    //获取图层对应的要素的信息
    view.when(() => {
    // Web 地图加载完毕后再获取 allLayers的points图层
      const layer = webmap.allLayers.getItemAt(1) as __esri.FeatureLayer
      //设置弹窗模板
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
              fieldName: "类型编",
              label: "类型编号"
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
      layer.popupTemplate = popupTemplate;        
      view.popup.dockEnabled = true;
      view.popup.dockOptions = {
        buttonEnabled: false,
        breakpoint: false,
        position: "bottom-right"
      };               
    });
  });
});
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
</style>
