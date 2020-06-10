<template>
	<view class="main bg-white">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">打赏记录</block></cu-custom>
		<view class="margin-left-sm text-gray margin-top" style="font-size: 40upx;" v-if="giftList.length != 0">打赏总额: {{ totalGift }}元</view>
		<view v-if="giftList.length != 0" class=" margin-left-sm margin-top" style="width: 700upx;" v-for="(item, index) in giftList" :key="index">
			<view class="flex justify-between" style="width: 100%;">
				<text>{{ item.staffInfo.name == undefined ? '技师无编号' : item.staffInfo.name + '号' }}</text>
				<text>{{ item.create_time.split(" ")[0] }}</text>
			</view>
			<view class="flex justify-between margin-top-sm" style="width: 100%;">
				<view class="flex align-center text-main">
					<text class="cuIcon-moneybagfill margin-right-sm"></text>
					{{ item.total_price }}
				</view>
				<button  :disabled="item.staffInfo == undefined" @tap="goStaff(index)" class="cu-btn round bg-main2">
					<text :class="item.staffInfo == undefined ? '' : 'cuIcon-appreciatefill'"></text>{{ item.staffInfo == undefined ? '技师已下岗' : '预约技师'}}
				</button>
			</view>
			<view class="divide-line margin-top"></view>
		</view>
		
		<view style="width: 100%;" class="text-center margin-top" v-if="giftList.length == 0">
			<text >{{ text }}</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				giftList: [],
				page: 1,
				totalPage: 0,
				totalGift: 0,
				text: "",
			};
		},
		onReachBottom() {
			if(this.page < this.totalPage){
				this.page = this.page + 1
				this.GetGiftList()
			}
		},
		onLoad() {
			uni.showLoading({
				title: '请稍等'
			})
			this.GetGiftList()
			this.GetTotalPrice()
		},
		methods:{
			goStaff(index){
				uni.navigateTo({
					url: '../people-detail/people-detail?id=' + this.giftList[index].staffInfo.id
				})
			},
			GetGiftList(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					data:{
						page: that.page,
						size: 10
					},
					url: that.Server + 'gift/userList',
					success(res) {
						
						if(res.data.code == 0){
							that.totalPage = res.data.data.totalPage
							for(var i in res.data.data.list){
								that.giftList.push(res.data.data.list[i])
							}
						} else if (res.data.code == 101) {
							uni.showToast({
								title: '登录超时，将重新授权登录',
								duration: 500
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../login/login'
								})
							}, 500)
						} else {
							uni.showModal({
								content: res.data.msg
							})
						}
						uni.hideLoading()
					}
				})
			},
			GetTotalPrice(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'gift/total',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.totalGift = res.data.data
							if(res.data.data == 0){
								this.totalGift = 0
							}
						} else if (res.data.code == 101) {
							uni.showToast({
								title: '登录超时，将重新授权登录',
								duration: 500
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../login/login'
								})
							}, 500)
						} else {
							uni.showModal({
								content: res.data.msg
							})
						}
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh;}
</style>
