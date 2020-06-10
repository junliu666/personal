<template>
	<view>
		<view v-if="userInfo.merchant_id == undefined || userInfo.merchant_id == null || userInfo.merchant_id == ''" @tap="StaffScan" class="flex justify-center align-center flex-direction" style="width: 100vw; height: 100vh;">
			<text class="cuIcon-scan lg text-bold" style="font-size: 100upx;"></text>
			<text class="margin-top">扫码绑定商家</text>
		</view>
		<view  v-if="userInfo.merchant_id != undefined && userInfo.merchant_id != null && userInfo.merchant_id != ''">
			<basics @ServiceAdd="ServiceAdd" @UpService="UpService" :currentOrder="currentOrder" :serviceList="serviceList" @CancelOrder="CancelOrder" :userInfo="userInfo" v-if="PageCur=='basics'"></basics>
			<components @ChangeOrderStatus="ChangeOrderStatus" :totalCount="totalCount" :orderList="orderList" v-if="PageCur=='component'"></components>
			<plugin :userInfo="userInfo" @MineGoOrderList="MineGoOrderList" v-if="PageCur=='plugin'"></plugin>
			
			<view class="cu-bar tabbar bg-white  foot">
				<view class="action" @click="NavChange" data-cur="basics">
					<view class='cuIcon-cu-image'>
						<text :class=" PageCur == 'basics' ? 'cuIcon-timefill' : 'cuIcon-timefill text-gray'"></text>
					</view>
					<view :class="PageCur=='basics'?'text-green':'text-gray'">当前预约</view>
				</view>
				<view class="action" @click="NavChange" data-cur="component">
					<view class='cuIcon-cu-image'>
						<text :class=" PageCur == 'component' ? 'cuIcon-formfill text-green' : 'cuIcon-formfill text-gray'"></text>
					</view>
					<view :class="PageCur=='component'?'text-green':'text-gray'">预约记录</view>
				</view>
				<view class="action" @click="NavChange" data-cur="plugin">
					<view class='cuIcon-cu-image'>
						<text :class=" PageCur == 'plugin' ? 'cuIcon-shopfill text-green' : 'cuIcon-shopfill text-gray'"></text>
					</view>
					<view :class="PageCur=='plugin'?'text-green':'text-gray'">我的</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Vue from 'vue'
	var jweixin = require('jweixin-module')	
	export default {
		data() {
		return {
				totalCount: 0,
				serviceList: '',
				userInfo: null,
				PageCur: 'basics',
				
				currentOrder: null,
				busyStatus: 0,
				
				
				page: 1,
				totalPage: null,
				orderList: [],
				orderStatus: 1,
				load: false
			}
		},
		onLoad() {
			var that = this
			
				that.wxConfig()
				
				uni.showLoading({
					
				})
				this.GetOrderList()
				this.GetCurrentOrder()
				
				this.GetServiceList()
			
			
			
			
		},
		onShow() {
				this.GetStaffInfo()
			
		},
		onReachBottom() {
			var that = this
			if(that.page < that.totalPage){
				that.page += 1
				that.GetOrderList()
			}
		},
			
		methods: {
			StaffScan(){
				var that = this
				jweixin.scanQRCode({
					scanType: [],
					needResult: 1,
					success(res){
						var data = {
							code: res.resultStr
						}
						
						uni.request({
							header: {token: that.Token},
							data,
							url: that.Server + 'staff/code',
							success(res) {
								if(res.data.code == 0){
									uni.showToast({
										icon: 'none',
										title: '绑定成功，请填写资料',
										duration: 1500,
										success() {
											setTimeout(() => {
												uni.redirectTo({
													url: '../newStaff/newStaff'
												})
											}, 1500)
										}
									})
								} else if (res.data.code == 500){
									uni.showToast({
										icon: 'none',
										title: res.data.msg
									})
								} else if (res.data.code == 101){
									uni.clearStorageSync()
									uni.showToast({
										icon: 'none',
										title: '登录超时，重新登录',
										duration: 1500,
										success() {
											setTimeout(() => {
												uni.redirectTo({
													url: '../blank/blank'
												})
											}, 1500)
										}
									})
								}
							}
						})
					}
				})
			},
			wxConfig(){
				var that = this
				var url = window.location.href.split("#")[0]
				var data = {
					url
				}
				uni.request({
						header: {token: that.Token},
						data: data,
						url: "https://www.qiafantech.com/club/wx/config",
						success(res) {
							if(res.data.code == 0){
								jweixin.config({
							        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							        appId: res.data.data.appId, // 必填，公众号的唯一标识
							        timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
							        nonceStr: res.data.data.noncestr, // 必填，生成签名的随机串
							        signature: res.data.data.signature,// 必填，签名
							        jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
							    });
							} else if (res.data.code == 500){
										uni.showToast({
											icon: 'none',
											title: res.data.msg
										})
									} else if (res.data.code == 101){
										uni.clearStorageSync()
										that.loadModal = false
										uni.showToast({
											icon: 'none',
											title: '登录超时，重新登录',
											duration: 2000,
											success() {
												setTimeout(() => {
													uni.redirectTo({
														url: '../blank/blank'
													})
												}, 500)
											}
										})
									}
							setTimeout(() => {
								that.loadModal = false
							})
						}
					})
			},
			
					
			ServiceAdd(data){
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'order/extendOrder',
					data: {
						orderId: data.id,
						endTime: data.endTime
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.GetCurrentOrder()
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			
			ChangeOrderStatus(data){
				var that = this
				that.totalPage = 0
				that.orderStatus = data
				that.page = 1
				that.orderList = []
				that.GetOrderList()
			},
			UpService(data){
				var that = this
				uni.showLoading({
					
				})
				uni.request({
					method: "POST",
					header: {token: that.Token},
					url: that.Server + 'order/startOrder',
					data,
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.GetCurrentOrder()
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			MineGoOrderList(){
				this.PageCur = 'component'
			},
			GetOrderList(){
				uni.showLoading({
					
				})
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'order/list',
					data: {
						page: that.page,
						status: that.orderStatus,
						size: 10
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.totalPage = res.data.data.totalPage
							that.totalCount = res.data.data.totalCount
							for(var i in res.data.data.list){
								if(res.data.data.list[i].project_info != undefined){
									res.data.data.list[i].project_info = JSON.parse(res.data.data.list[i].project_info)
								}
								
								that.orderList.push(res.data.data.list[i])
							}
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			GetServiceList(){
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'merchantProject/list',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.serviceList = res.data.data
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
								})
							}, 2000)
						} else {
							// uni.showToast({
							// 	icon: "none",
							// 	title: "",
							// 	duration: 1000
							// })
						}
					}
				})
			},
			GetStaffInfo(){
				
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'staff/info',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							
							res.data.data.imgs = res.data.data.imgs == undefined ? '' : JSON.parse(res.data.data.imgs)
							that.userInfo = res.data.data
							Vue.prototype.UserInfo = res.data.data
							
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			ChangeStatus(data){
				var that = this
				console.log(data);
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'staff/updStatus',
					data: {
						status: data.targetStatus,
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							uni.showToast({
								icon: 'none',
								title: data.targetStatus == true && data.workStatus == 0 ? '取消预约成功' : data.targetStatus == true && data.workStatus == 1 ? '提前下钟成功' : data.targetStatus == false ? '已改变为忙碌状态' : ''
							})
							that.GetCurrentOrder()
							that.GetStaffInfo()
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			CancelOrder(data){
				var that = this
				uni.showModal({
					content: data.targetStatus == false ? '确定已被预约吗？' : data.targetStatus == true && data.workStatus == 0 ? '确定已经空闲吗？' : data.targetStatus == true && data.workStatus == 1 ? '确定提前下钟吗？' : '',
					success(res) {
						if(res.confirm){
							if(data.targetStatus == true && data.workStatus == 0 && data.id != undefined){
								uni.request({
									header: {token: that.Token},
									url: that.Server + 'order/cancel',
									data: {
										orderId: data.id,
									},
									success(res) {
										uni.hideLoading()
										if(res.data.code == 0){
											that.ChangeStatus(data)
											
										} else if (res.data.code == 101) {
											uni.clearStorageSync()
											uni.showToast({
												icon: "none",
												title: '登录超时，将重新授权登录',
												duration: 1000
											})
											setTimeout(() => {
												uni.reLaunch({
													url: '../blank/blank'
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
							} else if ( data.targetStatus == true && data.workStatus == 0 && data.id == undefined ) {
								that.ChangeStatus(data)
							}  else if ( data.targetStatus == false ) {
								that.ChangeStatus(data)
							} else if (data.targetStatus == true && data.workStatus == 1){
								uni.request({
									header: {token: that.Token},
									url: that.Server + 'order/finishOrder',
									data: {
										orderId: data.id,
									},
									success(res) {
										uni.hideLoading()
										if(res.data.code == 0){
											that.ChangeStatus(data)
											that.GetStaffInfo()
										} else if (res.data.code == 101) {
											uni.clearStorageSync()
											uni.showToast({
												icon: "none",
												title: '登录超时，将重新授权登录',
												duration: 1000
											})
											setTimeout(() => {
												uni.reLaunch({
													url: '../blank/blank'
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
					}
				})
			},
			GetCurrentOrder(){
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'order/currOrder',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.currentOrder = res.data.data
							res.data.data.totalCount == 0 ? that.busyStatus = 0 : that.busyStatus = 1
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
