<template>
	<view class="bg-white wrapper">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">预约中...</block></cu-custom>
		<view class="cu-form-group">
			<view class="title">技师编号</view>
			<view class="">{{ orderInfo.staffInfo.name }}</view>
			<text class='cuIcon-peoplefill text-main'></text>
		</view>
		<view class="cu-form-group" v-if="orderInfo.room_no != undefined">
			<view class="title">房间号码</view>
			<view class="">{{ orderInfo.room_no }}</view>
			<text class='cuIcon-homefill text-main'></text>
		</view>
		<view class="cu-form-group" v-if="orderInfo.arrive_time != undefined">
			<view class="title">预约到店</view>
			<view class="">{{ orderInfo.arrive_time.split(" ")[1] }}</view>
			<text class='cuIcon-time text-main'></text>
		</view>
		<view class="cu-form-group" v-if="orderInfo.end_time != undefined">
			<view class="title">下钟时间</view>
			<view class="">{{ orderInfo.end_time.split(" ")[1] }}</view>
			<text class='cuIcon-timefill text-main'></text>
		</view>
		<view v-if="orderInfo.end_time == undefined" class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @tap="switchStaff" class="cu-btn lg bg-main2 round margin-right" style="width: 40%;">
				<text class="cuIcon-refresh margin-right-xs"></text>更换技师
			</button>
			<button v-if="orderInfo.end_time == undefined" @tap="cancelService" data-name="book" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class="cuIcon-delete margin-right-xs"></text>取消预约
			</button>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				orderInfo: null
			};
		},
		onShow() {
			this.GetUserInfo()
			
			console.log(this.orderInfo);
		},
		methods:{
			GetUserInfo(){
				var that = this
				uni.showLoading({
					title: '请稍等'
				})
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'user/info',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							console.log(res);
							Vue.prototype.userServiceInfo = res.data.data
							that.orderInfo = res.data.data.order
						} else if (res.data.code == 101) {
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../login/login'
								})
							}, 2000)
						} else {
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 1000
							})
						}
					}
				})
			},
			switchStaff(){
				var that = this
				uni.navigateTo({
					url: '../switch-staff/switch-staff?orderId=' + that.orderInfo.id
				})
			},
			cancelService(){
				var that = this
				uni.showModal({
					content: '确定取消吗？',
					success(res) {
						if(res.confirm){
							uni.request({
									header: {
										token: that.Token
									},
									url: that.Server + 'order/cancel',
									data: {orderId: that.userServiceInfo.order.id},
									success(res) {
										if(res.data.code == 0){
											that.GetUserInfo()
											uni.showToast({
												icon: "none",
												title: '预约已取消'
											})
											setTimeout(() => {
												uni.navigateBack({})
											}, 1500)
											
										} else if (res.data.code == 101) {
											uni.showToast({
												icon: "none",
												title: '登录超时，将重新授权登录',
												duration: 1000
											})
											setTimeout(() => {
												uni.reLaunch({
													url: '../login/login'
												})
											}, 2000)
										} else {
											uni.showToast({
												icon: "none",
												title: res.data.msg,
												duration: 1000
											})
										}
									}
								})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrapper{min-height: 100vh;}
</style>
