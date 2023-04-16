<template>
  <transition name="right-slide-in">
    <el-card class="box-card" :style="{ left: showCard ? '0.5%' : '-380px' }">
      <template #header>
        <div class="card-header">
          <span>游客管理</span>
        </div>
      </template>
      <el-row :gutter="20" style="height: auto;">
        <el-col :span="24" style="padding: 5px;">
          <el-text class="mx-1" tag="i" size="large">查看游客来源</el-text>
          <el-switch v-model="value1" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Check"
            :inactive-icon="Close" @change="onAddMap" />
        </el-col>
        <el-col :span="24" style="padding: 5px;">
          <el-text class="mx-1" tag="i" size="large">查看用户分布</el-text>
          <el-switch v-model="value2" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Check"
            :inactive-icon="Close" />
        </el-col>
        <el-col :span="24" style="padding: 5px;">
          <el-text class="mx-1" tag="i" size="large">游客类型分类</el-text>
          <el-switch v-model="value3" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Check"
            :inactive-icon="Close" />
        </el-col>
      </el-row>
    </el-card>
  </transition>
  <visitor-source v-show="value1" />
</template>
  
<script setup lang="ts">
import { ElText, ElSwitch, ElRow, ElCol, ElCard, ElButton } from 'element-plus';
import { ref, onMounted } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import visitorSource from '../views/visitorsPages/visitorSource.vue'
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const showCard = ref(false)
// 触发卡片进入动画
const triggerCardAnimation = () => {
  showCard.value = true;
};
//定义触发添加地图事件
const emit = defineEmits(['addChinaLayer'])
function onAddMap() {
  if (value1.value) {
  console.log(value1.value);
    emit('addChinaLayer', 'china')
  }
}
// emit('addMap', 'china')
// 在组件挂载后触发卡片进入动画
onMounted(() => {

  setTimeout(() => {
    triggerCardAnimation();
  }, 100);
});
</script>
  
<style lang="scss" >
.el-card {
  position: fixed;
  /* 或者使用 absolute */
  top: 10%;
  width: 190px;
  height: 200px;
  left: -380px;
  /* 卡片开始的位置在右边屏幕外 */
  /* ...其余样式... */
  border-radius: 6px;
  /* 添加边角弧度 */
  background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
  /* 添加渐变 */
  pointer-events: auto;
  border: 0px solid var(--el-card-border-color);
  margin-inline: 7px;

  &__header {

    height: 50px;
    color: white;
    font-size: 16px;
    /* 改变标题字体大小 */
    font-weight: bold;
    /* 加粗字体 */
    font-style: italic;
    /* 斜体字 */
  }

  &__body {
    height: 150px;
    margin-inline: 7px;
    padding: 10px;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mx-1 {
  font-size: 16px;
  /* 改变标题字体大小 */
  font-weight: bold;
  /* 加粗字体 */
  color: #92c3e4;
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
  