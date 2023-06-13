<template>
  <div class="comment-card">
    <!-- 表格头部 操作按钮 -->
		<div class="comment-card-header">
			<div class="comment-card-header-button-lf">
				<slot name="cardHeader"></slot>
			</div>
			<div class="comment-card-header-button-ri" >
				<el-button :icon="Refresh" circle > </el-button>
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
            <p>{{comment.user}}</p><p class="time">{{comment.time}}</p>
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
        <dd class="clearfix">{{comment.content}}</dd>
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
import {  Printer,  Refresh } from "@element-plus/icons-vue";
import { ref,onMounted, onBeforeMount, computed ,watch,inject, toRaw} from "vue";
import { commentsList,selectFilterData } from "@/features";
import {analyzeComments} from "@/hooks/useAnalysisComents";
import { valueEquals } from "element-plus";
const score = inject("score") as any;
// 评价列表
const commentList = ref<any[]>([]);
onBeforeMount(async () => {
  if(props.initParam) {
    //@ts-ignore
    commentList.value = await commentsList[props.initParam.departmentId];
    pageable.value.total = commentList.value.length;
    let num = 0;
    commentList.value.forEach((item:any) => {
      num += item.score;
    });
    // 将num / changeList.length进行四舍五入
    score.value = num / commentList.value.length;
  }
});
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
// 更新表格数据
async function getTableList() {
  try {
    commentList.value = [];
    //@ts-ignore
    let changeList = commentsList[props.initParam.departmentId];
    //@ts-ignore
    if(props.initParam.userRole[0] === "") {
      //@ts-ignore
      if(props.initParam.userStatus === 0) {
        commentList.value = changeList;
        selectFilterData.value[1].options = [];
        //@ts-ignore
        selectFilterData.value[1].options.push({label: '全部', value: ''});
        pageable.value.total = commentList.value.length;
      }//@ts-ignore
      else if(props.initParam.userStatus === 2) {
        changeList.forEach((item:any) => {
          if(item.score <= 2) {
            commentList.value.push(item);
          }
        });
        await analyzeComments(commentList.value).then((results:any) => {
          console.log(results);
          selectFilterData.value[1].options = [];
            //@ts-ignore
          selectFilterData.value[1].options.push({label: '全部', value: ''});
          for(let result in results) {
            //@ts-ignore
            selectFilterData.value[1].options.push({label: results[result].attribute, value: results[result].content.id});
          }
        });
        pageable.value.total = commentList.value.length;
      }//@ts-ignore
      else if(props.initParam.userStatus === 3) {
        changeList.forEach((item:any) => {
          if(item.score === 3) {
            commentList.value.push(item);
          }
        });
        await analyzeComments(commentList.value).then((results:any) => {
          debugger
          console.log(results);
          selectFilterData.value[1].options = [];
            //@ts-ignore
          selectFilterData.value[1].options.push({label: '全部', value: ''});
          for(let result in results) {
            //@ts-ignore
            selectFilterData.value[1].options.push({label: results[result].attribute, value: results[result].content.id});
          }
        });
        pageable.value.total = commentList.value.length;
      }//@ts-ignore
      else if(props.initParam.userStatus === 4) {
        changeList.forEach((item:any) => {
          if(item.score >= 4) {
            commentList.value.push(item);
          }
        });
        await analyzeComments(commentList.value).then((results:any) => {
          console.log(results);
          selectFilterData.value[1].options = [];
            //@ts-ignore
          selectFilterData.value[1].options.push({label: '全部', value: ''});
          for(let result in results) {
            //@ts-ignore
            selectFilterData.value[1].options.push({label: results[result].attribute, value: results[result].content.id});
          }
        });
        pageable.value.total = commentList.value.length;
      }
    }else{
      //@ts-ignore
      props.initParam.userRole.forEach((role:any) => {
        changeList.forEach((item:any) => {
          if(item.id === role) {
            commentList.value.push(item);
          }
        });
      });
    }
    let num = 0;
    changeList.forEach((item:any) => {
      num += item.score;
    });
    // 将num / changeList.length进行四舍五入
    score.value = num / changeList.length;
  } catch (error) {
    console.log(error);
  }
}
// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initParam, getTableList, { deep: true });
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
