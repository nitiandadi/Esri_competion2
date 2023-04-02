<template>
	<div class="dataScreen-container">
		<div class="dataScreen" ref="dataScreenRef">
			<div class="dataScreen-header">
				<div class="header-lf">
					<!-- <span class="header-screening" @click="router.push(HOME_URL)">首页</span> -->
				</div>
				<div class="header-ct">
					<div class="header-ct-title">
						<span>智慧旅游可视化大数据展示平台</span>
						<div class="header-ct-warning">平台高峰预警信息（2条）</div>
					</div>
				</div>
				<div class="header-rg">
					<span class="header-download">统计报告</span>
					<!-- <span class="header-time">当前时间：{{ time }}</span> -->
				</div>
			</div>
			<div class="dataScreen-main">
				<div class="dataScreen-lf">
					<div class="dataScreen-top">
						<div class="dataScreen-main-title">
							<span>实时游客统计</span>
							<!-- <img src="./images/dataScreen-title.png" alt="" /> -->
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<RealTimeAccessChart ref="RealTimeAccessRef" />
						</div>
					</div>
					<div class="dataScreen-center">
						<div class="dataScreen-main-title">
							<span>男女比例</span>
							<!-- <img src="./images/dataScreen-title.png" alt="" /> -->
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<MaleFemaleRatioChart ref="MaleFemaleRatioRef" />
						</div>
					</div>
					<div class="dataScreen-bottom">
						<div class="dataScreen-main-title">
							<span>年龄比例</span>
							<!-- <img src="./images/dataScreen-title.png" alt="" /> -->
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<AgeRatioChart ref="AgeRatioRef" />
						</div>
					</div>
				</div>
				<div class="dataScreen-ct">
					<div class="dataScreen-map">
						<div class="dataScreen-map-title">景区实时客流量</div>
						<!-- <vue3-seamless-scroll
							:list="alarmData"
							class="dataScreen-alarm"
							:step="0.5"
							:hover="true"
							:limitScrollNum="3"
						>
							<div class="dataScreen-alarm">
								<div class="map-item" v-for="item in alarmData" :key="item.id">
									<img src="./images/dataScreen-alarm.png" alt="" />
									<span class="map-alarm sle">{{ item.label }} 预警：{{ item.warnMsg }}</span>
								</div>
							</div>
						</vue3-seamless-scroll> -->
						<mapChart ref="MapchartRef" />
					</div>
					<div class="dataScreen-cb">
						<div class="dataScreen-main-title">
							<span>未来30天游客量趋势图</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<OverNext30Chart ref="OverNext30Ref" />
						</div>
					</div>
				</div>
				<div class="dataScreen-rg">
					<div class="dataScreen-top">
						<div class="dataScreen-main-title">
							<span>热门景区排行</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<HotPlateChart ref="HotPlateRef" />
						</div>
					</div>
					<div class="dataScreen-center">
						<div class="dataScreen-main-title">
							<span>年度游客量对比</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<AnnualUseChart ref="AnnualUseRef" />
						</div>
					</div>
					<div class="dataScreen-bottom">
						<div class="dataScreen-main-title">
							<span>预约渠道数据统计</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<PlatformSourceChart ref="PlatformSourceRef" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
