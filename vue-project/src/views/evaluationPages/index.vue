<template>
	<div class="main-box" ref="mainboxRef">
        <div class="container-box">
            <TreeFilter
                title="列表(单选)"
                label="name"
                :data="treedata"
                :defaultValue="treeFilterValues.departmentId"
                @change="changeTreeFilter"
            />
            <div class="chart-box">
                <div class="chart-box-title">
                    <span>统计展区</span>
                    <img src="../images/title_con.png" alt="" />
                </div>
                <chart ref="chartRef" />
            </div>
            <div class="table-box">
                <div class="card mb10 pt0 pb0">
                    <SelectFilter :data="selectFilterData" :defaultValues="selectFilterValues" @change="changeSelectFilter" />
                </div>
                <div class="card-box">
                    <commentCard  ref="commentcard" :initParam="Object.assign(treeFilterValues,selectFilterValues)">
                        <!-- 表格 header 按钮 -->
                        <template #cardHeader>
                            <el-button type="primary" :icon="CirclePlus" @click="showText">特色统计</el-button>
                            <el-button type="primary" :icon="Upload"  @click="batchAdd">批量添加评论</el-button>
                            <el-button type="primary" :icon="Download" @click="downloadFile">导出评论数据</el-button>
                        </template>
                        <template #cardHeaderRight>
                            <el-button :icon="Refresh" circle @click="refresh"> </el-button>
                        </template>
                    </commentCard>
                </div>
            </div>      
        </div>
        <div class="footer-box">
            <span class="footer-text">{{ footertitle }}的用户综合评分为</span>
            <el-rate
            v-model= score
            :max="5"
            show-score
            :disabled="true"
          />
        </div>
	</div>
    <ImportExcel ref="dialogRef" />
</template>

<script setup lang="ts" name="useSelectFilter">
import { ref, reactive, watch,onMounted, onUnmounted,provide } from 'vue'
import { useScreen } from '@/hooks/useScreen';
import { useViewStore } from '@/store/mapViewstore';
import TreeFilter from "./components/TreeFilter/index.vue";
import SelectFilter from "./components/SelectFilter/index.vue";
import commentCard from "./components/commentCard/index.vue";
import chart from "./components/chart/index.vue";
import ImportExcel from "./components/ImportExcel/index.vue";
import { ElMessage,ElButton, ElMessageBox } from 'element-plus';
import { CirclePlus, Download, Upload, Refresh  } from "@element-plus/icons-vue";
import { treedata,selectFilterData,ageData } from '@/features';
import styles from '@/style/evaluation.scss?inline';
import 'echarts-liquidfill';
import  type { ECharts } from "echarts";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import axios from 'axios';
import { useDownload } from '@/hooks/useDownload';
import { useUpdate } from '@/hooks/useUpdata';
const mainboxRef = ref<HTMLElement|null>(null);
useScreen(mainboxRef);
// 默认 chart 参数
interface ChartExpose {
	initChart: (params: any) => ECharts;
}
const chartRef = ref<ChartExpose>();
const initCharts = (): void => {
     chartRef.value?.initChart(ageData.value);
};
// 默认 footer 参数
const footertitle = ref("三江源国家公园");
const score = ref(0);
// 默认 treeFilter 参数
const treeFilterValues = reactive({ departmentId: "5718131" });
const changeTreeFilter = (val: string ) => {
    // 判断val字符串的内容是否为长度1的数字
    if( /^\d{1}$/.test(val) ) {
        ElMessage.error(`请选择正确的景点 o(╥﹏╥)o`);
    } else {
        ElMessage.success(`请注意查看参数变化 🤔`);
        treeFilterValues.departmentId = val;
        treedata.value.find( (item) => footertitle.value =item.children?.find((item) => item.id === val)?.name || "" );
        selectFilterValues.value.userRole = [""];
        textFlag.value = false;
    }

};
// 默认 selectFilter 参数
const selectFilterValues = ref({ userStatus: 0, userRole: [""] });
const changeSelectFilter = (value: typeof selectFilterValues.value) => {
	ElMessage.success(`请注意查看参数变化 🤔`);
	selectFilterValues.value = value;
};
// 默认treedata的值
async function initTreeData() {
    const counts = [0,0,0,0,0];
  // 获得景点图层的所有要素
  const pointslayer = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/attraction2/FeatureServer",
    id: "points",
  });
  const query = pointslayer.createQuery();
  query.where = "1=1";
  await pointslayer.queryFeatures(query).then(({features}) => {
    features.forEach(async (feature) => {
      //获得feature的类型和名字
      const name = feature.attributes['name'];
      const typeName = feature.attributes['typeName'];
      //对应添加至树数据中
      switch(typeName){
        case "游山玩水":
          counts[0]++;
          treedata.value[0].children?.push({id:feature.attributes['poiID'],name:name});
          break;
        case "文化古迹":
          counts[1]++;
          treedata.value[1].children?.push({id:feature.attributes['poiID'],name:name});
          break;
        case "探险奇趣":
          counts[2]++;
          treedata.value[2].children?.push({id:feature.attributes['poiID'],name:name});
          break;
        case "森林草原":
          counts[3]++;
          treedata.value[3].children?.push({id:feature.attributes['poiID'],name:name});
          break;
        case "地标观景":
          counts[4]++;
          treedata.value[4].children?.push({id:feature.attributes['poiID'],name:name});
          break;
      }
    })
  })
}
// 默认showText的值
const textFlag = ref(false);
const showText = () => {
    textFlag.value = !textFlag.value;
};
// 导出用户列表
const getCommentsData = async () => {
  try {
    const response = await axios.post('http://81.70.22.42:9000/attraction/comment', {
        poiID: parseInt(treeFilterValues.departmentId),
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const downloadFile = async () => {
    ElMessageBox.confirm("确认导出用户数据?", "温馨提示", { type: "warning" }).then(() =>
        useDownload(getCommentsData, footertitle.value + "评论列表")
    );
};
// 导入用户列表
const BatchAddUser = async (data: any) => {
    try {
        const response = await axios.post('http://81.70.22.42:9000/attraction/upload',data);
        return response.data;
    }catch (error) {
        console.log(error);
    }
};
// 批量添加用户
const dialogRef = ref();
const batchAdd = () => {
	let params = {
		title: "评论列表",
		tempApi: getCommentsData,
		importApi: BatchAddUser,
	};
	dialogRef.value.acceptParams(params);
};
provide('selectFilterValues', selectFilterValues);
/**
 * @description 刷新评论列表
 */
 function refresh(){
    ElMessage.success(`刷新评论列表成功 🤔`);
    selectFilterValues.value.userRole = [""];
    selectFilterValues.value.userStatus = 0;
}
onMounted(() => {
    // 初始化图表
    initCharts();
    // 初始化树数据
    initTreeData();
    // 背景
    const viewDiv = document.getElementById('viewDiv');
    if (viewDiv) {
        // viewDiv.style.background = 'url("../src/views/images/loginBg.jpg") no-repeat center center';
        viewDiv.style.backgroundImage = 'linear-gradient(to left top, #0f6ba1 5%, #4c4c4c 90%)';
    }
    setTimeout(() => {
        useViewStore().destroyMapView();
    }, 100);
});

onUnmounted(() => {
    useViewStore().CreateMapView();
});
provide('score', score);
provide('chart', chartRef);
provide('textFlag', textFlag);
/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang="scss" scoped>
</style>
