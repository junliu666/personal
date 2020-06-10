<template>
	<view class="container">
		<view class="header">
			<text class="title">索引下标+动画</text>
		</view>
		<ss-navbar :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-navbar>
		<view class="header">
			<text class="title">字体放大+动画</text>
		</view>
		<ss-navbar1 :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-navbar1>
		<view class="header">
			<text class="title">索引下标+无动画</text>
		</view>
		<ss-navbar2 :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-navbar2>
		<view class="header">
			<text class="title">字体放大+动画</text>
		</view>
		<ss-navbar3 :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-navbar3>
		<view class="header">
			<text class="title">索引下标+动画+自定义标题数组</text>
		</view>
		<ss-navbar :navArr="navArr1" :tabCurrentIndex="currentIndex1" @navbarTap="navbarTapHandler1"></ss-navbar>
		<ss-navbar :navArr="navArr2" :tabCurrentIndex="currentIndex2" @navbarTap="navbarTapHandler2"></ss-navbar>
		<ss-navbar :navArr="navArr3" :tabCurrentIndex="currentIndex3" @navbarTap="navbarTapHandler3"></ss-navbar>
	</view>
</template>

<script>
	import ssNavbar from '@/components/ss-navbar/ss-navbar.vue'
	import ssNavbar1 from '@/components/ss-navbar1/ss-navbar1.vue'
	import ssNavbar2 from '@/components/ss-navbar2/ss-navbar2.vue'
	import ssNavbar3 from '@/components/ss-navbar3/ss-navbar3.vue'
	
	export default {
		components: {
			ssNavbar,
			ssNavbar1,
			ssNavbar2,
			ssNavbar3
		},
		data () {
			return {
				currentIndex: 0,
				currentIndex1: 0,
				currentIndex2: 0,
				currentIndex3: 0,
				navArr1: [
					{
						title: '精选',
						url: 'choice'
					},{
						title: '关注',
						url: 'focus'
					}
				],
				navArr2: [
					{
						title: '待付款',
						url: 'waitBuy'
					},{
						title: '待发货',
						url: 'waitDeliver'
					}, {
						title: '待收货',
						url: 'waitReceive'
					}, {
						title: '待评价',
						url: 'waitEvaluate'
					}
				],
				navArr3: [
					{
						title: '优惠券',
						url: 'ticket'
					},{
						title: '收藏',
						url: 'collect'
					}, {
						title: '会员',
						url: 'member'
					}, {
						title: '经济品牌',
						url: 'cheap'
					}, {
						title: '情侣出行',
						url: 'lovers'
					}
				]
			}
		},
		onLoad (options) {
			uni.setNavigationBarTitle({
				title: options.title
			});
		},
		methods: {
			navbarTapHandler (index) {
				this.currentIndex = index;
			},
			navbarTapHandler1 (index) {
				this.currentIndex1 = index;
				var obj = this.navArr1[index];
				console.log('url:' + obj.url);
			},
			navbarTapHandler2 (index) {
				this.currentIndex2 = index;
				var obj = this.navArr2[index];
				console.log('url:' + obj.url);
			},
			navbarTapHandler3 (index) {
				this.currentIndex3 = index;
				var obj = this.navArr3[index];
				console.log('url:' + obj.url);
			}
		}
	}
</script>

<style lang="scss">
	.container {
		position: absolute;
		top: 0upx;
		left: 0upx;
		bottom: 0upx;
		right: 0upx;
		background-color: #fff;
		
		.header {
			padding: 20upx;
			
			.title {
				font-size: $uni-font-size-base;
			}
		}
	}
</style>
