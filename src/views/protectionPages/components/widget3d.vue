<template>
    <el-button class="widget3d-drawbutton"  @click="drawer = true">
        <el-icon :size="20">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"></path></svg>
        </el-icon>
    </el-button>
    <el-drawer 
        class="widget3d-drawer" 
        v-model="drawer" 
        title="I am the title" 
        :with-header="false" 
        :modal="false"
        direction="ltr"
        size="3.3%"
        :z-index="2"
    >  
        <el-button  @click="close" class="widget3d-closebutton">
            <el-icon :size="20" >               
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"></path></svg>
            </el-icon>
        </el-button>
        <div style="height: 30px;"></div>
        <el-button  class="widget3d-visualization" @click="visual">
            <el-icon :size="25">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"></path></svg>
            </el-icon>
        </el-button>
        <el-button  class="widget3d-monitor" @click="monitor" :disabled="isDisabled">
            <el-icon :size="25">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"></path></svg>               
            </el-icon>
        </el-button>
        <el-button  class="widget3d-area" @click="area" :disabled="isDisabled">
            <el-icon :size="25">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"></path><path fill="currentColor" d="M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"></path></svg>
            </el-icon>
        </el-button>
    </el-drawer>
</template>

<script setup lang='ts'>
import { ElButton,ElDrawer,ElIcon, } from 'element-plus';
import { ref,onMounted ,inject,Ref} from 'vue';
import { usewidget3dStore} from '@/store/widget3d/widget3dstore'
import styles from "@/style/widget3d.scss?inline"
const widget3dStore = usewidget3dStore();
//拿到父组件的值
const buildvisual = inject("buildvisual") as Ref<boolean>;
const videovisual = inject("videovisual") as Ref<boolean>;
const areavisual = inject("areavisual") as Ref<boolean>;

const drawer = ref(false);
const isDisabled = ref(true);

const close = () => {
    drawer.value = false;
};
const visual = () => {
    buildvisual.value = !buildvisual.value;
};
const monitor = () => {
    videovisual.value = !videovisual.value;
};
const area = () => {
    areavisual.value = !areavisual.value;
};
onMounted(()=>{
    widget3dStore.setisDisabled(isDisabled);

}) 
/**修改样式*/
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>

<style lang='scss' scoped>
</style>
