<template>
	<!--  @touchstart="TouchStart" @touchmove="TouchMove" @touchend="TouchEnd" -->
	<!-- #ifndef MP -->
	<view  style="min-height: 100vh; background-color: white;">
			<cu-custom bgColor="bg-main" :isBack="true">
				<block slot="backText"></block><block slot="content"></block>
				<view class="" slot="right">
					<text @click="ShareApp" class="cuIcon-share padding-sm" style="font-size: 40upx;"></text>
					<text class="cuIcon-favor padding-sm" style="font-size: 40upx;"></text>
					<text class="cuIcon-warn padding-sm" style="font-size: 40upx;"></text>
					
				</view>
			</cu-custom>
			
			<swiper  :current="current"    class="" @change="ChangeSwiper"  style="min-height: 82vh; ">
			    <swiper-item v-for="(jobDtail, index) in jobList" :key="index" >
					<view   style="height: 80vh; overflow-y: scroll;">
	<!-- 					<scroll-view v-if="jobDtail.imgs != undefined"  scroll-x class="flex margin-top" style="width: 700upx; margin-left: 25upx; overflow-x: scroll; white-space: nowrap; overflow: hidden;">
							<image v-if="typeof(jobDtail.imgs) == 'object'" v-for="(item, index) in jobDtail.imgs" :key="index" :src="item" class="radius" style="width: 220upx; height: 180upx; margin-right: 20upx;" mode=""></image>
							<image v-if="typeof(jobDtail.imgs) != 'object'"  :src="jobDtail.imgs" class="radius" style="width: 750upx; height: 300upx; margin-right: 20upx;" mode=""></image>
						</scroll-view> -->
						<view  class="margin-top" v-if="jobDtail.imgs != undefined  ">
							<swiper indicator-active-color="#f0f0f0"  indicator-dots="true" v-if="typeof(jobDtail.imgs) == 'object'" class="" style="width: 700upx; height: 300upx; margin-left: 25upx;">
								<swiper-item  v-if="typeof(jobDtail.imgs) == 'object'"  v-for="(item, imgIndex) in jobDtail.imgs" :key="imgIndex" >
									<image    :src="item" class="radius" style="width: 700upx; height: 300upx; margin-right: 20upx;" mode=""></image>
								</swiper-item>
							</swiper>
							<image v-if="typeof(jobDtail.imgs) != 'object'"  :src="jobDtail.imgs" class="radius" style="width: 700upx; margin-left: 25upx; height: 300upx;" mode=""></image>
						</view>
						
	<!-- 					<view class="margin-top " style="margin: 25upx; position: relative;" v-if="jobDtail.imgs != undefined && platForm =='ios'">
							<view v-if="typeof(jobDtail.imgs) == 'object'" class="round bg-main flex flex-direction justify-center align-center" style="z-index: 999;width: 90upx; height: 90upx; position: absolute; top: 10upx; right: 10upx;">
								<text class="cuIcon-picfill" style="font-size: 40upx;"></text>
								<text class="text-sm">{{ jobDtail.imgs.length }}</text>
							</view>
							<view class="flex flex-wrap" v-if="typeof(jobDtail.imgs) == 'object'">
								<image class="radius" style="width: 700upx; height: 300upx;" :src="jobDtail.imgs[0]" mode=""></image>
							</view>
							<image class="radius" style="width: 700upx; height: 300upx;" v-if="typeof(jobDtail.imgs) != 'object'"  :src="jobDtail.imgs" mode=""></image>
						</view> -->
						
						<view class="margin-top flex justify-between align-center" style="width: 700upx; margin-left: 25upx;">
							<text class="text-bold text-black" style="font-size: 40upx;">这是一个工这是一个工</text>
							<!-- <text class="text-gray">修理工</text> -->
							<text class="text-gray ">修理工</text>
						</view>
						<view v-if="jobDtail.creditRequire" class="margin-top-xs flex align-center" style="width: 700upx; margin-left: 25upx;">
							<text class="cuIcon-info margin-right-xs"></text>有信用要求
						</view>
						
						<view class="margin-top-xs flex justify-between align-center" style="width: 700upx; margin-left: 25upx;">
							<view class="flex align-center text-main">
								<text class="margin-right-xs" style="font-size: 40upx; font-weight: bolder;">{{ jobDtail.price }}</text>
								<text>{{ '元' + '/' + jobDtail.payType  }}</text></text>
							</view>
							<view class="">
								<text class="text-gray cuIcon-people">人数 {{ jobDtail.existPeople }}/{{ jobDtail.totalPeople }}</text>
							</view>
						</view>
						
						<!-- 时间 -->
						<view class=" margin-top" style="border-top: 1px solid #F5F5F5; width: 700upx; margin-left: 25upx;">
							<text class="text-gray">
								开工时间
							</text>
							<view class="margin-top-sm text-bold text-black">2020年4月20日</view>
						</view>
						
						
						<!-- 地点 -->
						<view class=" margin-top padding-top flex justify-between align-center" style="border-top: 1px solid #F5F5F5; width: 700upx; margin-left: 25upx;">
							<view class="" style="max-width: 500upx;">
								<text class="text-black" >
									{{ jobDtail.area }} · {{ jobDtail.address }}
								</text>
								
							</view>
							<view class="flex align-center justify-between" style="width: 120upx;">
								<text class="text-gray">{{ jobDtail.distance }}</text>
								<text class="cuIcon-right text-lg text-gray"></text>
							</view>
						</view>
						
						<!-- 要求 -->
								<view v-if="jobDtail.requires != undefined" class=" margin-top" style="border-top: 1px solid #F5F5F5; width: 700upx; margin-left: 25upx;">
									<view class="text-gray margin-top" style="margin-bottom: 10upx; ">
										工作要求
									</view>
									<view v-for="(item, index) in jobDtail.requires" :key="index" style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="  cu-tag radius bg-gray  ">{{ item }}</view>
								</view>
								<!-- 保险 -->
								<view class=" margin-top padding-top flex justify-between align-center" style="border-top: 1px solid #F5F5F5; width: 700upx; margin-left: 25upx;">
									<view class="" style="max-width: 500upx;">
										<text class="text-black" >
											{{ jobDtail.insurance ? '已购买保险' : '为购买保险' }}
										</text>
										
									</view>
						<!-- 			<view v-if="jobDtail.insurance" class="flex align-center justify-between" style="width: 120upx;">
										<text class="text-gray">详情</text>
										
									</view> -->
									<text v-if="jobDtail.insurance"  class="cuIcon-right text-lg text-gray"></text>
								</view>
								<view class=" margin-top" style="height: 30upx; background-color: #f9f9f9;  width: 750upx; ;">
								</view>
								<!-- 发布者 -->
								<view class=" margin-top" style="; width: 700upx; margin-left: 25upx;">
									<view class="text-bold text-lg text-black" style="">
										职位发布者
									</view>
									<view class="margin-top flex justify-between align-center" style="width: 700upx;">
										<view class="flex align-center">
											<image class="round margin-right" style="width: 100upx; height: 100upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587248044876&di=66d5927b9dacd2fa4723179d9e6d2867&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F11%2F20180411180032_NyE5f.jpeg" mode=""></image>
											<view class="flex flex-direction justify-between" style="height: 100upx;">
												<text class="text-bold text-black">{{ jobDtail.poster.name }}</text>
												<text class="text-gray">信用等级{{ jobDtail.poster.level }}</text>
											</view>
										</view>
										<text class="cuIcon-right text-lg text-gray"></text>
									</view>
								</view>
								<view class=" margin-top-lg" style="height: 30upx; background-color: #f9f9f9;  width: 750upx; ;">
								</view>
								<!-- 详情 -->
								<view class=" margin-top" style="; width: 700upx; margin-left: 25upx;">
									<view class="text-bold text-lg text-black" style="">
										职位详情
									</view>
									<view class="margin-top">
										<text style="line-height: 2;">{{ jobDtail.detail }}</text>
									</view>
								</view>
								
								<!-- 提示 -->
								<view class=" margin-top padding-top" style="; width: 700upx; margin-left: 25upx; border-top: 1px solid #F5F5F5;">
									<view class="text-bold text-lg  text-sub-main" style="">
										<text class="cuIcon-warn margin-right-sm "></text>温馨提示
									</view>
									<view class="margin-top"> 
										<text>若发单者向您收取任何费用（例如：介绍费），或者所发信息与实际情况严重不符，请点击右上角向我们举报。</text>
									</view>
								</view>	
								
					</view>
			        
			        
			        
					
			    </swiper-item>
			</swiper>
			
					
						
					
					
					
					
						
						
						
						
						
						
						
			
	
				<view class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
					<view class="action"  data-cur="basics" style="width: 60%;"> 
						<button  style="width: 60%; height: 90upx; " class="text-lg cu-btn round bg-main">报名</button>
					</view>
				</view>
	<!-- #endif -->
	
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				platForm: null,
				moveLeft: 0,
				id: 0,
				startClientX: 0,
				startClientY: 0,
				current: 0,
				jobList: [{
					payType: '完工',
					creditRequire: true,
					insurance: true,
					detail: '打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀',
					poster: {
						name: '这是一个名字',
						level: 5
					},
					requires: ['工作证', '工作证', '工作证', '工作证', '工作证', '工作证'],
					distance: '705米',
					area: '西湖区',
					address: '龙湖天街龙',
					existPeople: 1,
					totalPeople: 5,
					price: 300,
					imgs: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg'],
				}, {
					payType: '完工',
					creditRequire: true,
					insurance: true,
					detail: '打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀',
					poster: {
						name: '这是一个名字',
						level: 5
					},
					requires: ['工作证', '工作证', '工作证', '工作证', '工作证', '工作证'],
					distance: '705米',
					area: '西湖区',
					address: '龙湖天街龙',
					existPeople: 1,
					totalPeople: 5,
					price: 300,
					imgs: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg',
				}, {
					payType: '完工',
					creditRequire: true,
					insurance: true,
					detail: '打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀',
					poster: {
						name: '这是一个名字',
						level: 5
					},
					requires: ['工作证', '工作证', '工作证', '工作证', '工作证', '工作证'],
					distance: '705米',
					area: '西湖区',
					address: '龙湖天街龙',
					existPeople: 1,
					totalPeople: 5,
					price: 300,
					// imgs: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg',
				}]
			};
		},
		computed: {
			pageStyle(){
				var customeBar = this.CustomBar
				var left = this.moveLeft
				  
				var style = `position: absolute; top: ${customeBar}px; left: ${left}px`
				return style
			},
		},
		onLoad(options) {
			var that = this
			this.id = options.id
			uni.getSystemInfo({
				success(res) {
					that.platForm = res.platform
				}
			})
			console.log(this.id);
		},
		methods:{
			scroll(e){
				// this.scrollTop = e.detail.scrollTop;
			},
			transition(e){
			},
			Transition(e){
				// if(e.detail.dx < -200 && this.current == 0){
				// 	uni.navigateBack({
				// 		delta: 1
				// 	})
				// }
			},
			ChangeSwiper(e){
				console.log( e.detail.current);
				this.current = e.detail.current
				this.scrollTop = 0
			},

			// TouchEnd(e){
			// 	var data = e
			// 	var clientX = data.changedTouches[0].clientX
			// 	var id = parseInt(this.id) + 1
			// 	if( clientX - this.startClientX  < -150){
			// 		uni.redirectTo({
			// 			url: '/pages/parttime-detail/parttime-detail?id=' + id
			// 		})
			// 	} else if (clientX - this.startClientX > 150){
					
			// 	} else {
			// 		this.moveLeft = 0
			// 		this.moveRight = 0
			// 	}
			// },
			TouchMove(e){
				console.log(this.current);
				if(this.current == 0 && e.changedTouches[0].clientX - this.startClientX > 200){
					uni.navigateBack({
						delta: 1
					})
				}
			},
			TouchStart(e){
				var data = e
				this.startClientX = data.changedTouches[0].clientX;
			},
			ShareApp(){
				
			}
		}
	}
</script>

<style lang="scss">

</style>
