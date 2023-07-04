<template>
    <el-card class="correction-card">
        <template #header>
          <div class="box-card__header">
            <span>景点修正</span>
            <el-button 
                  class="button" 
                  text style="color:#28c3e2;font-size: 18px;font-weight: bold;font-style: italic;"
                  @click="handleSubmit"
              >提交表单
            </el-button>
          </div>
        </template>
        <div class="correction-featureFrom" ref="correctionRef"></div>
    </el-card>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
import {useCorrectFeatureStore} from '@/store/correction/correctFeaturestore'
import {ElCard,ElButton} from 'element-plus'
import styles from "@/style/correction.scss?inline"
const { createFeaturefrom,submitForm } = useCorrectFeatureStore();
/**引用需要渲染的DOM元素的ref对象 */
const correctionRef = ref<HTMLDivElement | null>(null);

/**提交表单 */
function handleSubmit() {
    submitForm();
}

onMounted(() => {
    /**创建要素图表 */
    createFeaturefrom(correctionRef);
})

/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang='scss' scoped>
</style>
