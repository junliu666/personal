<template>
	<view class="bg-white main">
		<cu-custom bgColor="bg-main" :isBack="true">1<block slot="backText"></block><block slot="content"></block></cu-custom>
		<view class="margin-left-login justify-center flex-direction flex" style="height: 40vh; ">
			<view class="flex justify-center" style="height: 50upx; width: 600upx; width: 600upx;">
				<input  id="msg0" @input="nextInput(0)" :focus="focusTarget == 0" class="text-center margin-right" maxlength="1"  type="number"  name="input" v-model="msg[0]" style="width: 100upx; font-size: 36upx; border-bottom: 4px solid #f5f5f5;height: 50upx;  "></input>
				<input  id="msg1" @input="nextInput(1)" :focus="focusTarget == 1" class="text-center margin-right" maxlength="1"  type="number"  name="input" v-model="msg[1]" style="width: 100upx; font-size: 36upx; border-bottom: 4px solid #f5f5f5;height: 50upx;  "></input>
				<input  id="msg2" @input="nextInput(2)" :focus="focusTarget == 2" class="text-center " maxlength="1"  type="number"  name="input" v-model="msg[2]" style="width: 100upx; font-size: 36upx; border-bottom: 4px solid #f5f5f5;height: 50upx;  "></input>
				<input  id="msg3" @input="nextInput(3)" :focus="focusTarget == 3" class="text-center margin-left" maxlength="1"  type="number"  name="input" v-model="msg[3]" style="width: 100upx; font-size: 36upx; border-bottom: 4px solid #f5f5f5;height: 50upx;  "></input>
			</view>	
					
<!-- 			<view class="cu-form-group padding-tb" style="height: 50upx; width: 600upx;">
				<input class="padding-tb" maxlength="1" required type="number" placeholder="请输入验证码" name="input" v-model="msg" style="font-size: 36upx; border-bottom: 1px solid #f9f9f9;height: 50upx;  "></input>
				<button @tap="SendMsg" class='cu-btn bg-green shadow' :disabled="sendTime != 0">
					{{sendTime == 0 ? '获取' : sendTime}}验证码
				</button>
			</view> -->
			<view style="width: 600upx; margin-top: 80upx;" @tap="SendMsg" :class=" sendTime == 0 ? 'text-center ' : 'text-center text-gray margin-top-lg'" :disabled="sendTime != 0">
				{{sendTime == 0 ? '重新获取验证码' : sendTime + ' ' + '验证码已发送'}}
			</view>
			<button @tap="Login" class="cu-btn round bg-main shadow lg margin-top-lg text-lg padding" style="height: 100upx;  width: 600upx; font-size: 36upx;">登录</button>
			<text class="margin-top" @tap="LoginAccPws">账号密码登录</text>
		</view>
		<view class="" style="height: 30vh; ">
			
		</view>
		<view class=" flex flex-direction align-center" style="height: 10vh; ">
			<text class="text-gray" style="font-size: 30upx;">  其他登录方式  </text>
			<view class="flex align-center margin-top-lg">
				<button class="round cu-btn shadow" style="margin-right: 50upx; background-color: transparent;">
					<text class="aliicon icon-weixin-copy   text-green" style="font-size: 80upx;">&#xe65b;</text>
				</button>
				<button class="round cu-btn shadow" style="margin-left: 50upx; background-color: transparent;">
					<text class="icon aliicon icon-zhifubao   text-blue" style="font-size: 80upx;">&#xe952;</text>
				</button>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: [],
				leng: 0,
				sendTime: 0,
				focusTarget: 0
			};
		},
		computed: {
		},
		watch: {
		},
		onLoad() {
			this.SendMsg()
		},
		methods: {
			nextInput(data){
				console.log(data);
				switch(data){
					case 0:
						this.focusTarget = 1;
						break
					case 1:
						this.focusTarget = 2;
						break
					case 2:
						this.focusTarget = 3;
						break
					default:
						break;
				}
			},
			LoginAccPws(){
				
				uni.redirectTo({
					url: '../login-accpwd/login-accpwd'
				})
			},
			SendMsg(){
				
				if(this.sendTime == 0){
					this.sendTime = 10
					var time = setInterval(() => {
						if(this.sendTime == 0){
							clearInterval(time)
						} else {
							this.sendTime -= 1
							// console.log(this.sendTime);
						}
						
					}, 1000)
					
				}
				
			},
			Login(){
				if(this.msg != ''){
					var msg = this.msg[0] + this.msg[1] + this.msg[2] + this.msg[3]
					uni.reLaunch({
						url: '../index/index'
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '请输入验证码'
					})
				}
			},
			ClearTel(){
				this.tel = ''
			},
			ViewIntro(){
				uni.navi
			},
		}
	}
</script>

<style lang="scss">
.main{max-height: 100vh; overflow: hidden; min-height: 100vh;}
</style>
