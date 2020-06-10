<template>
	<view >
		<main-head bgColor="bg-main" :isBack="true">
			<block slot="logImg"> 
				<view class="round bg-white flex justify-center align-center" style="color: #72b9ea; width: 80upx; height: 80upx; background-color: #f9f9f9; " v-if="UserInfo == '' || UserInfo == undefined || UserInfo == null">
					登录
				</view>
				<image class="cu-avatar round bg-white " style="margin: 0; width: 80upx; height: 80upx;"  v-if="UserInfo != '' && UserInfo != undefined && UserInfo != null" src="../../static/logo.png"></image>
			</block>
			<block slot="content">
				<view class=" round bg-white flex align-center" style="height: 60upx; width: 250upx; margin: 0;">
					<text class="cuIcon-search text-bold margin-left-sm text-gray margin-left-sm"></text>
				</view>
			</block>
			<block slot="other">
				<view class="margin-left">
					{{ UserPartTimePrefer[0] }}
				</view>
			</block>
			<block slot="location">
				<view @click="GoParttimeJob" style="font-size: 45upx;" class=" text-white text-bold margin-left-sm  ">
					<text class="aliicon">&#xe6ae;</text>
				</view>
			</block>
			<block slot="location">
				<view @click="GoMap" style="font-size: 45upx;" class=" text-white text-bold margin-left-sm  ">
					<text class="aliicon">&#xe649;</text>
				</view>
			</block>
		</main-head>
		
		<view class="bg-main  padding " style="width: 100%; position: fixed; z-index: 999;">
			<view class="flex align-center justify-between" style="width: 700upx;">
				<view  class="text-black text-sm text-bold">附近</view>
				<view    class=" text-sm">最新</view>
				<view   class=" text-sm">热门</view>
				<button class="shadow cu-btn sm round text-cut " style=" display: inline-block; margin: 0;  background-color: #f9f9f9; width: 150upx; text-align: center; justify-content: flex-start; line-height: 50upx; height: 50upx;">
					<text class="cuIcon-locationfill margin-right-xs"></text>五华区
				</button>
				<button class="shadow cu-btn sm round text-cut " style=" display: inline-block; margin: 0;  background-color: #f9f9f9; width: 150upx; text-align: center; justify-content: flex-start; line-height: 50upx; height: 50upx;">
					<text class="aliicon margin-right-xs">&#xe60c;</text>分类
				</button>
				<button class="shadow cu-btn sm round text-cut " style=" display: inline-block; margin: 0; background-color: #f9f9f9; width: 150upx;  line-height: 50upx; height: 50upx; text-align: center;">
					<text class="aliicon margin-right-xs">&#xe60e;</text>筛选
				</button>
			</view>
		</view>
		
		<!-- 列表风格2 -->
<!-- 		<view class="" style="margin-top: 120upx; ">
			
		</view>
		<view  class=" margin-tb-sm"  v-for="(item,index) in 10" :key="index" style="width: 100%;">
			<view class="margin-left-home flex shadow bg-white  padding-xs" style="width: 680upx; border-radius: 10upx;">
				<view class="flex">
					<image style=" width: 80upx; height: 80upx; border-radius: 10upx;  ;" class=" cu-avatar radius" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587248044876&di=66d5927b9dacd2fa4723179d9e6d2867&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F11%2F20180411180032_NyE5f.jpeg"></image>
				</view>
				<view class="flex flex-direction justify-center  " style="padding-left: 20upx; width: 580upx;">
					<view class="flex justify-between align-center">
						<view class="flex align-center flex-wrap" style="max-width: 480upx;">
							<text  class="text-cut  margin-right-sm text-bold" style="font-size: 36upx; ">挖掘机修理工</text>
							<text class="cu-tag bg-main sm radius text-cut" style="max-width: 100upx;">修理工</text>
						</view>
						<view class=" ">
							<text class="text-bold text-main">￥300</text>
						</view>
					</view>
					<view class=" flex align-center justify-between">
						<view class="flex align-stretch flex-wrap">
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">有保险</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">有信用要求</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">5级发布者</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">
								<text class="cuIcon-attention"></text>1024 
							</text>
						</view>
					</view>
					<view class="flex text-sm justify-between align-center margin-top-xs">
						<view class="">
							<view><text class="cuIcon-timefill text-gray margin-right-xs"></text>开工时间
								<text class="margin-left-sm">2020-04-20</text></view>
							<view class="flex align-center" style="width: 500upx;">
								<text style="max-width: 350upx;" class="margin-right-xs text-gray cuIcon-locationfill text-cut"></text>索菲特大酒店
								<text class="margin-left-sm">705m</text>
							</view>
						</view>
					</view>  
				</view>
			</view>
		<view class="" style="height: 165upx;">
		</view>
		</view> -->

		<!-- 列表 -->
		<view class="" style="margin-top: 100upx; ">
			
		</view>
		<view  class="padding-tb bg-white"  v-for="(item,index) in 10" :key="index" style="width: 100%; margin-top: 30upx; margin-bottom: 30upx;">
			<view class="margin-left-home flex align-center " style="width: 680upx;">
				<view class="flex align-center" style="position:  relative;">
					<image style="width: 130upx; height: 130upx; border-radius: 10upx; margin-right: 20upx;" class="cu-avatar radius margin-right-xs" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg "></image>
					<view class="radius" style="position: absolute; bottom: 0; width: 130upx; background-color: rgba(0,0,0,0.5);">
						<text style="font-size: 20upx;">5级信用分</text>
					</view>
				</view>
				<view class="" style="width: 530upx;">
					<view class="flex justify-between align-center">
						<view class="flex align-center" style="">
							<text  class="text-cut text-lg margin-right-sm" style="font-size: 34upx;">挖掘机修理工你的撒旦</text>
						</view>
						<view class=" ">
							<text class="text-gray text-sm">{{ index % 2 == 0 ? ' 修理工 | 个人 ' : '修理工 | 企业' }}</text>
						</view>
					</view>
					<view class=" flex align-center justify-between">
						<view class="flex align-stretch flex-wrap">
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">有保险</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">有信用要求</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">招5人</text>
							<!-- <text v-if="index % 2 == 0" class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0"></text> -->
<!-- 							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">
								<text class="cuIcon-attention"></text>1024 
							</text> -->
						</view>
						<text class="text-price text-main text-bold">300元</text>
					</view>
					<view class="flex text-sm justify-between align-center margin-top-xs">
						<view class="">
							<view><text class="cuIcon-calendar text-gray margin-right-xs"></text>开工时间
								<text class="margin-left-sm">2020-04-20</text></view>
							<view class="flex align-center" style="width: 500upx;">
								<text style="max-width: 350upx;" class="margin-right-xs text-gray cuIcon-locationfill text-cut"></text>索菲特大酒店
								<text class="margin-left-sm">705m</text>
							</view>
						</view>
					</view>  
				</view>
			</view>
		</view>
		<view class="" style="height: 165upx;">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				UserInfo: "",
				UserPartTimePrefer: ['全部零活', '游戏代练', '睡觉'],
				
			};
		},
		computed: {

		},
		methods: {
			GoParttimeJob(){
				uni.redirectTo({
					url: '../take-parttime-job/take-parttime-job'
				})
			},
			GoMap(){
				uni.redirectTo({
					url: '../take-job-mapR/take-job-mapR'
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
