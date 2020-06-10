<template>
	<view style="min-height: 100vh;" class="bg-white">
		<firm-head bgColor="bg-white" :isBack="false">
			<text slot="icon" class="text-sub-main-firm aliicon" style="margin-left: 35upx; font-size: 40upx;"></text>
			<view slot="search" class="flex align-center round bg-white padding-sm" style="border: 1px solid #1a4339; width: 80%; height: 80%; margin-right: 35upx; ">
				<text class="cuIcon-search text-lg margin-right margin-left"></text>
				<input @confirm="SearchPeople" confirm-hold="false" confirm-type="search" type="text" value="" placeholder="搜索联系人昵称" style="width: 80%; border: none; outline: none;" />
			</view>
		</firm-head>
		
		<view class="cu-list menu-avatar">
			<view  class="cu-item" style="border: 0" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 4" :key="index" 
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view @click="ViewDetail" class="cu-avatar round lg" :style="[{backgroundImage:'url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3744215463,383557679&fm=26&gp=0.jpg'}]">
					<view class="cu-tag badge text-lg bg-sub-main">new</view>
				</view>
				<view @click="ViewDetail" class="content">
					<view class="text-cut" style="width: 430upx;">
						<view style="">我是你爸爸爸</view>
						<view class="text-gray margin-left text-sm text-cut">阿里巴巴·大师傅大师傅士大夫士大夫发</view>
					</view>
					<view class="text-gray text-sm">
						<view class="text-cut" style="width: 430upx">
							塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
						</view>
					</view>
				</view>
				<view @click="ViewDetail" class="action" style="width: 150upx;">
					<view class="text-grey text-xs">2020年10月10日</view>
					<view > </view>
				</view>
				<view @click="DelCommu" class="move">
					<!-- <view class="bg-grey">置顶</view> -->
					<view class="bg-sub-main">删除</view>
				</view>
			</view>
		</view>
		
		
<!-- 		<view @click="ViewDetail" v-for="(item,index) in 20" :key="index" class="" style="width: 100%; ">
			<view class="flex justify-between align-center" style="width: 715upx; margin-left: 35upx;">
				<image style="height: 80upx; width: 80upx;" class="radius" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
				<view class="" style="height: 140upx; margin-left: 20upx; padding-right: 35upx; width: 615upx; border-bottom: 1px solid #f5f5f5;">
					<view class="flex flex-direction justify-between " style="height: 80upx; width: 585upx;  margin-top: 30upx;">
						<view class="flex justify-between " style="width: 100%;">
							<view class="text-cut" style="width: 400upx;">
								<text style=" color: black" class="">我是你爸爸</text>
								<text class="text-gray margin-left-sm text-sm">{{ index % 2 == 0 ? '阿里巴巴·马云' : '好友' }}</text>
							</view>
							
							<text class="text-sm text-gray">2020年1月20日</text>
						</view>
						<text style="width: 400upx;" class="text-cut text-gray text-sm">你是你是时尚大方开始你是你是时尚大方开始啦地方艰苦拉萨解放卡拉圣诞节啦地方艰苦拉萨解放卡拉圣诞节</text>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		methods: {
			DelCommu(){
				
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			ViewDetail(){
				uni.navigateTo({
					url: '../component/chat'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
