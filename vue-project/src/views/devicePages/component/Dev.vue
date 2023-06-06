<template>
  <div class="device" ref="envirmentRef">
    <transition name="right-slide-in">
        <el-row>
          <el-col>
            <div class="device-panel line">

            <span  class="device-panel-title">查看路网图</span>

            <el-col><el-switch v-model="value1" size="large" class="mt-2" style="margin-left: 24px" inline-prompt
              :active-icon="Check" :inactive-icon="Close"  /></el-col>
            </div>
            <section class="device-card">
              <div class="device-card-cityname">
                 <p>当前城市</p>
                  <span>西宁</span> 
             </div>
             
             <span class="device-card-line"></span>
             <div class="device-card-order">
              <p>排名</p>
              <span>52</span>
             </div>
             <div class="device-card-index">
                     <p>拥堵指数</p>
                     <p class="device-card-indexVal">
                     <span class="device-card-indexNum">1.83</span>
                    <span class="device-card-indexArrow"></span>
                     </p>
                    <p class="device-card-indexProcess">
                     <span class="device-card-Proval"></span>
                     <span class="device-card-Proline"></span>
                    </p>
             </div>
            </section>
          </el-col>
        
          <el-col>
            <div class="device-panel line">
            <div class="device-panel-title">
              <span>景区实时路况</span>></div>
            
            <el-switch v-model="value2" size="large" class="mt-2" style="margin-left: 24px" inline-prompt
              :active-icon="Check" :inactive-icon="Close"  ref="radar"/>
            </div>
            <div ref="mychart" class="device-panel-chart"> </div>
          </el-col>
          <el-col>
            <div class="device-panel line">
            <div class="device-panel-title">
            <span>旅游景区今日实时客流</span></div>
            <el-switch v-model="value3" size="large" class="mt-2" style="margin-left: 24px" inline-prompt
              :active-icon="Check" :inactive-icon="Close"  ref="radar"/>
            </div>
            <div ref="basicchart" class="device-panel-chart"> </div>
          </el-col>
    
        </el-row>
    </transition>
    <roadline v-if="value1" />
    <roadcondition v-if="value2"/>
    <test v-if="value3"/>
  </div>
</template>

<script setup lang="ts">
import { ElText, ElSwitch, ElRow, ElCol, ElCard } from 'element-plus';
import { ref, onMounted, toRaw, onUnmounted, onBeforeMount,watch  } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import 'echarts-liquidfill';
import * as echarts from 'echarts';
import { useScreen } from '@/hooks/useScreen';
import { Check, Close } from '@element-plus/icons-vue'
import roadline from './pages/roadline.vue';
//import { rdrefresh } from '@/features/device/roadline';
import {updateFeatureLayerAttributes} from '@/features/device/roadcondition';
import { fetchCongestionEvaluationData } from '@/features/device/roadcondition';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
// import Amapview from '@/views/mainPage/Amapview.vue';
import Radaroptions from './pages/radar';
import basicoption from './pages/basic';
import roadcondition from './pages/roadcondition.vue';
import axios from 'axios';
import test from './pages/test.vue';
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const screenRef = ref<HTMLElement | null>(null);
useScreen(screenRef);
const radar = ref<HTMLElement | null>(null);
// let switchList = [value1, value2, value3];
// function checkSwitch(index: number) {
//   for (let i = 0; i < switchList.length; i++) {
//     if (i !== index) {
//       switchList[i].value = false;
//     }
//   }
// }

// 定义引用需要渲染的DOM元素的ref对象
// const chartLineRef = ref<HTMLElement | null>(null);
// const chartRadarRef = ref<HTMLElement | null>(null);
 const mychart = ref<HTMLElement | null>(null);
  const basicchart = ref<HTMLElement | null>(null);
  //let mychart= ref(null);
  onMounted(() => {
    let barChart: echarts.ECharts | null = null;
     barChart = echarts.init(mychart.value as HTMLElement);
      // barChartOptions 配置项，推荐放在外部引入。
      //barChart.setOption(barChartOptions);
      useEcharts(barChart as echarts.ECharts, Radaroptions);
      //fetchCongestionEvaluationData();
      //rdrefresh();
    let basicChart: echarts.ECharts | null = null;
     basicChart=echarts.init(basicchart.value as HTMLElement);
     useEcharts(basicChart as echarts.ECharts, basicoption);
  })
</script>

<style lang="scss" scoped>
@import '@/style/device.scss';

</style>
