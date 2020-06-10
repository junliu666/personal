<template>
	<scroll-view class="scroll" scroll-y="true" >
		<block v-for="(item, index) in navbarList" :key="index">
			<view @click="rowHandler(item.url, item.title)" class="row">
				<view class="row-left">
					<text>{{item.title}}</text>
				</view>
				<view class="row-right">
					<image class="icon" src="../../static/png/right_arrow.png" mode="aspectFill"></image>
				</view>
			</view>
		</block>
		<view></view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				navbarList: [
					{
						title: '置顶导航栏（不可左右滑动）',
						url: 'demo1'
					}, {
						title: '滑动置顶导航栏（不可左右滑动）',
						url: 'demo2'
					}, {
						title: '置顶导航栏（可左右滑动）',
						url: 'demo3'
					}, {
						title: '滑动置顶导航栏（可左右滑动）',
						url: 'demo4'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			rowHandler (url, title) {
				uni.navigateTo({
					url: '../' + url + '/' + url + '?title=' + title
				});
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
		background-color: #fff;
		
		.row {
			display: flex;
			padding: 20upx 0upx;
			position: relative;
			
			&:after{
				content: '';
				position: absolute;
				left: 30upx;
				right: 30upx;
				bottom: 0;
				height: 0;
				border-bottom: 1px solid $uni-border-color;
				transform: scaleY(50%);
			}
			
			.row-left {
				width: 90%;
				padding-left: 20upx;
				font-size: $uni-font-size-base;
			}
			
			.row-right {
				width: 10%;
				
				.icon {
					width: 30upx;
					height: 30upx;
				}
			}
		}
	}
</style>
