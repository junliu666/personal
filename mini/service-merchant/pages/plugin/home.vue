<template name="components">
	<view>
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"></block><block slot="content">商户中心</block></cu-custom>	
		<view class="main" >
			<view @tap="changeInfo" class="header justify-between align-center flex bg-black padding-top padding-bottom" style="width: 100%; z-index: 999;">
				<view class="flex align-center padding-bottom-xs">
<!-- 					<image src="../../static/girls/2.jpg" style="width: 160upx; height: 160upx; border-radius: 100%;" class="margin-left-sm"></image>
 -->				<view class="flex flex-direction justify-between margin-left" >
						<view class="flex align-center">
							<text class="cuIcon-shopfill margin-right-sm"></text>{{ MerchantInfo.title == null  ? '未命名' : MerchantInfo.title }}
						</view>
						<view class="flex align-center margin-top-sm">
							<text class="cuIcon-timefill margin-right-sm"></text>入驻时间：{{ MerchantInfo.create_time == null  ? '未设置' : MerchantInfo.create_time.split(' ')[0] }}
						</view>
						<view class="flex align-center margin-top-sm">
							<text class="cuIcon-locationfill margin-right-sm"></text>地址：{{ MerchantInfo.address == null  ? '未设置' :  MerchantInfo.address }}
						</view>
						<view class="flex align-center margin-top-sm">
							<text class="cuIcon-dianhua margin-right-sm"></text>联系方式：<text class="margin-right-xs" v-for="(item, index) in MerchantInfo.tel">{{ item }}</text> 
						</view>
					</view>
				</view>
				<view class="margin-right">
					<text class="cuIcon-right"></text>
				</view>
			</view>
			
			<!-- 正在预约 -->
<!-- 			<view @click="goBooking" class="booking margin-left-sm margin-top flex justify-around align-center bg-main2">
				<view class="flex align-center">
					<text class="cuIcon-infofill margin-right-xs"></text>
					<text>正在预约中...</text>
				</view>
				<text class="cuIcon-right "></text>
			</view> -->
			
			<!-- 选项 -->
			<view  class="body margin-left-sm bg-white margin-top " style="margin-bottom: 120upx;">
				<view @click="showQrCode" class="items flex  padding-top">
					<text class="cuIcon-qrcode text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>商家二维码</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @click="goSwiper" class="items flex  padding-top">
					<text class="cuIcon-album text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>轮播图管理</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @click="goPass" class="items flex  padding-top">
					<text class="cuIcon-lock text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>密码设置</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @click="goService" class="items flex  padding-top">
					<text class="cuIcon-activityfill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>服务项目</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
<!-- 				<view @click="goBookingHis" class="items flex  padding-top">
					<text class="cuIcon-formfill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>店员管理</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view> -->
				<view @click="goPresentHis" class="items margin-top flex  padding-top">
					<text class="cuIcon-presentfill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>打赏收益</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @tap="CallService" class="items margin-top flex  padding-top">
					<text class="cuIcon-servicefill text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>联系客服</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view class="items margin-top flex  padding-top">
					<text class="cuIcon-read text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside padding-bottom">
						<text>用户协议</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view class="items margin-top flex  padding-top">
					<text class="cuIcon-group text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside-2">
						<text>关于我们</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<view @tap="logOut" class="items margin-top flex  padding-top">
					<text class="cuIcon-back_android text-main margin-right" style="font-size: 40upx;"></text>
					<view class="flex justify-between items-inside-2">
						<text>退出登录</text>
						<text class="cuIcon-right text-gray margin-right"></text>
					</view>
				</view>
				<!-- <image style="width: 50upx; height: 50upx;" :src="testImg" mode=""></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["testImg", "MerchantInfo"],
		name: "components",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
			};
		},
		mounted(){
			console.log(this.$props.MerchantInfo);
		},
		methods: {
			logOut(){
				uni.clearStorage()
				uni.reLaunch({
					url: "../blank/blank"
				})
			},
			changeInfo(){
				console.log(123);
				uni.navigateTo({
					url: "../edit-info/edit-info"
				})
			},
			CallService(){
				uni.makePhoneCall({
					phoneNumber: "12345"
				})
			},
			showQrCode(){
				var that = this
				uni.previewImage({
					urls: [that.$props.testImg],
					current: 0
				})
			},
			goPass(){
				uni.navigateTo({
					url: "../pass-question/pass-question"
				})
			},
			goService(){
				uni.navigateTo({
					url: '../service-management/service-management'
				})
			},
			goSwiper(){
				uni.navigateTo({
					url: '../swiper/swiper'
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
