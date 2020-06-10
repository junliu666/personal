<template>
	<view style="height: 100vh;">
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content">进行中的任务</block>
			<view class="" slot="right">
			</view>
		</cu-custom>
		<view class=" bg-main padding-sm" :style="NavStyle" >
			<view  class="flex align-center" style="width: 100%; ">
				<view @click="ChangeNav(index)" :class=" index == tabCur ? 'text-center text-lg text-bold' : 'text-center text-lg'" :style="'width:' + 100/nav.length + 'vw'" :key="index" v-for="(item, index) in nav">
					{{ item }}
				</view>
			</view>
			<view class="round bg-white margin-top-xs" :style="'transform:translateX(' + ((710/ (2 * nav.length)) * (2 * (tabCur+1) - 1) - 23 )  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'">
			</view>
		</view>
		
		<view class="" @touchstart="touchstart" @touchend="touchend" style="min-height: 80vh;">
			<view class="" style="height: 120upx;">
						
					</view>
			<!-- 		<swiper :indicator-dots="false" :autoplay="false" style="min-height: 78vh;">
						<swiper-item>
							
							
						</swiper-item>
						<swiper-item>
							
						</swiper-item>
					</swiper> -->
					<!-- 				<view class="flex align-center margin-top-xs">
										<text class="cuIcon-calendar text-gray " style="font-size: 30upx; width: 40upx;"></text>
										开工时间
										<text class="">2020-04-20</text>
									</view>
									<view class="flex align-center margin-top-xs">
										<text style="font-size: 30upx; width: 40upx;" class=" text-gray cuIcon-location" ></text>
										<text style="width: 600upx;" class="text-cut">西湖区·索菲特大酒店</text>
									</view> -->
									<!-- <view style="width: 640upx;" class="text-cut margin-top-xs">任务详细描述任务详细描述任务详细描述任务详细描述</view> -->
			
					
					<view v-if="tabCur==0" @click="ViewDetailPost" class=" shadow-blur flex flex-direction   bg-white margin-tb" style=" box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06); padding: 20upx; border-radius: 15upx; width: 680upx; margin-left: 35upx; "   v-for="(item,indexx) in postList" :key="indexx">
					<view class="">
					<view style="width: 640upx;" class="flex justify-between text-lg text-black">
						<view class="flex align-center">
							<text class="bg-main radius cu-tag sm margin-right-xs">待完成</text>
							<text>{{ item.title }}</text>
							
						</view>
						
						
					</view>
					<view class="flex align-center margin-top-xs justify-between">
						<view class="">
							总费用
							<text class="">600元·5人</text>
						</view>
						<text class="text-gray"></text>
					</view>
						
					</view>
					
					<view class="margin-top-xs text-sm text-gray">
						发布于2020年4月10号
					</view>					
					</view>
					
					<view v-if="tabCur==1"  @click="ViewDetailTake" class=" shadow-blur flex flex-direction   bg-white margin-tb" style=" box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06); padding: 20upx; border-radius: 15upx; width: 680upx; margin-left: 35upx; "  v-for="(item,index) in takeList" :key="index">
						<view class="flex ">
							<view class="">
								<view  class="flex text-lg text-black align-center justify-between"> 
									<text class="bg-main radius cu-tag sm margin-right-xs">进行中</text>
									<view class="flex align-center">
										<text>任务标题标题标题标题</text>
										
									</view>
									
									
									
								</view>
								<view class="flex align-center margin-top-xs">
									
									<text class=" text-main text-bold">300元/完工结</text>
								</view>
							</view>
						</view>
						<view class="flex align-center justify-between" style="width: 100%;">
							<view class="flex align-center margin-top-xs">
								<image class="round" style="width: 80upx; height: 80upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
								<view class="flex flex-direction margin-left-sm">
									<text class="text-sm text-gray">{{ index % 2 == 0 ? '个人发布者' : '阿里巴巴' }}</text>
									<text class=" ">发布者昵称你{{ index % 2 == 0 ? '' : '·HR' }}</text>
								</view>
								
							</view>
							<view class="margin-top-xs text-sm text-gray">
								2020年4月10号
							</view>
						</view>
						
					</view>
					
					<view class="" style="height: 30upx;">
						
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
				postList: [{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123}],
				takeList: [{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321}],
				nav: ["我的发布", "我的接单"],
				tabCur: 0,
				startClientX: '',
			}
		},
		components:{},
		computed: {
			NavStyle(){
				var CustomBar = this.CustomBar
				var NavStyle = `z-index: 999; position: fixed; top: ${CustomBar}px; left: 0; right: 0;  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);`
				return NavStyle
			},
			divStyle(){
				var CustomBar = this.CustomBar
				var divStyle = `height: ${CustomBar}px`
				return divStyle
			},
		},
		methods: {
			scrolltolower(e){
				console.log(e);
			},
			ChangeNav(data){
				this.tabCur = data
				uni.pageScrollTo({
					duration: 0,
					scrollTop: 0
				})
			},
			ViewDetailTake(){
				uni.navigateTo({
					url: '../doing-parttimejob-detail/doing-parttimejob-detail'
				})
			},
			ViewDetailPost(){
				uni.navigateTo({
					url: '../doing-parttimejob-poster-detail/doing-parttimejob-poster-detail'
				})
			},
			touchstart(e){
				this.startClientX = e.changedTouches[0].clientX;
			},
			touchend(e){
				if(this.tabCur == 0 && e.changedTouches[0].clientX - this.startClientX < -100){
					
					this.tabCur = 1
					
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 0
					})
				} else if(this.tabCur == 1 && e.changedTouches[0].clientX - this.startClientX > 100){
					this.tabCur = 0
					
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 0
					})
				}
				
			},
		}
	}
</script>

<style>

</style>
