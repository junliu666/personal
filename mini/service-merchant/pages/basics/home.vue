<template name="basics">
	<view>
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"><block slot="backText" style="font-size: 40upx;"> <text @click="showLocation" style="font-size: 50upx; margin-right: 12upx;" class=" text-main"></text> <text @click="showLocation">{{ MerchantToken.title }}</text></block><block slot="content"></block></cu-custom>
		<view class="main">
			<!-- 首页导航 -->
			<view class="bg-white header">
				<swiper v-if="swiperList.length != 0" class="card-swiper" :class="dotStyle?'square-dot':'square-dot'" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#f9f9f9"
				 indicator-active-color="#f5df2c">
					<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
						<view class="swiper-item">
							<image :src="item.img_url" mode="aspectFill"></image>
							<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
						</view>
					</swiper-item>
				</swiper>
				
				<!-- 排名 -->
				<view v-if="recStaff.length != 0" class="text-center margin-left-sm margin-top"><text class="cuIcon-medalfill text-main margin-right-sm text-lg"></text>推荐技师</view>
				<view v-if="recStaff.length != 0" class="rank flex align-end justify-center margin-top-sm">
					<view class="rank-1 margin-right-lg" @click="book(recStaff[1].id)" data-key="0">
						<image src="../../static/2222.png" style="width: 100%; height: 100%; z-index: 9;" mode=""></image>
						<!-- <image src="../../static/two-two.png" style="width: 100%; height: 100%;"></image> -->
						<image :src="recStaff[1].head_img" class="inner-girl" mode=""></image>
					</view>
					<view class="rank-2"  @click="book(recStaff[0].id)" data-key="0">
						<image src="../../static/11111.png" style="width: 100%; height: 100%; z-index: 9;" mode=""></image>
						<!-- <image src="../../static/one-one.png" style="width: 100%; height: 100%;" mode=""></image> -->
						<image :src="recStaff[0].head_img" class="inner-girl" mode=""></image>
<!-- 						<view class="text-main" style=" position: absolute; left: 50upx; bottom: -20upx">
							<text class=" ">No1.</text>12号
						</view> -->
					</view>
					<view class="rank-3 margin-left-lg"  @click="book(recStaff[2].id)" data-key="0">
						<image src="../../static/33333.png" style="width: 100%; height: 100%; z-index: 9;" mode=""></image>
						<!-- <image src="../../static/three-three.png" style="width: 100%; height: 100%;" mode=""></image> -->
						<image :src="recStaff[2].head_img" class="inner-girl" mode=""></image>
<!-- 						<view class="text-main3" style=" position: absolute; left: 55upx; bottom: -20upx">
							<text class=" ">No3.</text>12号
						</view> -->
					</view>
				</view>
				<view class="flex align-center justify-center text-sm margin-top-xs" style="width: 100%;" v-if="recStaff.length != 0">
					<text style="width: 130upx; overflow: hidden;" class="text-center margin-right-lg">{{ recStaff[1].name}}</text>
					<text style="width: 158upx; overflow: hidden;" class="text-center">{{ recStaff[0].name}}</text>
					<text style="width: 130upx; overflow: hidden;" class="text-center margin-left-lg">{{ recStaff[2].name}}</text>
				</view>
			</view>
			
			<!-- 列表 -->
			<!-- 排序筛选 -->
			<!-- 排序 -->
			<view class="cu-modal" :class="modalName=='order'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar  justify-end">
						<view class="action" @tap="hideModal">
							<view class="content text-green">技师排序</view>
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						<button @tap.stop="changeSort" data-name='total_gift' :class=" orderMethod == 'total_gift' ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">打赏数</button>
						<button @tap.stop="changeSort" data-name='service_times' style="margin-left: 20upx;" :class=" orderMethod == 'service_times' ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">上钟数量</button>
						<!-- <button @tap.stop="changeSort" data-name='price' style="margin-left: 20upx;" :class=" sortMethod == 2 ? 'cu-btn round bg-main' : 'cu-btn round line-gray'">忙碌中</button> -->
					</view>
				</view>
			</view>
			<!-- 筛选 -->
			<view class="cu-modal" :class="modalName=='filter'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar  justify-end">
						<view class="action" @tap="hideModal">
							<view class="content text-green">技师筛选</view>
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						<button @tap.stop="changeSort" data-name='distance' :class=" filterMethod == 0 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">全部</button>
						<button @tap.stop="changeSort" data-name='distance' style="margin-left: 20upx;" :class=" filterMethod == 1 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">空闲中</button>
						<button @tap.stop="changeSort" data-name='price' style="margin-left: 20upx;" :class=" filterMethod == 2 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">忙碌中</button>
					</view>
				</view>
			</view>
			<!-- 预约 -->
			<view class="cu-modal" :class="modalName=='book'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar  justify-end">
						<view class="action" @tap="hideModal">
							<view class="content text-green">预约技师</view>
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						<button @tap.stop="book" data-status='0' class=" cu-btn round bg-main2">未到店</button>
						<button @tap.stop="book" data-status='1' style="margin-left: 20upx;" class=" cu-btn round bg-main2">已到店</button>
					</view>
				</view>
			</view>
			<view class="flex justify-between margin-top-sm align-center ">
				<view class="flex margin-left-sm">
					<button @tap="changeStatus('all')" style="width: 150upx;" :class=" staffStatus == 'all' ? 'cu-btn sm bg-main2 round margin-right-sm' : 'cu-btn sm line-gray round margin-right-sm'">
						全部
					</button>
					<button @tap="changeStatus(true)" style="width: 150upx;" :class=" staffStatus == true ? 'cu-btn sm bg-main2 round margin-right-sm' : 'cu-btn sm line-gray round margin-right-sm'">
						空闲
					</button>
					<button @tap="changeStatus(false)" style="width: 150upx;" :class=" staffStatus == false ? 'cu-btn sm bg-main2 round margin-right-sm' : 'cu-btn sm line-gray round margin-right-sm'">
						忙碌
					</button>
				</view>
				<view class="flex margin-right-sm">
					<text class="cuIcon-search " @click="goSearch" data-name="filter" style="font-size: 50upx;"></text>
					<text class="cuIcon-order  margin-left" @click="changeModal" data-name="order" style="font-size: 50upx;"></text>
				</view>
			</view>
			<view class="flex justify-end margin-top-sm margin-right-sm">
				<button @tap="NewStaff" class="cu-btn bg-main3 round"><text class="cuIcon-add margin-right-xs"></text>新增技师</button>
			</view>
			<!-- 列表 -->
			<view v-if="staffList == null || staffList.length == 0" class="margin-top text-center" style="width: 100%;">
				暂无技师
			</view>
			<view v-if="staffList != null && staffList.length != 0" class="flex align-center flex-direction"  >
				<view v-if="staffStatus == true ? iitem.is_free == true : staffStatus == false ? iitem.is_free == false : staffStatus == 'all' ? iitem.is_free == false || iitem.is_free == true  : '' "  v-for="(iitem, iindex) in staffList" :key="iindex" data-name="book" class="items margin-top-xs flex justify-between align-center">
					<view class="flex">
						<view class="flex flex-direction align-center" style="position: relative;">
							<view class="" style="position: relative;">
								<image :src="iitem.head_img" class="cu-avatar radius" style="width: 120upx; height: 120upx;"></image>
								<text class="margin-top-xs bg-main3 text-center text-xs" style="background-color: rgba(0, 0, 0, 0.5); bottom: 0; left: 0; width: 120upx; position: absolute; z-index: 999;;">{{ iitem.label }}</text>
							</view>
							
							<text class="text-sm">{{ iitem.name }}</text>
							
						</view>
						
						<view class="flex flex-direction margin-left-sm">
							<!-- 编号 入职 -->
							<view style="width: 550upx;" class="flex justify-between align-center">
								<view class="flex align-center" v-if="iitem.is_free == true">
									<text class="cuIcon-title text-green2 "></text>空闲
								</view>
								<view class="flex align-center" v-if="iitem.is_free == false">
									<text class="cuIcon-title text-red "></text>忙碌
								</view>
								<view class="text-gray margin-left-sm" v-if="iitem.is_free == false">
									下钟时间：{{ iitem.endTime == undefined ? '未定' : iitem.endTime.split(' ')[0] }}
								</view>
							</view>
							<!-- 标签 -->
							<view class="flex margin-top-xs justify-between">
								<view class="flex align-center">
									<text class="cu-tag  bg-main2 round sm" v-for="(titem, tindex) in iitem.tag" :key="tindex">{{ titem }}</text>
								</view>
								<view class="text-gray">
									上钟{{ iitem.service_times }} | 礼物{{ iitem.total_gift }}
								</view>
							</view>
							<!-- 下钟时间 -->
							<view class=" margin-top-sm flex justify-end" >
								<button @tap="book2(iindex)" class="cu-btn sm line-gray margin-right-xs round">技师详情</button>
								<button @tap="StaffUp(iindex)" class="cu-btn sm line-gray round margin-right-xs" v-if="iitem.is_free == true">技师上钟</button>
								<button @tap="StaffDown(iindex)" class="cu-btn sm line-gray round margin-right-xs" v-if="iitem.is_free == false">技师下钟</button>
								<!-- <button class="cu-btn sm line-black round">辞退技师</button> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>

	</view>
</template>


<script>
	import qrCode from '../../static/js/wxqrcode.js'
	export default {
		props: ["staffList", "swiperList", "recStaff"],
		name: "basics",
		data() {
			return {
				staffStatus: 'all',
				orderMethod: "total_gift",
				filterMethod: 0,
				modalName: null,
				cardCur: 0,
				dotStyle: false,
			};
		},
		methods:{
			changeSort(e){
				var target = e.target.dataset.name
				
				if(target != this.orderMethod){
					this.orderMethod = target
					this.$emit("ChangeSort", target)
					this.modalName = null
				}
				
			},
			NewStaff(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'merchant/rqCode',
					success(res) {
						if(res.data.code == 0){
							let img = qrCode.createQrCodeImg(res.data.data, {  
							     size: parseInt(300)//二维码大小  
							})
							uni.showModal({
								content: '让您的技师打开技师端，扫描二维码',
								confirmText: '明白了',
								success(res) {
									if(res.confirm){
										uni.previewImage({
											urls: [img],
											current: 0
										})
									}
								}
							})
							
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
			changeStatus(sta){
				if(sta != this.staffStatus){
					this.staffStatus = sta
				}
			},
			StaffUp(index){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'staff/updStatus',
					data: {
						staffId: that.staffList[index].id,
						isFree: false,
					},
					success(res) {
						if(res.data.code == 0){
							that.staffList[index].is_free = false
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
			StaffDown(index){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'staff/updStatus',
					data: {
						staffId: that.staffList[index].id,
						isFree: true,
					},
					success(res) {
						if(res.data.code == 0){
							that.staffList[index].is_free = true
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
			goSearch(){
				uni.navigateTo({
					url: '../search/search'
				})
			},
			book(id){
				uni.navigateTo({
					url: "../people-detail/people-detail?staffId=" + id
				})
			},
			book2(index){
				uni.navigateTo({
					url: "../people-detail/people-detail?staffId=" + this.staffList[index].id
				})
			},
			viewDetail(){
				this.modalName = "book"
			},
			hideModal(){
				this.modalName = null
			},
			changeModal(e){
				this.modalName = e.currentTarget.dataset.name
			},
			showLocation(){
				
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style scoped lang="scss">
	.page {
		height: 100vh;
	}
	// height: 100vh;
	.main{margin-bottom: 120upx;
		.header{margin-bottom: 30upx;
			.rank{
				.rank-1{width: 130upx; height: 170upx;   position: relative; 
					.inner-girl{position: absolute; width: 120upx; height: 120upx; left: 6upx; top: 47upx; z-index: 0; border-radius: 100%;}
				}
				.rank-2{width: 158upx; height: 207upx;  position: relative;
					.inner-girl{position: absolute; width: 144upx; height: 144upx; left: 10upx; top: 57upx; z-index: 0; border-radius: 100%}
				}
				.rank-3{width: 130upx; height: 170upx; position: relative; 
				.inner-girl{position: absolute; width: 120upx; height: 120upx; left: 6upx; top: 47upx; z-index: 0; border-radius: 100%}
					
				}
				.rank-4{width: 140upx; }
				.rank-5{width: 170upx;}
				.rank-6{width: 140upx;}
			}
		}
		.items{width: 700upx; background-color: white; border-radius: 10upx; padding: 10upx}
	}
</style>
