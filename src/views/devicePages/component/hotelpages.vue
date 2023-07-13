<template>
  <div class="hotel">
      <div class="hotel-panel line">
      <div class="hotel-panel-title">
        <span>酒店信息查询</span>
        </div>
        <select v-model="selectedLocation">
          <option value="">请选择地区</option>
          <option option v-for="location in locations" :value="location">{{ location }}</option>
  <!-- 添加更多选项 -->
        </select>
        <transition>
        <div  class="table-container">
          <!-- 窗口内容 -->
          <table class="table">
          <thead >
            <tr>
              <th colspan="3">
                <button @click="sortByPrice">按价格排序</button>
                <button @click="sortByRating">按评分排序</button>
              </th>
            </tr>
            <tr>
              <th>Hotel Name</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="hotel in sortedHotels" :key="hotel.id">
              <td>{{ hotel.name }}</td>
              <td>{{ hotel.price }}</td>
              <td>{{ hotel.rating }}</td>
            </tr>
          </tbody>
        </table>
           <!-- 其他窗口内容 -->
        </div>
      </transition>
      <div class="hotel-panel-footer"></div>
      </div>   
      <div class="hotel-panel line">
      <div class="hotel-panel-title">
        <span>缓冲区分析</span></div>
        <div class="container">
         
        <div class="buffer-analysis-module">
         <label class="label">
            <input type="radio" value="clickAnalysisEnabled" v-model="checked">屏幕
         </label>
         <label>
            <input type="radio" value="inputAnalysisEnabled" v-model="checked">参数
        </label>
        <div class="input-section">
         <label for="longitude">经度:</label>
          <input type="text" id="longitude" placeholder="输入经度" :disabled="checked === 'clickAnalysisEnabled'">
        </div>
        <div class="input-section">
          <label for="latitude">纬度:</label>
          <input type="text" id="latitude" placeholder="输入纬度" :disabled="checked === 'clickAnalysisEnabled'">
        </div>
        <div class="input-section">
          <label for="radius">缓冲半径:</label>
          <input type="text" id="radius" placeholder="输入缓冲半径" >
        </div>
        <button id="analyze-btn" @click="exebuffer">确认分析</button>
        <button id="cancel-btn" @click="removeall">结束分析</button>
        <div id="mode" style="color: rgb(192, 184, 184); text-align:end; font-family:Arial, Helvetica, sans-serif;font-style: italic; font-size: 5px; margin-bottom: 2px;">{{ bufferMode }}</div>
        </div>
      </div>
      
          <div class="hotel-panel-footer"></div>
      </div>
      <div class="hotel-panel line">
      <div class="hotel-panel-title">
        <span>酒店综合评价</span></div>
        <select v-model="selectedHotel" @change="handleHotelSelection" ref="refHotelSelect">
          <option value="">请选择酒店</option>
          <option v-for="hotel in hotels" :value="hotel">{{ hotel.name }}</option>
        </select>
        <div class="hotel-panel-chart" ref="radarchart">
      </div>
      <div class="hotel-panel-footer"></div>
      </div>
  </div>
  <div id="mytest" :class="{ 'slide-in': isWindowVisible, 'slide-out': !isWindowVisible }">
  <div id="hotel-details" class="details">
    <div class="arrow-button" @click="toggleWindow">
      <span class="arrow-icon" :class="{ up: !isWindowVisible }"></span>
    </div>
    <table class="hoteldetails">
      <thead>
      <tr>
        <th >名字</th>
        <th >价格</th>
        <th >评分</th>
      </tr>
    </thead>
    <tbody  ref="tbodyRef">
      <!-- 数据行将在函数调用时动态添加 -->
      <tr>
      </tr>
    </tbody>
  </table>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref,computed, onUnmounted, onMounted, watch, nextTick  } from 'vue';
import { useViewStore  } from '@/store/mapviewstore';
import { useEcharts } from "@/hooks/useEcharts";
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { useHeatmap } from '@/store/device/heatmap'
import Hotaldata from '@/features/device/hotel';
import hotelradar from './pages/Radarchart';
import * as echarts from 'echarts';
import { useOnlayerStore } from '@/store/environment/onLayerstore';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import {usebuffer} from '@/store/device/bufferstore'
import PopupTemplate from '@arcgis/core/PopupTemplate';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
let hoteldata=new FeatureLayer({
        url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%BD%8F%E5%AE%BF/FeatureServer",
        outFields: ['*'],
      })
const popupTemplate = new PopupTemplate({
      title: '{name}', // 使用酒店名称字段作为弹出窗口标题
      content: [
        {
          type: 'fields',
          fieldInfos: [
            {
              fieldName: 'price', // 酒店价格字段
              label: 'Price', // 字段标签
            },
            {
              fieldName: 'rating', // 酒店评级字段
              label: 'Rating', // 字段标签
            },
            // 可以添加其他字段信息
          ],
        },
      ],
    });
const symbol = new SimpleMarkerSymbol({
    style: "path",
    path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",
    color: "#17e3f5", // 中间浅色
    outline: {
    color: '#115687', // 外部深色
    width: 2
  },
    size: 7
});
const render = new SimpleRenderer({
    symbol:symbol
});
let view=useViewStore().getView();
let heatmapstore=useHeatmap();
let continueExecution = true;
const tbodyRef = ref<HTMLTableSectionElement | null>(null);
const OnlayerStore = useOnlayerStore();
OnlayerStore.createOnlayer();
//酒店信息排序
const selectedLocation = ref('');
const hotels = ref(Hotaldata);
const locations = [...new Set(hotels.value.map((hotel) => hotel.region))];
function sortByPrice() {
  hotels.value.sort((a, b) => a.price - b.price);
}
function sortByRating() {
  hotels.value.sort((a, b) => b.rating - a.rating);
}
const sortedHotels = computed(() => {
  if (selectedLocation.value) {
    return hotels.value.filter((hotel) => hotel.region === selectedLocation.value).sort(/* 根据需求进行排序 */);
  } else {
    return hotels.value.sort(/* 根据需求进行排序 */);
  }
});
//酒店信息排序
//缓冲区
const bufferstore=usebuffer();
const checked=ref('');
const bufferLayer = new GraphicsLayer();
const pointLayer = new GraphicsLayer();
const bufferLayerview = new GraphicsLayer();
const pointLayerview = new GraphicsLayer();
view.map.addMany([bufferLayer, pointLayer,bufferLayerview,pointLayerview]);
let bufferEnabled = true;
const bufferMode = ref('buffering');
const isWindowVisible = ref(true);
const toggleWindow = () => {
  isWindowVisible.value = !isWindowVisible.value;
};

function keyDownListener(event: KeyboardEvent) {
  const keyInput = event.key;
  bufferEnabled = keyInput === 'b' && !bufferEnabled;
  bufferMode.value = bufferEnabled ? 'navigation' : 'buffering';

}
async function exebuffer(){
    bufferLayer.removeAll();
    const longitudeInput =document.getElementById('longitude').value; // 替换为实际获取的经度输入值
    const latitudeInput = document.getElementById('latitude').value; // 替换为实际获取的纬度输入值
    const radiusInput = document.getElementById('radius').value; // 替换为实际获取的缓冲半径输入值
    await bufferstore.createBuffer(longitudeInput, latitudeInput, radiusInput, view,bufferLayer,pointLayer);
    view.goTo({
        center: [[
        longitudeInput,
        latitudeInput
        ]],
        zoom: 10,})
}
function bufferstarts() {
  view.map.remove(pointLayer);
  view.map.remove(bufferLayer);
  view.map.add(pointLayerview);
  view.map.add(bufferLayerview);
  view.on('key-down', keyDownListener);
  view.on(['click', 'pointer-move'], async (event: any) => {
    if (!continueExecution) {
      view.removeHandles('key-down', keyDownListener);
      view.map.remove(pointLayerview);
      view.map.remove(bufferLayerview);
      return; // 中止函数执行
    }
    const radiusInput = document.getElementById('radius').value;
    await bufferstore.createBufferview(event, view, radiusInput,bufferLayerview,pointLayerview,bufferEnabled);
   
    //if(bufferEnabled===false){bufferstore.addtotable(querybuffer,bufferLayerview)}else{bufferLayerview.remove(bufferstore.hotelsWithinBuffer)}
  });
}
function removeall(){
  view.map.remove(pointLayer);
  view.map.remove(bufferLayer);
  view.map.remove(pointLayerview);
  view.map.remove(pointLayerview);
  if (tbodyRef.value) {
    tbodyRef.value.innerHTML = '';
  }
  view.goTo({
        center: [[
          96.945438,
          35.850631
        ]],
        zoom: 5,})
}  
//缓冲区

//酒店雷达图
const radarchart = ref<HTMLElement | null>(null);
let radar: echarts.ECharts | null = null;
const selectedHotel = ref<any>(null); // 选中的酒店信息
function updateRadarData() {
    if (selectedHotel.value) {
    const { price = 0, rating = 0, location =0, hygiene = 0,service=0,synthesis=0 } = selectedHotel.value;
    const data = [
      [price, rating, location, hygiene, service, synthesis]
    ];
    //const filteredData = data.filter((value) => typeof value === 'number');
    hotelradar.series[0].data = data; // 使用补全后的数据项设置雷达图的数据
    radar?.setOption(hotelradar); 
    useEcharts(radar as echarts.ECharts, hotelradar);
  }
}
//酒店雷达图
//定时器
let refHotelSelect = ref<HTMLSelectElement | null>(null);
let currentIndex = 1;
let timerId: number | null = null; 
function startTimer() {
  timerId = setInterval(() => {
  currentIndex = currentIndex + 1; // 更新当前选中酒店的索引
  selectedHotel.value = hotels.value[currentIndex]; // 更新选中的酒店信息
  updateRadarData(); // 更新雷达图
  }, 1000);
}
function clearTimer() {
  if (timerId) {
    clearInterval(timerId); // 清除定时器
    timerId = null;
  }
}
function handleHotelSelection(){
  clearTimer(); // 用户选择时清除定时器
  updateRadarData(); // 更新雷达图
  // 在需要的地方重新启动定时器
  if (!selectedHotel.value) {
    startTimer();
  }
}
//定时器

onMounted(async ()=>{
    view.map.add(hoteldata);
    view.goTo({
        center: [[
          96.945438,
          35.850631
        ]],
        zoom: 5,}),
    hoteldata.popupTemplate = popupTemplate;
    hoteldata.renderer=render;
    view.on('click', (event) => {
      view.hitTest(event).then((response: { results: any[]; }) => {
        const result = response.results[0];
        if (result && result.graphic) {
          // 获取点击的点要素的属性信息
          const attributes = result.graphic.attributes;
          // 在弹出窗口中显示点要素的信息
          view.popup.open({
            title: attributes.name, // 使用酒店名称作为弹出窗口标题
            content: popupTemplate.content, // 使用弹出窗口模板显示内容
            location: event.mapPoint, // 弹出窗口位置为点击的地图点坐标
          });
        }
      });
    });
    if(radarchart.value){
    radar = echarts.init(radarchart.value);
    hotelradar.toolbox = {
      feature: {
      myTool2: {
      show: true,
      title: '热力图',
      icon: 'image://https://img.icons8.com/color/48/000000/fire-element.png',
      onclick:heatmapstore.createHeatmap
      }
  }
};
    useEcharts(radar as echarts.ECharts, hotelradar);
    updateRadarData(); // 初始更新酒店信息和雷达图
    startTimer();
}
watch(selectedHotel, () => {
  updateRadarData();
});
 watch(checked, (newValue) => {
  if (newValue === 'clickAnalysisEnabled') {
    continueExecution = true;
    bufferstarts();
  }
  else if(newValue==="inputAnalysisEnabled"){
    continueExecution = false;
    view.map.add(pointLayer);
    view.map.add(bufferLayer);
  }

});

})
onUnmounted(() => {
 view.map.removeAll();
 clearTimer();
})
</script>

<style lang="scss" scoped>
 @import '@/style/hotel.scss';
 select {
  // 设置下拉框的样式
  margin-left: 5px;
  font-size: 16px;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
}

option {
  // 设置选项的样式
  padding: 8px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
}

</style>
  