<template>
	<view style="height: 100vh;">
		<firm-head bgColor="bg-white" :isBack="false">
			<text slot="icon" class="text-sub-main-firm aliicon" style="margin-left: 35upx; font-size: 40upx;">&#xe650;</text>
			<view slot="search" class="flex align-center round bg-white padding-sm" style="border: 1px solid #1a4339; width: 80%; height: 80%; margin-right: 35upx; ">
				<text class="cuIcon-search text-lg margin-right margin-left"></text>
				<input @confirm="SearchPeople" confirm-hold="false" confirm-type="search" type="text" value="" placeholder="搜索人才昵称" style="width: 80%; border: none; outline: none;" />
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
		<scroll-view id="scroll" :scroll-left="scrollX" @scroll="Scroll"  scroll-x="true" class=" bg-white padding-bottom-sm" style="position: fixed; white-space: nowrap; width: 100vw; z-index: 9999;">
<!-- 			<view class="flex" style="margin-right: 40upx; width: 100%;">
				<view :id="'nav-'+index" @click="ChangeNav(index)" class=" " :class=" index == tabCur ? ' text-lg text-bold ' : ''" style="display: inline-block; margin-left: 40upx; " :key="index" v-for="(item, index) in nav">
					{{ item }}
				</view>
			</view> -->
			<view :id="'nav-'+ index" @click="ChangeNav(index+1)" class=" " :class=" index == tabCur - 1 ? 'text-main-firm text-xlg text-bold ' : 'text-lg text-sub-main-firm'" style="display: inline-block; margin-left: 20upx; margin-right: 20upx; " :key="index" v-for="(item, index) in nav">
				{{ item }}
			</view>
			<view class="round bg-main-firm margin-top-xs" :style="'transform:translateX(' + (preLength + scrollLeft )  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'"></view>
			
		</scroll-view>
		{{tabCur}}
		<view class="" style="height: 60upx;">
			
		</view>
		<view class="" @touchstart="touchstart" @touchend="touchend" style="min-height: 75vh;">
<!-- 			<view class="" style="height: 105upx;">
				
			</view> -->
			<!-- 发布 -->
			<view v-if="tabCur == item.status" v-for="(item,index) in orderList">
				<view @click="GoDetail" class="padding-sm margin-top bg-white radius" style="border-radius: 25upx; width: 680upx; margin-left: 35upx;">
					<view class="flex align-center justify-between" style="width: 100%;">
						<view class="flex align-center">
							<image style="width: 80upx; height: 80upx;" class="round margin-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
							<view class="flex flex-direction">
								<text v-if="item.status == 1 || item.status == 3" class="text-gray text-sm">2020年4月5日</text>
								<text>我是一个接单者</text>
							</view>
						</view>
						
						<text class="text-lg text-gray cuIcon-right"></text>
					</view>
					
					<!-- 下部 -->
					<view class="" >
						<view class="margin-top-xs" v-if="item.status == 1 || item.status == 2">
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">JAVA</text>
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">JAVA</text>
							<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">JAVA</text>
							<text class="cu-tag bg-gray radius margin-right-xs " style="margin-left: 0;">JAVA</text>
						</view>
						<view v-if="item.status == 2"  class="margin-top-xs flex justify-between align-center" style="width: 100%;">
							<view class="">
								<text>修理工 软件开发 跑腿</text>
							</view>
							<view v-if="item.status == 2" class="flex align-center">
								<view class="text-sm flex flex-direction align-center margin-right-sm">
									<text class="text-gray">4.5分</text>
									<text>评价</text>
								</view>
								<view class="bg-gray round" style="height: 40upx; width: 3px ;">
									
								</view>
								<view class="text-sm flex flex-direction align-center margin-left-sm">
									<text class="text-gray">500</text>
									<text>接单量</text>
								</view>
							</view>
						</view>
						
						
						<view v-if="item.status == 1 || item.status == 3" class="margin-top-sm padding-tb-sm" style="width: 100%; border-top: 1px solid #F5F5F5;">
							<view class="" v-if="item.status == 1">
								<view style="width: 100%;" class="text-sub-main-firm text-lg flex justify-between">
									<text>任务名任务名任务名任</text>
									<text class="text-main-firm">报价100元</text>
								</view>
								<view class="text-sm text-gray ">2020年4月5日</view>
								<view class="margin-top-xs">
									<text v-if="item.comment.length == 0">无自荐内容</text>
									<text v-if="item.comment.length < 50 && item.comment.length > 0" >{{ item.comment }}</text>
									<text v-if="item.comment.length > 50 && showAll != index" >{{ item.comment.slice(0, 50) }}</text>
									<text @click="ShowAll(index)" v-if="item.comment.length > 50 && showAll != index" class="text-main-firm margin-left-sm">展开</text>
									<text v-if="item.comment.length > 50 && showAll == index" class="">{{ item.comment }}</text>
								</view>
								
							</view>
							<view class="" v-if="item.status == 3">
								<view class="flex justify-between" style="width: 100%;">
									<text class="text-sub-main-firm text-lg">任务名任务名任务名任</text>
									<view class="flex flex-direction justify-end">
										
										<text class="text-sm">修理工</text>
									</view>
								</view>
								<text class="text-gray text-sm">2020年4月1日</text>
								<view class="margin-top-xs" v-if="item.status == 3">
									<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">西湖区</text>
									<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">需10人</text>
									<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">JAVA</text>
									<text class="cu-tag bg-gray radius margin-right-xs " style="margin-left: 0;">Python</text>
								</view>
							</view>
						</view>
					</view>
					
					<view class="margin-top-xs flex justify-end" style="width: 100%;">
						<!-- <button v-if="item.status == 6" class="line-gray cu-btn round margin-left-sm">删除记录</button> -->
						<button v-if="item.status == 1" class="line-sub-main-firm cu-btn round margin-left-sm">驳回报名</button>
						<button v-if="item.status == 1" class="bg-main-firm cu-btn round margin-left-sm">选择人才</button>
						<button v-if="item.status == 3 " class="line-sub-main-firm cu-btn round margin-left-sm">任务信息</button>
						<button v-if="item.status == 2 " class="line-sub-main-firm cu-btn round margin-left-sm">沟通一下</button>
						<button v-if="item.status == 2" class="bg-main-firm cu-btn round margin-left-sm">任务邀请</button>
						<button v-if="item.status == 3" class="bg-main-firm cu-btn round margin-left-sm">沟通一下</button>
						<!-- <button @click.stop="GoDoingDetail" v-if="item.status == 3" class="line-sub-main-firm cu-btn round margin-left-sm">关闭任务</button> -->
						<!-- <button v-if="item.status == 4" class="bg-main-firm cu-btn round margin-left-sm">任务完成</button> -->
						<!-- <button v-if="item.status == 5" class="bg-main-firm cu-btn round margin-left-sm">确认尾款</button> -->
						
						<!-- <button v-if="item.status == 3" class="bg-main-firm cu-btn round margin-left-sm">选择报名者</button> -->
						<!-- <button v-if="item.status == 7" class="bg-main-firm cu-btn round margin-left-sm">查看工作者</button> -->
					</view>
					<!-- <text class="text-bold text-main text-lg">{{ item.totalPrice }}</text> -->
				</view>
			</view>
			<view class="flex justify-center align-center padding-bottom-sm margin-top" style="width: 100%; ">
				<text class="text-gray">已加载全部数据</text>
			</view>
		</view>
		<view class="" style="height: 150upx;">
			 
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
					statusTitle: '审核中',
					title: '这是一个标题',
					creditRequire: false,
					insuranceRequire: false,
					peopleSum: 10,
					price: 300,
					totalPrice: 300,
					payType: '完工结',
					date: '2020年4月5日',
					area: '西湖区',
					address: '索菲特大酒店',
					comment: '自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐',
				}, {
					id: 1,
					comment: '',
					create_time: '2020年4月5日',
					status: 1,
					statusTitle: '审核中',
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
					comment: '自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐',
					create_time: '2020年4月5日',
					status: 2,
					statusTitle: '未通过审核',
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
					comment: '自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐自我推荐',
					create_time: '2020年4月5日',
					status: 2,
					statusTitle: '未通过审核',
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
					comment: '',
					create_time: '2020年4月5日',
					status: 2,
					statusTitle: '未通过审核',
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
					comment: '',
					create_time: '2020年4月5日',
					status: 3,
					statusTitle: '发布中',
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
					comment: '',
					create_time: '2020年4月5日',
					status: 3,
					statusTitle: '发布中',
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
					comment: '',
					create_time: '2020年4月5日',
					status: 3,
					payType: '完工结',
					statusTitle: '发布中',
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
					comment: '',
					create_time: '2020年4月5日',
					status: 4,
					payType: '完工结',
					statusTitle: '已关闭',
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
					statusTitle: '已关闭',
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
					statusTitle: '已关闭',
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
				preLength: 70,
				underLineX: 0,
				pxToUpx: 0,
				commentData: {
					imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg']
				},
				showAll: -1,
				comment: '这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价这是用户评价用户评价，这是用户评价用户评价',
				postList: [{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123}],
				takeList: [{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321}],
				nav: ["投递人才",  "推荐人才", "在职人才"],
				navLength: "",
				tabCur: 1,
				startClientX: '',
			}
		},
		onLoad(options) {
			this.tabCur = options.target
			
		},
		Mounted() {
			var that = this
			const query = uni.createSelectorQuery().in(this)
			console.log(this.tabCur);
			uni.getSystemInfo({
				success(res) { 
					that.screenWidth = res.screenWidth
					that.scrollX = parseInt(that.tabCur) * 60 / (750 / that.screenWidth)
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
			SearchPeople(e){
				console.log(e);
			},
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
							var data = that.tabCur - 1
							query.select('#nav-' + data).boundingClientRect(data => {
								console.log();
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
				console.log(this.tabCur)
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
			},
			touchend(e){

				
			},
		}
	}
</script>

<style>

</style>
