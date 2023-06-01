<template>
    <div class="container1">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="姓名" width="100" />
            <el-table-column prop="age" label="年龄" width="100" />
            <el-table-column prop="gender" label="性别" />
            <el-table-column prop="gender" label="省份" />
            <el-table-column prop="location" label="位置" />
            <!-- <el-table-column prop="location" label="纬度" /> -->
        </el-table>
    </div>
</template>
<script lang="ts" setup>
const tableData = [
    {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    },
    {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    }, {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    }, {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    }, {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    },
    {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    },
    {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    }, {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    }, {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    },
    {
        name: '张三',
        age: '18',
        gender: '女',
        location: [106.11, 37.22],
    },
]

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
}
</style>
  