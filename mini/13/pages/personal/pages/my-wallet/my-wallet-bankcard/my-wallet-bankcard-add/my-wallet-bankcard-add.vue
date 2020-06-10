<template>
	<view>
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content">绑定银行卡</block>
			<view class="" slot="right">
			</view>
		</cu-custom>
		<view class="radius margin-top padding-sm flex align-center justify-between" style="width: 600upx; margin-left: 75upx;  border: 2px solid #72b9ea; ">
			<view @click="ShowKeyBoard" :class="bankNum == '' ? 'text-gray' : ''"  style="outline: none; border: 0; width: 400upx; font-size: 30upx;">
				{{ bankNum == '' ? '请输入银行卡号' : bankNum }}
			</view>
			<view class="flex flex-direction align-center">
				<text class="cuIcon-camera"></text>
				<text class="text-sm text-gray">拍照添卡</text>
			</view>
		</view>
		<view class="flex justify-center" style="width: 600upx; margin-left: 75upx; margin-top: 60upx;">
			<button @click="SubmitCardNum" class="cu-btn bg-main round" style="font-size: 40upx; width: 600upx; height: 120upx;">提交卡号</button>
		</view>
		<digitKeyboard 
		  @Delete="Delete"
		  @confirm="confirm"
		  @SetValue="SetValue"
		  :visible.sync="showDigitKeyboard"
		  :decimals="false"
		  :maxLength="500"
		  />
		
	</view>
</template>

<script>
	import digitKeyboard from '@/components/custom-digitKeyboard/custom-digitKeyboard.vue'
	export default {
		data() {
			return {
				showDigitKeyboard: false,
				bankNum: '',
				bankNumOrigin: ''
			};
		},
		components: {
			digitKeyboard
		},
		watch:{
			
		},
		methods: {
			Delete(){
				
			},
			SubmitCardNum(){
				uni.request({
					url: "https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo=" + this.bankNumOrigin + "&cardBinCheck=true",
					success(res) {
						var data = res.data
						if(data.validated == true){
							if(data.cardType == 'PC'){
								uni.showModal({
									title: '不支持预付费卡',
									content: '请使用储蓄卡、信用卡、准贷记卡',
									success(res){
										
									}
								}) 
							} else {
								data = JSON.stringify(data)
								uni.navigateTo({
									url: '../my-wallet-bankcard-confirm/my-wallet-bankcard-confirm?data=' + data
								})
							}
							
						} else {
							uni.showModal({
								title: '无效银行卡',
								content: '请输入正确银行卡号或更换银行卡',
								success(res){
									
								}
							})
						}
						
					}
				})
			},
			confirm(data){
				this.bankNum = this.bankNum.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
			},
			closeKeyboard(){},
			SetValue(data){
				if(data == '删除'){
					this.bankNum = this.bankNum.slice(0, this.bankNum.length-1)
					this.bankNumOrigin = this.bankNumOrigin.slice(0, this.bankNumOrigin.length-1)
				} else {
					this.bankNum += data.toString()
					this.bankNumOrigin += data.toString()
				}
				
			},
			ShowKeyBoard(e) {
			    this.showDigitKeyboard = true
			}
			
		}
	}
</script>

<style lang="scss">

</style>
