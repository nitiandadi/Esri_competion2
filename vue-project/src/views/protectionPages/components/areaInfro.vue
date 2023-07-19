<template>
    <el-card class="area-card"  :body-style="{height: '80%'}">
        <template #header>
          <div class="area-card__header">
            <span>面积测量</span>
            <el-button @click="createarea" id="areaButton" class="area-card__header__button">            
                <el-image src="	https://cdn-icons-png.flaticon.com/512/3696/3696467.png" fit="cover" style="width: 30 px; height: 30px;"></el-image>
            </el-button>
          </div>
        </template>
      <div class="area-card__content" ref="areaRef">
        <el-table 
            :data="tableData" 
            :border="true" 
            style="width: 100%;
            background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);"
        >
            <el-table-column prop="name" label="参数" width="120">            
            </el-table-column>
            <el-table-column prop="area" label="面积" width="120">
            </el-table-column>
            <el-table-column prop="perimeter" label="周长" width="120">                  
            </el-table-column>
            <el-table-column prop="areaindex" label="面积占比" width="120" > 
            </el-table-column>
            <el-table-column fixed="right" label="选择项" width="100">
                <template #default="{row}">
                    <el-button link type="primary" @click="handleAddChange(row)" :disabled="switchDisabled">记录</el-button>
                    <el-button link type="primary" @click="handleRemoveChange(row)" :disabled="switchDisabled">消除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="area-card__content__tag" style="display: flex;align-items: center; padding-top: 10px; ">
          <!-- @ts-ignore -->
          <el-tag class="ml-2"  :type = result >开发评估</el-tag>
          <el-rate
            v-model="rateValue"
            :max="3"
            :texts="['差', '良','优' ]"
            show-text
            style="margin-left: 8px;"
            :disabled="true"
          />
          <el-button type="primary" size="small" @click="handleAnalysis" style="position: absolute;right: 5%;">占比评估分析</el-button>
        </div>
      </div>
    </el-card>
</template>

<script setup lang='ts'>
import { useViewStore } from '@/store/mapviewstore';
import AreaMeasurement3D from "@arcgis/core/widgets/AreaMeasurement3D.js";
//@ts-ignore
import * as promiseUtils from "@arcgis/core/core/promiseUtils.js";
import styles from "@/style/areaInfro.scss?inline"
import { ref, reactive,onUnmounted} from 'vue';
import { ElButton, ElCard,ElImage,ElTable,ElTableColumn,ElSwitch,ElRate,ElTag} from 'element-plus';
import { usewidget3dStore } from '@/store/widget3d/widget3dstore';

const areaRef = ref<HTMLElement | null>(null);
/**创建面积测量组件与方法 */
let measurement: AreaMeasurement3D | null = null;
let type = false;
const switchDisabled = ref(true);
const createarea = () => {
  let store = useViewStore();
  let view = store.getView() as __esri.SceneView;
  // 创建 3D 面积测量工具
  type = !type;
  setActiveWidget(type,view);
}
function setActiveWidget(type: boolean,view: __esri.SceneView) {
  switch (type) {
    case true:
      measurement = new AreaMeasurement3D({
        view: view,
      });
      //@ts-ignore
      measurement.viewModel.start().catch((error: __esri.Error) => {
        if (promiseUtils.isAbortError(error)) {
          return; 
        }
        throw error; 
      });
      switchDisabled.value = false;
      break;
    case false:
      if (measurement ) {
        measurement .destroy();
        measurement = null;
        switchDisabled.value = true;
      }
      break;
  }
}
/**获取评分 */
const widget3dstore = usewidget3dStore();
const rateValue = ref( (widget3dstore.result>1?1:(widget3dstore.result===1?widget3dstore.result+1:3)));
const result = ref(widget3dstore.resultArr[widget3dstore.result]) as any; 
/**表格数据 */
interface TableData {
  name: string,
  switchValue?: boolean,
  area: string;
  perimeter: string;
  areaindex: string;
}
const tableData:TableData[] = reactive([
  {name: '开发区',switchValue: false, area: '0m²', perimeter: '0m', areaindex: '0.0%'},
  {name: '未开发区',switchValue: false, area: '0m²' , perimeter: '0m', areaindex: '0.0%'},
])
/**开关切换 */
const areaSuccess = ref(0);
const perimeterSuccess = ref(0);
const areaError = ref(0);
const perimeterError = ref(0);
function removeCommasAndDecimal(str: string): number {
  // 去掉逗号
  let numStr = str.replace(/,/g, '');
  // 如果字符串的最后一个字符是一个单位符号，将其去掉
  if (/^[0-9]+(\.[0-9]+)?\s*[a-zA-Z²]+$/.test(numStr)) {
    numStr = numStr.replace(/[a-zA-Z²]+$/, '');
  }
  // 将数字转换为整数并返回
  return parseFloat(numStr);
}
const handleAddChange = (row: TableData) => {
  if(measurement?.viewModel.measurement.area.text){
    if(row.name === '开发区'){
      areaSuccess.value += removeCommasAndDecimal(measurement?.viewModel.measurement.area.text);
      row.area = areaSuccess.value.toFixed(2) + 'm²';
      perimeterSuccess.value += removeCommasAndDecimal(measurement?.viewModel.measurement.perimeterLength.text);
      row.perimeter = perimeterSuccess.value.toFixed(2) + 'm';
    }else{
      areaError.value += removeCommasAndDecimal(measurement?.viewModel.measurement.area.text);
      row.area = areaError.value.toFixed(2) + 'm²';
      perimeterError.value += removeCommasAndDecimal(measurement?.viewModel.measurement.perimeterLength.text);
      row.perimeter = perimeterError.value.toFixed(2) + 'm';
    }
  }
}
const handleRemoveChange = (row: TableData) => {
  rateValue.value = (widget3dstore.result>1?1:(widget3dstore.result===1?widget3dstore.result+1:3));
  result.value = widget3dstore.resultArr[widget3dstore.result]; 
  if(row.name = '开发区'){
    areaSuccess.value = 0;
    row.area = '0m²';
    perimeterSuccess.value = 0;
    row.perimeter = '0m';
    row.areaindex = '0.0%';
  }else{
    areaError.value = 0;
    row.area = '0m²';
    perimeterError.value = 0;
    row.perimeter = '0m';
    row.areaindex = '0.0%';
  }
}
/**评估分析 */
const handleAnalysis = ( ) => {
  console.log(areaSuccess.value, areaError.value);
  if(areaSuccess.value === 0 || areaError.value === 0){
    alert('请先记录面积');
  }else{
    let sum = areaSuccess.value + areaError.value;
    let Indexresult = areaSuccess.value / sum;
    tableData[0].areaindex = (Indexresult*100).toFixed(2) + '%';
    tableData[1].areaindex = ((1 - Indexresult)*100).toFixed(2) + '%';;
    if(Indexresult <= 0.5){
      if(rateValue.value === 3){
        return;
      }
      rateValue.value++;
      result.value = widget3dstore.resultArr[rateValue.value===3?0:(rateValue.value === 2?1:2)];
    }else{
      return;
    }
  }
}

onUnmounted(() => {
  if (measurement) {
    measurement.destroy();
    measurement = null;
  }
});
/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang='scss' scoped>
</style>
