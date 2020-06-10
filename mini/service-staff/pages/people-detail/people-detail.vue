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
				<image src="../../static/girls/1.jpg" class="head-avatar"></image>
				<!-- <image style="width: 140upx; height: 140upx; border-radius: 100%;" src="../../static/girls/1.jpg"></image> -->
				<view class="flex align-center" style="margin-top: 80upx;">
					<text>18号技师</text>
					<text :class="status != 0 ? 'cu-tag margin-left-sm bg-red radius sm' : 'cu-tag margin-left-sm bg-green2 radius sm'">{{ status != 0 ? '忙碌' : '空闲' }}</text>
				</view>
				<text class="margin-top-sm" v-if="status != 0">下钟时间：10:00</text>
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
			</view>
			
			<!-- 主体 -->
			<view class="body flex flex-direction align-center radius padding-top padding-bottom">
				<view class="body-inner">
					<text class="action cuIcon-titles text-gray text-bold">个人介绍</text>
					<view class="margin-top-sm">
						个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍
					</view>

					<view class="action margin-top cuIcon-titles text-gray text-bold">技师靓照</view>
					<scroll-view scroll-x="true" class="margin-top-sm flex" style="overflow: hidden; flex-wrap: nowrap; white-space: nowrap;">
						<image src="../../static/girls/1.jpg" class="radius margin-right-sm" style="width: 120upx; height: 120upx; display: inline-block;" v-for="(item, index) in 5"></image>
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
						
						<button @click="changeCall" class="cu-btn bg-main3 radius"><text class="cuIcon-edit"></text>编辑标签</button>
					</view>
					
					<view class="flex flex-wrap ">
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">红牌技师</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">排名第一</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">服务认真</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">身高163</text>
						<text style="margin-left: 0;" class="cu-tag round bg-main2 margin-right-sm margin-top-sm">体重63</text>
					</view>
				</view>
					
			<!-- </view> -->
				
			</view>
			
<!-- 			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'square-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" indicator-color="#f9f9f9"
				 indicator-active-color="#f5df2c">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view class="margin-top flex justify-between  margin-left-sm text-bold margin-right-sm" style="width: 700upx;">
				<view class="flex align-center">
					<text>18号技师</text>
					<text :class="status != 0 ? 'cu-tag margin-left-sm bg-red radius sm' : 'cu-tag margin-left-sm bg-green2 radius sm'">{{ status != 0 ? '忙碌' : '空闲' }}</text>
				</view>
				
				<text v-if="status != 0">下钟时间：10:00</text>
			</view>
			<view class="margin-top flex justify-between align-center margin-left-sm margin-right-sm" style="width: 700upx;">
				<view class="flex">
					<text class="cu-tag  bg-main2 radius">红牌技师</text>
					<text class="cu-tag  bg-main2 radius">服务达人</text>
				</view>
				<view class="flex">
					<view class="flex margin-right">
						<text class="cuIcon-appreciatefill text-main3 margin-right-xs"></text>服务40次
					</view>
					<view class="flex">
						<text class="cuIcon-presentfill text-main3 margin-right-xs"></text>打赏58次
					</view>
				</view>
			</view>
			
			<view class="margin-top margin-left-sm" style="width: 700upx;">
				从业10年从业10年从业10年从业10年从业10年从业10年从业10年从业10年从业10年
				从业10年从业10年从业10年从业10年从业10年从业10年从业10年从业10年从业10年
			</view>
			
			<view class="divide-line margin-top" style="width: 100%;"></view>
			
			<view class="margin-top flex  margin-left-sm text-bold " style="width: 700upx;">
				<text class="cuIcon-time margin-right-xs"></text>预约技师
			</view>
			<view class="flex margin-left-sm margin-top">
				<button class="cu-btn text-lg bg-main2 round margin-right-sm">
					10:20
				</button>
				<button class="cu-btn text-lg line-gray round margin-right-sm">
					10:40
				</button>
				<button class="cu-btn text-lg line-gray round">
					11:00
				</button>
			</view>
			<view class="flex margin-left-sm margin-top margin-bottom">
				<button @click="changeBookStatus" :class=" bookStatus == 0 ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm'">
					已在店内
				</button>
				<button @click="changeBookStatusB" :class=" bookStatus == 1 ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm'">
					未到店
				</button>
			</view>
			<input v-if="bookStatus == 1" style="margin-top: 60upx;" class="inputs margin-top margin-left-sm" placeholder="请输入联系方式 (手机号/微信号)"/>
			<input v-if="bookStatus == 0" style="margin-top: 60upx;" class="inputs margin-top margin-left-sm" placeholder="请输入房间号"/>
 -->	</view>
		
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
			<button class="cu-btn lg bg-main2 round margin-right" style="width: 40%;">
				<text class="cuIcon-timefill margin-right-sm text-red"></text>技师上钟
			</button>
			<button  data-name="book" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class="cuIcon-bad margin-right-sm"></text>辞退技师
			</button>
		</view>
	</view>
</template>

<script>
	export default {
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
			console.log(options);
			this.status = options.status == 0 ? 0 : 1
		},
		methods:{
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
