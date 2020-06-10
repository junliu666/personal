<template>
	<view class="bg-white wrapper">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">预约记录</block></cu-custom>
		
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tagList" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		
		<view v-if="item.is_cancel == selectStaff" class=" margin-left-sm margin-top" style="width: 700upx;" v-for="(item, index) in orderList" :key="index">
			<view class="flex justify-between" style="width: 100%;">
				<text>{{ item.staffInfo.name }}</text>
				<text>{{ item.create_time.split(' ')[0] }}</text>
			</view>
			<view class="flex justify-between margin-top-sm" style="width: 100%;">
				<text v-if="item.room_no != '' && item.room_no != undefined ">房间号：{{ item.room_no }}</text>
				<!-- <text>09:00 - 10:00</text> -->
			</view>
			<view class="flex justify-end margin-top-sm" style="width: 100%;">
<!-- 				<button @tap="SendGift" class="cu-btn margin-right round bg-main2">
					<text class="cuIcon-presentfill"></text>打赏技师
				</button> -->
				<button @tap="book" :data-staffid="item.staffInfo.id" class="cu-btn round bg-main2">
					<text class="cuIcon-appreciatefill"></text>再次预约
				</button>
			</view>
			<view class="divide-line margin-top"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectStaff: false,
				TabCur: 0,
				tagList: ['预约完成', '预约取消'],
				orderList: [],
				page: 1,
				totalPage: null
			};
		},
		onReachBottom() {
			if(this.page < this.totalPage){
				this.page += this.page
				this.GetOrderList()
			}
		},
		onLoad() {
			this.GetOrderList()
		},
		methods:{
			SendGift(){
				uni.showToast({
					icon: 'none',
					title: '请等待版本更新'
				})
			},
			book(e){
				console.log(e.currentTarget.dataset);
				uni.navigateTo({
					url: '../people-detail/people-detail?id=' + e.currentTarget.dataset.staffid
				})
			},
			GetOrderList(){
				var that = this
				uni.showLoading({
					title: '请稍等'
				})
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'order/list',
					data: {
						page: that.page,
						size: 10,
						merchantId: that.MerchantId
					},
					success(res) {
						if(res.data.code == 0){
							that.totalPage = res.data.data.totalPage
							for(var i in res.data.data.list){
								that.orderList.push(res.data.data.list[i])
							}
						} else if (res.data.code == 101) {
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../login/login'
								})
							}, 2000)
						} else {
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 1000
							})
						}
						uni.hideLoading()
					}
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if(this.TabCur == 0){
					this.selectStaff = false
				} else {
					this.selectStaff = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrapper{min-height: 100vh;}
</style>
