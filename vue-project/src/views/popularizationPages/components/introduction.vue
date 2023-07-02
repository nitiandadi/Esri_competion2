<template>
    <el-image class="lf-top-img" :src="url">
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template>
      </el-image>
    <dl class="lf-top-dl">
        <dt>{{pointsList.title}}</dt>
        <dd>
            <p>{{pointsList.location}}</p>
            <p style="color: aqua;">景点简介:</p>
            <span class="span" style="display: flex;  height: 95px; overflow: auto;">{{pointsList.content}}</span>
        </dd>
    </dl>
</template>

<script setup lang='ts'>
import { onBeforeMount,ref,watch} from 'vue';
import { ElImage,ElIcon } from 'element-plus';
import { Picture as IconPicture } from '@element-plus/icons-vue'
// 接收父组件参数并设置默认值
interface CommentcardProps  {
    initParam: {
        title: string;
        location: string;
        content: string;
        img: string;
    }, // 初始化参数 ==> 必传
}
// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<CommentcardProps>(), {
});
// 图片地址
const url = ref<string>('');
// 评价列表
const pointsList = ref<any>({});
onBeforeMount(async () => {
  if(props.initParam) {
    pointsList.value = await props.initParam;
    url.value = pointsList.value.img;
  }
});
function getpointsList() {
    if(props.initParam) {
        pointsList.value = props.initParam;
        url.value = pointsList.value.img;
    }
}
// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initParam, getpointsList, { deep: true });
</script>

<style lang='scss' scoped>
.lf-top {
    &-img {
        margin-top: 50px;
        margin-left: 40px;
        width: 38%;
        height: 60%;
    }
    &-dl {
        width: 70%;
        height: 100%;
        padding-left: 10px;
        color: #fff;
    }
}
.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}
.image-slot .el-icon {
    font-size: 30px;
}

.span::-webkit-scrollbar {
  width: 6px; /* 设置滚动条宽度 */
  height: 6px; /* 设置滚动条高度 */
  
}
.span::-webkit-scrollbar-thumb {
  border-radius: 3px; /* 设置滚动条圆角 */
  background-image: linear-gradient(135deg, #14c0e3 0%, rgba(8, 196, 219, 0.5) 72%, rgba(0, 182, 234, 0.3) 100%);
}
</style>
