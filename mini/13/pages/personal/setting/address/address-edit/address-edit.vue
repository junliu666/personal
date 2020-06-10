<template>
	<view style="min-height: 100vh;" class="bg-white">
		<cu-custom bgColor="bg-main" :isBack="true"><block slot="backText"></block><block slot="content">编辑收货地址</block><view slot="right" class="margin-right">删除地址</view></cu-custom>
		<view @click="ChooseLocation" class="cu-form-group" style="border: 0; justify-content: flex-start; border-bottom: 1px solid #f5f5f5;">
			<view class="title margin-right" style="font-size: 30upx;">收货地址</view>
			<view >
				<text style="font-size: 36upx;" class="cuIcon-location text-main margin-right-xs"></text>
				点击选择
			</view>
			<text></text>
		</view>
		<view class="cu-form-group margin-top-sm" style="border: 0;  border-bottom: 1px solid #f5f5f5;">
			<view class="title" style="font-size: 30upx;">门牌号</view>
			<input  style="font-size: 30upx;" placeholder="请输入详细地址" v-model="user.detail"   name="input"></input>
		</view>
		<view class="cu-form-group margin-top-sm" style="border: 0;  border-bottom: 1px solid #f5f5f5;">
			<view class="title" style="font-size: 30upx;">收件人</view>
			<input  style="font-size: 30upx;" placeholder="请输入收件人" v-model="user.name" maxlength="10"  name="input"></input>
		</view>
		<view class="cu-form-group margin-top-sm" style="border: 0;  border-bottom: 1px solid #f5f5f5;">
			<view class="title" style="font-size: 30upx;">手机号</view>
			<input  style="font-size: 30upx;" type="number" placeholder="请输入手机号" v-model="user.tel" maxlength="11" @blur="CheckPhone" name="input"></input>
		</view>
		<button class="cu-btn round bg-main" style="width: 600upx; height: 100upx; font-size: 40upx; margin-top: 50upx; margin-left: 75upx;">确定修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: '',
					tel: '',
					address: '',
					latitude: '',
					longitude: '',
					detail: ''
				}
			};
		},
		methods:{
			ChooseLocation(){
				var that = this
				uni.chooseLocation({
					success(res) {
						that.address = res.address
						that.latitude = res.latitude
						that.longitude = res.longitude
					}
				})
			},
			CheckPhone(){}
		}
	}
</script>

<style lang="scss">

</style>
