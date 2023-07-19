<template>
  <div class="device" >
            <div class="device-panel line">
            <span  class="device-panel-title">城市拥堵指数</span>
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
          <div class="device-panel-footer"></div>
            </div>
          <div class="device-panel line">
            <div class="device-panel-title" @click="toggleRoadConditionVisibility">
              <span>景区实时路况</span></div>
              <div ref="roadchart" class="device-panel-chart"> </div>
              <div class="device-panel-footer"></div>
            </div>
          <div class="device-panel line">
            <div class="device-panel-title">
            <span>景区今日实时客流</span></div>
            <div ref="visitorschart" class="device-panel-chart"> </div>
            <div class="device-panel-footer"></div>
            </div>

  
  </div>
  <roadline />
    <roadcondition v-if="value1"/>
   
</template>

<script setup lang="ts">
import { ElText, ElSwitch, ElRow, ElCol, ElCard } from 'element-plus';
import { ref, onMounted, toRaw, onUnmounted, onBeforeMount,watch  } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import 'echarts-liquidfill';
import * as echarts from 'echarts';
import { useScreen } from '@/hooks/useScreen';
import roadline from './pages/roadline.vue';
import Radaroptions from './pages/radar';
import basicoption from './pages/basic';
import roadcondition from './pages/roadcondition.vue'
import { useViewStore } from '@/store/mapviewstore';
import { useTime } from '@/hooks/useTime';

const time = useTime();
let value1 = ref(false)
const screenRef = ref<HTMLElement | null>(null);
useScreen(screenRef);
const radar = ref<HTMLElement | null>(null);
const roadchart = ref<HTMLElement | null>(null);
const visitorschart = ref<HTMLElement | null>(null);
let view=useViewStore().getView() as __esri.MapView;
//控制拥堵指数
function getRealTimeData() {
  return {
    congestionIndex:1.83,
    ranking: 52,
  };
}
//更新数据
function updateRealTimeData() {
  const realTimeData = getRealTimeData();

  // 更新拥堵指数
  const congestionIndexElement = document.querySelector('.device-card-indexNum');
  congestionIndexElement!.textContent = realTimeData.congestionIndex.toString();

  // 更新排名
  const rankingElement = document.querySelector('.device-card-order span');
  rankingElement!.textContent = realTimeData.ranking.toString();
}

// 定时更新实时数据
setInterval(updateRealTimeData, 5000); 
//控制路况显示
const toggleRoadConditionVisibility = () => {
  value1.value = !value1.value;
};
onMounted(() => { 
    updateRealTimeData();
    //radar
    let barChart: echarts.ECharts | null = null;
     barChart = echarts.init(roadchart.value as HTMLElement);
      (Radaroptions.baseOption?.toolbox as echarts.ToolboxComponentOption).feature = {
        myTool2: {
        show: true,
        top:'0%',
        left:'10%',
        title: '实时路况',
        icon: 'image://https://img.icons8.com/doodle/96/traffic-lights-sign.png',
        onclick:toggleRoadConditionVisibility,
      }
  }
      useEcharts(barChart as echarts.ECharts, Radaroptions);
//radar
    let basicChart: echarts.ECharts | null = null;
    basicChart=echarts.init(visitorschart.value as HTMLElement);
  
const currentTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Shanghai"
});

// 解析北京时间
const dateTimeParts = currentTime.split(", ");
const currentDate = new Date(dateTimeParts[0]);
const currentHours = time.hour.value;
//const currentMinutes = currentDate.getMinutes();

// 生成随机数
const randomNum = Math.floor(Math.random() * 1000); // 生成一个随机数

// 根据当前时间计算需要生成的数据
const data = [];

const timeSegments = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
console.log(currentHours);
for (let i = 0; i < timeSegments.length; i++) {
  const timeString = timeSegments[i];
  const hour = parseInt(timeString.split(':')[0]);
  //console.log(hour);
  // 只生成当前时间之前的数据
  if (currentHours as number > hour || (currentHours === hour)) {
    let num = 0;
    if (hour >= 0 && hour < 6) {
      num = Math.floor(randomNum * 50 / 1000); // 夜间时段人数不超过50
    } 
    else if(hour===6){
      num = Math.floor((Math.random() * 1000)+80);
    }else if(hour===9){
      num = Math.floor((Math.random() * 1000)+80); // 日间人数不超过1000
    }
    else if(hour===12){
      num = Math.floor((Math.random() * 1000)+80);
    }
    else if(hour===15){
      num = Math.floor((Math.random() * 1000)+80);
    }
    data.push(num);
  } else {
    data.push(null); // 当前时间之后的数据设置为 null 或其他占位符
  }
}

// 更新 basicoption 中 series 的 data
if(Array.isArray(basicoption.series) && basicoption.series.length > 0)
{
  basicoption.series[0].data = data;
}
  
  useEcharts(basicChart as echarts.ECharts, basicoption);  
  view.goTo({
        center: [[
          101.57777119,
          36.49234074
        ]],
        zoom: 14,})
  })
  onUnmounted(()=>{
    view.map.removeAll();
  })
</script>

<style lang="scss" scoped>
@import '@/style/device.scss';

</style>
