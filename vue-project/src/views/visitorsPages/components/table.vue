<template>
    <div class="container1">
        <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" border style="width: 100%">
            <el-table-column prop="name" label="姓名" width="100" />
            <el-table-column prop="age" label="年龄" width="100" />
            <el-table-column prop="gender" label="性别" />
            <el-table-column prop="longitude" label="位置" />
            <el-table-column prop="latitude" label="纬度" />
            <el-table-column prop="province" label="省份" />
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :pager-count="11" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableData.length">
        </el-pagination>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { tableData } from '@/type/table';
let tableData = ref<tableData[]>([]);
let currentPage = ref(2);
let pageSize = ref(10);
const style = document.createElement("style");
style.innerHTML = `
.el-pagination__goto {
            margin-right: 8px;
            color: #49b0f2;
            font-size: 17px;
        }
`;
document.head.appendChild(style);
function handleSizeChange(val: number) {
    pageSize.value = val;
}
function handleCurrentChange(val: number) {
    currentPage.value = val;
}
function setTableData(data: tableData[]) {
    tableData.value = data;
}
defineExpose({
    setTableData
})

</script>
<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
}

.container1 {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    pointer-events: auto;
    .el-pagination {
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 34px;
        margin: 0px;
        background-image: linear-gradient(-90deg, #182940 0%, #115687 100%);
    }
}
</style>
  