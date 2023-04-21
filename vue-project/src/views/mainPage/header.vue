<template>
	<div class="dataScreen-container">
		<div class="dataScreen" ref="dataScreenRef">
			<div class="dataScreen-header">
				<div class="header-lf">
					<span class="header-vistors" v-on:click="router.push('/home/VisitorManage')">游客管理</span>
					<span class="header-facility">设施管理</span>
					<span class="header-science">科普管理</span>
				</div>
				<div class="header-ct">
					<div class="header-ct-title">
						<span>青海巡-青海地学旅游后台管理系统</span>
						<div class="header-ct-warning">可视化信息平台</div>
					</div>
				</div>
				<div class="header-rg">
					<span class="header-download" v-on:click="router.push('/home/AttractionManage')">景点管理</span>
					<span class="header-feedback">反馈管理</span>
					<span class="header-protection">景点保护</span>
				</div>
			</div>
		</div>
		<div>
			<InitView>
				<RouterView></RouterView>
			</InitView>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref,} from "vue";
import { useRouter } from "vue-router";
import InitView from "./InitView.vue";
import { useScreen } from "../../hooks/useScreen";
const router = useRouter();
const dataScreenRef = ref<HTMLElement | null>(null);

useScreen(dataScreenRef,1920,1080);
</script>
<style lang="scss" scoped>
@import "../../style/mainPage.scss";
</style>
