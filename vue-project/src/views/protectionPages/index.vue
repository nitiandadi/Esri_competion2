<template>
  <div ref="screenRef" class="screen">

  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { useScreen } from '@/hooks/useScreen';

const screenRef = ref<HTMLElement | null>(null);
useScreen(screenRef);
</script>

<style lang='scss' scoped>
.screen {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  background: rgba(255, 0, 0, 0.001);
  overflow: hidden;
  z-index: 2;
}
</style>
