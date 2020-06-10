<template name="components">
	<view>
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"></block><block slot="content">我的</block></cu-custom>	
		<view class="main">
			<view class="header justify-between align-center flex bg-black padding-top padding-bottom" style="width: 100%">
				<view class="flex align-center">
					<image :src="UserInfoB.userInfo.headimgurl" style="width: 160upx; height: 160upx; border-radius: 100%;" class="margin-left-sm"></image>
					<view class="flex flex-direction justify-between margin-left" style="height: 100upx">
						<text>{{ UserInfoB.userInfo == undefined ? '用户' : UserInfoB.userInfo.nickname }}</text>
						<text>注册时间：{{ UserInfoB.userInfo.createTime.split(' ')[0] }}</text>
					</view>
				</view>
				<view class="margin-right">
					<!-- <text class="cuIcon-right"></text> -->
				</view>
			</view>
			
			<!-- 正在预约 -->
			<view @click="goBooking" v-if="bookingStauts == true" class="booking margin-left-sm margin-top flex justify-around align-center bg-main2">
				<view class="flex align-center">
					<text class="cuIcon-infofill margin-right-xs"></text>
					<text>当前预约...</text>
				</view>
				<text class="cuIcon-right "></text>
			</view>
			
			<!-- 选项 -->
			<view  class="body margin-left-sm bg-white margin-top">
				<view @click="goFollow" class="items flex  padding-top">
					<text class="cuIcon-likefill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>关注技师</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @click="goBookingHis" class="items flex  padding-top">
					<text class="cuIcon-formfill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>预约记录</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @click="goPresentHis" class="items margin-top flex  padding-top">
					<text class="cuIcon-presentfill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>打赏记录</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @tap="ContactService" class="items margin-top flex  padding-top">
					<text class="cuIcon-servicefill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>联系客服</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @tap="UserTerms" class="items margin-top flex  padding-top">
					<text class="cuIcon-read text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>用户协议</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
<!-- 				<view @tap="AboutUs" class="items margin-top flex  padding-top">
					<text class="cuIcon-group text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside-2">
						<text>关于我们</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["bookingStauts", "UserInfoB"],
		name: "components",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				avatar: '',
				nickname: '',
				userInfo: '',
			};
		},
		mounted() {		
			console.log(this.UserInfoB);
			// this.avatar = this.UserInfo.avatarUrl
			// this.nickname = this.UserInfo.nickName
			// this.GetUserInfo()
		},
		methods: {
			AboutUs(){
				uni.showToast({
					icon: 'none',
					title: '请等待版本更新'
				})
			},
			ContactService(){
				uni.showModal({
					title: "请发送邮件至srwswlkj_0793@163.com",
					confirmText: '复制邮箱',
					success(res) {
						if(res.confirm){
							uni.setClipboardData({
								data: "srwswlkj_0793@163.com"
							})
						}
					}
				})
				
			},
			UserTerms(){
				uni.navigateTo({
					url: '../user-service/user-service'
				})
			},
			GetUserInfo(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'user/info',
					success(res) {
						if(res.data.code == 0){
							that.userInfo = res.data.data
						} else if (res.data.code == 100) {
							uni.showToast({
								title: '登录超时，请重新授权登录',
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
			},
			goFollow(){
				uni.navigateTo({
					url: '../follows/follows'
				})
			},
			toChild(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
			goBooking(){
				uni.navigateTo({
					url: '../booking/booking'
				})
			},
			goBookingHis(){
				uni.navigateTo({
					url: '../booking-history/booking-history'
				})
			},
			goPresentHis(){

				uni.navigateTo({
					url: '../present-history/present-history'
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.main{
		.booking{width: 700upx; height: 100upx; border-top-right-radius: 50upx; border-top-left-radius: 50upx; border-bottom-left-radius: 50upx; border-bottom-right-radius: 50upx;}
		.body{width: 700upx; padding-top: 20upx; padding-bottom: 20upx; border-radius: 10upx;
			.items{width: 680upx; margin-left: 20upx;
				.items-inside{width: 100%; border-bottom: 1px solid #f5f5f5;}
				.items-inside-2{width: 100%; }
			}
		}
	}
</style>
