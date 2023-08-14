<template>
  <div id="viewDiv">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref ,provide} from 'vue';
import styles from "@/style/esri.scss?inline";
import { useViewStore } from '@/store/mapviewstore';



const store = useViewStore();
const flag = ref(true)
const flag2 = ref(true)
const count = ref(0)
onMounted(() => {
  let container = document.getElementById("viewDiv") as HTMLDivElement;
  store.setContainer(container);
  store.CreateMapView();
  const view = store.getView() as __esri.MapView;
});
provide('flag',flag);
provide('count',count);
provide('flag2' , flag2);
//修改popup样式
const style = document.createElement("style");
style.setAttribute("lang", "scss");
style.innerHTML = styles;
document.head.appendChild(style);
</script>
 
<style scoped lang="scss">
#viewDiv {
  width: 100%;
}
</style>
