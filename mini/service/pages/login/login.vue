<template>
	<view class="main" style="color: #515151">
		<cu-custom bgColor="" :isBack="false" :mainPage="true"><block slot="backText" style="font-size: 40upx;"> <text @click="showLocation" style="font-size: 50upx; margin-right: 12upx;" class=" text-main"></text> <text @click="showLocation"></text></block><block slot="content"></block></cu-custom>
		<view class="">
<!-- 			<image src="../../static/01.png" style="width: 300upx; height: 260upx; margin-left: 20upx; margin-top: 100upx;"></image>
 -->			<view class="" style="margin-top: 50upx; letter-spacing: 5upx ;font-size: 50upx; margin-left: 50upx;">
				欢迎使用云足点钟系统
			</view>
			<view class="flex align-center" style="margin-top: 50upx; letter-spacing: 5upx ;font-size: 30upx; margin-left: 50upx;">
				<text class="margin-right" style="width: 40upx; height: 10upx; border-radius: 5upx; background-color: #515151;"></text>技师线上预约管家，让服务更快捷
			</view>
			<button open-type="getUserInfo" withCredentials="true" @getuserinfo="bindGetUserInfo" style="width: 650upx; margin-left: 50upx; margin-top: 150upx;" class="lg cu-btn bg-white round shadow"><text class="cuIcon-weixin margin-right text-main text-green2" style="font-size: 40upx;"></text>微信授权登录</button>
			<button @tap="Tourist" style="width: 650upx; margin-left: 50upx; margin-top: 150upx;" class="lg cu-btn bg-grey round shadow"><text class="cuIcon-peoplefill margin-right text-main text-black" style="font-size: 40upx;"></text>游客浏览</button>
			<view style="letter-spacing: 5upx; line-height: 50upx; width: 650upx; margin-left: 50upx; margin-top: 100upx;">
				<text>授权微信登录即代表我同意云足点钟系统的</text>
				<view @tap="viewServiec" style="text-decoration: underline;">服务条款和隐私政策</view>
			</view>
			<text class="text-center" style="position: absolute; left: 0; bottom: 20upx; width: 100%;">-     version 1.0     -</text>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data() {
			return {
				code: null
			};
		},
		onLoad() {
			var that = this
			wx.login({
				success(res) {
					// console.log(res);
					that.code = res.code 
				}, fail(err){
					uni.showModal({
						content: '微信授权失败，请退出重进'
					})
				}
			})
		},
		methods: {
			Tourist(){
				uni.reLaunch({
					url: '../blank/blank'
				})
			},
			viewServiec(){
				uni.navigateTo({
					url:  "../user-service/user-service"
				})
			},
			bindGetUserInfo(e){
				var that = this
				uni.showLoading({
					title: '登陆中...'
				})
				Vue.prototype.UserInfo = e.detail.userInfo
				uni.setStorage({
					key: 'UserInfo',
					data: e.detail.userInfo
				})
				var iv = e.detail.iv
				var encryptedData = e.detail.encryptedData
				uni.request({
					method: 'POST',
					url: that.Server + 'user/login',
					data: {
						"code": that.code,
						"encryptedData": encryptedData,
						"iv": iv
					},
					success(res) {
						if(res.data.code == 0){
							uni.setStorage({
								key: "Token",
								data: res.data.data.token
							})
							console.log(res.data.data.token);
							Vue.prototype.Token = res.data.data.token
							uni.reLaunch({
								url: '../blank/blank?scene=' + that.MerchantId
							})
						} else {
							uni.hideLoading()
							uni.showModal({
								content: res.data.msg
							})
						}
					},
					fail(err) {
						uni.hideLoading()
						uni.showModal({
							content: '登录异常，请退出重进'
						})
					}
				})
			},
			// goIndex(){
			// 	var that = this
			// 	uni.getSetting({
			// 		success(res) {
			// 			if (res.authSetting['scope.userInfo']){
			// 				uni.login({
			// 					success(res) {
			// 						console.log(res);
			// 						that.code = res.code
			// 						uni.getUserInfo({
			// 							success(res) {
			// 								console.log(res);
			// 							},
			// 							fail(err) {
			// 								console.log(err);
			// 							}
			// 						})
			// 					}
			// 				})
			// 			}
			// 		}
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh; width: 100%; background-color: #f5df2c;}
</style>
