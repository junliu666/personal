<template>
	<view class="container">
		<view class="header">
			<text class="title">索引下标+动画</text>
		</view>
		<ss-scroll-navbar :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-scroll-navbar>
		<view class="header">
			<text class="title">字体放大+动画</text>
		</view>
		<ss-scroll-navbar1 :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-scroll-navbar1>
		<view class="header">
			<text class="title">索引下标+无动画</text>
		</view>
		<ss-scroll-navbar2 :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-scroll-navbar2>
		<view class="header">
			<text class="title">字体放大+无动画</text>
		</view>
		<ss-scroll-navbar3 :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-scroll-navbar3>
		<view class="header">
			<text class="title">索引下标+动画+自定义标题数组</text>
		</view>
		<ss-scroll-navbar :navArr="navList" :tabCurrentIndex="currentIndex1" @navbarTap="navbarTapHandler1"></ss-scroll-navbar>
	</view>
</template>

<script>
	import ssScrollNavbar from '@/components/ss-scroll-navbar/ss-scroll-navbar.vue'
	import ssScrollNavbar1 from '@/components/ss-scroll-navbar1/ss-scroll-navbar1.vue'
	import ssScrollNavbar2 from '@/components/ss-scroll-navbar2/ss-scroll-navbar2.vue'
	import ssScrollNavbar3 from '@/components/ss-scroll-navbar3/ss-scroll-navbar3.vue'
	
	export default {
		components: {
			ssScrollNavbar,
			ssScrollNavbar1,
			ssScrollNavbar2,
			ssScrollNavbar3
		},
		data () {
			return {
				currentIndex: 0,
				currentIndex1: 0,
				navList: [
					{
						title: '关注',
						url: '关注'
					}, {
						title: '推荐',
						url: '推荐'
					}, {
						title: '视频',
						url: '视频'
					}, {
						title: '武汉',
						url: '武汉'
					}, {
						title: '懂车帝',
						url: '懂车帝'
					}, {
						title: '生活',
						url: '生活'
					}, {
						title: '热点',
						url: '热点'
					}, {
						title: 'NBA',
						url: 'NBA'
					}, {
						title: '小视频',
						url: '小视频'
					}, {
						title: '国际',
						url: '国际'
					}, {
						title: '影视',
						url: '影视'
					}, {
						title: '娱乐',
						url: '娱乐'
					}, {
						title: '科技',
						url: '科技'
					}, {
						title: '美食',
						url: '美食'
					}, {
						title: '财经',
						url: '财经'
					}, {
						title: '军事',
						url: '军事'
					}, {
						title: '感情',
						url: '感情'
					}, {
						title: '手机',
						url: '手机'
					}, {
						title: '三农',
						url: '三农'
					}, {
						title: '幸福里',
						url: '幸福里'
					}, {
						title: '回答',
						url: '回答'
					}, {
						title: '读书',
						url: '读书'
					}, {
						title: '体育',
						url: '体育'
					}, {
						title: '穿搭',
						url: '穿搭'
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
				var obj = this.navList[index];
				console.log('url：' + obj.url);
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
