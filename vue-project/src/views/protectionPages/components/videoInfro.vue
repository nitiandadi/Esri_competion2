<template>
  <div class="Container" ref="ContainerRef" v-if="show2">
    <div class="Container-panel line">
      <div class="Container-panel-title">
        <span>馆内人数</span>
      </div>
      <div class="Container-panel-chart" ref="chartVisitorRef"></div>
      <div class="Container-panel-footer"></div>
    </div>
    <div class="Container-panel bar">
      <div class="Container-panel-title">
        <span>出口</span>
      </div>
      <div class="Container-panel-video" ref="chartBuildRef">
        <video class="video" src="/exit.mp4" ref="video" autoplay muted loop playsinline></video>
        <canvas ref="canvas" class="canvas" />
      </div>
      <div class="Container-panel-footer"></div>
    </div>
    <div class="Container-panel pie">
      <div class="Container-panel-title">
        <span>入口</span>
      </div>
      <div class="Container-panel-video" ref="chartEnvironmentRef">
        <video class="video" src="/enter.mp4" ref="video1" autoplay muted loop playsinline></video>
        <canvas ref="canvas1" class="canvas" />
      </div>
      <div class="Container-panel-footer"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, onUnmounted, nextTick, inject, Ref, h } from 'vue';
import * as faceapi from 'face-api.js';
import * as echarts from 'echarts';
//@ts-ignore
import realTimeVisitorOptions from './chartOptions/realTimeVisitorOption';
import { useEcharts } from '@/hooks/useEcharts';
import { useViewStore } from '@/store/mapViewstore';
import { ElMessage, ElMessageBox, ElResult } from 'element-plus';
import { usewidget3dStore } from '@/store/widget3d/widget3dstore'
import { useTime } from '@/hooks/useTime';
const canvas = ref<HTMLCanvasElement | null>(null);
const video = ref<HTMLVideoElement | null>(null);
const canvas1 = ref<HTMLCanvasElement | null>(null);
const video1 = ref<HTMLVideoElement | null>(null);
let chartVisitorRef = ref<HTMLElement | null>(null);
const widget3dStore = usewidget3dStore();
let show2 = ref(false);
let stop = false;
let prompt: string | undefined;
let timer: NodeJS.Timeout | undefined;
let visitorChart = {} as echarts.ECharts;
let adujust = ref(false);
function initPrompt() {
  if (widget3dStore.result === 0) {
    prompt = widget3dStore.resultTitle.success.subTitle;
  }
  else if (widget3dStore.result === 1) {
    prompt = widget3dStore.resultTitle.warning.subTitle;
  }
  else {
    prompt = widget3dStore.resultTitle.error.subTitle;
  }
}
async function onPlay(videoEl: HTMLVideoElement, canvasEl: HTMLCanvasElement) {
  if (stop) {  // 检查全局变量，如果为真则停止递归
    return;
  }
  if (!videoEl.currentTime || videoEl.paused || videoEl.ended)
    setTimeout(() => onPlay(videoEl, canvasEl))
  let option = {
    inputSize: 512,
    scoreThreshold: 0.5
  }
  let tFoption = new faceapi.TinyFaceDetectorOptions(option)
  let task = faceapi.detectAllFaces(videoEl, tFoption);
  let results = await task;
  const dims = faceapi.matchDimensions(canvasEl, videoEl, true)
  const resizedResults = faceapi.resizeResults(results, dims)
  resizedResults.forEach(result => {
    const box = result.box
    const drawBox = new faceapi.draw.DrawBox(box, { label: 'Face', boxColor: 'red', lineWidth: 5 })
    drawBox.draw(canvasEl)
  })
  setTimeout(() => onPlay(videoEl, canvasEl), 180);
}
const buildvisual = inject("buildvisual") as Ref<boolean>;
onMounted(async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
  initPrompt();
  ElMessageBox.alert('点击建筑可以使用该功能', '提示', {
    confirmButtonText: '确定',
  })
  buildvisual.value = false;
  let store = useViewStore();
  let view = store.getView() as __esri.SceneView;
  view.on("click", async function (event) {
    show2.value = true;
    await nextTick();
    (realTimeVisitorOptions.toolbox as echarts.ToolboxComponentOption).feature = {
      myTool1: {
        show: true,
        title: '限流评估',
        icon: 'image://	https://cdn-icons-png.flaticon.com/512/998/998382.png',
        onclick: function () {
          adujust.value = true;
          ElMessageBox.prompt((prompt as string), '当前人数173人', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
          }).then(({ value }) => {
            ElMessageBox({
              title: 'Message',
              message:   //@ts-ignore
                h(ElResult, {
                  icon: 'success',
                  title: '成功设置人数',
                  subTitle: '游客限流量比较合适',
                })
            })

          })
        }
      },
    };
    if (chartVisitorRef.value) {
      visitorChart = echarts.init(chartVisitorRef.value);
      useEcharts(visitorChart as echarts.ECharts, realTimeVisitorOptions);
    }
    let myVideo = video.value as HTMLVideoElement;
    let myCanvas = canvas.value as HTMLCanvasElement;
    let myCanvas1 = canvas1.value as HTMLCanvasElement;
    let myVideo1 = video1.value as HTMLVideoElement;
    onPlay(myVideo, myCanvas);
    onPlay(myVideo1, myCanvas1);
  });
  timer = setInterval(() => {
    let now = new Date();
    let newTime: Date = new Date(now.getTime());
    let timeHander = useTime();
    let newdata1 = Math.random() * 20 + 160;
    let newdata2 = Math.random() * 50 + 10;
    let newdata3 = Math.random() * 50 + 10;
    realTimeVisitorOptions.dataset.source[0].shift();
    realTimeVisitorOptions.dataset.source[0].push(timeHander.formatTime(newTime));
    realTimeVisitorOptions.dataset.source[1].shift();
    realTimeVisitorOptions.dataset.source[1].push(newdata1);
    realTimeVisitorOptions.dataset.source[2].shift();
    realTimeVisitorOptions.dataset.source[2].push(newdata2);
    realTimeVisitorOptions.dataset.source[3].shift();
    realTimeVisitorOptions.dataset.source[3].push(newdata3);
    useEcharts(visitorChart as echarts.ECharts, realTimeVisitorOptions);
    if (newdata1 >= 178 && !adujust.value) {
      ElMessageBox({
        title: 'Message',
        message:   //@ts-ignore
          h(ElResult, {
            icon: 'warning',
            title: '当前人数超过限流人数',
            subTitle: '建议上调游客人数限制',
          })
      })
    }
  }, 1000);
})
onUnmounted(() => {
  stop = true;
  clearInterval(timer as NodeJS.Timeout);
})

</script>

<style lang='scss' scoped>
@import "@/style/video.scss";

.video {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
}
</style>
