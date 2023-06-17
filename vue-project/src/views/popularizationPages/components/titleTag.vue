<template>
  <div class="myCanvasContainer">
      <div id="myCanvas" ref="myCanvasRef" v-if="shouldRender">
      </div>
    </div>
</template>

<script setup lang='ts'>
import {ref, onMounted,watch } from 'vue';
import TagCloud from 'TagCloud';
const myCanvasRef = ref<HTMLElement | null>(null);
// 接收父组件参数并设置默认值
interface CommentcardProps  {
    initText: [], // 初始化参数 ==> 必传
}
// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<CommentcardProps>(), {
});

const shouldRender = ref(true,);
onMounted(() => {
  setTimeout(() => {
    try {
      gettagsList();
    } catch(e) {
      // document.getElementById('myCanvasContainer').style.display = 'none';
      console.log(e);
    }
  }, 100);
});
function gettagsList(){
  shouldRender.value = false;
  setTimeout(() => {
    shouldRender.value = true;
  }, 100);
  setTimeout(() => {
    const option = {
          radius: 150,
    };
    TagCloud(myCanvasRef.value as HTMLElement, props.initText, option);
    const tagItems = document.querySelectorAll('.tagcloud--item');
    const colors = ['#FF5733', '#00CED1', '#FFC300', '#8B008B', '#00FF00', '#FF1493', '#FFA07A', '#1E90FF', '#FFD700', '#7FFF00', '#DC143C', '#FF69B4'];
    const fontSizes = [8,10, 12, 14, 16, 18, 20,22];

    for (let i = 0; i < tagItems.length; i++) {
      const tagItem = tagItems[i];
      const fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)]; // 从预定义的字体大小中随机选择
      const color = colors[Math.floor(Math.random() * colors.length)]; // 从预定义的颜色中随机选择
      const isVertical = Math.random() < 0.5; // 50% 的概率设置为纵向排列
      const isbacground = Math.random() < 0.2; // 20% 的概率设置为纵向排列
      (tagItem as HTMLElement).style.fontSize = fontSize + 'px'; // 设置字体大小
      (tagItem as HTMLElement).style.color = color; // 设置颜色
      // (tagItem as HTMLElement).style.display = 'inline-block'; // 设置为行内块元素以方便旋转
      if (isVertical) {
        (tagItem as HTMLElement).style.writingMode = 'vertical-rl'; // 设置为纵向排列
      } else {
        (tagItem as HTMLElement).style.writingMode = 'horizontal-tb'; // 设置为横向排列
      }
      if (isbacground) {
        (tagItem as HTMLElement).style.backgroundColor = color; // 设置颜色
        (tagItem as HTMLElement).style.color = '#fff'; // 设置颜色
      }
    }
  }, 200);
}
// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initText, gettagsList, { deep: true });
</script>

<style lang='scss' scoped>
.myCanvasContainer {
  width: 100%;
  height: 100%;
  position: relative;
  // background-color: #000;
}
#myCanvas {
  width: 100%;
  height: 100%;
}
</style>
