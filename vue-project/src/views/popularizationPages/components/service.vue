<template>
    <div class="card">
        <div class="card-chart">
            <el-input
                v-model="textarea"
                :autosize="{ minRows: 6, maxRows: 6 }"
                type="textarea"
                placeholder="开始您的个性旅游服务体验吧！"
            />
        </div>
        <div class="card-foot">
            <h3 class="card-foot-title">景点名称</h3>
            <el-tooltip
                class="box-item"
                effect="dark"
                content="@发送"
                placement="top-start"
            >
                <el-button  class="card-foot-button" :icon="Promotion" ></el-button>
            </el-tooltip>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ElInput,ElButton,ElTooltip } from 'element-plus'
import { Promotion } from '@element-plus/icons-vue'
import { ref ,} from 'vue'
const textarea = ref('')

</script>

<style lang='scss' scoped>
.card {
    display: flex;
    flex-direction: column;
    background: rgba(9, 166, 214, 0.5);
    border: 1px solid #345f92;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 45px;
    padding: 20px;
    overflow: hidden;
    width: 90%;
    height: 70%;
    &-chat{
        position: relative;
        height: 90%;
        overflow: hidden;
    }
    &-foot{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 10%;
        &-title{
            margin: 0;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
        }
        &-button{
            padding: 10px 20px;
            background-color: #19aadf00;
            color: #14c5e5;
            border-radius: 5px;
            font-size: 24px;
        }
        &-button:hover{
            background-color: #14d7e5;
            color: #fff;
        }
    }
}
</style>
