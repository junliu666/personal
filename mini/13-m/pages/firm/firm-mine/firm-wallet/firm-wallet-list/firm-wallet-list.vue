<template>
	<view style="min-height: 100vh; background-color: white;">
		<cu-custom-firm bgColor="bg-white" :isBack="true">
			
			<block slot="backText">
				<text class="text-lg text-sub-main-firm">企业账户</text></block>
			<block slot="content"></block>
			<view slot="right" class="margin-right">
				<text @click="GoAdd" class="cuIcon-add margin-right text-xlg text-bold" style="font-size: 45upx;"></text>
				<!-- <text class="cuIcon-search  margin-right-sm padding-sm" style="font-size: 40upx;"></text> -->
				<!-- <text class="cuIcon-roundadd padding-sm" style="font-size: 40upx;"></text> -->
			</view>
		</cu-custom-firm> 
			
		<view @click="ShowCover(index)" v-for="(item,index) in bankCardList" :key="index" class="margin-top-lg padding  radius "  style=" overflow: hidden; transform: scale(1, 1);height: 300upx; width: 700upx; margin-left: 25upx;" >
			<view @click.stop="CloseCover" class=" flex align-center justify-around radius" :style="showBack == index ? 'height: 100%; width: 100%;' : 'width:0; height: 0'" style="transition: 0.5s; position: absolute; top: 0; right: 0; background-color: rgba(0,0,0,0.7); z-index: 99999; ">
				<view v-if="showBack == index" class="flex flex-direction align-center">
					<view class="bg-white round flex align-center justify-center" style="width: 80upx; height: 80upx;">
						<text style="font-size: 40upx;" class="cuIcon-card"></text>
						
					</view>
					<text class="text-white">设为默认</text>
				</view>
				<view v-if="showBack == index" class="flex flex-direction align-center">
					<view class="bg-white round flex align-center justify-center" style="width: 80upx; height: 80upx;">
						<text style="font-size: 40upx;" class="cuIcon-delete"></text>
						
					</view>
					<text class="text-white">解除绑定</text>
				</view>
			</view>
			
			<view class="shadow-blur-main bg-main radius" :style="'; background-color:rgba' + item.color " style=" z-index: -2 ;position: absolute; left:0; top:0; height: 300upx; width: 700upx; transform: (1, 1);">
				 
			</view>
			<image v-if="item.color != '(114,185,234,0.5)'" class="round" style="z-index: -1; position: absolute; bottom: -155upx; right: -55upx; opacity: 0.2; width: 350upx; height: 350upx;" :src="'https://www.qiafantech.com/bank-logo-small/' + item.bankCode + '.png' " mode=""></image>
			<view class="flex" style="width: 100%;">
				<view class="bg-white round flex align-center justify-center" style="width: 80upx; height: 80upx;">
					<image v-if="item.color != '(114,185,234,0.5)'" style="width: 50upx; height: 50upx;"  :src="'https://www.qiafantech.com/bank-logo-small/' + item.bankCode + '.png' "></image>
					<!-- <text v-if="item.color == '(114,185,234,0.5)'" class="text-white text-sm">Logo</text> -->
					<text v-if="item.color == '(114,185,234,0.5)'" class="text-sm text-sm">位置</text>
				</view>
				
				<view class="flex flex-direction justify-between" style="height: 200upx;">
					<view class="margin-left flex flex-direction">
						<view class="text-bold flex align-center" style="font-size: 40upx;">
							{{ item.bankName }}
							<text v-if="item.default" class="cu-tag radius bg-white margin-left-sm">默认</text>
						</view>
						<text>{{ item.bankCardType }}</text>
					</view>
					<!-- {{ item.bankNum.slice(-5, -1) }} -->
					<text class="margin-left text-bold" style="font-size: 40upx;">{{ item.bankNum }}</text>
				</view>
			</view>
			
		</view>
		<view class="" style="height: 50upx;">
			
		</view>
	</view>
</template>

<script>
	import bankCodeName from '@/static/bank-code.json'
	import bankColor from '@/static/bank-color.json'
	
	export default {
		onShow() {
			// console.log(bankColor);
		},
		onLoad() {
			// console.log(123);
			this.GetImgColor()
		}, 
		data() {
			return {
				showBack: 9999,
				bankCardList: [
					{bankCode: 'ABC',
					default: true,
					bankName: '中国农业银行',
					bankNum: "**** **** **** 3112",
					bankCardType: '储蓄卡'},
					{bankCode: 'BOC',
					default: false,
					bankName: '中国银行',
					bankNum: "**** **** **** 3112",
					bankCardType: '储蓄卡'},
					{bankCode: 'BOP',
					default: false,
					bankName: '平顶山银行',
					bankNum: "**** **** **** 3112",
					bankCardType: '储蓄卡'},
					{bankCode: 'CCQTGB',
					default: false,
					bankName: '重庆三峡银行',
					bankNum: "**** **** **** 3112",
					bankCardType: '储蓄卡'},
					{bankCode: '',
					default: false,
					bankName: '和平银行',
					bankNum: "**** **** **** 3112",
					bankCardType: '储蓄卡'}
				]
			};
		},
		methods: {
			CloseCover(){
				this.showBack = 99999
			},
			ShowCover(index){
				console.log(index);
				this.showBack = index
			},
			GoAdd(){
				uni.navigateTo({
					url: '../firm-wallet-add/firm-wallet-add'
				})
			},
			GetImgColor(){
				for(var i in this.bankCardList){
					for(var j in bankColor){
						if(i == this.bankCardList.length - 1 && j == "\u9655\u897f\u7701\u519c\u6751\u4fe1\u7528\u793e\u8054\u5408\u793e" && this.bankCardList[i].bankCode != j){
							this.bankCardList[i].color = "(114,185,234,0.5)"
						} else if(this.bankCardList[i].bankCode == j){
							this.bankCardList[i].color = bankColor[j]
							continue;
						}
					}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
