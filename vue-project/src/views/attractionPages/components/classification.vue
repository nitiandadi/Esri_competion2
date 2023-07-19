<template>
    <el-progress 
        v-if="isActive"
        type="dashboard"
        :stroke-width="20" 
        :percentage="percentage" 
        :color="colors" 
        style="position: absolute; left: 30%;top: 20%;pointer-events: auto;height: auto;" 
    />
    <el-card class="classification-card" ref="classificationRef">
        <template #header>
          <div class="box-card__header">
            <span>模糊分类参数设置</span>
            <el-button 
                class="button" 
                text style="color:#28c3e2;font-size: 18px;font-weight: bold;font-style: italic;"
                @click="handleAnalysis"
            >执行分析
            </el-button>
          </div>
        </template>
        <div class="classification-params">
            <el-table 
                :data="tableData" 
                :border="true" 
                style="width: 100%;
                background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);"
            >
                <el-table-column prop="name" label="参数" width="120">
                    <template #default="{ row }">
                        <div v-if="row.isSelect">
                            <el-select 
                                v-model="row.selectValue" 
                                placeholder="请选择"
                                @change="handleSelectChange(row)"
                            >
                                <el-option label="ph值" value="1"></el-option>
                                <el-option label="溶解氧" value="2"></el-option>
                                <el-option label="高锰酸盐指数" value="3"></el-option>
                                <el-option label="总氮" value="4"></el-option>
                            </el-select>
                        </div>
                        <span v-else>{{ row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="sliderSettings" label="设置范围" width="330" > 
                    <template #default="{ row }">
                        <el-slider  
                            v-model="row.sliderValue" 
                            range
                            :min="row.sliderSettings.min"
                            :max="row.sliderSettings.max" 
                            tooltip-class="classification-slider-tooltip"
                            :format-tooltip="(value: number) => formatTooltip(value, row.name)"
                            @change="handleSliderChange(row, $event)"
                        />
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="提示" width="100">
                    <template #default="{row}">
                        <el-tooltip 
                            class="item" 
                            effect="dark" 
                            :content="getTip(row)" 
                            popper-class="classification-tooltip-popper"
                        >
                            <el-button link type="primary" size="small">Detail</el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分割20像素 -->
        <div style="height: 20px;"></div>
         <!-- 创建一个图例div -->
         <div class="classification-legend" ref="IlengendRef" ></div>
    </el-card>               
</template>

<script setup lang='ts'>
import {  ElCard,ElSlider,ElTable,ElTableColumn,ElButton,ElSelect,ElOption,ElTooltip,ElProgress} from 'element-plus'
import styles from "@/style/classification.scss?inline"
import type { Arrayable } from 'element-plus/es/utils';
import { ref,onMounted,onUnmounted,inject, Ref } from 'vue';
import { useAutoUpdataStore } from '@/store/classification/autoLayerstore';
const { Uplayerdata,classifyAnalysis,cancelrender }  = useAutoUpdataStore ();

/**拿到watchV2 */
const watchV2 = inject('watchV2') as Ref<boolean>;
const count = inject('count') as Ref<number>;
/**图例 */
const IlengendRef = ref<HTMLDivElement | null>(null);

/**进度条 */
const percentage = ref(0)
const isActive = ref(false)
const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#115687 ', percentage: 100 },
]

/**表格数据 */
interface TableData {
    name: string;
    sliderValue: Arrayable<number>;
    sliderSettings: {
        min: number;
        max: number;
    };
    isSelect: boolean;
    selectValue: string;
}
const tableData:TableData[] = [
  {name: '气温',sliderValue: [18, 23], sliderSettings: { min: 18, max: 25 }, isSelect: false, selectValue: '' },
  {name: '湿度',sliderValue: [45, 55], sliderSettings: { min: 40, max: 60 }, isSelect: false, selectValue: '' },
  {name: 'AQI',sliderValue: [20, 40], sliderSettings: { min: 0, max: 50 }, isSelect: false, selectValue: '' },
  {name: 'ph值',sliderValue: [7, 9], sliderSettings: { min: 6, max: 9 }, isSelect: true, selectValue: '1' },
]

/**给slider加上单位 */
const formatTooltip = (value: number, name: string) => {
  // 根据传入的参数名称来返回相应的单位
  switch (name) {
    case '气温':
        return value.toFixed(2) + ' °C';
    case '湿度':
        return value.toFixed(2) + '%';
    case 'AQI':
        return value.toFixed(2);
    case 'ph值':
        return value.toFixed(2);
    case '溶解氧':
        return value.toFixed(2) + 'mg/L';
    case '高锰酸盐指数':
        return value.toFixed(2) + 'mg/L';
    case '总氮':
        return value.toFixed(2) + 'mg/L';
    default:
        return '';
  }
};

/**根据下拉框的值更改slider*/
// 获取当前选择项的取值范围
function getSelectedRange(value: string) {
  switch (value) {
    case '1':
      return { min: 6, max: 9,sliderValue: [7, 9],name: 'ph值' };
    case '2':
      return { min: 5, max: 9,sliderValue: [6, 8],name: '溶解氧' };
    case '3':
      return { min: 0, max: 5,sliderValue: [2, 5],name: '高锰酸盐指数' };
    default:
      return { min: 0, max: 1,sliderValue: [0, 1],name: '总氮' };
  }
}
// 下拉框选择事件
let selectName = 'ph值';
const handleSelectChange = (row: TableData) => {
    console.log(row);
  if (row.isSelect) {
    const { min, max,sliderValue,name } = getSelectedRange(row.selectValue);
    row.name = name;
    row.sliderSettings.min = min;
    row.sliderSettings.max = max;
    row.sliderValue = sliderValue;
    selectName = row.name;
  }
  watchV2.value = false;
};

/**获取提示信息*/
function getTip(row: TableData) {
    switch (row.name) {
    case '气温':
        //@ts-ignore
        return  `当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}°C、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}°C`
    case '湿度':
        //@ts-ignore
        return  `当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}%、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}%`
    case 'AQI':
        //@ts-ignore
        return  `当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}`
    case '水质':
        //@ts-ignore
        return  `当前${row.name}的默认值为ph值，当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}`
    case 'ph值':
        //@ts-ignore
        return  `当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}`
    case '溶解氧':
        //@ts-ignore
        return  `当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}mg/L、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}mg/L`
    case '高锰酸盐指数':
        //@ts-ignore
        return `当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}mg/L、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}mg/L`
    case '总氮':
        //@ts-ignore
        return `当前${row.name}的取值为${row.sliderValue[0]}~${row.sliderValue[1]}mg/L、
        取值范围为${row.sliderSettings.min}~${ row.sliderSettings.max}mg/L` 
    default:
        return '';
  }
}

/**获得slider的值*/
const sliderValue:{name: string;Value: Arrayable<number>;}={
  name: '',
  Value: [0, 0]
}
function handleSliderChange(item: TableData, value: Arrayable<number>) {
    sliderValue.name = item.name;
    sliderValue.Value = value ;
    console.log(sliderValue);
    watchV2.value = false;
}

onMounted(() => {

    Uplayerdata( percentage,isActive,IlengendRef.value,count);
});

onUnmounted(() => {
    /**清除渲染器 */
    cancelrender();
    watchV2.value = true;
});
/**执行分析 */
function handleAnalysis() {
    classifyAnalysis(sliderValue,selectName);
    watchV2.value = false;
}
/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang="scss" scoped>
</style>
