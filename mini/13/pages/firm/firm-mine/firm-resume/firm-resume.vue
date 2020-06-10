<template>
	<view style="height: 100vh;">
		<cu-custom-firm bgColor="bg-white" :isBack="true">
			
			<block slot="backText">
				<text class="text-lg text-sub-main-firm">报名记录</text></block>
			<block slot="content"></block>
			<view slot="right" class="margin-right">
				
				<!-- <text class="cuIcon-search  margin-right-sm padding-sm" style="font-size: 40upx;"></text> -->
				<!-- <text class="cuIcon-roundadd padding-sm" style="font-size: 40upx;"></text> -->
			</view>
		</cu-custom-firm>
		
<!-- 		{{ scrollLeft }}
		<scroll-view  scroll-x="true" class=" bg-main padding-sm" style="z-index: 999; white-space: nowrap; width: 100vw;">
			<view :id="'navB-'+index" @click="ChangeNav(index)" class="" style="display: inline-block; margin-right: 40upx" :key="index" v-for="(item, index) in nav">
				{{ item }}
			</view>
			<view class="round bg-white margin-top-xs" :style="'transform:translateX(' + (40 * tabCur + preLength)  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'"></view>
		</scroll-view>
		{{ preLength }} -->
		<view class="" @touchstart="touchstart" @touchend="touchend" style="min-height: 75vh;">
<!-- 			<view class="" style="height: 105upx;">
				
			</view> -->
			<!-- 发布 -->
			<view v-for="(item,index) in orderList">
				<view @click="GoDetail" :class=" index == 0 ? 'padding-sm bg-white radius' : 'padding-sm margin-top bg-white radius'" style=" width: 750upx;">
					<view class="flex align-center">
						<image style="width: 80upx; height: 80upx;" class="round margin-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
						<view class="flex flex-direction">
							<!-- <text v-if="item.status == 1 || item.status == 3" class="text-gray text-sm">2020年4月5日</text> -->
							<text>我是一个接单者</text>
						</view>
					</view>
					<view class="margin-top-xs" v-if="item.status == 1 || item.status == 2">
						<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">JAVA</text>
						<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">JAVA</text>
						<text class="cu-tag bg-gray radius margin-right-xs" style="margin-left: 0;">JAVA</text>
						<text class="cu-tag bg-gray radius margin-right-xs " style="margin-left: 0;">JAVA</text>
					</view>
					<view  class="margin-top-xs flex justify-between align-center" style="width: 100%;">
						<view class="">
							<text>修理工 软件开发 跑腿</text>
						</view>
						<view  class="flex align-center">
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
				
			} 
		},
		onLoad(options) {
			
		},
		onReady() {
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
					url: '../../firm-user-info/firm-user-info'
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
