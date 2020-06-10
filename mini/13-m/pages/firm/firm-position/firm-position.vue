<template>
	<view style="height: 100vh;">
		<firm-head bgColor="bg-white" :isBack="false">
			<text slot="icon" class="text-sub-main-firm aliicon" style="margin-left: 35upx; font-size: 40upx;">&#xe650;</text>
			<view slot="search" class="flex align-center round bg-white padding-sm" style="border: 1px solid #1a4339; width: 80%; height: 80%; margin-right: 35upx; ">
				<text class="cuIcon-search text-lg margin-right margin-left"></text>
				<input @confirm="SearchPeople" confirm-hold="false" confirm-type="search" type="text" value="" placeholder="搜索任务标题" style="width: 80%; border: none; outline: none;" />
			</view>
		</firm-head>
		
<!-- 		{{ scrollLeft }}
		<scroll-view  scroll-x="true" class=" bg-main padding-sm" style="z-index: 999; white-space: nowrap; width: 100vw;">
			<view :id="'navB-'+index" @click="ChangeNav(index)" class="" style="display: inline-block; margin-right: 40upx" :key="index" v-for="(item, index) in nav">
				{{ item }}
			</view>
			<view class="round bg-white margin-top-xs" :style="'transform:translateX(' + (40 * tabCur + preLength)  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'"></view>
		</scroll-view>
		{{ preLength }} -->
		<scroll-view id="scroll" :scroll-left="scrollX" @scroll="Scroll"  scroll-x="true" class="bg-white  padding-tb-sm" style="position: fixed; white-space: nowrap; width: 100vw; z-index: 9999;">
<!-- 			<view class="flex" style="margin-right: 40upx; width: 100%;">
				<view :id="'nav-'+index" @click="ChangeNav(index)" class=" " :class=" index == tabCur ? ' text-lg text-bold ' : ''" style="display: inline-block; margin-left: 40upx; " :key="index" v-for="(item, index) in nav">
					{{ item }}
				</view>
			</view> -->
			<view :id="'nav-'+index" @click="ChangeNav(index)" class=" " :class=" index == tabCur ? ' text-xlg text-bold text-main-firm' : 'text-lg text-sub-main-firm'" style="display: inline-block; margin-left: 20upx; margin-right: 20upx; " :key="index" v-for="(item, index) in nav">
				{{ item }}
			</view>
			<view class="round bg-main-firm margin-top-xs" :style="'transform:translateX(' + (preLength + scrollLeft )  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'"></view>
			
		</scroll-view>
		<!-- {{tabCur}} -->
		<view class="" style="height: 120upx;">
			
		</view>
		<view class="" @touchstart="touchstart" @touchend="touchend" style="min-height: 75vh;">
<!-- 			<view class="" style="height: 105upx;">
				
			</view> -->
			<!-- 发布 -->
			<view v-if="tabCur == 0 ? true : tabCur == item.status" v-for="(item,index) in orderList">
				<view @click="GoDetail" class="padding-sm margin-top bg-white radius" style="border-radius: 25upx; width: 680upx; margin-left: 35upx;">
					<view class="flex align-center" v-if="item.status != 1 && item.status != 7" style="width: 100%; ">
						<view v-if="item.status == 2" class="flex flex-direction align-center" style="width: 150upx;">
							<text class="text-bold" style="font-size: 40upx;">5/{{ item.peopleSum }}</text>
							<text class="text-sm text-gray">已选人数</text>
						</view>
						<view v-if="item.status != 2" class="flex flex-direction align-center" style="width: 150upx;">
							<text class="text-bold" style="font-size: 40upx;">{{ item.peopleSum }}</text>
							<text class="text-sm text-gray">任务人数</text>
						</view>
						
						
						
						<view class="margin-left" style="width: 100%;">
							<view class="flex justify-between align-center" style="width: 100%;">
								<text class="text-black text-lg">{{ item.title }}</text>
								<text class="text-main-firm">{{ item.statusTitle  }}</text>
							</view>
							<text class="text-sm text-gray">{{ item.create_time }}</text>
							<!-- 选人阶段 -->
							<view class="" v-if="item.status != 2">
								<view class="margin-top-xs">
									<text class="cuIcon-calendar margin-right-xs"></text>{{ item.status == 3 ? '预定开始' : item.status == 4 ? '开始任务' : '完成任务' }} {{ item.date }}
								</view>
								<view class="margin-top-xs flex" v-if="item.status != 5 && item.status != 6">
									
									<text class="cuIcon-location margin-right-xs"></text>
									<text>{{ item.area }}·{{ item.address }}打发手动阀手动阀手动阀撒旦射</text> 
								</view>
							</view>
							<view class="margin-top-xs" v-if="item.status == 2">
								<text class="cuIcon-calendar margin-right-xs"></text>预定开始 {{ item.date }}
							</view>
							<view v-if="item.status == 2" class="margin-top-xs flex  align-center flex-wrap" style="width: 100%;">
								<view class="flex align-center flex-direction margin-right text-sm">
									
									<text class=" text-gray">20</text>
									<text class="text-sm aliicon  margin-right-xs">&#xe6cf;报名</text>
								</view>
								<view class="margin-right round" style="height: 40upx; width: 3px ; background-color: #F5F5F5;">
									
								</view>
								<view class="flex align-center flex-direction margin-right text-sm">
									
									<text class=" text-gray">204</text>
									<text class="text-sm cuIcon-favor margin-right-xs">收藏</text>
								</view>
								<view class="margin-right round" style="height: 40upx; width: 3px ; background-color: #F5F5F5;">
									
								</view>
								<view class="flex align-center flex-direction margin-right text-sm">
									
									<text class=" text-gray">2024</text>
									<text class="text-sm cuIcon-attention  margin-right-xs">浏览</text>
								</view>
							</view>
						</view>
					</view>
					<view class="" v-if="item.status == 1 || item.status == 7">
						<view class="flex justify-between" style="width: 100%;">
							<text class="text-black text-lg">{{ item.title }}</text>
							<text class="text-main-firm">{{ item.statusTitle  }}</text>
						</view>
						<text class="text-sm text-gray">{{ item.create_time }}</text>
						
					</view>
					
					<!-- 下部 -->
					<view class="" v-if="item.status == 1 || item.status == 7">
						<view class="margin-top-xs">
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">{{ item.creditRequire ? '有信用限制' : '无信用限制' }}</text>
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">杭州市·{{ item.area }}</text>
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">通知好友</text>
							<text class="cu-tag bg-gray radius margin-right-xs " style="margin-left: 0;">{{ item.status == 1 || item.status == 0 ? '需' : '' }}{{ item.peopleSum }}人</text>
						</view>
						<view class="margin-top-xs">
							<text class="cuIcon-calendar margin-right-xs"></text>预定开始 {{ item.date }}
						</view>
						<view class="margin-top-xs flex">
							
							<text class="cuIcon-location margin-right-xs"></text>
							<text>{{ item.address }}打发手动阀手动阀手动阀撒旦射</text> 
						</view>
						<view class="margin-top-sm padding-tb-sm align-center flex justify-between" style="width: 100%; border-top: 1px solid #F5F5F5;">
							<view class="flex">
								<text class="cuIcon-moneybag margin-right-xs"></text>
								<view class="">
									<view class="">
										<text class="">30元</text>
										<text>/{{ item.payType }}·每人</text>
									</view>
									<view class="">
										<text v-if="item.insuranceRequire">保险费用{{ item.price }}</text>
										<text v-if="!item.insuranceRequire">无保险费</text>
									</view>
								</view>
								
							</view>
							<text class="text-main-firm text-bold text-lg">{{ item.status == 1 || item.status == 2 ? '总预付金' : '总支付金额' }}{{ item.insuranceRequire ? item.totalPrice + item.price : item.totalPrice }}元</text>
						</view>
					</view>
					
					<view :class="item.status == 0 ?  'margin-top-xs flex justify-end' : 'margin-top flex justify-end'" style="width: 100%;">
						<!-- <button v-if="item.status == 6" class="line-gray cu-btn round margin-left-sm">删除记录</button> -->
						<button v-if="item.status != 5 && item.status != 6 && item.status != 7" class="line-sub-main-firm cu-btn round margin-left-sm">取消任务</button>
						<button v-if="item.status == 1 " class="line-sub-main-firm cu-btn round margin-left-sm">修改信息</button>
						<button v-if="item.status == 2 " class="line-sub-main-firm cu-btn round margin-left-sm">提前开始</button>
						<button v-if="item.status == 1" class="bg-main-firm cu-btn round margin-left-sm">预付</button>
						<button v-if="item.status == 2" class="bg-main-firm cu-btn round margin-left-sm">选择接单者</button>
						<button @click.stop="GoDoingDetail" v-if="item.status == 4 || item.status == 5 || item.status == 6" class="line-sub-main-firm cu-btn round margin-left-sm">任务进程</button>
						<button v-if="item.status == 4" class="bg-main-firm cu-btn round margin-left-sm">任务完成</button>
						<button v-if="item.status == 5" class="bg-main-firm cu-btn round margin-left-sm">确认尾款</button>
						
						<button v-if="item.status == 6" class="bg-main-firm cu-btn round margin-left-sm">评价</button>
						<button v-if="item.status == 7" class="bg-main-firm cu-btn round margin-left-sm">退款进度</button>
					</view>
					<!-- <text class="text-bold text-main text-lg">{{ item.totalPrice }}</text> -->
				</view>
			</view>
			<view class="flex justify-center align-center padding-bottom-sm margin-top" style="width: 100%; ">
				<text class="text-gray">已加载全部数据</text>
			</view>
		</view>
		<view class="" style="height: 120upx;">
			
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
					statusTitle: '等待预付',
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
					statusTitle: '等待预付',
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
					statusTitle: '等待选人',
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
					statusTitle: '等待选人',
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
					statusTitle: '等待选人',
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
					statusTitle: '等待开始',
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
					statusTitle: '等待开始',
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
					statusTitle: '等待开始',
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
					statusTitle: '任务进行中',
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
					statusTitle: '任务进行中',
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
					statusTitle: '任务进行中',
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
					id: 11,
					create_time: '2020年4月5日',
					status: 5,
					payType: '完工结',
					statusTitle: '等待交付尾款',
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
					id: 12,
					create_time: '2020年4月5日',
					status: 5,
					payType: '完工结',
					statusTitle: '等待交付尾款',
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
					id: 13,
					create_time: '2020年4月5日',
					status: 5,
					payType: '完工结',
					statusTitle: '等待交付尾款',
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
					id: 14,
					create_time: '2020年4月5日',
					status: 6,
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
					id: 15,
					create_time: '2020年4月5日',
					status: 6,
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
					id: 16,
					create_time: '2020年4月5日',
					status: 6,
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
					id: 16,
					create_time: '2020年4月5日',
					status: 7,
					payType: '完工结',
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
				preLength: 35,
				underLineX: 0,
				pxToUpx: 0,
				commentData: {
					imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg']
				},
				showAll: -1,
				comment: '这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价这是用户评价用户评价，这是用户评价用户评价',
				postList: [{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123}],
				takeList: [{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321}],
				nav: ["全部", "待预付", "待择优", "待开始", "待完成", "待尾款", "待评价", "任务退款"],
				navLength: "",
				tabCur: false,
				startClientX: '',
			}
		},
		mounted() {
			this.tabCur = 0
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
			SearchPeople(){
				
			},
			GoDoingDetail(){
				uni.navigateTo({
					url: '../../../doing-parttimejob-detail/doing-parttimejob-detail'
				})
			},
			GoDetail(){
				uni.navigateTo({
					url: '../../../order-detail/order-detail'
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
				that.scrollX = this.tabCur * 80 / (750 / that.screenWidth)
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
