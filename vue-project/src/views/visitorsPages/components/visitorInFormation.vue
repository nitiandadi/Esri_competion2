<template>
    <div class="container">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
                <el-select v-model="formInline.region" placeholder="选择时间">
                    <!-- <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" /> -->
                </el-select>
                <el-select v-model="formInline.region" placeholder="选择景点">
                    <!-- <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" /> -->
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <myTable></myTable>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import myTable from './assets/table.vue'
const column = ref()
const formInline = reactive({
    user: '',
    region: '',
})
const onSubmit = () => {
    console.log('submit!')
}
onMounted(() => {
    console.log(column.value)
})
</script>
<style lang="scss" scoped>
.container {
    position: absolute;
    top: 12%;
    left: 65.2%;
    width: 480px;
    height: 500px;
    pointer-events: auto;
    background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
    padding: 0px;
    display: flex;
    flex-direction: column;
    .el-form {
        height: 50px;

        .el-select {
            height: 30px;
            width: 150px;
            margin-left: 8px;
            margin-right: 8px;
        }
        .el-button {
            height: 30px;
            width: 100px;
            margin-left: -20px;
            // margin-left: 8px;
            // margin-right: 8px;
        }
    }

    .table {
        height: 450px;
        width: 100%;
        // .el-table {
        //     height: 450px;
        //     width: 100%;
        // }
    }

}</style>