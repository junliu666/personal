<template>
	<view class="main bg-white">
		<view class="cu-modal" :class="modalName=='money'?'show':''">
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
		<view class="cu-modal" :class="modalName=='divide'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">分成设置</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="flex align-center justify-center">
						<input type="number"  placeholder="请输入抽成比例" />
						<text>% (百分比)</text>
					</view>					
					<button @tap.stop="changeSort" data-name='distance' class="cu-btn round bg-main3 margin-top-sm">确定</button>
				</view>
			</view>
		</view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">打赏收益</block></cu-custom>
		<view class="flex align-center justify-between margin-right-sm">
			<view class="">
				<view class="margin-left-sm text-gray margin-top" style="font-size: 30upx;">技师打赏总收: {{ money == undefined ? 0 : money}}元</view>
				<view class="margin-left-sm text-gray margin-top" style="font-size: 30upx;">商户打赏收益: {{ money == undefined ? 0 : money}}元</view>
			</view>
			<view class="">
				<button @click="showDivide" data-name="divide" class="cu-btn bg-main3 round">
					<text class="cuIcon-moneybagfill margin-right-sm"></text>总分成设置
				</button>
				<view class="text-gray margin-top-sm">
					当前打赏抽成20%
				</view>
			</view>
		</view>
		<view class="flex justify-end margin-left-sm margin-top-sm" style="width: 700upx;">
			<button @click="showDivide" data-name="money" class="cu-btn bg-main2 round">
				<text class="cuIcon-refund margin-right-sm"></text>提现打赏
			</button>
		</view>
		
		<view class="margin-top text-center" style="width: 100%;"  v-if="giftList.length == 0">
			暂无打赏记录
		</view>
		<view v-if="giftList.length != 0" class=" margin-left-sm margin-top" style="width: 700upx;" v-for="(item, index) in giftList" :key="index">
			<view class="flex justify-between" style="width: 100%;">
				<text>{{ item.staffInfo.name }}</text>
				<text>{{ item.total_price }}元</text>
				<text>{{ item.create_time.split(" ")[0] }}</text>
			</view>
			<view class="divide-line margin-top"></view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				giftList: [],
				money: null,
				page: 1,
				totalPage: 0
			};
		},
		onReachBottom() {
			if(this.page < this.totalPage){
				this.page += 1
				this.GetGiftList()
			}
		},
		onLoad() {
			this.GetGiftList()
			this.GetMoney()
		},
		methods:{
			GetGiftList(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
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
			GetMoney(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'gift/getTotal',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.money = res.data.data
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
			hideModal(){
				this.modalName = null
			},
			showDivide(e){
				this.modalName = e.currentTarget.dataset.name
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh;}
</style>
