<template>
	<view class="bg-white" style="min-height: 100vh;">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">修改信息</block></cu-custom>

		<view class="cu-form-group" style="border:0">
			<view class="title">店名</view>
			<input placeholder="店名" v-model="info.title" name="input"></input>
			<text class='cuIcon-newsfill text-main'></text>
		</view>
		<view @tap="ChangeLocation" class="cu-form-group" style="border:0">
			<view class="title">地址</view>
			<text >{{ info.address }}</text>
			<text class='cuIcon-locationfill text-main'></text>
		</view>
		<view class="cu-form-group" style="border:0">
			<view class="title">电话号码</view>
			<input placeholder="电话号码" v-model="info.tel[0]" type="number" name="input"></input>
			<text class='cuIcon-phone text-main'></text>
		</view>
		<view class="cu-form-group" style="border:0">
			<view class="title">备用号码</view>
			<input placeholder="备用号码" v-model="info.tel[1]" type="number" name="input"></input>
			<text class='cuIcon-phone text-main'></text>
		</view>
		
		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @tap="Change" class="cu-btn lg bg-main2 round margin-right" style="width: 40%;">
				<text class="cuIcon-edit margin-right-sm text-red"></text>确定修改
			</button>
		</view>
	</view>
</template>

<script>
	var jweixin = require('jweixin-module')	
	export default {
		data() {
			return {
				info: null
			};
		},
		onLoad() {
			this.wxConfig()
			this.GetInfo()
			
		},
		methods: {
			Change(){
				var that = this
				var tel = JSON.stringify([that.info.tel[0], that.info.tel[1]])
				uni.request({
						method: "POST",
						header: {token: that.MerchantToken.token},
						data: {
							address: that.info.address,
							lat: that.info.lat,
							lon: that.info.lon,
							tel: tel,
							title: that.info.title
						},
						url: that.Server + "merchant/edit",
						success(res) {
							if(res.data.code == 0){
								uni.showToast({
									title: '修改成功'
								})
								setTimeout(()=>{
									uni.navigateBack({
										
									})
								}, 1500)
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
													uni.reLaunch({
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
			ChangeLocation(){
				var that = this
				uni.chooseLocation({
					success(res) {
						uni.showLoading({
							
						})
						that.info.address = res.name
						that.info.lat = res.latitude
						that.info.lon = res.longitude
						uni.hideLoading()
					}
				})
				// wx.openLocation({
				//   latitude: 30, // 纬度，浮点数，范围为90 ~ -90
				//   longitude: 120, // 经度，浮点数，范围为180 ~ -180。
				//   name: '', // 位置名
				//   address: '', // 地址详情说明
				//   scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
				//   infoUrl: '' ,// 在查看位置界面底部显示的超链接,可点击跳转
				//   success(res) {
				//   	console.log(res);
				//   }
				// });
			},
			wxConfig(){
				var that = this
				var url = window.location.href.split("#")[0]
				var data = {
					url
				}
				console.log(url);
				uni.request({
						header: {token: that.MerchantToken.token},
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
							        jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表
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
			GetInfo(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'merchant/info',
					success(res) {
						if(res.data.code == 0){
							res.data.data.tel = JSON.parse(res.data.data.tel)
							res.data.data.tel[1] = res.data.data.tel[1] == undefined ? '' : res.data.data.tel[1]
							that.info = res.data.data
							
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
		}
		
	}
</script>

<style lang="scss">

</style>
