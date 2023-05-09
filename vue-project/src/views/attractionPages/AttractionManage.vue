<template>
  <div ref="screenRef" class="screen">
    <transition name="right-slide-in">
      <el-card class="box-card"  :style="{ left: showCard ? '0%' : '-380px' }">
      <template #header>
          <span>景点管理</span>
      </template>
      <el-row>
        <el-col>
          <el-text>景点环境监测</el-text>
          <el-switch v-model="value1" class="mt-2" size="large" style="margin-left: 8%" inline-prompt :active-icon="Check"
            :inactive-icon="Close" :disabled="isDisabled" />
        </el-col>
        <el-col>
          <el-text>景点对比分析</el-text>
          <el-switch v-model="value2" class="mt-2" size="large" style="margin-left: 8%" inline-prompt :active-icon="Check"
            :inactive-icon="Close" :disabled="isDisabled" />
        </el-col>
        <el-col>
          <el-text>修正旅游景点</el-text>
          <el-switch v-model="value3" class="mt-2" size="large" style="margin-left: 8%" inline-prompt :active-icon="Check"
            :inactive-icon="Close" :disabled="isDisabled" />
        </el-col>
      </el-row>
      </el-card>  
    </transition>
    <environment v-if="value1" />
  </div>
</template>

<script setup lang="ts">
import { useScreen } from '@/hooks/useScreen';
import { ElText, ElSwitch, ElRow, ElCol, ElCard, } from 'element-plus';
import { ref, onMounted, onUnmounted,  } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import environment from './components/environment.vue'
import { usepointslayerStore } from '@/store/pointsLayerstore';

const screenRef  = ref<HTMLElement | null>(null);
useScreen(screenRef);

const isDisabled = ref(true);
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const showCard = ref(false)

// 触发卡片进入动画
const triggerCardAnimation = () => {
  showCard.value = true;
};


// 在组件挂载后触发卡片进入动画,并创建热力图
onMounted(() => {

  setTimeout(() => {
    // 触发卡片进入动画
    triggerCardAnimation();
    const store = usepointslayerStore();
    // 创建点图层
    store.addpointslayer();
    // 判断点图层是否加载完成,加载完后实现一些功能
    store.ispointslayerLoaded(isDisabled);

  }, 100);

});

// 在组件卸载前将点图层移除
onUnmounted(() => {
  const store = usepointslayerStore();
  store.removepointslayer();

});
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
  &-card {
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
      height: 20%;
      color: white;
      font-size: 1.8rem;
      /* 改变标题字体大小 */
      font-weight: bold;
      /* 加粗字体 */
      font-style: italic;
      /* 斜体字 */
    }

    &__body {
      height: 80%;
    }
  }
  &-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &-col {
    height: 33.33%;
  }
  &-text{
    font-size: 1.4rem;
    /* 改变标题字体大小 */
    font-weight: bold;
    /* 加粗字体 */
    color: #92c3e4;
  }
  &-switch{
    vertical-align: baseline;
  }

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
