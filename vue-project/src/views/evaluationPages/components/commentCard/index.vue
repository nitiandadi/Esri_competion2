<template>
  <div class="comment-card">
    <!-- 表格头部 操作按钮 -->
		<div class="comment-card-header">
			<div class="comment-card-header-button-lf">
				<slot name="cardHeader"></slot>
			</div>
			<div class="comment-card-header-button-ri" >
        <slot name="cardHeaderRight"></slot>
			</div>
		</div>
    <!-- 表格内容 -->
    <div class="comment-card-clearfix">
      <dl class="clearfix"
        v-for="(comment, index) in displayedComments" 
        :key="comment.id" 
      >
        <dt class="clearfix">
          <div class="fl user">
            <p>{{comment.id}}</p><p class="time">{{comment.datetime}}</p>
          </div>
          <div class="fr comment">
            <el-rate
            v-model= comment.score
            :max="5"
            :show-text = false
            :disabled="true"
          />
          </div>
        </dt>
        <dd class="clearfix">{{comment.comment}}</dd>
      </dl>
    </div>
    <!-- 分页组件 -->
		<div class="comment-card-pagination">
			<Pagination
				v-if="pagination"
				:pageable="pageable"
				:handleSizeChange="handleSizeChange"
				:handleCurrentChange="handleCurrentChange"
        :page-sizes="[5, 10, 15, 20]"
			/>
		</div>
  </div>
</template>

<script setup lang='ts'>
import Pagination from "./Pagination.vue";
import axios from "axios";
import { ref,onMounted, onBeforeMount, computed ,watch,inject, toRaw, Ref} from "vue";
import { selectFilterData,ageData } from "@/features";
import  type { ECharts } from "echarts";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useUpdate } from "@/hooks/useUpdata";
const score = inject("score") as any;
const chart = inject("chart") as any;
const textFlag = inject("textFlag") as any;
// 获取到景点图层
const pointslayer = new FeatureLayer({
  url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/attraction2/FeatureServer",
  id: "points",
});
// 图标组件
interface ChartProps {
	[key: string]: ECharts | null;
}
const dataScreen: Ref<ChartProps> = ref({
	chart: null,
});
// 评价列表
const commentList = ref<any[]>([]);
onBeforeMount(async () => {
  if(props.initParam) {
    getTableList();
  }
});
// text列表
const textList = ref<any[]>([]);
// 接收父组件参数并设置默认值
interface CommentcardProps  {
  initParam: {}, // 初始化参数 ==> 必传
	title?: string; // 表格标题，目前只在打印的时候用到 ==> 非必传
	pagination?: boolean; // 是否需要分页组件 ==> 非必传（默认为true）
}
// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<CommentcardProps>(), {
	pagination: true,
});
/*************************** 获取表格列表 ********************************* */
async function getTableList() {
  try {
    commentList.value = [];
    textList.value = [];
    let numberList:any = [];//数字核对列表
    //@ts-ignore
    await axios.post('http://47.108.76.144:9000/attraction/comment', {
      // @ts-ignore
      poiID: parseInt(props.initParam.departmentId),
    }).then(async (res:any) => {
      let changeList = res.data;
      getCommentFeature();
      //@ts-ignore
      if(props.initParam.userStatus === 0) {
        commentList.value = changeList;
        changeList.forEach((item:any,index:number) => {
          numberList.push(index);
        });
        pageable.value.total = commentList.value.length;
        if(!textFlag.value) {
          changetreeAgeData();
          chart.value.initChart(ageData.value);
        }
      }//@ts-ignore
      else if(props.initParam.userStatus === 2) {
        changeList.forEach((item:any,index:number) => {
          if(item.score <= 2) {
            commentList.value.push(item);
            numberList.push(index);
          }
        });
        pageable.value.total = commentList.value.length;
      }//@ts-ignore
      else if(props.initParam.userStatus === 3) {
        changeList.forEach((item:any,index:number) => {
          if(item.score === 3) {
            commentList.value.push(item);
            numberList.push(index);
          }
        });
        pageable.value.total = commentList.value.length;
      }//@ts-ignore
      else if(props.initParam.userStatus === 4) {
        changeList.forEach((item:any,index:number) => {
          if(item.score >= 4) {
            commentList.value.push(item);
            numberList.push(index);
          }
        });
        pageable.value.total = commentList.value.length;
      }
      //@ts-ignore
      if(props.initParam.userRole[0] === "" || numberList.length === 0) {
        return;
      }else{
        commentList.value = [];
        var dataLen = ageData.value.length;
        // 取消之前高亮的图形
        for(let i=0;i<dataLen;i++){
          dataScreen.value.chart?.dispatchAction({
              type: 'downplay',
              dataIndex: i,
          });
        }
        const arrs:any = [];
        const firstArr:any = [];
        //@ts-ignore
        props.initParam.userRole.forEach((role:any) => {
          const arr = role.split(',').map(Number);
          firstArr.push(arr[0]);
          arrs.push(...arr.slice(1));
        });
        // 将数组合并并去重
        const merged = Array.from(new Set(arrs)) as number[];
        console.log(firstArr,merged);
        merged.forEach((item:any) => {
          //与数字核对列表进行比对，如果存在则添加到commentList中
          if(numberList.includes(item-1)) {
            if(item-1>=0){
              commentList.value.push(changeList[item-1]);
            }
          }
          pageable.value.total = commentList.value.length;
        });
        if(textFlag.value && firstArr.length > 0) {
          firstArr.forEach((item:any) => {
            // 高亮当前图形
            dataScreen.value.chart?.dispatchAction({
                type: 'highlight',
                dataIndex: item % dataLen,
            });
          });
        }
      }
      let num = 0;
      changeList.forEach((item:any) => {
        num += item.score;
      });
      // 将num / changeList.length进行四舍五入
      score.value = (num / changeList.length).toFixed(2);
    });
  } catch (error) {
    console.log(error);
  }
}
// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initParam, getTableList, { deep: true });
// 监听textFlag变化，执行相应操作
watch(() => textFlag.value, () => {
  if(textFlag.value === true) {
    changeselectAgeData(textList.value);
    dataScreen.value.chart = chart.value.initChart(ageData.value) as  ECharts;
  }else{
    changetreeAgeData();
    chart.value.initChart(ageData.value);
  }
});

// 分页数据
const pageable = ref({
  pageNum: 1,
  pageSize: 5,
  total: 0
});
/**
 * @description 每页条数改变
 * @param {Number} val 当前条数
 * @return void
 * */
  const handleSizeChange = (val: number) => {
  pageable.value.pageNum = 1;
  pageable.value.pageSize = val;
};

/**
 * @description 当前页改变
 * @param {Number} val 当前页
 * @return void
 * */
const handleCurrentChange = (val: number) => {
  pageable.value.pageNum = val;
};

/**
 * @description 树选择器改变相应ageData
 * @return void
 * */
const changetreeAgeData = () => {
  ageData.value = [];
  let num = 0;
  let numbers = [0,0,0];
  let evaluations = ['好评','中评','差评'];
  commentList.value.forEach((item:any) => {
    num += item.score;
    if(item.score >= 4) {
      numbers[0]++;
    }else if(item.score === 3) {
      numbers[1]++;
    }else if(item.score <= 2) {
      numbers[2]++;
    }
  });
  // 将num / changeList.length进行四舍五入
  score.value = (num / commentList.value.length).toFixed(2);
  for(let index = 0; index < 3; index++) {
    let item:{
      name: string,
      value: number,
      percentage: string
    } = {
      name: '',
      value: 0,
      percentage: ''
    };
    item.value = numbers[index];
    item.name = evaluations[index];
    item.percentage = (numbers[index] / commentList.value.length * 100).toPrecision(3) + "%";
    ageData.value.push(item);
  }
}

/**
 * @description 单属性选择器改变相应ageData
 * @return void
 * */
const changeselectAgeData = (results:any) => {
  ageData.value = [];
  //计算results中每个属性的数量的总和
  let num = 0;
  results.forEach((result:any) => {
    num += result.value;
  });
  results.forEach((result:any) => {
    let item:{
      name: string,
      value: number,
      percentage: string
    } = {
      name: '',
      value: 0,
      percentage: ''
    };
    item.value = result.value;
    item.name = result.name;
    item.percentage = (item.value / num * 100).toPrecision(3) + "%";
    ageData.value.push(item);
  });
}
/**
 * @description 获取评论特征
 */
async function getCommentFeature() {
  await axios.post("http://47.108.76.144:9000/attraction/fenci", {
      // @ts-ignore
      poiID: parseInt(props.initParam.departmentId),
  }).then((res:any) => {
    selectFilterData.value[1].options = [];
    //@ts-ignore
    selectFilterData.value[1].options.push({label: '全部', value: ''});
    //进行关键词筛选,获取关键词对应的评论索引和数量
    const keywors = res.data[0].keywords;
    keywors.forEach((key:string,index:number) => {
      let indexs: number[] = [];
      let value = index + ',';
      let count = 0;
      res.data.forEach((item:any,index:number) => {
        if (index === 0) return;
        item.keyword.forEach((keyword:string) => {

          if(keyword === key) {
            count++;
            indexs.push(index);
            return;
          }
        })
      })
      indexs.forEach((index:number) => {
        value += index + ',';
      })
      //填充筛选数据
      //@ts-ignore
      selectFilterData.value[1].options.push({label: key, value: value});
      //填充text列表
      textList.value.push({name: key, value: count});
    });  
    
  });
}
// 计算当前页码需要显示的评论数据
const displayedComments = computed(() => {
  const start = (pageable.value.pageNum - 1) * pageable.value.pageSize;
  const end = start + pageable.value.pageSize;
  return commentList.value.slice(start, end);
});

</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
