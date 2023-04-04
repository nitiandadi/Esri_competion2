<template>
  <div class="envirment">
    <div class="envirment-top">
        <div class="environment-main-title">
            <span>热门景区排行</span>
            <!-- <img src="./images/environment-title.png" alt="" /> -->
        </div>
        <!-- chart区域 -->
        <!-- <div class="environment-main-chart">
            <HotPlateChart ref="HotPlateRef" />
        </div> -->
    </div>
    <div class="environment-center">
        <div class="environment-main-title">
            <span>年度游客量对比</span>
            <!-- <img src="./images/environment-title.png" alt="" /> -->
        </div>
        <!-- chart区域 -->
        <!-- <div class="environment-main-chart">
            <AnnualUseChart ref="AnnualUseRef" />
        </div> -->
    </div>
    <div class="environment-foot">
        <div class="environment-main-title">
            <span>预约渠道数据统计</span>
            <!-- <img src="./images/environment-title.png" alt="" /> -->
        </div>
        <!-- chart区域 -->
        <!-- <div class="environment-main-chart">
            <PlatformSourceChart ref="PlatformSourceRef" />
        </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.envirment{
    position: relative;
    top:8%;
    left: 73.2%;
    width: 360px;
    height: 570px;
    opacity: 0.5;
    border-radius: 6px; /* 添加边角弧度 */
    background-image: linear-gradient(-90deg, #182940 0%, #115687 100%); /* 添加渐变 */
    pointer-events: auto;
    border: 0px solid var(--el-card-border-color);
    margin-inline: 7px;
    display: flex; /* 将子元素设置为 flex items */
    flex-direction: column; /* 设置子元素水平排列（默认为 row） */
    justify-content: space-between; /* 水平方向上子元素的间距相等 */
    align-items: center; /* 垂直方向上子元素垂直居中对齐 */
    &-top{
        width: 100%; /* 子元素的宽度（通过设置为百分比实现与父元素等宽） */
        height: 200px; /* 子元素的高度 */
        background-color: #f0f0f0; /* 子元素的背景色 */
    }
    &-center{
        width: 100%; /* 子元素的宽度（通过设置为百分比实现与父元素等宽） */
        height: 200px; /* 子元素的高度 */
        background-color: #f0f0f0; /* 子元素的背景色 */
    }
    &-foot{
        width: 100%; /* 子元素的宽度（通过设置为百分比实现与父元素等宽） */
        height: 200px; /* 子元素的高度 */
        background-color: #f0f0f0; /* 子元素的背景色 */
    }
}
</style>
