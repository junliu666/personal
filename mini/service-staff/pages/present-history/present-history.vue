<template>
	<view class="main bg-white">
		<view class="cu-modal" :class="modalName=='divide'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">提现会到当前微信账号</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="flex align-center justify-center">
						<input type="number"  placeholder="请输入提现金额" />
					</view>					
					<button @tap.stop="changeSort" data-name='distance' class="cu-btn round bg-main3 margin-top-sm">确定</button>
				</view>
			</view>
		</view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">打赏收益</block></cu-custom>
		<view class="flex align-center justify-between margin-right-sm">
			<view class="">
				<view class="margin-left-sm text-gray margin-top" style="font-size: 30upx;">打赏收益: {{ totalPrice }}元</view>
			</view>
			<view class="margin-top">
				<button @click="showDivide" class="cu-btn bg-main3 round">
					<text class="cuIcon-moneybagfill margin-right-sm"></text>提现打赏
				</button>
				<view class="text-gray margin-top-sm">
					最低提现金额：50元
				</view>
			</view>
			
		</view>

		<view class="margin-top">
			<view class=" margin-left-sm margin-top" style="width: 700upx;" v-for="(item, index) in giftList" :key="index">
				<view class="flex justify-between" style="width: 100%;">
					<text>{{ item.userInfo.nickname }}</text>
					<text>{{ item.total_price }}元</text>
					<text>{{ item.create_time.split(" ")[0] }}</text>
				</view>
				<view class="divide-line margin-top"></view>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				giftList: [],
				totalPage: 0,
				page: 1,
				totalPrice: null
			};
		},
		onLoad(options) {
			this.GetGiftList()
			console.log(options.price);
			this.totalPrice = options.price
		},
		onReachBottom() {
			if(this.page < this.totalPage){
				this.page += 1
				this.GetGiftList()
			}
		},
		methods:{
			GetGiftList(){
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'gift/list',
					data: {
						page: that.page,
						size: 10
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.totalPage = res.data.data.totalPage
							for(var i in res.data.data.list){
								that.giftList.push(res.data.data.list[i])
							}
							
						} else if (res.data.code == 101) {
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			hideModal(){
				this.modalName = null
			},
			showDivide(){
				this.modalName = 'divide'
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh;}
</style>
