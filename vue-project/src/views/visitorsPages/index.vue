<template>
  <div ref="screenRef" class="screen">
    <transition name="right-slide-in">
      <el-card class="box-card" :style="{ left: showCard ? '0.5%' : '-380px' }">
        <template #header>
          <span>游客管理</span>
        </template>
        <el-row>
          <el-col>
            <el-text>查看游客来源</el-text>
            <el-switch v-model="switchList[0].value" size="large" class="mt-2" style="margin-left: 24px" inline-prompt
              :active-icon="Check" :inactive-icon="Close" @change="checkSwitch(0)" />
          </el-col>
          <el-col>
            <el-text>管理游客信息</el-text>
            <el-switch v-model="switchList[1].value" size="large" class="mt-2" style="margin-left: 24px" inline-prompt
              :active-icon="Check" :inactive-icon="Close" @change="checkSwitch(1)" />
          </el-col>
          <el-col>
            <el-text>游客类型分类</el-text>
            <el-switch v-model="switchList[2].value" size="large" class="mt-2" style="margin-left: 24px" inline-prompt
              :active-icon="Check" :inactive-icon="Close" @change="checkSwitch(2)" />
          </el-col>
        </el-row>
      </el-card>
    </transition>
    <!-- <visitor-source v-show="switchList[0].value" :visiable="switchList[0].value" /> -->
    <visitorInformation v-show="switchList[1].value" :visiable="switchList[1].value" />
  </div>
</template>
  
<script setup lang="ts">
import { ElText, ElSwitch, ElRow, ElCol, ElCard } from 'element-plus';
import { ref, onMounted } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import visitorSource from './components/visitorSource.vue'
import visitorInformation from './components/visitorInFormation.vue';
import { useScreen } from '@/hooks/useScreen';
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const screenRef = ref<HTMLElement | null>(null);
useScreen(screenRef);

let switchList = [value1, value2, value3];
function checkSwitch(index: number) {
  for (let i = 0; i < switchList.length; i++) {
    if (i !== index) {
      switchList[i].value = false;
    }
  }
}
const showCard = ref(false)
// 触发卡片进入动画
const triggerCardAnimation = () => {
  showCard.value = true;
};
onMounted(() => {
  console.log(screenRef.value?.clientHeight);
  setTimeout(() => {
    triggerCardAnimation();
  }, 100);
});
</script>
  
<style lang="scss" >
.screen {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  background: rgba(255, 0, 0, 0.001);
  overflow: hidden;
  z-index: 2;
}

.el {
  &-card {
    position: fixed;
    /* 或者使用 absolute */
    top: 10%;
    width: 13%;
    height: 25%;
    left: -380px;
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

  &-text {
    font-size: 1.4rem;
    /* 改变标题字体大小 */
    font-weight: bold;
    /* 加粗字体 */
    color: #92c3e4;
  }

  &-switch {
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

.nihao {
  position: relative;
  top: 10%;
  right: 10%;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  /* 添加边角弧度 */
  background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
  /* 添加渐变 */
  pointer-events: auto;
  border: 0px solid var(--el-card-border-color);
  margin-inline: 7px;
}
</style>