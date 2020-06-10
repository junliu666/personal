<template>
	<scroll-view scroll-y="true" class="scroll" @scroll="scrollChnage">
		<view class="top-section"></view>
		<view class="navbar-section" :class="{'navbar-fixed-section': isFixed}">
			<ss-navbar :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-navbar>
		</view>
		<view class="bottom-section"></view>
		<view class="footer-section"></view>
	</scroll-view>
</template>

<script>
	import ssNavbar from '@/components/ss-navbar/ss-navbar.vue'
	
	export default {
		components: {
			ssNavbar
		},
		data () {
			return {
				currentIndex: 0,
				isFixed: false,
				topHeight: 0
			}
		},
		onLoad (options) {
			uni.setNavigationBarTitle({
				title: options.title
			});
			this.calculateTopSectionHeight();
		},
		methods: {
			navbarTapHandler (index) {
				this.currentIndex = index;
			},
			scrollChnage (e) {
				let top = e.detail.scrollTop;
				if (top >= this.topHeight) {
					this.isFixed = true;
				} else {
					this.isFixed = false;
				}
			},
			/**
			 * 计算头部视图的高度
			 */
			calculateTopSectionHeight () {
				var that = this;
				let topView = uni.createSelectorQuery().select(".top-section");
				topView.fields({
					size: true
				}, data => {
					that.topHeight = data.height;
				}).exec();
			}
		}
	}
</script>

<style lang="scss">
	.scroll {
		position: absolute;
		top: 0upx;
		left: 0upx;
		bottom: 0upx;
		right: 0upx;
		
		.navbar-fixed-section {
			position: fixed;
			top: 0upx;
			left: 0upx;
			right: 0upx;
		}
		
		.top-section {
			height: 350upx;
			background-color: green;
		}
		
		.bottom-section {
			height: 1500upx;
			background-color: yellow;
		}
		
		.footer-section {
			height: 1500upx;
			background-color: blue;
		}
	}
</style>
