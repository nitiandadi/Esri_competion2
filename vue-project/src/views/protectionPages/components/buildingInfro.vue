<template>
    <div class="Container" ref="ContainerRef">
        <div class="Container-panel line">
            <div class="Container-panel-title">
                <span>设施评估</span>
            </div>
            <div class="Container-panel-chart" ref="chartBuildRef"></div>
            <div class="Container-panel-footer"></div>
        </div>
        <div class="Container-panel bar">
            <div class="Container-panel-title">
                <span>客流量评估</span>
            </div>
            <div class="Container-panel-chart" ref="chartVisitorRef"></div>
            <div class="Container-panel-footer"></div>
        </div>
        <div class="Container-panel pie">
            <div class="Container-panel-title">
                <span>环境评估</span>
            </div>
            <div class="Container-panel-chart" ref="chartEnvironmentRef"></div>
            <div class="Container-panel-footer"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { h, ref, onMounted, render, onUnmounted } from "vue";
import { ElMessageBox, ElSwitch, ElResult, ElIcon } from 'element-plus'
import { useEcharts } from "@/hooks/useEcharts";
import 'echarts-liquidfill';
import * as echarts from 'echarts';
import { usewidget3dStore } from '@/store/widget3d/widget3dstore'
import BuildOptions from "./chartOptions/Buildoptions";//引入设施配置项
import visitorOptions from "./chartOptions/Visitoroptions";//引入客流量配置项
import environmentOptions from "./chartOptions/Environmentoptions";//引入环境配置项

const widget3dStore = usewidget3dStore();
// 定义引用需要渲染的DOM元素的ref对象
const chartBuildRef = ref<HTMLElement | null>(null);
const chartVisitorRef = ref<HTMLElement | null>(null);
const chartEnvironmentRef = ref<HTMLElement | null>(null);

onMounted(() => {
    // 创建建筑评估图表
    let ChartBuild: echarts.ECharts | null = null;
    if (chartBuildRef.value) {
        ChartBuild = echarts.init(chartBuildRef.value);
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartBuild as echarts.ECharts, BuildOptions);
    }
    // 创建客流量评估图表
    let ChartVisitor: echarts.ECharts | null = null;
    if (chartVisitorRef.value) {
        ChartVisitor = echarts.init(chartVisitorRef.value);
        (visitorOptions.toolbox as echarts.ToolboxComponentOption).feature = {
            myTool1: {
                show: true,
                title: '限流评估',
                icon: 'image://	https://cdn-icons-png.flaticon.com/512/998/998382.png',
                onclick: function () {
                    widget3dStore.showResult = false;
                    ElMessageBox({
                        title: '限流评估参数',
                        // Should pass a function if VNode contains dynamic props
                        message: () =>
                            h('div', { style: { display: 'flex', flexDirection: 'column' } }, [
                                h('div', { style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', } }, [
                                    h('div', { style: {} }, [
                                        h('label', { for: 'switch1', style: { color: '#fff' } }, '设施：'),
                                        h(ElSwitch, {
                                            id: 'switch1',
                                            modelValue: widget3dStore.checked1,
                                            'onUpdate:modelValue': (val) => (widget3dStore.checked1 = val),
                                        }),
                                    ]),
                                    h('div', { style: {} }, [
                                        h('label', { for: 'switch2', style: { color: '#fff' } }, '客流量：'),
                                        h(ElSwitch, {
                                            id: 'switch2',
                                            disabled: true,
                                            modelValue: widget3dStore.checked2,
                                            'onUpdate:modelValue': (val) => (widget3dStore.checked2 = val),
                                        }),
                                    ]),
                                    h('div', {}, [
                                        h('label', { for: 'switch3', style: { color: '#fff' } }, '环境：'),
                                        h(ElSwitch, {
                                            id: 'switch3',
                                            modelValue: widget3dStore.checked3,
                                            'onUpdate:modelValue': (val) => (widget3dStore.checked3 = val),
                                        }),
                                    ]),
                                ]),
                                //@ts-ignore
                                widget3dStore.showResult ? h(ElResult, {
                                    icon: widget3dStore.resultArr[widget3dStore.result],
                                    //@ts-ignore
                                    title: widget3dStore.resultTitle[widget3dStore.resultArr[widget3dStore.result]].title,
                                    //@ts-ignore
                                    subTitle: widget3dStore.resultTitle[widget3dStore.resultArr[widget3dStore.result]].subTitle,
                                    style: { color: '#fff' },
                                }) : null,
                            ]),
                        confirmButtonText: '执行分析',
                        closeOnClickModal: false,
                        beforeClose: (action, instance, done) => {
                            if (action === 'confirm') {
                                instance.confirmButtonLoading = true;
                                instance.confirmButtonText = '执行中...';
                                widget3dStore.createResult();
                                console.log(widget3dStore.result);
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                    widget3dStore.showResult = true;
                                    widget3dStore.changeDisabled();
                                    instance.confirmButtonText = '分析成功';
                                }, 300);
                                setTimeout(() => {
                                    done();
                                }, 3000);
                            } else {
                                done();
                            }
                        },
                    })
                }
            },
        },
            // 使用useEcharts钩子，实现响应式
            useEcharts(ChartVisitor as echarts.ECharts, visitorOptions);
    }
    // 创建环境评估图表
    let ChartEnvironment: echarts.ECharts | null = null;
    if (chartEnvironmentRef.value) {
        ChartEnvironment = echarts.init(chartEnvironmentRef.value);
        // 使用useEcharts钩子，实现响应式
        useEcharts(ChartEnvironment as echarts.ECharts, environmentOptions);
    }
    // onUnmounted(() => {
    //     stop = true;
    // })
})

</script>
<style lang="scss" scoped>
@import '@/style/buildingInfro.scss';
</style>