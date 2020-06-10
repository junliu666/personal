<template>
	<view style="min-height: 100vh;" class="bg-white">
		<cu-custom bgColor="bg-main" :isBack="true"><block slot="backText"></block><block slot="content">收获地址</block><view @click="GoAddAddress" slot="right" class="margin-right">添加</view></cu-custom>
	
	
		<view class="padding-tb flex justify-between align-center" v-for="(item,index) in 10" :key="index" :style=" index == -1 ? 'width: 710upx; margin-left: 40upx;' : 'width: 710upx; margin-left: 40upx; border-bottom: 1px solid #f5f5f5;'">
			<view class="">
				<view class="flex align-center">
					<text v-if="index == 0" class="cu-tag sm radius bg-main margin-right-sm">默认</text>
					<text class="margin-right text-bold">收货人昵称</text>
					<text class="text-bold">13522112342</text>
				</view>
				<view class="flex align-center">
					
					<text class="">浙江省 杭州市 萧山区</text>
				</view>
				<view class="flex flex-wrap">
					<text class="text-gray">一个神奇的地方一个神奇的地方一个神奇的地方一个神奇的地方一</text>
				</view>
			</view>
			<view @click="GoEditAddress" class="padding-sm cuIcon-edit text-gray margin-right" style="font-size: 40upx;"></view>
		</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			GoAddAddress(){
				uni.navigateTo({
					url: 'address-add/address-add'
				})
			},
			GoEditAddress(){
				uni.navigateTo({
					url: '/pages/personal/setting/address/address-edit/address-edit'
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
