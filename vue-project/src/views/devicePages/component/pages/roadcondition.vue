<template>
<div id="main">
    <slot></slot>
</div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useroadconditionStore } from '@/store/device/roadcondition';
import Featurelayer from "@arcgis/core/layers/FeatureLayer";
import EchartLayer from '@/hooks/EhcartsLayer';
import { useViewStore } from '@/store/mapViewstore';
let roadconditionStore = useroadconditionStore();
let roadNetworkData: {coords: number[][];index: any; }[] = [];
let echartLayer: EchartLayer | null = null;
onMounted(async ()=>{
    let roadline=new Featurelayer({
        url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E5%91%A8%E8%BE%B9%E8%B7%AF%E7%BD%91/FeatureServer",
    })
    
    let view=useViewStore().getView();
    await roadconditionStore.fetchCongestionEvaluationData();
    await roadconditionStore.updateFeatureLayerAttributes(roadline,roadconditionStore.roadDataList);
    roadNetworkData=await roadconditionStore.fieldRoadNetworkData(roadline);
    //console.log(roadNetworkData);
    const redata = roadNetworkData.map((roadNetworkData: { coords: number[][];index: any;  }) => {
        let color = '#00FFFF'; // 默认颜色为红色

        if (roadNetworkData.index === 0) {
             color = '#00FFFF'; // type为1时，设置颜色为蓝色
        } else if (roadNetworkData.index === 1) {
            color = '#7FFF00'; // type为2时，设置颜色为绿色
        } else if (roadNetworkData.index === 2) {
            color = '#EE2C2C'; // type为3时，设置颜色为黄色
         }

     return {
       //name: road.name,
         coords: roadNetworkData.coords,
         lineStyle: {
            
                 color: color
        
     }
    };
    });
   // roadconditionStore.renderFeatureLayer(roadNetworkData);
    let myChart: echarts.ECharts | null = null;
   // dataSegments.forEach(function(segment) {
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
         progressiveThreshold: 5000,
         progressive: 2000,
         data:redata,
        },
          {
            type: 'lines',
            coordinateSystem: 'arcgis',
            polyline: true,
            data: redata,
            // [
            //   {
            //     fromName: "成都",
            //     toName: "北京",
            //     coords: [
            //      [104.06, 30.67], // 成都经纬度
            //      [116.39, 39.90], // 北京经纬度
            //     ], // 北京和成都的经纬度坐标
               
            //   }
              
            // ],
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
     
  //  })
      //store.CreateSceneView();
      //m km view.map.add(roadline);
      echartLayer=new EchartLayer(view,option);
      
      //echartLayer?.setVisiable(false);
    
})
onUnmounted(() => {
    echartLayer?.destroy();
    echartLayer = null;
    //store.isViewType();
})
</script>
