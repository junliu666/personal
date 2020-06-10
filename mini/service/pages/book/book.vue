<template>
	<view class="wrapper bg-white">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">预约技师</block></cu-custom>
		<view class="main">
			<view class="flex margin-left-sm margin-top margin-bottom">
				<button @click="changeBookStatus" :class=" isArrival == true ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm'">
					已在店内
				</button>
				<button @click="changeBookStatusB" :class=" isArrival == false ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm'">
					未到店
				</button>
			</view>
			<view class="action margin-top margin-left-sm margin-top" v-if="isArrival == false">到店时间</view>
			<view class="flex margin-left-sm margin-top-sm" v-if="isArrival == false">
				
				<button @tap="selectTime" :data-time="time1" :data-target="0" :class=" timeSelect == 0 ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm' ">
					{{ time1 }}
				</button>
				<button @tap="selectTime" :data-time="time2" :data-target="1" :class=" timeSelect == 1 ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm' ">
					{{ time2 }}
				</button>
				<button @tap="selectTime" :data-time="time3" :data-target="2" :class=" timeSelect == 2 ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm' ">
					{{ time3 }}
				</button>
				</view>
				<input type="number" maxlength="11" @blur="checkTel" v-model="tel" v-if="isArrival == false" style="margin-top: 60upx;" class="inputs margin-top margin-left-sm" placeholder="请输入联系方式 (手机号/微信号)"/>
				<input v-model="roomId" v-if="isArrival == true" style="margin-top: 60upx;" class="inputs margin-top margin-left-sm" placeholder="请输入房间号"/>
		</view>
		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @click="goBook" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class=" "></text>确定预约
			</button>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				roomId: '',
				tel: '',
				isArrival: true,
				status: null,
				time1: null,
				time2: null,
				time3: null,
				timeSelect: 0,
				timeResult: null,
				id: null
			};
		},
		onLoad(options) {
			// this.bookStatus = options.status
			this.id = options.id
			// console.log(options);
			var time = new Date()
			var hour = time.getHours()
			var min = time.getMinutes()
			var min1 = min + 20 > 60 ? min + 20 - 60 : min + 20
			min1 = min1 < 10 ? '0' + min1 : min1
			var hourNew = hour + 1
			var min2 = min + 40 > 60 ? min + 40 - 60 : min + 40
			min2 = min2 < 10 ? '0' + min2 : min2
			
			this.time1 = min + 20 > 60 ? hourNew + ':' + min1 : hour + ':' + min1
			this.time2 = min + 40 > 60 ? hourNew + ':' + min2 : hour + ':' + min2,
			min = min < 10 ? '0' + min : min
			this.time3 = hourNew + ':' + min
			
			var date = new Date()
			var year = date.getFullYear()
			var m = date.getMonth()
			m += 1
			var month = m < 10 ? '0' + m : m
			var d = date.getDate()
			var day = date.getDate() < 10 ? '0' + d : d
			var newDate = year + "-" + month + "-" + day + " " + this.time1 + ':00'
			this.timeResult = newDate
		},
		methods:{
			GetUserInfo(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'user/info',
					success(res) {
						if(res.data.code == 0){
							Vue.prototype.userServiceInfo = res.data.data
							uni.showToast({
								title: '预约成功',
								duration:1500
							})
							setTimeout(() => {
								uni.redirectTo({
									url: '../booking/booking'
								})
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
			},
			checkTel(){
				if(this.tel != '' && this.tel != '' && this.tel.length != 11){
					uni.showModal({
						content: '请填写正确手机号'
					})
				}
			},
			goBook(){
				var that = this
				if(this.isArrival == true){
					if(this.roomId == ''){
						uni.showModal({
							content: '请填写房间号'
						})
					} else {
						uni.request({
							method: "POST",
							header: {
								token: that.Token
							},
							url: that.Server + 'order/add',
							data: {
								isArrival: that.isArrival,
								roomId: that.roomId,
								staffId: parseInt(that.id),
								// tel: "",
								// arriveTime: ''
							},
							success(res) {
								if(res.data.code == 0){
									that.GetUserInfo()
								} else if (res.data.code == 101) {
									uni.showToast({
										title: '登录超时，将重新授权登录',
										duration: 500
									})
									setTimeout(() => {
										uni.reLaunch({
											url: '../login/login'
										})
									}, 500)
								} else {
									uni.showModal({
										content: res.data.msg
									})
								}
							}
						})
					}
				} else {
					if(this.tel == '' || this.tel.length != 11){
						uni.showModal({
							content: '请填写正确手机号'
						})
					} else {
						uni.request({
							method: "POST",
							header: {
								token: that.Token
							},
							url: that.Server + 'order/add',
							data: {
								isArrival: that.isArrival,
								// roomId: that.roomId,
								staffId: parseInt(that.id),
								tel: that.tel,
								arriveTime: that.timeResult
							},
							success(res) {
								if(res.data.code == 0){
									that.GetUserInfo()
								} else if (res.data.code == 101) {
									uni.showToast({
										title: '登录超时，将重新授权登录',
										duration: 500
									})
									setTimeout(() => {
										uni.reLaunch({
											url: '../login/login'
										})
									}, 500)
								} else {
									uni.showModal({
										content: res.data.msg
									})
								}
							}
						})
					}
				}
				
			},
			selectTime(e){				
				this.timeSelect = e.currentTarget.dataset.target
				var date = new Date()
				var year = date.getFullYear()
				var m = date.getMonth()
				m += 1
				var month = m < 10 ? '0' + m : m
				var d = date.getDate()
				var day = date.getDate() < 10 ? '0' + d : d
				var newDate = year + "-" + month + "-" + day + " " + e.currentTarget.dataset.time + ':00'
				this.timeResult = newDate
			},
			changeBookStatus(){
				if(this.isArrival != true){
					this.isArrival = true
				}
			},
			changeBookStatusB(){
				if(this.isArrival != false){
					this.isArrival = false
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper{min-height: 100vh;}
.main{
		.head-bg{height: 160upx; width: 100%;}
		.head{width: 700upx; position: absolute; left: 25upx; top: 200upx;
			.head-avatar{width: 160upx; height: 160upx; position: absolute; top: -70upx; border-radius: 100%; left: 295upx; z-index: 999;}
		}
		.body{width: 700upx; margin-top: 180upx; margin-left: 25upx;
			.body-inner{width: 650upx;}
		}
		.inputs{width: 700upx; border-bottom: 1px solid #f5f5f5; padding-bottom: 20upx;}
	}
</style>
