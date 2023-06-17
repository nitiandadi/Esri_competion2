<template>
    <el-image class="lf-top-img">
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
            <span>{{pointsList.content}}</span>
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
// 评价列表
const pointsList = ref<any>({});
onBeforeMount(async () => {
  if(props.initParam) {
    pointsList.value = await props.initParam;
  }
});
function getpointsList() {
    if(props.initParam) {
        pointsList.value = props.initParam;
    }
}
// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initParam, getpointsList, { deep: true });
</script>

<style lang='scss' scoped>
.lf-top {
    &-img {
        margin-top: 50px;
        margin-left: 55px;
        width: 30%;
        height: 50%;
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
</style>
