<template>
	<div class="dataScreen-container">
		<div class="dataScreen" ref="dataScreenRef">
			<div class="dataScreen-header">
				<div class="header-lf">
					<span class="header-vistors" v-on:click="router.push('/home/VisitorManage')">游客管理</span>
					<span class="header-facility" v-on:click="router.push('/home/deviceManage')" >设施管理</span>
					<span class="header-science"  v-on:click="router.push('/home/PopularizationManage')">科普管理</span>
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
					<span class="header-protection" v-on:click="router.push('/home/ProtectionManage')">景点保护</span>
				</div>
			</div>
		</div>
		<div>
			<baseMapView ref="baseMap">
				<RouterView></RouterView>
			</baseMapView>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref} from "vue";
import { useRouter } from "vue-router";
import { useScreen } from "../../hooks/useScreen";
import baseMapView from "./baseMapView.vue";
const router = useRouter();
const dataScreenRef = ref<HTMLElement | null>(null);
useScreen(dataScreenRef);
</script>
<style lang="scss" scoped>
@import "../../style/mainPage.scss";
</style>
