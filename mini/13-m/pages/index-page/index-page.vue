<template>
	<view style="min-height: 100vh; background-color: white;">
		
		<takePartTime @PageScroll="PageScroll" v-if="PageCur=='takePartTime'"></takePartTime>
		<takeFullTime v-if="PageCur=='takeFullTime'"></takeFullTime>
		<communicationList v-if="PageCur=='communicationList'"></communicationList>
		<mineHome v-if="PageCur=='mineHome'"></mineHome>
		
		
		<view class="cu-bar tabbar bg-foot foot" style="margin-top: 250upx; box-shadow: none; border: 0; justify-content: space-between; height: 150upx; background: transparent;">
<!-- 			<view class="action" @click="NavChange" data-cur="takePartTime">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='takePartTime'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='takePartTime'?'text-green':'text-gray'">接活</view>
			</view> -->
<!-- 			<view class="action" @click="NavChange" data-cur="takeFullTime">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'takeFullTime'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='takeFullTime'?'text-green':'text-gray'">找工作</view>
			</view> -->
			<view class="flex justify-start"   style="  z-index: -1; width: 80%; height: 100%;" >
				
			</view>
			<view class="flex justify-end align-center"   data-cur="communicationList" style="position: absolute; top: 0; right: 0; width: 50%; background-color: #efeff7; height: 100%; border-top-left-radius: 9999upx;">
				<button @click="PostTask" class="cu-btn text-white round flex align-center justify-center bg-sub-main margin-right"  style="font-size: 36upx; width: 100upx; height: 100upx;  ">
					<image src="../../static/post.png" style="width: 50upx; height: 50upx;"></image>
				</button>
				<button @click="MessageList" class="cu-btn text-white round flex align-center justify-center bg-main margin-right"  style="width: 100upx; height: 100upx;">
					<view class="cuIcon-messagefill text-lg " style="font-size: 55upx;">
						<view class="badge sm bg-sub-main cu-tag" style="">
							new
						</view>
					</view> 
				</button>
			</view>
<!-- 			<view class="action" @click="NavChange" data-cur="mineHome">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'mineHome'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mineHome'?'text-green':'text-gray'">我的</view>
			</view> -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				reachBottom: false,
				PageCur: 'takePartTime'
			}
		},
		onReachBottom() {
			
		},
		methods: {
			PageScroll(data){
				console.log(data);
				// setTimeout(() => {
					uni.pageScrollTo({
						duration: 0,
						scrollTop: data
					})
				// }, 100)
				
			},
			PostTask(){
				uni.navigateTo({
					url: "../post-parttime-job/post-parttime-job"
				})
			},
			MessageList(){
				uni.navigateTo({
					url: "../communication-list/communication-list"
				})
			},
			NavChange: function(e) {
				
				this.PageCur = e.currentTarget.dataset.cur
			},
			GoIndex(){ 
				uni.navigateTo({
					url: '../index/index'
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
