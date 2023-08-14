<template>
  <div ref="screenRef" class="screen" >
    <el-progress 
        v-if="isActive"
        type="circle"
        :stroke-width="15"
        :percentage="percentage" 
        style="position: absolute; left: 18%;top: 17%;pointer-events: auto;height: auto;" 
    />
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
          <el-row justify="space-between" >
          <el-col style="height: 33.33%;">
            <el-text>景点环境监测</el-text>
            <el-switch v-model="value1" class="box-card__switch" size="large" style="margin-left: 8%" inline-prompt :active-icon="Check"
              :inactive-icon="Close" :disabled="isDisabled"  @change="checkSwitch(0)"                
              v-loading="loading"
              element-loading-text="Loading..."
              :element-loading-spinner="svg"
              element-loading-svg-view-box="-10, -10, 50, 50"
              element-loading-background="rgba(122, 122, 122, 0.8)"/>
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
    <environment v-if="value1" />
    <classification v-if="value2" />
    <correction v-if="value3" />
  </div>
</template>

<script setup lang="ts">
import { useScreen } from '@/hooks/useScreen';
import { ElText, ElSwitch, ElRow, ElCol, ElCard,ElProgress } from 'element-plus'
import { ref, onMounted, onUnmounted, provide,watch,inject,Ref} from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import environment from './components/environment.vue'
import classification from './components/classification.vue'
import correction from './components/correction.vue';
import { usepointslayerStore } from '@/store/pointsLayerstore'
import { useHeatmapStore } from '@/store/environment/heatmapstore'
import { useTimesliderStore } from '@/store/environment/timesliderstore'
import { usedataStore } from '@/store/environment/datastore'
const loading = ref(true)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

const timeSliderRef = ref<HTMLDivElement | null>(null);
const screenRef  = ref<HTMLElement | null>(null);

const isDisabled = ref(true);
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const showCard = ref(false)
const watchV2 = ref(true)
// 使屏幕自适应
useScreen(screenRef);

/**进度条 */
const percentage = ref(0)
const isActive = ref(false)
const flag = inject('flag') as Ref<boolean>
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
    const TimesliderStore = useTimesliderStore();
    const datastore = usedataStore();
    // 触发卡片进入动画
    triggerCardAnimation();
    // 创建点图层
    store.addpointslayer();
    // 判断点图层是否加载完成,加载完后实现一些功能
    store.ispointslayerLoaded(isDisabled);      
    // 时间轴
    TimesliderStore.createTimeslider( timeSliderRef );
    // 获取环境数据
    datastore.getdata(percentage, isActive,flag);
    if(flag.value === false){
      loading.value = false;
    }
  }, 100);
  // 监听value2的变化
  watch(value2, (newVal) => {
    if(!newVal) value3.value = false;
  });
  // 监听percentage的变化
  watch(percentage, (newVal) => {
    if(newVal === 100) {
      loading.value = false;
    }
  });
});

// 在组件卸载前将点图层移除
onUnmounted(() => {
  const store = usepointslayerStore();
  store.removepointslayer();
});

// 传递给子组件的数据
provide('watchV2' , watchV2);
provide('percentage' , percentage);
provide('isActive' , isActive);
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
