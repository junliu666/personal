<template>
	<view>
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content">验证银行卡</block>
			<view class="" slot="right">
			</view>
		</cu-custom>
		<!-- {{ bankAli.bank }}{{ bankAli.cardType }}{{ bankAli.validated }} -->
		<view class="margin-top" style="width: 600upx; margin-left: 75upx;">
			<view class="text-lg" style="font-size: 34upx;">银行卡类型</view>
			<view class="margin-top  bg-gray radius flex align-center padding-sm" style="; height: 100upx; width: 100%;">
				{{ bankName }}{{ bankType }}
			</view>
			<view class="text-lg margin-top" style="font-size: 34upx;">持卡人姓名</view>
			<view class="margin-top-sm padding-sm radius bg-white flex align-center" style=" height: 100upx; width: 100%;">
				<input type="text" value="" v-model="bankUser" placeholder="持卡人姓名" />
			</view>
			<view class="text-lg margin-top" style="font-size: 34upx;">预留手机号</view>
			<view class="margin-top-sm padding-sm radius bg-white  flex align-center" style=" height: 100upx; width: 100%;">
				<view @click="ShowKeyBoard" :class="bankTel == '' ? 'text-gray' : ''"  style="outline: none; border: 0; width: 400upx; font-size: 30upx;">
					{{ bankTel == '' ? '请输入手机号' : bankTel }}
				</view>
				<button @click="SendMsg" class="cu-btn bg-main radius" style="width: 200upx; height: 100%;">验证码</button>
			</view>
			
			<view v-if="msgShow" class="margin-top-sm padding-sm radius bg-white flex align-center" style=" height: 100upx; width: 50%;">
				<input type="number" v-model="msgCode" placeholder="请输入验证码" />
			</view>
			 
		</view>
		<view class="margin-top" style="width: 600upx; margin-left: 75upx;">
			<text class="">查看</text>
			<text class="text-main">《服务协议》</text>
		</view>
		<view class="flex justify-center" style="width: 600upx; margin-left: 75upx; margin-top: 60upx;">
			<button @click="SubmitCardNum" class="cu-btn bg-main round " style="font-size: 40upx; width: 600upx; height: 120upx;">同意协议并绑卡</button>
		</view>
		<digitKeyboard
		  @confirm="confirm"
		  @SetValue="SetValue"
		  :visible.sync="showDigitKeyboard"
		  :decimals="false"
		  :maxLength="500"
		  />
		  <tfgg-verify @result='verifyResult' ref="verifyElement"></tfgg-verify>
	</view>
</template>

<script>
	import bankCodeName from '@/static/bank-code.json'
	import digitKeyboard from '@/components/custom-digitKeyboard/custom-digitKeyboard.vue'
	import tfggVerify from "@/components/tfgg-verify/tfgg-verify.vue";
	
	export default {
		onLoad(options) {
			this.bankAli = JSON.parse(options.data) 
			this.GetName()
			
		},
		components: {
			digitKeyboard,
			tfggVerify
		},
		data() {
			return {
				bankAli: '',
				bankName: '',
				bankType: '',
				bankUser: '',
				bankTel: '',
				bankTelOrigin: '',
				showDigitKeyboard: false,
				msgCode: '',
				msgShow: false
			};
		},
		methods: {
			verifyResult(res){
				if(res){
					this.$refs.verifyElement.reset();//校验成功重置插件
				}
				this.msgShow = true
			},
			verifyFasong(){
				if(this.sin>0){
					return;
				}
				this.$refs.verifyElement.show();
			},
			/* 校验插件重置 */
			verifyReset(){
				this.$refs.verifyElement.reset();
			},
			SendMsg(){
				this.$refs.verifyElement.show();
				
			},
			SubmitCardNum(){
				
			},
			GetName(){
				switch(this.bankAli.cardType){
					case "DC":
						this.bankType = '储蓄卡'
						break;
					case "CC":
						this.bankType = '信用卡'
						break;
					case "SCC":
						this.bankType = '准贷记卡'
						break;
					// case "PC":
					// 	this.bankType = '预付费卡'
					// 	break;
					default: 
						break
				}
				for(var i in bankCodeName){
					if(i == this.bankAli.bank){
						this.bankName = bankCodeName[i]
						break;
					}
				}
			},
			ShowKeyBoard(){
				this.showDigitKeyboard = true
			},
			confirm(data){
				this.bankTel = this.bankTel.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
			},
			SetValue(data){
				if(data == '删除'){
					this.bankTel = this.bankTel.slice(0, this.bankTel.length-1)
					this.bankTelOrigin = this.bankTelOrigin.slice(0, this.bankTel.length-1)
				} else {
					if(this.bankTelOrigin.length < 11){
						this.bankTel += data.toString()
						this.bankTelOrigin += data.toString()
					}
				}
			},
		}
	}
</script>

<style lang="scss">

</style>
