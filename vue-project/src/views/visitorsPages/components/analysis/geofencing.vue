<template>
    <div class="container">
        <el-table :data="tableDatas" style="width: 100%" ref="table" border>
            <el-table-column prop="name" label="名称" width="120" />
            <el-table-column prop="type" label="类型" width="120" />
            <el-table-column prop="time" label="时间" width="120" />
            <el-table-column prop="detail" label="Detail" width="112" />
            <el-table-column fixed="right" label="Operations" width="128">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                        Remove
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <box @sendData="getData" ></box>
    </div>
</template> 

<script setup lang="ts">
import { ref, computed, onMounted, reactive, onUpdated, onBeforeUpdate, inject, provide } from 'vue';
import box from './box.vue';
import { tableData2 } from '@/type/table';
let table = ref('1');
const style = document.createElement("style");
style.innerHTML = `
.el-table__footer-wrapper, .el-table__header-wrapper {
    overflow: hidden;
    height: auto;
}
.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
    /* border-bottom: var(--el-table-border); */
    border: 0.1px solid black;
}
.el-message-box {
    height: auto;
}
`;
document.head.appendChild(style);
let tableDatas = ref<tableData2[]>([])
function getData(data: tableData2) {
    console.log(data);
    tableDatas.value.push(data);
}
tableDatas = ref([
])
provide('tableDatas', tableDatas);
const deleteRow = (index: number) => {
    tableDatas?.value.splice(index, 1)
}
onMounted(() => {
})
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
}
</style>