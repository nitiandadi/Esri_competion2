<template>
    <el-image class="lf-top-img">
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template>
      </el-image>
    <dl class="lf-top-dl">
        <dt>景点名称</dt>
        <dd>
            <p>景点地点:</p>
            <p>景点简介:</p>
            <span>内容</span>
        </dd>
    </dl>
</template>

<script setup lang='ts'>
import { ElImage,ElIcon } from 'element-plus';
import { Picture as IconPicture } from '@element-plus/icons-vue'

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
