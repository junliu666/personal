<template>
	<view class="bg-white main" @click="closeKeyboard">
		<cu-custom bgColor="bg-main" :isBack="true">1<block slot="backText"></block><block slot="content"></block></cu-custom>
		<!-- <keyboardInput @click="showKeyboard" :inputvalue="pwdArr"></keyboardInput> -->
		<view class="margin-left-login justify-center flex-direction flex" style="height: 40vh; ">
<!-- 			<view class="flex justify-center" style="height: 50upx; width: 600upx; width: 600upx;">
				<input :focus="focusTarget == 0" class="text-center margin-right" maxlength="4"  type="number"  name="input" v-model="msg" style="width:  600upx; font-size: 36upx; border-bottom: 4px solid #f5f5f5;height: 50upx;  "></input>
			</view>	 -->
			<view  class="flex justify-between" style="width: 500upx; margin-left: 50upx;">
				<view style="height: 70upx;" @click.stop="showKeyboard" v-for="(item,index) in 4" class="flex flex-direction align-center justify-between" :key="index">
					<text class="text-xlg text-bold">{{msg[index]}}</text>
					<view class="round bg-gray" style="height: 8upx; width: 100upx;">
						
					</view>
				</view>
			</view>
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
		
		<digitKeyboard
		  @SetValue="SetValue"
		  :visible.sync="showDigitKeyboard"
		  :decimals="false"
		  :maxLength="500"
		  />
		  <view class="box" v-if="showLoad">
		  	<Loading6 :text="'加载中'"></Loading6>
		  </view>
<!-- 		<keyboard :show="show"  :action="false" :mask="false" @click="keyboardClick">
		</keyboard> -->
	</view>
</template>

<script>
	import digitKeyboard from '../../components/custom-digitKeyboard/custom-digitKeyboard.vue'
	import Loading6 from "@/components/loading6.vue";
	import request from '../../static/js/request.js'
	import Vue from 'vue'
	
	export default {
		data() {
			return {
				showLoad: false,
				showDigitKeyboard: false,
				msg: [],
				leng: 0,
				sendTime: 0,
				focusTarget: 0,
				numberArr: 0,
				tel: ''
			};
		},
		components: {
			digitKeyboard, Loading6
		},
		onLoad(options) {
			this.tel = options.tel
			this.SendMsg()
		},
		methods: {
			SetValue(data){
				if(data == '删除'){
					this.msg = this.msg.slice(0, this.msg.length-1)
				} else {
					if(this.msg.length < 11){
						this.msg.push(data)
						// this.msg[this.numberArr - 1] = data
						// console.log(this.msg);
						// this.msg.splice(this.numberArr.length - 1, 1)
					}
					
				}
				
			},
			showKeyboard(){
				this.showDigitKeyboard = true
			},
			closeKeyboard: function() {
				this.showDigitKeyboard = false
			},
			getPwd: function() {
				//判断并取出密码
				if (this.numberArr.length === this.pwdArr.length) {
					uni.showLoading({
						title: '模拟提交...',
						mask: true
					})
					setTimeout(() => {
						let pwd = this.numberArr.join('')
						this.closeKeyboard();
						this.tui.toast("您输入的密码为：" + pwd);
					}, 800);
				}
			},
			keyboardClick: function(e) {
				let numberArr = this.numberArr;
				let pwdArr = this.pwdArr;
				let index = e.index;
				if (numberArr.length === pwdArr.length || index == undefined) {
					return;
				}
				if (index == 9) { //取消键
					this.closeKeyboard();
					return;
				} else if (index == 11) {
					//退格键
					let len = numberArr.length;
					if (len) {
						pwdArr.splice(len - 1, 1, "");
					} else {
						pwdArr = ["", "", "", ""];
					}
					numberArr.pop()
				} else if (index == 10) {
					numberArr.push(0);
					pwdArr.splice(numberArr.length - 1, 1, "●");
				} else {
					numberArr.push(index + 1);
					pwdArr.splice(numberArr.length - 1, 1, "●");
				}
				this.numberArr = numberArr;
				this.pwdArr = pwdArr;
				this.getPwd()
			},
			
			
			// 
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
			GetUserInfo(){
				var that = this
				uni.request({
					url: this.Server + '/member/info',
					header: {
						token: this.Token.token
					},
					success(res) {
						console.log(res);
						if(res.data.code == 0){
							uni.setStorageSync('UserInfo', res.data.data)
							Vue.prototype.UserInfo = res.data.data
							setTimeout(() => {
								that.showLoad = false
								if(that.Token.auth_status == false && that.UserInfo.nickName == undefined){
									uni.reLaunch({
										url: '../personal/pages/my-info/my-info'
									})
								} else if (that.Token.auth_status == false && that.UserInfo.nickName != undefined){
									uni.reLaunch({
										url: '../personal/pages/verify/verify'
									})
								} else {
									uni.reLaunch({
										url: '../take-job-mapR/take-job-mapR'
									})
								}
								// uni.reLaunch({
								// 	url: '../take-job-mapR/take-job-mapR'
								// })
							}, 500)
							
						} else if (res.data.code == 500){
							that.showLoad = false
							uni.showModal({
								content: res.data.msg
							})
						} else if (res.data.code == 101){
							that.showLoad = false
							uni.showModal({
								content: '登录过期，请重新登录'
							})
						}
					}, fail(err) {
						that.showLoad = false
						uni.showModal({
							content: '请求超时，服务器错误'
						})
					}
				})	
			},
			Login(){
				var that = this
				
				if(this.msg.length == 4){
					this.showLoad = true
					var data = {
						pwd: '123',
						smsCode: '321',
						tel: this.tel
					}
					uni.request({
						method: 'POST',
						url: this.Server + '/member/register',
						// header: {
						// 	token: this.Token.token
						// },
						data,
						success(res) {
							console.log(res);
							if(res.data.code == 0){
								uni.setStorageSync('Token', res.data.data)
								Vue.prototype.Token = res.data.data
								that.GetUserInfo()
								
								
							} else if (res.data.code == 500){
								that.showLoad = false
								uni.showModal({
									content: res.data.msg
								})
							} else if (res.data.code == 101){
								that.showLoad = false
								uni.showModal({
									content: '登录过期，请重新登录'
								})
							}
						}, fail(err) {
							that.showLoad = false
							uni.showModal({
								content: '请求超时，服务器错误'
							})
						}
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
