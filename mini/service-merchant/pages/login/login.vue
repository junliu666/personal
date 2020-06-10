<template>
	<view class="main">
		<view class="flex flex-direction justify-between align-center" :style="heightStyle">
<!-- 			<text class="text-center" style="width: 100%; position: absolute; bottom: 10vh ; z-index: 1;">
				入驻平台或其他问题请<a> 联系客服</a>
			</text> -->
			<view class="flex flex-direction align-center">
				<view class=" flex justify-center" style=" width: 100%; margin-top: 7vh;">
					<image src="../../static/01.png" style=" width: 150upx; height: 150upx;" mode=""></image>
				</view>
				<view class=" text-center" style="width: 100%; margin-top: 50upx; font-size: 50upx;">欢迎使用XXXX商家端</view>
			</view>
			<view class="flex flex-direction align-center" style="">
				<!-- <text v-if="username != ''" class="margin-bottom text-lg text-bold" style="width: 450upx;">账号</text> -->
				<view style="margin-bottom: 80upx;" :class="username == '' ? 'flex align-center inputs' : 'flex align-center inputs2'">
					<text class="cuIcon-people margin-right-sm"></text>
					<input  confirm-type="确定" style="outline: none; border: 0; width: 80%;" type="text"  v-model="username" placeholder="请输入账号"  />
				</view>
				
				<!-- <text v-if="password != ''" class="margin-bottom text-lg text-bold" style="width: 450upx;">密码</text> -->
				<view :class="password == '' ? 'flex align-center inputs justify-between' : 'flex align-center inputs2 justify-between'">
					<text class="cuIcon-lock margin-right-sm"></text>	
					<input  confirm-type="确定" style="outline: none; border: 0; width: 80%;" :type="showPass == false ? 'password' : 'text'"  v-model="password" placeholder="请输入密码" />
					<text @tap="changeShowPass" :class=" showPass == false ? 'cuIcon-attentionforbidfill text-lg' : 'cuIcon-attentionfill text-lg'"></text>
				</view>
				<button @tap="goIndex" style="width: 500upx;" class="cu-btn round bg-main2 lg shadow">登录</button>
				<view class="flex margin-top justify-end" style="width: 500upx; text-decoration: underline;">
					<!-- 忘记密码? -->
				</view>
			</view>
			
			
			<view class="flex justify-center align-center" style="position:relative; height: 30vh; width: 100%;">
				<view  class="flex  align-center justify-between" style="z-index: 1; width: 500upx; margin-top: 150upx;">
					<view class="flex flex-direction align-center">
						<view class="bg-main3 flex align-center justify-center" style="width: 100upx; height: 100upx; border-radius: 100%;">
							<text style="font-size: 50upx;" class="cuIcon-formfill"></text>
						</view>
						<text class="margin-top">平台介绍</text>
					</view>
					<view class="flex flex-direction align-center">
						<view class="bg-main3 flex align-center justify-center" style="width: 100upx; height: 100upx; border-radius: 100%;">
							<text style="font-size: 50upx;" class="cuIcon-servicefill"></text>
						</view>
						<text class="margin-top">联系我们</text>
					</view>
					<view class="flex flex-direction align-center">
						<view class="bg-main3 flex align-center justify-center" style="width: 100upx; height: 100upx; border-radius: 100%;">
							<text style="font-size: 50upx;" class="cuIcon-group_fill"></text>
						</view>
						<text class="margin-top">关于我们</text>
					</view>
				</view>
				<image  src="../../static/bk.png" style="width: 100%; position: absolute ; left: 0; bottom: 0;  z-index: 0; height: 100%;"></image>
			</view>
			
		
		
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				username: '',
				password: '',
				showPass: false,
				hideBottom: true
			};
		},
		onLoad() {
			
		},
		computed:{
			heightStyle(){
				var heightStyle
				console.log(document.documentElement.clientHeight);
				var height = document.documentElement.clientHeight
				heightStyle = `height: ${height}px`
				return heightStyle
			}
		},
		methods:{
			ShowBottom(){
				this.hideBottom = true
			},
			HideBottom(){
				this.hideBottom = false
			},
			changeShowPass(){
				this.showPass = !this.showPass
			},
			goIndex(){
				uni.showLoading({
					
				})
				var that = this
				if(this.username == '' || this.password == ''){
					uni.showToast({
						icon: 'none',
						title: '请输入账号/密码'
					})
				} else {
					uni.request({
						method: "POST",
						url: that.Server + 'merchant/login',
						data: {
							account: that.username,
							pwd: that.password
						},
						success(res) {
							if(res.data.code == 0){
								uni.setStorage({
									key: "MerchantToken",
									data: res.data.data
								})
								Vue.prototype.MerchantToken = res.data.data
								uni.redirectTo({
									url: '../index/index'
								})
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
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh; background-color: white;
	.inputs{width: 450upx; padding-bottom: 20upx; height: 60upx; border-bottom: 2px solid #666666; margin-bottom: 80upx;}
	.inputs:hover{border-color: #f5df2c; transition: 0.5s}
	.inputs2{width: 450upx; padding-bottom: 20upx; height: 60upx; border-bottom: 2px solid #f5df2c; margin-bottom: 80upx;}
}

</style>
