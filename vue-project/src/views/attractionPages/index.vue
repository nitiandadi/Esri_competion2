<template>
  <div ref="screenRef" class="screen">
    <transition name="right-slide-in">
      <el-card class="box-card"  
      :style="{ left: showCard ? '0%' : '-380px' }" 
      :body-style="{height: '80%'}"
      >
        <template #header>
          <div class="box-card__header">
            <span>景点管理</span>
          </div>
        </template>
          <el-row justify="space-between">
          <el-col style="height: 33.33%;">
            <el-text>景点环境监测</el-text>
            <el-switch v-model="value1" class="box-card__switch" size="large" style="margin-left: 8%" inline-prompt :active-icon="Check"
              :inactive-icon="Close" :disabled="isDisabled"  @change="checkSwitch(0)" />
          </el-col>
          <el-col style="height: 33.33%;">
            <el-text>景点模糊分类</el-text>
            <el-switch v-model="value2" class="box-card__switch" size="large" style="margin-left: 8%" inline-prompt :active-icon="Check"
              :inactive-icon="Close" :disabled="isDisabled"  @change="checkSwitch(1)"  />
          </el-col>
          <el-col style="height: 33.33%;">
            <el-text>修正旅游景点</el-text>
            <el-switch v-model="value3" class="box-card__switch" size="large" style="margin-left: 8%" inline-prompt :active-icon="Check"
              :inactive-icon="Close" :disabled="watchV2"   @change="checkSwitch(2)" />
          </el-col>
        </el-row>
      </el-card> 
    </transition> 
    <div class="timeSlider" ref="timeSliderRef"></div>
    <div class="lengend" ref="lengendRef"></div>
    <environment v-if="value1" />
    <classification v-if="value2" />
    <correction v-if="value3" />
  </div>
</template>

<script setup lang="ts">
import { useScreen } from '@/hooks/useScreen';
import { ElText, ElSwitch, ElRow, ElCol, ElCard, } from 'element-plus'
import { ref, onMounted, onUnmounted, provide,watch} from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import environment from './components/environment.vue'
import classification from './components/classification.vue'
import correction from './components/correction.vue';
import { usepointslayerStore } from '@/store/pointsLayerstore'
import { useHeatmapStore } from '@/store/environment/heatmapstore'
import { useTimesliderStore } from '@/store/environment/timesliderstore'

const timeSliderRef = ref<HTMLDivElement | null>(null);
const screenRef  = ref<HTMLElement | null>(null);
const lengendRef = ref<HTMLDivElement | null>(null);

const isDisabled = ref(true);
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const showCard = ref(false)
const watchV2 = ref(true)
// 使屏幕自适应
useScreen(screenRef);

let switchList = [value1, value2, value3];
function checkSwitch(index: number) {
  if (index === 0) {
    for (let i = 1; i < switchList.length; i++) {   
      switchList[i].value = false;
    }
  }else{
    switchList[0].value = false;
  }
}
// 触发卡片进入动画
const triggerCardAnimation = () => {
  showCard.value = true;
};

// 在组件挂载后触发卡片进入动画,并创建热力图
onMounted(() => {
  setTimeout(() => {
    const store = usepointslayerStore();
    const HeatmapStore = useHeatmapStore();
    const TimesliderStore = useTimesliderStore();

    // 触发卡片进入动画
    triggerCardAnimation();
    // 创建点图层
    store.addpointslayer();
    // 判断点图层是否加载完成,加载完后实现一些功能
    store.ispointslayerLoaded(isDisabled);      
    // 时间轴
    TimesliderStore.createTimeslider( timeSliderRef );
    // 创建热力图
    HeatmapStore.createTimeHeatmap( lengendRef.value );
  }, 100);
  // 监听value2的变化
  watch(value2, (newVal) => {
    if(!newVal) value3.value = false;
  });
});

// 在组件卸载前将点图层移除
onUnmounted(() => {
  const store = usepointslayerStore();
  store.removepointslayer();
});

// 传递给子组件的数据
provide('watchV2' , watchV2);
</script>

<style lang="scss" >
.screen{
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  background: rgba(255, 0, 0, 0.001);
  overflow: hidden;
}
.el{
  &-card__header{
    height: 20%;
    width: 100%;
  }
  &-text{
    font-size: 1.3rem;
    /* 改变标题字体大小 */
    font-weight: bold;
    /* 加粗字体 */
    color: #92c3e4;
  }
  &-switch{
    vertical-align: baseline;
  }
  &-select__popper.el-popper {
    height: auto;
  }
}
.box-card{
  position: fixed;
  /* 或者使用 absolute */
  top: 10%;
  width: 13%;
  height: 25%;
  left: -380px;
  /* 卡片开始的位置在右边屏幕外 */
  /* ...其余样式... */
  border-radius: 6px;
  /* 添加边角弧度 */
  background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
  /* 添加渐变 */
  pointer-events: auto;
  border: 0px solid var(--el-card-border-color);
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    /* 改变标题字体大小 */
    font-weight: bold;
    /* 加粗字体 */
    font-style: italic;
    /* 斜体字 */
  }
}
.timeSlider{
  position: absolute;
  left:  0%;
  bottom: 9%;
  height: 20%;
  width: 50%;
  pointer-events: auto;
}
.lengend{
    position: absolute;
    left:  0%;
    bottom: 40%;
    height: 20%;
    width: 20%;
    pointer-events: auto;
}

/* 过渡动画 */
.right-slide-in-enter-active,
.right-slide-in-leave-active {
  transition: all 0.5s ease-in-out;
}

.right-slide-in-enter {
  opacity: 0;
  transform: translateX(100%);
}

.right-slide-in-leave-to {
  opacity: 0;
  transform: translateX(100%);
}


</style>
