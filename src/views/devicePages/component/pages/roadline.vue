<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import { onMounted ,onUnmounted, reactive} from 'vue';
import * as echarts from 'echarts';
import EchartLayer from '@/hooks/EhcartsLayer';
//@ts-ignore
import { useViewStore  } from '@/store/mapviewstore';
import { useroadconditionStore } from '@/store/device/roadcondition'
import  FeatureLayer from '@arcgis/core/layers/FeatureLayer';
const store = useViewStore();
let echartLayer: EchartLayer | null = null;
let roadconditionStore = useroadconditionStore();
let roadline=new FeatureLayer({
      url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E5%91%A8%E8%BE%B9%E8%B7%AF%E7%BD%91/FeatureServer",
  })
let roadNetworkData: {[x: string]: any; coords: number[][]; }[] = [];
onMounted(async ()=>{
  let view=useViewStore().getView();
  roadNetworkData=await roadconditionStore.extractRoadNetworkData(roadline);
  let hStep = 300 / (roadNetworkData.length - 1);
  const roaddata=roadNetworkData.map((roadNetworkData,index) => ({
    name: roadNetworkData.name,
    coords: roadNetworkData.coords,
    lineStyle: {
      normal: {
        color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * index))
      }
    }
  }));
   const option: echarts.EChartsOption={
      series: [
        {
          type: 'lines',
          coordinateSystem: 'arcgis',
          polyline: true,
          silent: true,
          zlevel:1,
     
      lineStyle: {
          //color: '#5A94DF',
          curveness: 0.8,
          opacity: 0.4,
          width: 2
      },
       progressiveThreshold: 300,
       progressive: 300,
       data:roaddata,
      },
        {
          type: 'lines',
          coordinateSystem: 'arcgis',
          polyline: true,
          data: roaddata,
          lineStyle: {
          width: 0
        },
        effect: {
          constantSpeed: 20,
          show: true,
          trailLength: 0.2,
          symbolSize: 3
        }
      }
      ]
    };
    echartLayer=new EchartLayer(view,option);
    
})
onUnmounted(() => {
  echartLayer?.destroy();
  echartLayer = null;
  store.isViewType();
})
</script>

<style>

</style>