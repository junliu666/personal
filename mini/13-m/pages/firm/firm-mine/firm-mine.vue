<template>
	<view class="bg-white-firm" style="min-height: 100vh; ">
		<view class="bg-white" style="z-index: 999999; position: fixed; top: 0" :style="'width: 100vw; height:' + StatusBar + 'px'">
			
		</view>
		<view @click="GoPerson" class="flex justify-between align-center " :style="'padding-top:' + CustomBar + 'px'"  style=" width: 680upx; margin-left: 35upx;">
			<view class="flex align-center">
				<image src="../../../static/mine/bkc.jpg" style="width: 130upx; height: 130upx;;" class="round" mode=""></image>
				<view  style="height: 130upx;" class="flex flex-direction margin-left-sm justify-between">
					<text class="text-xlg text-sub-main-firm">姓名姓名</text>
					<text class="text-lg text-gray">店长</text>
				</view>
			</view>
			<text  class="cuIcon-right text-lg text-gray"></text>
		</view>
		<view style="margin-left: 35upx; font-size: 30upx;  margin-top: 80upx;" class="text-black">
			基本信息
			<view class="bg-main-firm round margin-top-sm" style="height: 10upx; width: 60upx;"></view>
		</view>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view @click="GoUrl(item.url)" class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
				<view class="">
					<view class="cu-tag badge" v-if="index == 0">
						<block >审核中</block>
					</view>
					<image :src="item.cuIcon" style="width: 60upx; height: 60upx;"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view style="margin-left: 35upx; font-size: 30upx; " class="text-black">
			其他操作
			<view class="bg-main-firm round margin-top-sm" style="height: 10upx; width: 60upx;"></view>
		</view>
		<view class="flex align-center justify-between margin-top-sm" style="width: 680upx; margin-left: 35upx;">
			<text class="cuIcon-service text-sub-main-firm"></text>
			<view class="padding-tb-sm margin-left-sm flex justify-between" style="width: 100%; border-bottom: 1px solid #F5F5F5;">
				<text class="text-sub-main-firm">联系客服</text>
				<text class="text-main-firm">0871-6541231</text>
			</view>
		</view>
		<view @click="GoAdvice" class="flex align-center justify-between margin-top-sm" style="width: 680upx; margin-left: 35upx;">
			<text class="aliicon text-sub-main-firm">&#xe610;</text>
			<view class="padding-tb-sm margin-left-sm flex justify-between" style="width: 100%; border-bottom: 1px solid #F5F5F5;">
				<text class="text-sub-main-firm">意见反馈</text>
				<text class="cuIcon-right text-gray text-lg"></text>
			</view>
		</view>
		<view @click="GoSwitch" class="flex align-center justify-between margin-top-sm" style="width: 680upx; margin-left: 35upx;">
			<text class="aliicon text-sub-main-firm">&#xe640;</text>
			<view class="padding-tb-sm margin-left-sm flex justify-between" style="width: 100%; border-bottom: 1px solid #F5F5F5;">
				<text class="text-sub-main-firm">更换企业</text>
				<text class="cuIcon-right text-gray text-lg"></text>
			</view>
		</view>
		<view @click="GoSwitch" class="flex align-center justify-between margin-top-sm" style="width: 680upx; margin-left: 35upx;">
			<text class="aliicon text-sub-main-firm">&#xe60f;</text>
			<view class="padding-tb-sm margin-left-sm flex justify-between" style="width: 100%; border-bottom: 1px solid #F5F5F5;">
				<text class="text-sub-main-firm">切换身份</text>
				<text class="cuIcon-right text-gray text-lg"></text>
			</view>
		</view>
		<view @click="GoSetting" class="flex align-center justify-between margin-top-sm" style="padding-bottom: 60upx; width: 680upx; margin-left: 35upx;">
			<text class="aliicon text-sub-main-firm">&#xe64a;</text>
			<view class="padding-tb-sm margin-left-sm flex justify-between" style="width: 100%; ">
				<text class="text-sub-main-firm">退出登录</text>
				<text class="cuIcon-right text-gray text-lg"></text>
			</view>
		</view>
		<view class="" style="height: 80upx;">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
				cuIconList: [{
					cuIcon: '../../../static/firm/verify.png',
					color: 'red',
					badge: 120,
					name: '企业信息',
					url: '../firm-mine/firm-info/firm-info'
				}, {
					cuIcon: '../../../static/firm/wallet.png',
					color: 'orange',
					badge: 1,
					name: '我的钱包',
					url: '../firm-mine/firm-wallet/firm-wallet'
				}, {
					cuIcon: '../../../static/firm/profit.png',
					color: 'yellow',
					badge: 0,
					name: '我的权益',
					url: '../firm-mine/firm-profit/firm-profit'
				}, {
					cuIcon: '../../../static/firm/fapiao.png',
					color: 'olive',
					badge: 22,
					name: '我的发票',
					url: '../firm-mine/firm-invoice/firm-invoice'
				}, {
					cuIcon: '../../../static/firm/resume.png',
					color: 'cyan',
					badge: 0,
					name: '报名记录',
					url: '../firm-mine/firm-resume/firm-resume'
				}],
			};
		},
		methods: {
			GoAdvice(){
				uni.navigateTo({
					url: '../firm-mine/firm-advice/firm-advice'
				})
			},
			GoSetting(){
				uni.navigateTo({
					url: '../firm-mine/firm-setting/firm-setting'
				})
			},
			GoSwitch(){
				uni.navigateTo({
					url: '../firm-mine/firm-switch/firm-switch'
				})
			},
			GoUrl(data){
				uni.navigateTo({
					url: data
				})
			},
			GoPerson(){
				uni.navigateTo({
					url: '../firm-mine/firm-person/firm-person'
				})
			},
			Gridswitch(){},
			Gridchange(){},
			hideModal(){},
		}
	}
</script>

<style lang="scss">

</style>
