<template>
	<view >
		<firmPosition v-if="tabCur=='firmPosition'"></firmPosition>
		<firmRecommend v-if="tabCur=='firmRecommend'"></firmRecommend>
		<firmPost v-if="tabCur=='firmPost'"></firmPost>
		<firmMessage v-if="tabCur=='firmMessage'"></firmMessage>
		<firmMine v-if="tabCur=='firmMine'"></firmMine>
		
		<view class="cu-bar tabbar bg-white foot" style="z-index: 999999; ">
			<view @click="ChangeTab('firmPosition')" class="action text-main-firm">
				<image style="width: 80upx; height: 80upx;" :src=" tabCur == 'firmPosition' ? '../../../static/mine/advice-focus.png' : '../../../static/mine/advice.png'" mode=""></image>
				<!-- <view class="aliicon">&#xe62a;</view> -->
				职位
			</view>
			<view @click="ChangeTab('firmRecommend')" class="action text-gray">
				<view class="aliicon">&#xe627;</view> 投递
			</view>
			<view @click="ChangeTab('firmPost')" class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-main-firm shadow"></button>
				发布
			</view>
			<view @click="ChangeTab('firmMessage')" class="action text-gray">
				<view class="cuIcon-message">
					<view class="cu-tag badge">99</view>
				</view>
				消息
			</view>
			<view @click="ChangeTab('firmMine')" class="action text-gray">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onReachBottom() {
			console.log(123);
		},
		data() {
			return {
				tabCur: 'firmPosition'
			};
		},
		methods: {
			ChangeTab(data){
				if(data == 'firmPost'){
					uni.navigateTo({
						url: '../firm-post/firm-post'
					})
				} else {
					if(this.tabCur != data){
						this.tabCur = data
					}
				}
				
			}
		}
	}
</script>

<style lang="scss">

</style>
