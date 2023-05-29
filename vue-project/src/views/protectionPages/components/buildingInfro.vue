<template>
    <div class="Container" ref="ContainerRef">
        <div class="Container-panel line">
            <div class="Container-panel-title">
                <span>湿度温度监测</span>
            </div>
            <div class="Container-panel-chart" ref="chartLineRef"></div>
            <div class="Container-panel-footer"></div>
        </div>
        <div class="Container-panel bar">
            <div class="Container-panel-title">
                <span>空气污染指数</span>
            </div>
            <div class="Container-panel-chart" ref="chartRadarRef"></div>
            <div class="Container-panel-footer"></div>
        </div>
        <div class="Container-panel pie">
            <div class="Container-panel-title">
                <span>景点水质监测</span>
            </div>
            <div class="Container-panel-chart" ref="chartBarRef"></div>
            <div class="Container-panel-footer"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
let num1 = ref(0);
let num2 = ref(0);

</script>
<style lang="scss" scoped>
@import '@/style/protection.scss';
</style>