<template>
	<view class="bg-white wrapper">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">技师资料</block></cu-custom>
<!-- 			<view class="bg-main2 flex align-center flex-direction justify-center align-center margin-right" :style="style">
				<text class="cuIcon-presentfill text-red" style="font-size: 50upx;"></text>
				<text class="margin-top-xs">打赏技师</text>
			</view> -->

		<view class="main">
			<!-- 背景 -->
			<view class="head-bg bg-black"></view>
			<!-- 信息 -->
			<view class="shadow head padding-top padding-bottom flex flex-direction align-center align-center bg-white radius">
				<image :src="staffInfo.head_img" class="head-avatar"></image>
				<!-- <image style="width: 140upx; height: 140upx; border-radius: 100%;" src="../../static/girls/1.jpg"></image> -->
				<view class="flex align-center" style="margin-top: 80upx;">
					<text>{{ staffInfo.name == undefined ? '技师' : staffInfo.name }}号</text>
					<text :class="staffInfo.is_free == false ? 'cu-tag margin-left-sm bg-red radius sm' : 'cu-tag margin-left-sm bg-green2 radius sm'" v-if="staffInfo != null">{{ staffInfo.is_free == true ? '空闲' : '忙碌' }}</text>
				</view>
				<text class="margin-top-sm" v-if="staffInfo.is_free == false">下钟时间：{{ staffInfo.end_time == undefined || staffInfo.end_time == null ? '未开始' : (staffInfo.end_time || '').split(' ')[1] }}</text>
				<view class="flex margin-top align-center justify-between" style="width: 80%;">
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">{{ staffInfo.gift == undefined ? 0 : staffInfo.gift.totalCount  }}</text>
						<view class="flex align-center text-gray">
							<text class="cuIcon-presentfill margin-top-xs margin-right-xs"></text>
							<text>礼物数</text>
						</view>
						
					</view>
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">{{ staffInfo.service_times }}</text>
						<view class="flex align-center text-gray">
							<text class="cuIcon-timefill margin-top-xs margin-right-xs"></text>
							<text>上钟数</text>
						</view>
					</view>
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">{{ staffInfo.fansCount }}</text>
						<view class="flex align-center text-gray">
							<text class="cuIcon-peoplefill margin-top-xs margin-right-xs"></text>
							<text>粉丝数</text>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 主体 -->
			<view class="body flex flex-direction align-center radius padding-top padding-bottom" v-if="staffInfo != null">
				<view class="body-inner">
					<text class="action cuIcon-titles text-gray text-bold">个人介绍</text>
					<view class="margin-top-sm" v-if="staffInfo != null">
						{{ staffInfo.introduce }}
					</view>

					<view class="action margin-top cuIcon-titles text-gray text-bold">技师靓照</view>
					<scroll-view scroll-x="true" class="margin-top-sm flex" style="overflow: hidden; flex-wrap: nowrap; white-space: nowrap;">
						<image @tap="showImg(index)" :src="item" class="radius margin-right-sm" style="width: 120upx; height: 120upx; display: inline-block;" v-for="(item, index) in staffInfo.imgs" :key="index"></image>
					</scroll-view>
					
					<view class="action cuIcon-titles text-gray text-bold margin-top">技师标签</view>
					<view class="flex flex-wrap " v-if="staffInfo != null">
						<text v-if="staffInfo.label != undefined" style="margin-left: 0;" class="cu-tag round bg-red margin-right-sm margin-top-sm">{{ staffInfo.label }}</text>
						<!-- <text style="margin-left: 0;" class="cu-tag round bg-red margin-right-sm margin-top-sm">排名第一</text> -->
						<view v-for="(item, index) in staffInfo.tag" :key="index" style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">{{ item.tag }}</view>
						<view style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">{{ staffInfo.age }}岁</view>
						<view style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">{{ staffInfo.height }}cm</view>
						<view style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">{{ staffInfo.weight }}kg</view>
					</view>
				</view>
					
			<!-- </view> -->
				
			</view>
			</view>
		
		<view class="cu-modal" :class="modalName=='book'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">预约</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<button @tap.stop="goBook" data-name='0' class="cu-btn round bg-main2">未到店</button>
					<button @tap.stop="goBook" data-name='1' style="margin-left: 20upx;" class="cu-btn round bg-main2">已在店内</button>
				</view>
			</view>
		</view>
		
		
		
		<view v-if="!showGift" class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @tap="SendGift" class="cu-btn lg bg-main2 round " style="width: 40%;">
				<text class="cuIcon-presentfill margin-right-sm text-red"></text>打赏技师
			</button>
			<button v-if="staffInfo.is_free == true" @click="goBook" data-name="book" class="cu-btn lg bg-main3 round margin-left" style="width: 40%;">
				<text class="cuIcon-appreciatefill margin-right-sm"></text>预约技师
			</button>
		</view>
		
		<view v-if="showGift" class="giftView">
			<view class="margin-left-sm">礼物</view>
			<image src="../../static/01.png" class="gifts"></image>
			
		</view>
		
		
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green">礼物</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="padding-sm bg-white ">
					<swiper style="min-height: 0; height: 320upx;" class="screen-swiper" :class="dotStyle?'square-dot':'square-dot'" :indicator-dots="true" :circular="true"
					 :autoplay="false" interval="5000" duration="500" indicator-color="#e8e8e8"
				 indicator-active-color="#f5df2c">
						<swiper-item v-for="(item,index) in giftList" :key="index" class="" >
							<view class="flex justify-between ">
								<view @tap="ChooseGift(iitem.id)" :class=" giftId == iitem.id ? 'radius giftimg padding-sm flex flex-direction align-center' : 'radius padding-sm flex flex-direction align-center'" style=" width: 180upx; height: 280upx;"  v-for="(iitem, iindex) in item" :key="iindex">
									<image   class="" :src="iitem.img" style="height: 100%; width: 100%;"></image>
									<text class="margin-top-xs">{{ iitem.title }}</text>
									<text class="margin-top-xs">{{ iitem.price }}元</text>
								</view>
								
							</view>
							
						</swiper-item>
					</swiper>
					<view  class="gift-bottom flex justify-end align-center margin-right-sm" style="">
						<view v-if="numSelect" class="flex flex-direction radius"  style="position: absolute; width: 80upx; border: 2px solid #f5df2c; right: 140upx; bottom: 70upx;">
							<text @tap="chooseNum(1314)" class="padding-tb-xs text-center bg-main2" style="width: 100%; border-bottom: 1px solid #f9f9f9;">1314</text>
							<text @tap="chooseNum(520)" class="padding-tb-xs text-center bg-main2" style="width: 100%; border-bottom: 1px solid #f9f9f9;">520</text>
							<text @tap="chooseNum(66)" class="padding-tb-xs text-center bg-main2" style="width: 100%; border-bottom: 1px solid #f9f9f9;">66</text>
							<text @tap="chooseNum(10)" class="padding-tb-xs text-center bg-main2" style="width: 100%; border-bottom: 1px solid #f9f9f9;">10</text>
							<text @tap="chooseNum(1)" class="padding-tb-xs text-center bg-main2" style="width: 100%;">1</text>
						</view>
						<button @tap="ShowNumSelection" class=" gift-number text-sm line-main4 " >{{ giftNum }}<text class="cuIcon-fold margin-left-xs"></text></button>
						<button @tap="ConfirmGift" class="cu-btn gift-btn text-sm bg-main2">送礼</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				staffInfo: null,
				modalName: null,
				bookStatus: 0,
				curRoom: null,
				id: null,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../static/girls/1.jpg'
				},{
					id: 0,
					type: 'image',
					url: '../../static/girls/1.jpg'
				},{
					id: 0,
					type: 'image',
					url: '../../static/girls/1.jpg'
				}],
				giftList: {},
				giftIndex: null,
				showGift: false,
				giftNum: 1,
				numSelect: false,
				giftId: null,
				orderId: null,
				
				
			};
		},
		computed: {
			style(){
				var CustomBar= this.CustomBar;
				var style = `top:${CustomBar}px; margin-top: 10px; width: 70px; height: 70px; border-radius: 100%; position: absolute; z-index: 999; right: 0`;
				return style
			}
		},
		onLoad(options) {
			this.id = options.id
			this.GetGiftList()
		},
		onShow() {
			this.GetStaffInfo()
		},
		methods:{
			SendRealGift(){
				var that = this
				
				var data = {
					count: this.giftNum,
					gid: this.giftId,
					orderId: '',
					staffId: this.id
				}
				uni.request({
					method: 'POST',
					header: {
						token: that.Token
					},
					data,
					url: that.Server + "gift/gift",
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.modalName = null
							uni.showModal({
								title: "感谢你对技师的打赏",
								confirmText: "继续打赏",
								success(res) {
									if(res.confirm){
										that.modalName = "bottomModal"
									}
								}
							})
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
							that.modalName = null
							uni.showModal({
								content: res.data.msg
							})
						}
						uni.hideLoading()
					}
				})
				
			},
			ConfirmGift(){
				var that = this
				
				if(this.giftId != null){
					var data = {
						"count": this.giftNum,
						"gid": this.giftId
					}
					uni.request({
						method: 'POST',
						header: {
							token: that.Token
						},
						data,
						url: "https://www.qiafantech.com/club/wx/order/recharge",
						success(res) {
							
							if(res.data.code == 0){
								console.log(res);
								uni.showLoading({
									title: '支付中'
								})
								uni.requestPayment({
									appId: res.data.data.appId,
									nonceStr: res.data.data.nonceStr,
									package: res.data.data.package,
									paySign: res.data.data.paySign,
									signType: res.data.data.signType,
									timeStamp: res.data.data.timeStamp,
									success(res) {
										
										that.SendRealGift()
										
										console.log(res);
									}, fail (err){
										uni.hideLoading()
										that.modalName = null
										uni.showToast({
											icon: 'none',
											title: '支付失败'
										})
									}
								})
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
				} else {
					uni.showToast({
						icon: 'none',
						title: '请选择礼物'
					})
				}
				 
			},
			ChooseGift(id){
				console.log(id);
				this.giftId = id
			},
			closeSelect(){
				if(this.numSelect == true){
					this.numSelect = false
				}
			},
			chooseNum(num){
				this.numSelect = false
				this.giftNum = num
			},
			ShowNumSelection(){
				this.numSelect = !this.numSelect
			},
			GetGiftList(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'g/list',
					success(res) {
						
						if(res.data.code == 0){
							var arr = []
							var index = 0
							for(var i in res.data.data){
								if(i != res.data.data.length - 1){
									if(arr.length == 3){
										that.giftList[index] = arr
										index++
										arr = []
										arr.push(res.data.data[i])
										that.giftList[index] = arr
									} else {
										arr.push(res.data.data[i])
										that.giftList[index] = arr
									}
								} else {
									if(arr.length == 3){
										that.giftList[index] = arr
										index++
										arr = []
										arr.push(res.data.data[i])
										that.giftList[index] = arr
									} else {
										arr.push(res.data.data[i])
										that.giftList[index] = arr
									}
								}
								
							}
							console.log(that.giftList);
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
			SendGift(){
				var that = this
				if(this.userServiceInfo == undefined){
					uni.showModal({
						title: '请授权微信登录',
						success(res) {
							if(res.confirm){
								uni.reLaunch({
									url: '../login/login'
								})
							}
						}
					})
				} else {
					if(this.giftList != null && this.giftList != undefined && this.giftList != {} && this.giftList != ''){
						that.modalName = "bottomModal"
					} else {
						uni.showToast({
							icon: 'none',
							title: '礼物未设置'
						})
					}
					
				}
			},
			hideModal(){
				this.modalName = null
			},
			showImg(index){
				uni.previewImage({
					urls: this.staffInfo.imgs,
					current: index,
					indicator: true,
					count:  this.staffInfo.imgs[index]
				})
			},
			GetStaffInfo(){
				uni.showLoading({
					title: '请稍等'
				})
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'staff/info',
					data: {
						staffId: that.id
					},
					success(res) {
						
						if(res.data.code == 0){
							res.data.data.imgs = JSON.parse(res.data.data.imgs)
							that.staffInfo = res.data.data
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
			openModal(e){
				this.modalName = e.currentTarget.dataset.name
			},
			goBook(e){
				if(this.userServiceInfo == undefined){
					uni.showModal({
						title: '请授权微信登录',
						success(res) {
							if(res.confirm){
								uni.reLaunch({
									url: '../login/login'
								})
							}
						}
					})
				} else {
					uni.navigateTo({
						url: "../book/book?id=" + this.id
					})
				}
				
			},
			changeBookStatus(){
				if(this.bookStatus != 0){
					this.bookStatus = 0
				}
			},
			changeBookStatusB(){
				if(this.bookStatus != 1){
					this.bookStatus = 1
				}
				
			},
			changeRoom(e){
				// console.log(e);
				this.curRoom = e.currentTarget.dataset.index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper{min-height: 100vh;}
	.main{
		.head-bg{height: 350upx; width: 100%; position: absolute; top: 0; left: 0}
		.head{width: 700upx; margin-left: 25upx; position: relative; margin-top: 120upx;
			.head-avatar{width: 160upx; height: 160upx; position: absolute; top: -70upx; border-radius: 100%; left: 295upx; z-index: 999;}
		}
		.body{width: 700upx; margin-top: 50upx; margin-left: 25upx;
			.body-inner{width: 650upx;}
		}
		.inputs{width: 700upx; border-bottom: 1px solid #f5f5f5; padding-bottom: 20upx;}
		
	}
	.gift-bottom{
		.gift-number{color: black; border-radius: 0; margin: 0; padding: 0; width: 100upx; height: 60upx; border-bottom-left-radius: 40upx; border-top-left-radius: 40upx;}
		.gift-btn{border-radius: 0; margin: 0;padding: 0; width: 100upx; height: 60upx; border-bottom-right-radius: 40upx; border-top-right-radius: 40upx;}
	}
	button::after {
	  border: 0;
	} 
	
	.giftimg{
		border: 2px solid #f5df2c;
	}
	
</style>
