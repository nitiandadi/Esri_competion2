import { defineStore } from 'pinia'
import { useViewStore } from '@/store/mapviewstore'
import Legend from "@arcgis/core/widgets/Legend.js";
// @ts-ignore
import { Ref, ref } from 'vue';
import { HeatmapRenderer } from '@arcgis/core/renderers';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import EchartsLayer from '@/hooks/EhcartsLayer';
import  * as echarts from 'echarts';
export const useHeatmap = defineStore('hotelheatmap', () => {
  //图例
  let legend: __esri.Legend | null = null;
  //时间序列图层
  let timepointslaers: __esri.FeatureLayer[] = [];
  //图例容器
  let legendRef: HTMLDivElement | null = null;
   // let heatmap=new FeatureLayer();
    let heatmap =new FeatureLayer();
    const heatmapVisible = ref(false);
  
async function createHeatmap( LegendRef: HTMLDivElement | null ,percentage: Ref<number>, isActive: Ref<boolean> ){
    const view = useViewStore().getView() as __esri.MapView;
    legendRef = LegendRef;
       const heatmapRenderer = new HeatmapRenderer({
        field: "price", // 根据需求权重字段进行渲染
        //@ts-ignore
        blurRadius: 10,
        maxDensity: 0.9,
        minDensity: 0,
        colorStops: [
        { color: "rgba(63, 40, 102, 0)", ratio: 0 },
        { color: "rgba(0, 255, 220, 1)", ratio: 0.1 },
        { color: "rgba(255, 221, 0, 1)", ratio: 0.2 },
        { color: "rgba(156, 70, 30, 1)", ratio: 0.3 },
        { color: "rgba(156, 70, 30, 1)", ratio: 0.3 },
        { color: "rgba(156, 70, 30, 1)", ratio: 0.3 },
        ]
      });
    
        heatmap = new FeatureLayer({
        url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%BD%8F%E5%AE%BF/FeatureServer",
        renderer: heatmapRenderer,
        opacity: 0.8
      });
      const legend = new Legend({
        view: view,
        layerInfos: [
          {
            layer: heatmap,
            title: "价格热力图"
          }
        ]
      });
      // 将热力图图层添加到地图中
      view.map.add(heatmap);
      heatmapVisible.value=true;
    }
    return {createHeatmap}
})