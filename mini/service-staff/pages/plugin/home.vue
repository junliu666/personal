<template>
	<view class="bg-white wrapper">
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"></block><block slot="content">我的</block></cu-custom>	

<!-- 			<view class="bg-main2 flex align-center flex-direction justify-center align-center margin-right" :style="style">
				<text class="cuIcon-presentfill text-red" style="font-size: 50upx;"></text>
				<text class="margin-top-xs">打赏技师</text>
			</view> -->

		<view class="main">
<!-- 			<view class="head-bg bg-black"></view>
			<view class="shadow head padding-top padding-bottom flex flex-direction align-center align-center bg-white radius">
				<image src="../../static/girls/1.jpg" class="head-avatar"></image>
				<view class="flex align-center" style="margin-top: 80upx;">
					<text>18号技师</text>
				</view>
				<view class="flex margin-top align-center justify-between" style="width: 80%;">
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">500</text>
						<view class="flex align-center">
							<text class="text-gray margin-top-xs cuIcon-moneybagfill margin-right-xs"></text>礼物收益
						</view>
						
					</view>
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">80</text>
						<view class="flex align-center">
							<text class="text-gray margin-top-xs cuIcon-timefill margin-right-xs"></text>上钟数
						</view>
						
					</view>
					<view class="flex flex-direction align-center">
						<text style="font-size: 40upx;">60</text>
						<view class="flex align-center">
							<text class="text-gray margin-top-xs cuIcon-peoplefill margin-right-xs"></text>粉丝数
						</view>
					</view>
				</view>
			</view> -->
<!-- 			<view class="flex center margin-left-sm margin-top">
				<view @tap="viewPresent" class="flex align-center justify-center bg-main3 margin-right-sm" style=" width: 80upx; height: 80upx; border-radius: 100%;">
					<text class="cuIcon-moneybagfill" style="font-size: 40upx;"></text>
				</view>
				<view @tap="editInfo" class="flex align-center justify-center bg-main3 margin-right-sm" style="width: 80upx; height: 80upx; border-radius: 100%;">
					<text class="cuIcon-edit" style="font-size: 40upx;"></text>
				</view>
				<view class="flex align-center justify-center bg-main3" style="width: 80upx; height: 80upx; border-radius: 100%;">
					<text class="cuIcon-servicefill" style="font-size: 40upx;"></text>
				</view>
			</view> -->
			
			<view @tap="CallService" class="flex align-center justify-center bg-main3" style="width: 80upx; height: 80upx; border-radius: 100%; position: fixed; bottom: 150upx; right: 25upx">
				<text class="cuIcon-servicefill" style="font-size: 40upx;"></text>
			</view>
			
			<view style="width: 700upx;" class="margin-top margin-left-sm flex align-center justify-between">
				<view class="flex align-center">
					<image :src="userInfo.head_img" class="head-avatar margin-right"></image>
					{{ userInfo.name }}
				</view>
				
				<view class="">
					
				</view>
				<view @tap="editInfo" class="flex align-center justify-center bg-main2 margin-right-sm" style="width: 80upx; height: 80upx; border-radius: 100%;">
					<text class="cuIcon-edit" style="font-size: 40upx;"></text>
				</view>
			</view>
			
			<view @tap="viewPresent" style="width: 700upx;" class="margin-top margin-left-sm flex align-center justify-between">
				<view class="">
					<text class="cuIcon-moneybagfill text-main margin-right-xs"></text>收到礼物
				</view>
				<view class="">
					{{ userInfo.gift.totalCount == undefined ? 0 : userInfo.gift.totalCount }}个
				</view>
				<text  class="text-center cuIcon-right text-gray "></text>
			</view>
			
			<view @tap="goFollows" style="width: 700upx;" class="margin-top margin-left-sm flex center justify-between">
				<view class="">
					<text class="cuIcon-likefill text-main margin-right-xs"></text>粉丝数量
				</view>
				<view class="">
					{{ userInfo.fansCount == undefined ? 0 : userInfo.fansCount }}人
				</view>
				<text class="text-center cuIcon-right text-gray "></text>
			</view>
			<view @tap="MineGoOrderList" style="width: 700upx;" class="margin-top margin-left-sm flex justify-between">
				<view class="">
					<text class="cuIcon-timefill text-main margin-right-xs"></text>服务次数
				</view>
				<view class="">
					{{ userInfo.service_times == undefined ? 0 : userInfo.service_times }}次
				</view>
				<text  class="text-center cuIcon-right text-gray "></text>
			</view>
			<view class="divide-line margin-top margin-bottom" style="width: 100%;"></view>
			
			<view class="body flex flex-direction align-center radius padding-bottom">
				<view class="body-inner">
					<view class="flex">
						<text class="action cuIcon-titles text-main"></text>我的一句话
					</view>
					
					<view class="margin-top-sm">
						{{ userInfo.synopsis }}
					</view>
					<view class="flex margin-top">
						<text class="action cuIcon-titles text-main"></text>我的介绍
					</view>
					
					<view class="margin-top-sm">
						{{ userInfo.introduce }}
					</view>

					<view class="flex margin-top">
						<text class="action cuIcon-titles text-main"></text>我的照片
					</view>
					<scroll-view scroll-x="true" class="margin-top-sm flex" style="overflow: hidden; flex-wrap: nowrap; white-space: nowrap;">
						<image :src="item" class="radius margin-right-sm" style="width: 120upx; height: 120upx; display: inline-block;" v-for="(item, index) in UserInfo.imgs"></image>
					</scroll-view>
					
					<view class="cu-modal" :class="modalName=='call'?'show':''">
						<view class="cu-dialog">
							<view class="flex">
								<text class="action cuIcon-titles text-main"></text>我的标签
							</view>
							<view class="padding-xl">
								<view class="flex align-center justify-center">
									<input type="number"  placeholder="红牌技师" />
								</view>					
								<button @tap.stop="changeSort" data-name='distance' class="cu-btn round bg-main3 margin-top-sm">确定</button>
							</view>
						</view>
					</view>
					
					<view class="flex margin-top">
						<text class="action cuIcon-titles text-main"></text>我的标签
					</view>
					
					<view class="flex flex-wrap ">
						<text v-if="userInfo.label != undefined && userInfo.label != null && userInfo.label != ''" style="margin-left: 0;" class="cu-tag round bg-red margin-right-sm margin-top-sm">{{ userInfo.label }}</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm" v-for="(item, index) in userInfo.tag" :key="index">{{ item.tag }}</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">身高{{ userInfo.height }}</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">体重{{ userInfo.weight }}</text>
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
		
<!-- 		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button class="cu-btn lg bg-main2 round margin-right" style="width: 40%;">
				<text class="cuIcon-timefill margin-right-sm text-red"></text>技师上钟
			</button>
			<button  data-name="book" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class="cuIcon-bad margin-right-sm"></text>辞退技师
			</button>
		</view> -->
	</view>
</template>

<script>
	export default {
		props: ["userInfo"],
		data() {
			return {
				modalName: null,
				bookStatus: 0,
				curRoom: null,
				status: null,
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
				}]
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
			this.status = options.status == 0 ? 0 : 1
		},
		methods:{
			CallService(){
				uni.makePhoneCall({
					phoneNumber: '12345'
				})
			},
			goFollows(){
				uni.navigateTo({
					url: '../follows/follows'
				})
			},
			MineGoOrderList(){
				this.$emit("MineGoOrderList")
			},
			viewPresent(){
				// uni.showToast({
				// 	icon: 'none',
				// 	title: '版本更新后推出'
				// })
				uni.navigateTo({
					url: '../present-history/present-history?price=' + this.userInfo.gift.totalPrice
				})
			},
			editInfo(){
				uni.navigateTo({
					url: '../swiper/swiper'
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
		.head-avatar{width: 160upx; height: 160upx; border-radius: 100%; }
		
		.head-bg{height: 350upx; width: 100%; position: absolute; top: 0; left: 0}
		.head{width: 700upx; margin-left: 25upx; position: relative; margin-top: 120upx;
			.head-avatar{width: 160upx; height: 160upx; position: absolute; top: -70upx; border-radius: 100%; left: 295upx; z-index: 999;}
		}
		.body{width: 700upx; margin-left: 25upx;
			.body-inner{width: 650upx;}
		}
		.inputs{width: 700upx; border-bottom: 1px solid #f5f5f5; padding-bottom: 20upx;}
	}
</style>
