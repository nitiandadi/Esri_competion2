<template>
    <div class="container1">
        <div class="top">
            <div class="left">
                <div class="name">
                    <label>围栏名称</label>
                    <el-input v-model="tableData.name"></el-input>
                </div>
                <div class="type">
                    <label>围栏类型</label>
                    <el-select v-model="tableData.type" class="type" @change="changeWay">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <div class="time">
                    <label class="time">结束时间</label>
                    <el-time-picker v-model="setTime" class="time"></el-time-picker>
                </div>
            </div>
            <div class="right">
                <el-button type="primary" @click="clear">清理围栏</el-button>
                <el-button type="primary" @click="addItem">添加围栏</el-button>
                <el-button type="primary" @click="enableRealtime">{{ buttonText }}</el-button>
            </div>
        </div>
        <el-input type="textarea" v-model="inputText" v-show="showinput"></el-input>
    </div>
</template>
<script setup lang="ts">
import { ElInput, ElSelect, ElTimePicker, ElButton, ElOption, ElMessageBox } from 'element-plus';
import { ref, onMounted, reactive, toRaw, inject, computed } from 'vue';
import visitostyle3 from '@/style/visitorhead2.scss?inline'
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel.js";
import { useViewStore } from '@/store/mapViewstore';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { tableData2 } from '@/type/table';
import { useTime } from '@/hooks/useTime';
import VisitorHandler from '@/store/visitor/visitor2Store';
let store = useViewStore();
let setTime = ref<Date>(new Date());
let a = inject('visitorHandler') as any;
let inputText = ref('');
let visitorHandler = a.handler as VisitorHandler;
let isRealtime = ref(false);
let tableDatas = inject('tableDatas') as any;
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = visitostyle3;
document.head.appendChild(style);
let showinput = ref(false);
let tableData = reactive<tableData2>({
    name: '',
    type: '',
    time: '',
    detail: 'detail'
});
let graphicsLayer = new GraphicsLayer();
let sketchVM: __esri.SketchViewModel;
const emit = defineEmits(['sendData']);
function addItem() {
    let timeHander = useTime();
    tableData.time = timeHander.getTimeGap(setTime.value);
    let data = toRaw(tableData);
    emit('sendData', {
        ...data
    });
}
const changeWay = (value: 'circle' | 'polygon' | 'rectangle') => {
    sketchVM.create(value);
    ElMessageBox(
        {
            title: '提示',
            message: '请在地图上绘制围栏',
        }
    )
}
const buttonText = computed(() => {
    if (isRealtime.value) {
        return '关闭实时'
    } else {
        return '开启实时'
    }
})
const enableRealtime = () => {
    showinput.value = true;
    if (isRealtime.value) {
        visitorHandler.stopRealtime();
        isRealtime.value = false;
    } else {
        isRealtime.value = true;
        visitorHandler = a.handler as VisitorHandler;
        let boundary = graphicsLayer.graphics.map(item => item.geometry).toArray() as __esri.Polygon[];
        if (visitorHandler) {
            visitorHandler.enableRealtime(boundary, inputText);
        }
    }
}
const clear = () => {
    graphicsLayer.removeAll();
    visitorHandler.recover();
    tableDatas.value = [];
    inputText.value = '';
    showinput.value = false;
}
let options = ref([
    {
        value: 'circle',
        label: '圆'
    },
    {
        value: 'polygon',
        label: '多边形'
    },
    {
        value: 'rectangle',
        label: '矩形'
    }
])
onMounted(() => {
    let view = store.getView() as __esri.MapView;
    view.map.add(graphicsLayer);
    sketchVM = new SketchViewModel({
        layer: graphicsLayer,
        view: view,
        polygonSymbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            outline: {
                color: "#9d9d9b",
                width: 2
            }
        },
        updateOnGraphicClick: false,
        defaultUpdateOptions: {
            toggleToolOnClick: false,
            enableRotation: false,
            multipleSelectionEnabled: true,
        },
    });
    sketchVM.on('create', (event) => {
        graphicsLayer.add(event.graphic);
    });
})
</script>
<style scoped lang="scss">
.container1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: aliceblue;

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 180px;
        width: 100%;
        border-bottom: 2px solid black;

        .left {
            width: 78.5%;
            border-right: 2px solid black;

            .name {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: 60px;
                width: 100%;

                .el-input {
                    width: 200px;
                    height: 40px;
                    margin: 10px;
                }
            }

            .type {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: 60px;

                .type {
                    width: 200px;
                    height: 40px;
                    margin: 10px;
                }
            }

            .time {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: 60px;

                .time {
                    margin-left: 0px;
                    margin-right: 17px;
                }
            }

            label {
                margin: 10px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .el-button {
                margin: 10px 13px;
                width: 100px;
            }
        }
    }


}
</style>