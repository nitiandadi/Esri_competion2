<template>
	<div class="dataScreen-container">
		<div class="dataScreen" ref="dataScreenRef">
			<div class="dataScreen-header">
				<div class="header-lf">
					<span class="header-vistors">游客管理</span>
					<span class="header-facility">设施管理</span>
					<span class="header-science">科普管理</span>
				</div>
				<div class="header-ct">
					<div class="header-ct-title">
						<span>青海巡地学旅游后台管理系统</span>
						<div class="header-ct-warning">平台高峰预警信息</div>
					</div>
				</div>
				<div class="header-rg">
					<span class="header-download">景点管理</span>
					<span class="header-feedback">反馈管理</span>
					<span class="header-protection">景点保护</span>
				</div>
			</div>
			<div class="dataScreen-main">
			</div>
		</div>
		<InitView />
	</div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useTime } from "@/hooks/useTime";
import InitView from "./InitView.vue";
const router = useRouter();
const dataScreenRef = ref<HTMLElement | null>(null);

onMounted(() => {
	// 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
	if (dataScreenRef.value) {
		dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
		dataScreenRef.value.style.width = `1920px`;
		dataScreenRef.value.style.height = `1080px`;
	}
	window.addEventListener("resize", resize);
});


const getScale = (width = 1920, height = 1080) => {
	let ww = window.innerWidth / width;
	let wh = window.innerHeight / height;
	return ww < wh ? ww : wh;
};

// 监听浏览器 resize 事件
const resize = () => {
	if (dataScreenRef.value) {
		dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
	}
};

// 获取当前时间
const { nowTime } = useTime();
let timer: any
let time: Ref<string> = ref(nowTime.value);
timer = setInterval(() => {
	time.value = useTime().nowTime.value;
}, 1000);

// 销毁时触发
onBeforeUnmount(() => {
	window.removeEventListener("resize", resize);
	clearInterval(timer!);
});
</script>
<style lang="scss" scoped>
@import "../../style/mainPage.scss";
</style>
