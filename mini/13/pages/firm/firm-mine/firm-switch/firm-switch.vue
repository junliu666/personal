<template>
	<view>
<!-- 		<view class="bg-main" :style="statusStyle" style="color:red"></view>
		<view @click="GoBack" class="round flex align-center justify-center  " style="width: 120upx; height: 120upx;">
			<text class="aliicon" style="font-size: 40upx;">&#xe601;</text>
		</view> --> 
		<cu-custom-firm bgColor="bg-white" :isBack="true">
			
			<block slot="backText">
				<text class="text-lg text-sub-main-firm">切换身份</text></block>
			<block slot="content"></block>
			<view slot="right" class="margin-right">
				
				<!-- <text class="cuIcon-search  margin-right-sm padding-sm" style="font-size: 40upx;"></text> -->
				<!-- <text class="cuIcon-roundadd padding-sm" style="font-size: 40upx;"></text> -->
			</view>
		</cu-custom-firm> 
		<view class="flex flex-direction align-center justify-center" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; ;">
			<image src="../../../../static/firm.png" style="width: 600upx; " mode="widthFix"></image>
			<text class="margin-top text-sub-main-firm" style="font-size: 40upx;">您当前身份是"企业用户"</text>
			<button @click="GoFirm" class="cu-btn bg-main-firm round text-lg " style="margin-top: 150upx;width: 600upx; height: 90upx; ">切换为"个人用户"</button>
		</view>  
	</view> 
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			statusStyle(){
				var statusBar = this.StatusBar
				var style = `height: ${statusBar}px; width: 100%; `
				return style
			}
		},
		methods: {
			GoFirm(){
				uni.reLaunch({
					url: '/pages/take-job-mapR/take-job-mapR'
				})
			},
			GoBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
