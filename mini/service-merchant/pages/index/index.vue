<template>
	<view>
		<basics @ChangeSort="ChangeSort" :recStaff="recStaff" :swiperList="swiperList" :staffList="staffList" v-if="PageCur=='basics'"></basics>
		<components @CancelOrder="CancelOrder" :orderList="orderList" :totalCount="totalCount" :totalPage="totalPage" v-if="PageCur=='component'"></components>
		<plugin :MerchantInfo="MerchantInfo" :testImg="testImg" v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white  foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<text :class=" PageCur == 'basics' ? 'cuIcon-group_fill text-green' : 'cuIcon-group_fill text-gray'"></text>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">技师管理</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<text :class=" PageCur == 'component' ? 'cuIcon-formfill text-green' : 'cuIcon-formfill text-gray'"></text>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">预约管理</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<text :class=" PageCur == 'plugin' ? 'cuIcon-shopfill text-green' : 'cuIcon-shopfill text-gray'"></text>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">商户中心</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				MerchantInfo: null,
				testImg: null,
				recStaff: [],
				PageCur: 'basics',
				staffList: null,
				swiperList: null,
				
				page: 1,
				orderList: [],
				totalPage: 0,
				totalCount: 0
			}
		},
		onLoad() {
			var that = this
			uni.showLoading({
			})
			
			this.GetSwiperList()
			this.GetOrderList()
			this.testImg = "https://www.qiafantech.com/club/rq/merchant?scene=" + that.MerchantToken.id + "&page=pages%2Fblank%2Fblank&width=430&auto_color=false&line_color=%7B%22r%22%3A0%2C%22g%22%3A0%2C%22b%22%3A0%7D&is_hyaline=false"
		},
		onShow() {
			this.GetMerchantInfo()
			this.GetStaffList()
		},
		onReachBottom() {
			if(that.page < that.totalPage && that.page >= 3){
				that.page ++
				that.GetOrderList()
			}
		},
		methods: {
			GetMerchantInfo(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'merchant/info',
					success(res) {
						if(res.data.code == 0){
							
							
							
							that.MerchantInfo = res.data.data
							if(that.MerchantInfo.tel != null && that.MerchantInfo.tel != undefined){
								that.MerchantInfo.tel = JSON.parse(that.MerchantInfo.tel)
							}
							console.log(that.MerchantInfo);
							
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
					}
				})
			},
			ChangeSort(target){
				if(target == "service_times"){
					for(var i = 0; i<this.staffList.length; i++){
						for(var j = i + 1; j<this.staffList.length; j++){
							var tgi = this.staffList[i].service_times
							var tgj = this.staffList[j].service_times
							var tgn = null
							if(tgi < tgj){
								tgn = this.staffList[i]
								this.staffList[i] = this.staffList[j]
								this.staffList[j] = tgn
							}
						}
					}
				} else {
					for(var i = 0; i<this.staffList.length; i++){
						for(var j = i + 1; j<this.staffList.length; j++){
							var tgi = this.staffList[i].total_gift
							var tgj = this.staffList[j].total_gift
							var tgn = null
							if(tgi < tgj){
								tgn = this.staffList[i]
								this.staffList[i] = this.staffList[j]
								this.staffList[j] = tgn
							}
						}
					}
				}
				
			},
			CancelOrder(index){
				var that = this
				that.page = 1
				that.orderList = []
				that.totalPage = 0
				that.totalCount = 0
				that.GetOrderList()
			},
			GetOrderList(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'order/list',
					data: {
						page: that.page,
						size: 10
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.totalPage = res.data.data.totalPage
							that.totalCount = res.data.data.totalCount
							for(var i in res.data.data.list){
								res.data.data.list[i].project_info == undefined ? undefined : res.data.data.list[i].project_info = JSON.parse(res.data.data.list[i].project_info)
								that.orderList.push(res.data.data.list[i])
							}
							 for(var i in that.orderList){
								 var date = new Date()
								 var orderTime = new Date(that.orderList[i].end_time)
								 var currentTime = date.getTime()
								 orderTime = orderTime.getTime()
								 if(that.orderList[i].is_cancel == true){
								 	that.orderList[i].status = 3
								 } else if (that.orderList[i].is_cancel == false && that.orderList[i].is_accept == false){
								 	that.orderList[i].status = 0
								 } else if (that.orderList[i].is_cancel == false && that.orderList[i].is_accept == true && currentTime < orderTime){
								 	that.orderList[i].status = 1
								 } else if (that.orderList[i].is_cancel == false && that.orderList[i].is_accept == true && currentTime > orderTime){
								 	that.orderList[i].status = 2
								 }
							 }
							 if(that.page < that.totalPage && that.page < 3){
								 that.page ++
								 that.GetOrderList()
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
					}
				})
			},
			GetSwiperList(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'banner/list',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.swiperList = res.data.data
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
					}
				})
			},
			GetStaffList(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'merchant/staffList',
					success(res) {
						if(res.data.code == 0){
							if(res.data.data.length != 0){
								that.staffList = res.data.data
								if(res.data.data[0] != undefined && res.data.data[1] != undefined && res.data.data[2] != undefined){
									that.recStaff.push(res.data.data[0])
									that.recStaff.push(res.data.data[1])
									that.recStaff.push(res.data.data[2])
								}
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
					}
				})
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
