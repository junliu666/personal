<template>
	<view>
		<basics :UserInfoB="UserInfoB" :recStaff="recStaff" @Collect="Collect" :swiperList="swiperList" :merchantInfo="merchantInfo" :staffList="staffList" v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin :UserInfoB="UserInfoB" :bookingStauts="bookingStauts" v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white  foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">预约</view>
			</view>
<!-- 			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">其他</view>
			</view> -->
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
		return {
				bookingStauts: false,
				swiperList: '',
				staffList: [],
				merchantInfo: null,
				PageCur: 'basics',
				UserInfoB: null,
				recStaff: []
			}
		},
		onShow() {
			this.GetUserInfo()
			this.GetStaffList()
		},
		onLoad(options) {
			uni.showLoading({
				title: '请稍等'
			})
			this.GetSwiperList()
			this.GetMerchantInfo()
			
		},
		methods: {
			
			GetUserInfo(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'user/info',
					success(res) {
						if(res.data.code == 0){
							
							// uni.setStorage({
							// 	key: 'UserInfo',
							// 	data: res.data.data
							// })
							// Vue.prototype.UserInfo = res.data.data
							that.UserInfoB = res.data.data
							Vue.prototype.userServiceInfo = res.data.data
							var result = res.data.data.order
							var currentTime = new Date()
							var endTime = new Date(result.end_time)
							console.log(currentTime.getTime(), endTime.getTime());
							// console.log(new Date() > result.end_time);
							if(result.id == undefined){
								that.bookingStauts = false
							} else if(result.is_accept == false && result.is_cancel == true){
								that.bookingStauts = false
							} else if (result.is_accept == true && currentTime.getTime() > endTime.getTime()){
								that.bookingStauts = false
							} else {
								that.bookingStauts = true
							}
							
							// if(res.data.data.order.hasOwnProperty("is_cancel") && res.data.data.order.is_cancel == false && res.data.data.order.end_time < new Date()){
							// 	that.bookingStauts = true
							// } else {
							// 	that.bookingStauts = false
							// }
							
						} else if (res.data.code == 101) {
							that.UserInfoB = undefined
							Vue.prototype.userServiceInfo = undefined
							// uni.showToast({
							// 	icon: "none",
							// 	title: '登录超时，将重新授权登录',
							// 	duration: 1000
							// })
							// setTimeout(() => {
							// 	uni.reLaunch({
							// 		url: '../login/login'
							// 	})
							// }, 2000)
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
			Collect(e){
				this.staffList[e].isCollection = !this.staffList[e].isCollection
			},
			GetSwiperList(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'banner/list',
					data: {merchantId: that.MerchantId},
					success(res) {
						if(res.data.code == 0){
							that.swiperList = res.data.data
							console.log(that.swiperList);
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
			GetMerchantInfo(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'merchant/info',
					data: {
						merchantId: that.MerchantId
					},
					success(res) {
						if(res.data.code == 0){
							that.merchantInfo = res.data.data
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
			GetStaffList(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'staff/list',
					data: {
						merchantId: that.MerchantId
					},
					success(res) {
						if(res.data.code == 0){
							for(var i in res.data.data){
								if(res.data.data[i].endTime == undefined && res.data.data[i].is_free == true){
									res.data.data[i].endTime = 'a'
								} else if (res.data.data[i].endTime == undefined && res.data.data[i].is_free == false){
									res.data.data[i].endTime = 'b'
								}
							}
							that.staffList = res.data.data
							if(res.data.data[0] != undefined && res.data.data[1] != undefined && res.data.data[2] != undefined){
								that.recStaff = [res.data.data[0], res.data.data[1], res.data.data[2]] 
							}
						} else if (res.data.code == 101) {
							that.GetStaffListB()
						} else {
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 1000
							})
						}
						uni.hideLoading()
					}
				})
			},
			GetStaffListB(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'staff/listTourist',
					data: {
						merchantId: that.MerchantId
					},
					success(res) {
						if(res.data.code == 0){
							for(var i in res.data.data){
								if(res.data.data[i].endTime == undefined && res.data.data[i].is_free == true){
									res.data.data[i].endTime = 'a'
								} else if (res.data.data[i].endTime == undefined && res.data.data[i].is_free == false){
									res.data.data[i].endTime = 'b'
								}
							}
							that.staffList = res.data.data
							if(res.data.data[0] != undefined && res.data.data[1] != undefined && res.data.data[2] != undefined){
								that.recStaff = [res.data.data[0], res.data.data[1], res.data.data[2]] 
							}
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
						uni.hideLoading()
					}
				})
			},
			NavChange: function(e) {
				var that = this
				console.log(that.Token);
				if(e.currentTarget.dataset.cur == 'plugin'){
					if(that.UserInfoB == undefined || that.UserInfoB == null || that.UserInfoB == ''){
						uni.showModal({
							title: '请授权微信登录',
							success(res) {
								if(res.confirm){
									uni.reLaunch({
										url: '../login/login'
									})
								}
							}
						})
					} else {
						this.PageCur = e.currentTarget.dataset.cur
					}
				} else {
					this.PageCur = e.currentTarget.dataset.cur
				}
				
			}
		}
	}
</script>

<style>

</style>
