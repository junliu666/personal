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
					<text>{{ staffInfo.name }}</text>
					<text :class="staffInfo.is_free == false ? 'cu-tag margin-left-sm bg-red radius sm' : 'cu-tag margin-left-sm bg-green2 radius sm'">{{ staffInfo.is_free == false ? '忙碌' : '空闲' }}</text>
				</view>
				<text class="margin-top-sm" v-if="staffInfo.is_free == false">下钟时间：{{ staffInfo.endTime == undefined ? '未定' : staffInfo.staffInfo.split(' ')[0] }}</text>
				<view class="flex margin-top align-center justify-between" style="width: 80%;">
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">{{ staffInfo.total_gift }}</text>
						<view class="flex align-center">
							<text class="text-gray margin-top-xs cuIcon-moneybagfill margin-right-xs"></text>礼物收益
						</view>
						
					</view>
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">{{ staffInfo.service_times }}</text>
						<view class="flex align-center">
							<text class="text-gray margin-top-xs cuIcon-timefill margin-right-xs"></text>上钟数
						</view>
						
					</view>
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">{{ staffInfo.fansCount }}</text>
						<view class="flex align-center">
							<text class="text-gray margin-top-xs cuIcon-peoplefill margin-right-xs"></text>粉丝数
						</view>
						
					</view>
				</view>
			</view>
			
			<!-- 主体 -->
			<view class="body flex flex-direction align-center radius padding-top padding-bottom">
				<view class="body-inner">
					<text class="action cuIcon-titles text-gray text-bold">个人介绍</text>
					<view class="margin-top-sm">
						{{ staffInfo.introduce }}
					</view>

					<view class="action margin-top cuIcon-titles text-gray text-bold">技师靓照</view>
					<scroll-view scroll-x="true" class="margin-top-sm flex" style="overflow: hidden; flex-wrap: nowrap; white-space: nowrap;">
						<image :src="imgItem" v-for="(imgItem, imgIndex) in staffInfo.imgs" :key="imgIndex" class="radius margin-right-sm" style="width: 120upx; height: 120upx; display: inline-block;"></image>
					</scroll-view>
					
					<view class="cu-modal" :class="modalName=='call'?'show':''">
						<view class="cu-dialog">
							<view class="cu-bar  justify-end">
								<view class="action" @tap="hideModal">
									<view class="content text-green">编辑标签</view>
									<text class="cuIcon-close text-red"></text>
								</view>
							</view>
							<view class="padding-xl">
								<view class="flex align-center justify-center">
									<input type="number"  placeholder="红牌技师" />
								</view>					
								<button @tap.stop="changeSort" data-name='distance' class="cu-btn round bg-main3 margin-top-sm">确定</button>
							</view>
						</view>
					</view>
					
					<view class="action  text-gray text-bold margin-top flex justify-between">
						<view class="cuIcon-titles">
							<text>技师标签</text>
						</view>
						
						<!-- <button @click="changeCall" class="cu-btn bg-main3 radius"><text class="cuIcon-edit"></text>编辑标签</button> -->
					</view>
					
					<view class="flex flex-wrap ">
						<text style="margin-left: 0;" class="cu-tag round bg-red margin-right-sm margin-top-sm">{{ staffInfo.label }}</text>
						<!-- <text style="margin-left: 0;" class="cu-tag round bg-red margin-right-sm margin-top-sm">排名第一</text> -->
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm" v-for="(tagItem, tagIndex) in staffInfo.tag" :key="tagIndex">{{ tagItem.tag }}</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">身高{{ staffInfo.height }}</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">体重{{ staffInfo.weight }}</text>
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
		
		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @tap="changeStatus" class="cu-btn lg bg-main2 round margin-right" style="width: 40%;">
				<text :class="staffInfo.is_free == false ? 'cuIcon-down margin-right-sm text-bold text-red' : 'cuIcon-top text-bold margin-right-sm text-red'"></text>{{ staffInfo.is_free == false ? '技师下钟' : '技师上钟' }}
			</button>
			<button @tap="editStaff" data-name="book" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class="cuIcon-edit margin-right-sm"></text>编辑资料
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				modalName: null,
				bookStatus: 0,
				curRoom: null,
				status: null,
				staffInfo: null,
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
			this.id = options.staffId
		},
		onShow() {
			this.GetStaffInfo()
		},
		methods:{
			changeStatus(){
				var that = this
				if(that.staffInfo.is_free == true){
					var status = false
				} else {
					var status = true
				}
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'staff/updStatus',
					data: {
						staffId: that.id,
						isFree: status
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.GetStaffInfo()
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
			GetStaffInfo(){
				var that = this
				uni.showLoading({
					
				})
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'staff/info',
					data: {
						staffId: that.id
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							res.data.data.imgs = JSON.parse(res.data.data.imgs)
							that.staffInfo = res.data.data
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
			editStaff(){
				uni.navigateTo({
					url: '../edit-staff/edit-staff?id=' + this.id + "&name=" + this.staffInfo.name + "&label=" + this.staffInfo.label + "&isFree=" + this.staffInfo.is_free
				})
			},
			hideModal(){
				this.modalName = null
			},
			changeCall(){
				this.modalName = 'call'
			},
			openModal(e){
				this.modalName = e.currentTarget.dataset.name
			},
			goBook(e){
				uni.navigateTo({
					url: "../book/book"
				})
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
</style>
