<template>
	<view>
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content">我的投递</block>
			<view class="" slot="right">
			</view>
		</cu-custom>
		<view class="uni-padding-wrap uni-common-mt">
			<view :class="index == -1 ? 'padding-tb bg-white' : 'bg-white margin-bottom padding-tb'" style="width: 100%;" v-for="(item,index) in data" :key="index">
				<view class="" style="width: 680upx; margin-left: 35upx;">
					<view class="flex justify-between align-center" style="width: 100%;">
						<text class="text-black text-lg">这是个标题这是个标题</text>
						<view class="text-main text-bold">
							300元/完工结
						</view>
					</view>
					<view class="flex  align-center" style="width: 100%;">
						<text class="cu-tag radius bg-gray margin-top-xs margin-right-sm">招5人</text>
						<text class="cu-tag radius bg-gray margin-top-xs margin-right-sm">有信用要求</text>
						<text class="cu-tag radius bg-gray margin-top-xs margin-right-sm">西湖区</text>
						<text class="cu-tag radius bg-gray margin-top-xs margin-right-sm">2020年5月3日</text>
					</view>
					<view class="flex  align-center margin-top-sm" style="width: 100%;">
						<image style="width: 80upx; height: 80upx;" class="round margin-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
						<view class="flex flex-direction">
							<text class="text-gray text-sm">{{ index % 2 == 0 ? '个人发布者' : '阿里巴巴' }}</text>
							<text>我是一个发布者{{ index % 2 == 0 ? '' : '·HR' }}</text>
						</view>
					</view>
					<view class="margin-top-sm" style="height: 1px; width: 100%; background-color: #F5F5F5;">
						
					</view>
					<view class="margin-top-sm">
						投递于 2020年5月3日
					</view>
				</view>
			</view>
			<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '下拉刷新 + 加载更多',
				data: [],
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0
			}
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			this.max = 0,
			this.data = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		onReachBottom() {
			if (this.max > 40) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.setListData();
			}, 300);
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.initData();
		},
		methods: {
			initData(){
				setTimeout(() => {
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += 10;
					for (var i = this.max - 10; i < this.max + 1; i++) {
						data.push(i)
					}
					this.data = this.data.concat(data);
					uni.stopPullDownRefresh();
				}, 300);
			},
			setListData() {
				let data = [];
				this.max += 10;
				for (var i = this.max - 9; i < this.max + 1; i++) {
					data.push(i)
				}
				this.data = this.data.concat(data);
			}
		}
	}
</script>

<style scoped>
	.text {
		/* margin: 16rpx 0; */
		width:100%;
		background-color: #fff;
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		color: #555;
		border-radius: 8rpx;
	}
</style>
