<template>
	<view class="bg-white wrapper">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">预约中...</block></cu-custom>
		<view class="cu-form-group">
			<view class="title">技师工牌</view>
			<view class="">18号技师</view>
			<text class='cuIcon-peoplefill text-main'></text>
		</view>
		<view class="cu-form-group">
			<view class="title">房间号码</view>
			<view class="">1号房间</view>
			<text class='cuIcon-homefill text-main'></text>
		</view>
		<view class="cu-form-group">
			<view class="title">上钟时间</view>
			<view class="">21:00 - 22:00</view>
			<text class='cuIcon-timefill text-main'></text>
		</view>
		<view class="flex justify-end  margin-right-sm">
			<button class="cu-btn lg round margin-top bg-main2">取消预约</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.wrapper{min-height: 100vh;}
</style>
