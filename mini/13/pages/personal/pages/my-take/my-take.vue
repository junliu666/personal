<template>
	<view style="height: 100vh;">
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content">我的发布</block>
			<view class="" slot="right">
			</view>
			
		</cu-custom>
		
<!-- 		{{ scrollLeft }}
		<scroll-view  scroll-x="true" class=" bg-main padding-sm" style="z-index: 999; white-space: nowrap; width: 100vw;">
			<view :id="'navB-'+index" @click="ChangeNav(index)" class="" style="display: inline-block; margin-right: 40upx" :key="index" v-for="(item, index) in nav">
				{{ item }}
			</view>
			<view class="round bg-white margin-top-xs" :style="'transform:translateX(' + (40 * tabCur + preLength)  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'"></view>
		</scroll-view>
		{{ preLength }} -->
		<scroll-view id="scroll" :scroll-left="scrollX" @scroll="Scroll"  scroll-x="true" class=" bg-main padding-tb-sm" style="position: fixed; white-space: nowrap; width: 100vw; z-index: 9999;">
			<view :id="'nav-'+index" @click="ChangeNav(index)" class=" " :class=" index == tabCur ? ' text-xlg text-bold ' : 'text-lg'" style="display: inline-block; margin-left: 20upx; margin-right: 20upx;" :key="index" v-for="(item, index) in nav">
				{{ item }}
			</view>
			<view class="round bg-white margin-top-xs" :style="'transform:translateX(' + (preLength + scrollLeft )  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'"></view>
			
		</scroll-view>
		{{tabCur}}
		<view class="" style="height: 60upx;">
			
		</view>
		<view class="" @touchstart="touchstart" @touchend="touchend" style="min-height: 75vh;">
<!-- 			<view class="" style="height: 105upx;">
				
			</view> -->
			<!-- 发布 -->
			<view v-if="tabCur == 0 ? true : tabCur == item.status" v-for="(item,index) in orderList">
				<view @click="GoDetail" class="padding-sm margin-top bg-white radius" style="border-radius: 25upx; width: 680upx; margin-left: 35upx;">
					<view class="">
						<view class="flex justify-between" style="width: 100%;">
							<text class="text-black text-lg">{{ item.title }}</text>
							<text class="text-main">{{ item.statusTitle  }}</text>
						</view>
						<view class="flex align-center text-main">
							<text class="margin-right-xs" style="font-size: 40upx; font-weight: bolder;">{{ item.price }}</text>
							<text>{{ '元' + '/' + item.payType  }}</text></text>
						</view>
						<!-- <view class="flex  align-center margin-top-sm" style="width: 100%;">
							<image style="width: 80upx; height: 80upx;" class="round margin-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
							<view class="flex flex-direction">
								<text class="text-gray text-sm">{{ index % 2 == 0 ? '个人发布者' : '阿里巴巴' }}</text>
								<text>我是一个发布者{{ index % 2 == 0 ? '' : '·HR' }}</text>
							</view>
						</view> -->
						
					</view>
					
					<!-- 下部 -->
					<view class="">
<!-- 						<view class="margin-top-xs">
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">{{ item.creditRequire ? '有信用限制' : '无信用限制' }}</text>
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">杭州市·{{ item.area }}</text>
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">通知好友</text>
							<text class="cu-tag bg-gray radius margin-right-xs " style="margin-left: 0;">{{ item.status == 1 || item.status == 0 ? '需' : '' }}{{ item.peopleSum }}人</text>
						</view> -->
						<view class="margin-top-xs">
							<text class="cuIcon-calendar margin-right-xs"></text>{{ item.status == 1 ? '预定开始' : item.status == 2 ? '开始任务' : '完成任务' }} {{ item.date }}
						</view>
						<view class="margin-top-xs flex">
							
							<text class="cuIcon-location margin-right-xs"></text>
							<text>{{ item.address }}打发手动阀手动阀手动阀撒旦射</text> 
						</view>
						<view class="margin-top-sm padding-tb-sm align-center flex justify-between" style="width: 100%; border-top: 1px solid #F5F5F5;">
							<view @click.stop="GoPeople" class="flex justify-between align-center" style="width: 100%;">
								<view class="flex align-center">
									<image style="width: 80upx; height: 80upx;" class="round margin-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
									<view class="flex flex-direction">
										<text class="text-gray text-sm">{{ index % 2 == 0 ? '个人发布者' : '阿里巴巴' }}</text>
										<text>我是一个发布者{{ index % 2 == 0 ? '' : '·HR' }}</text>
									</view>
								</view>
								<text class="cuIcon-right text-lg text-gray"></text>
							</view>
							<!-- <view class="flex">
								<text class="cuIcon-moneybag margin-right-xs"></text>
								<view class="">
									<view class="">
										<text class="">任务总报酬</text>
									</view>
								</view>
								
							</view>
							<i class="text-main text-bold text-lg text-price">{{ item.totalPrice }}元</i> -->
						</view>
					</view>
					
					<view :class="item.status == 0 ?  'margin-top-xs flex justify-end' : 'margin-top flex justify-end'" style="width: 100%;">
						<!-- <button v-if="item.status == 6" class="line-gray cu-btn round margin-left-sm">删除记录</button> -->
						<button v-if="item.status == 1" class="line-gray cu-btn round margin-left-sm">取消任务</button>
						<button v-if="item.status == 1 || item.status == 2 " class="line-gray cu-btn round margin-left-sm">联系发布者</button>
						<!-- <button v-if="item.status == 2 " class="line-gray cu-btn round margin-left-sm">提前开始</button> -->
						<button v-if="item.status == 1" class="bg-main cu-btn round margin-left-sm">开始任务</button>
						
						<button @click.stop="GoDoing" v-if="item.status == 4 || item.status == 2 || item.status == 3" class="line-gray cu-btn round margin-left-sm">任务进程</button>
						<button v-if="item.status == 3" class="bg-main cu-btn round margin-left-sm">联系发布者</button>
						<button v-if="item.status == 2" class="bg-main cu-btn round margin-left-sm">任务完成</button>						
						<button v-if="item.status == 4" class="bg-main cu-btn round margin-left-sm">评价</button>
					</view>
					<!-- <text class="text-bold text-main text-lg">{{ item.totalPrice }}</text> -->
				</view>
			</view>
			<view class="flex justify-center align-center padding-bottom-sm margin-top" style="width: 100%; ">
				<text class="text-gray">已加载全部数据</text>
			</view>
		</view>
		
	</view>
</template>

<script>

	export default {
		
		watch: {
			navLength(nv, ov){
				// console.log(nv);
			}
		},
		onReachBottom() {
			// console.log(123);
			console.log(123123231);
		},
		data() {
			return {
				orderList: [{
					id: 0,
					create_time: '2020年4月5日',
					status: 1,
					statusTitle: '等待开始',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: false,
					peopleSum: 10,
					price: 300,
					totalPrice: 300,
					payType: '完工结',
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 1,
					create_time: '2020年4月5日',
					status: 1,
					statusTitle: '等待开始',
					title: '这是一个标题',
					payType: '完工结',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					price: 300,
					totalPrice: 350,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 2,
					create_time: '2020年4月5日',
					status: 2,
					statusTitle: '任务进行中',
					payType: '完工结',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					propleSub: 5,
					price: 300,
					totalPrice: 350,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 3,
					create_time: '2020年4月5日',
					status: 2,
					statusTitle: '任务进行中',
					payType: '完工结',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					propleSub: 5,
					price: 300,
					totalPrice: 350,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 4,
					create_time: '2020年4月5日',
					status: 2,
					statusTitle: '任务进行中',
					payType: '完工结',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 5,
					create_time: '2020年4月5日',
					status: 3,
					statusTitle: '等待尾款',
					title: '这是一个标题',
					payType: '完工结',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					// propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 6,
					create_time: '2020年4月5日',
					status: 3,
					statusTitle: '等待尾款',
					payType: '完工结',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					// propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 7,
					create_time: '2020年4月5日',
					status: 3,
					payType: '完工结',
					statusTitle: '等待尾款',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					// propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 8,
					create_time: '2020年4月5日',
					status: 4,
					payType: '完工结',
					statusTitle: '任务完成',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					// propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 9,
					create_time: '2020年4月5日',
					status: 4,
					payType: '完工结',
					statusTitle: '任务完成',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					// propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 10,
					create_time: '2020年4月5日',
					status: 4,
					payType: '完工结',
					statusTitle: '任务完成',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					// propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}, {
					id: 10,
					create_time: '2020年4月5日',
					status: 5,
					payType: '任务取消',
					statusTitle: '任务取消',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: true,
					peopleSum: 10,
					// propleSub: 5,
					price: 300,
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店'
				}],
				scrollX: 0,
				scrollLeft: 0,
				screenWidth: '',
				preLength: 0,
				underLineX: 0,
				pxToUpx: 0,
				commentData: {
					imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg']
				},
				showAll: -1,
				comment: '这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价这是用户评价用户评价，这是用户评价用户评价',
				postList: [{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123}],
				takeList: [{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321}],
				nav: ["全部",  "待开始", "待完成", "待尾款", "待评价", "取消任务"],
				navLength: "",
				tabCur: false,
				startClientX: '',
			}
		},
		onLoad(options) {
			this.tabCur = options.target
			
		},
		onReady() {
			var that = this
			const query = uni.createSelectorQuery().in(this)
			console.log(this.tabCur);
			uni.getSystemInfo({
				success(res) { 
					that.screenWidth = res.screenWidth
					that.scrollX = parseInt(that.tabCur) * 80 / (750 / that.screenWidth)
					query.select('#nav-' + that.tabCur).boundingClientRect(data => {
						// console.log(data.width);
						that.navLength = data.width * 750 / res.screenWidth 
						that.preLength = data.left * (750 / res.screenWidth) + ((data.width * 750 / res.screenWidth - 50) / 2)
					}).exec(() => {}); 
				}
			})
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
			GoDetail(){
				uni.navigateTo({
					url: '../../../order-detail/order-detail'
				})
			},
			GoPeople(){
				uni.navigateTo({
					url: '../../../people-detail/people-detail'
				})
			},
			GoDoing(){
				uni.navigateTo({
					url: '../../../doing-parttimejob-detail/doing-parttimejob-detail'
				})
			},
			Scroll(e){
				// this.scrollX = e.detail.scrollLeft
			},
			SetNavLength(index){
				var that = this 
				this.$nextTick(function(){
					const query = uni.createSelectorQuery().in(this)
					uni.getSystemInfo({
						success(res) {
							query.select('#scroll').scrollOffset(data => {
								that.scrollLeft = data.scrollLeft * 750 / res.screenWidth
							})
							query.select('#nav-' + that.tabCur).boundingClientRect(data => {
								that.navLength = data.width * 750 / res.screenWidth

								that.preLength = data.left * (750 / res.screenWidth) + ((data.width * 750 / res.screenWidth - 50) / 2)
							}).exec(() => {});
						}
					})
				})
			},
			ViewImage(){
				uni.previewImage({
					urls: this.commentData.imgs,
					current: e.currentTarget.dataset.url,
					indicator: true
				});
			},
			ShowAll(index){
				this.showAll = index
			},
			scrolltolower(e){
				console.log(e);
			},
			ChangeNav(data){
				var that = this
				
				this.tabCur = data
				that.scrollX = this.tabCur * 20 / (750 / that.screenWidth)
				this.SetNavLength(data)
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
				var that = this
				// console.log(this.tabCur);
				if(e.changedTouches[0].clientX - this.startClientX < -150){
					that.scrollX += this.tabCur == that.nav.length - 1 ? 0 : 80 / (750 / that.screenWidth)
					this.tabCur = this.tabCur == that.nav.length - 1  ? this.tabCur : parseInt(this.tabCur) + 1
					console.log(this.tabCur);
					// console.log(this.tabCur);
					this.SetNavLength()
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 0
					})
				} else if(e.changedTouches[0].clientX - this.startClientX > 150){
					if(this.tabCur == 0){
						
					} else {
						that.scrollX -= parseInt(this.tabCur) == 0 ? 0 : 80 / (750 / that.screenWidth)
						this.tabCur = this.tabCur == 0 ? 0 : parseInt(this.tabCur) - 1
						
						this.SetNavLength()
					}
					
					
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
