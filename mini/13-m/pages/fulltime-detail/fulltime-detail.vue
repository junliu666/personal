<template>
	<!--  @touchstart="TouchStart" @touchmove="TouchMove" @touchend="TouchEnd" -->
	<view  style="min-height: 100vh; background-color: white;">
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content"></block>
			<view class="" slot="right">
				<text @click="ShareApp" class="cuIcon-share padding-sm" style="font-size: 40upx;"></text>
				<text class="cuIcon-favor padding-sm" style="font-size: 40upx;"></text>
				<text class="cuIcon-warn padding-sm" style="font-size: 40upx;"></text>
				
			</view>
		</cu-custom>
		
		<swiper  :current="current"    class="" @change="ChangeSwiper" style="min-height: 82vh; ">
		    <swiper-item v-for="(jobDtail, index) in jobList" :key="index" >
				<view  style="height: 80vh; overflow-y: scroll;">
<!-- 					<scroll-view v-if="jobDtail.imgs != undefined"  scroll-x class="flex margin-top" style="width: 700upx; margin-left: 25upx; overflow-x: scroll; white-space: nowrap; overflow: hidden;">
						<image v-if="typeof(jobDtail.imgs) == 'object'" v-for="(item, index) in jobDtail.imgs" :key="index" :src="item" class="radius" style="width: 220upx; height: 180upx; margin-right: 20upx;" mode=""></image>
						<image v-if="typeof(jobDtail.imgs) != 'object'"  :src="jobDtail.imgs" class="radius" style="width: 750upx; height: 300upx; margin-right: 20upx;" mode=""></image>
					</scroll-view> -->
<!-- 					<view  class="margin-top" v-if="jobDtail.imgs != undefined  ">
						<swiper indicator-active-color="#f0f0f0"  indicator-dots="true" v-if="typeof(jobDtail.imgs) == 'object'" class="" style="width: 700upx; height: 300upx; margin-left: 25upx;">
							<swiper-item  v-if="typeof(jobDtail.imgs) == 'object'"  v-for="(item, imgIndex) in jobDtail.imgs" :key="imgIndex" >
								<image    :src="item" class="radius" style="width: 700upx; height: 300upx; margin-right: 20upx;" mode=""></image>
							</swiper-item>
						</swiper>
						<image v-if="typeof(jobDtail.imgs) != 'object'"  :src="jobDtail.imgs" class="radius" style="width: 700upx; margin-left: 25upx; height: 300upx;" mode=""></image>
					</view> -->
					
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
						<text class="text-bold text-black" style="font-size: 40upx; width: 400upx;">这是一个工这是一个工</text>
						<!-- <text class="text-gray">修理工</text> -->
						
					</view>
					<view class="flex align-center margin-top text-main" style="width: 700upx; margin-left: 25upx;">
						<text class="text-main text-bold text-lg text-price" style="">{{ jobDtail.price }}-{{ jobDtail.price }}K{{ jobDtail.salaryTime < 13 ? '' : '·'+ jobDtail.salaryTime + '薪' }}</text>
						<!-- <text>{{ '元' + '/' + jobDtail.payType  }}</text></text> -->
					</view>
					<view class="margin-top-sm flex align-center" style="width: 700upx; margin-left: 25upx;">
						<view class="flex align-center">
							<text class="aliicon margin-right-xs">&#xe62a;</text>{{ jobDtail.career }}
						</view>
						<view class="flex align-center margin-left">
							<text class="aliicon margin-right-xs">&#xe788;</text>{{ jobDtail.workYear }}
						</view>
						<view class="flex align-center margin-left">
							<text class="aliicon margin-right-xs">&#xe604;</text>{{ jobDtail.education }}
						</view>
					</view>	
					<!-- 发布者 -->
					<view class=" margin-top" style="; width: 700upx; margin-left: 25upx;">
						<view class="margin-top flex justify-between align-center" style="width: 700upx;">
							<view class="flex align-center">
								<image class="round margin-right" style="width: 100upx; height: 100upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587248044876&di=66d5927b9dacd2fa4723179d9e6d2867&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F11%2F20180411180032_NyE5f.jpeg" mode=""></image>
								<view class="flex flex-direction justify-between" style="height: 100upx;">
									<text class="text-bold text-black">{{ jobDtail.poster.people.name }}</text>
									<text class="text-gray">{{ jobDtail.poster.company.title }}·{{ jobDtail.poster.people.position }}</text>
								</view>
							</view>
							<text class="cuIcon-right text-lg text-gray"></text>
						</view>
					</view>
					
					<!-- 要求 -->
					<view v-if="jobDtail.requires != undefined" class=" margin-top" style="border-top: 1px solid #F5F5F5; width: 700upx; margin-left: 25upx;">
						<view class="text-gray margin-top" style="margin-bottom: 10upx; ">
							公司福利
						</view>
						<view v-for="(item, index) in jobDtail.requires" :key="index" style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="  cu-tag radius bg-gray  ">{{ item }}</view>
					</view>
					<!-- 要求 -->
					<view v-if="jobDtail.requires != undefined" class=" margin-top" style="border-top: 1px solid #F5F5F5; width: 700upx; margin-left: 25upx;">
						<view class="text-gray margin-top" style="margin-bottom: 10upx; ">
							职位相关
						</view>
						<view v-for="(item, index) in jobDtail.requires" :key="index" style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="  cu-tag radius bg-gray  ">{{ item }}</view>
					</view>
<!-- 					<view class=" margin-top" style="height: 30upx; background-color: #f9f9f9;  width: 750upx; ;">
					</view>
					
					<view class=" margin-top-lg" style="height: 30upx; background-color: #f9f9f9;  width: 750upx; ;">
					</view> -->
					<!-- 企业 -->
					<view v-if="jobDtail.requires != undefined" class=" margin-top flex justify-between align-center" style="border-top: 1px solid #F5F5F5; width: 700upx; margin-left: 25upx;">
						<view class=" margin-top " style="margin-bottom: 10upx; ">
							<view class="text-lg text-black text-bold flex align-center">
								<image style="width: 130upx; height: 80upx; border-radius: 10upx;" class="margin-right" :src="jobDtail.poster.company.logo" mode=""></image>
								<text>{{ jobDtail.poster.company.title }}</text> 
								<text class="margin-left">{{ jobDtail.poster.company.type }}</text>
							</view> 
							<view class="margin-top-sm text-gray flex align-center">
								<text class="margin-right-sm">{{ jobDtail.city }}·{{ jobDtail.area }}</text>
								<text class="margin-right-sm">{{ jobDtail.poster.company.money }}</text>
								<text class="margin-right-sm">{{ jobDtail.poster.company.people }}</text>
							</view>
						</view>
						<text class="cuIcon-right text-lg text-gray"></text>
					</view>
					<!-- 详情 -->
					<view class=" margin-top padding-top" style="; width: 700upx; margin-left: 25upx; border-top: 1px solid #F5F5F5;">
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
							<text>若该企业向您收取任何费用（入职费、工作服费用等），或者所发信息与实际情况严重不符，请点击右上角向我们举报。</text>
						</view>
					</view>		
						
				</view>
		        
		        
		        
				
		    </swiper-item>
		</swiper>
		
				
					
				
				
				
				
					
					
					
					
					
					
					
		

			<view class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
				<view class="action"  data-cur="basics" style="height: 100%; width: 60%;"> 
					<button  style="width: 60%; height: 90%; font-size: 40upx;" class="cu-btn round bg-main">投递简历</button>
				</view>
			</view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				platForm: null,
				moveLeft: 0,
				id: 0,
				startClientX: 0,
				startClientY: 0,
				current: 0,
				jobList: [{
					career: '开发/项目经理',
					poster: {
						company: {
							logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587803033254&di=af47f688d8cf512cdf43fee1056f312a&imgtype=0&src=http%3A%2F%2Fedu.bryzq.com%2Fuploads%2F180316%2F1-1P3161431325D.jpg',
							title: '阿里巴巴',
							type: '网络技术',
							people: '9999人',
							money: '已上市'
						},
						people: {
							name: '我是发布者',
							position: 'HR'
						}
					},
					workYear: '4年',
					education: '本科',
					salaryTime: 13,
					payType: '完工',
					creditRequire: true,
					insurance: true,
					detail: '打发手动阀手动打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀',
					requires: ['工作证', '工作证', '工作证', '工作证', '工作证', '工作证'],
					distance: '705米',
					city: '杭州市',
					area: '西湖区',
					address: '龙湖天街龙',
					existPeople: 1,
					totalPeople: 5,
					price: 300,
					imgs: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg'],
				}, {
					career: '开发/项目经理',
					poster: {
						company: {
							title: '阿里巴巴',
							type: '网络技术',
							people: '9999人'
						},
						people: {
							name: '我是发布者',
							position: 'HR'
						}
					},
					salaryTime: 13,
					payType: '完工',
					creditRequire: true,
					insurance: true,
					detail: '打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀',
					requires: ['工作证', '工作证', '工作证', '工作证', '工作证', '工作证'],
					distance: '705米',
					area: '西湖区',
					address: '龙湖天街龙',
					existPeople: 1,
					totalPeople: 5,
					price: 300,
					imgs: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg',
				}, {
					career: '开发/项目经理',
					poster: {
						company: {
							title: '阿里巴巴',
							type: '网络技术',
							people: '9999人'
						},
						people: {
							name: '我是发布者',
							position: 'HR'
						}
					},
					salaryTime: 13,
					payType: '完工',
					creditRequire: true,
					insurance: true,
					detail: '打发手动阀手动阀撒 撒旦发射点发射点发射;啊手动阀手动阀手动阀手动阀手动阀',
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
			Transition(e){
				// if(e.detail.dx < -200 && this.current == 0){
				// 	uni.navigateBack({
				// 		delta: 1
				// 	})
				// }
			},
			ChangeSwiper(e){
				console.log(e.detail.current);
				this.current = e.detail.current
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
