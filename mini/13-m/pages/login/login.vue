<template>
	<view class="bg-white main">
		<cu-custom bgColor="bg-main" :isBack="true">1<block slot="backText"></block><block slot="content"></block></cu-custom>
		<view class="margin-left-login justify-center flex-direction flex" style="height: 40vh; ">
			<view class="cu-form-group padding-tb" style="height: 50upx; border-bottom: 1px solid #f5f5f5; width: 600upx;">
<!-- 				<view class="title">手机号</view>
 -->			<input pattern="[0-9]*" maxlength="11" required type="number" placeholder="请输入手机号" name="input" v-model="tel" style="font-size: 36upx;"></input>
				<text @tap="ClearTel" v-if="tel != ''" class="padding-lg cuIcon-close text-gray" style="font-size: 36upx;"></text>
			</view>
			<button @tap="Login" class="cu-btn round bg-main shadow lg margin-top-lg text-lg padding" style="height: 100upx; margin-top: 80upx; width: 600upx; font-size: 36upx;">同意协议并登录</button>
			<text class="margin-top" @tap="LoginAccPws">账号密码登录</text>
			<span style="margin-top: 50upx; " class="text-gray" >阅读 <text @tap="ViewIntro" style="color: #72b9ea">《用户协议及隐私政策》</text> </span>
		</view>
		<view class="" style="height: 35vh; ">
			
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
				tel: ""
			};
		},
		computed: {
		},
		methods: {
			LoginAccPws(){
				uni.navigateTo({
					url: '../login-accpwd/login-accpwd'
				})
			},
			Login(){
				if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel))){
					uni.showToast({
						icon: "none",
					    title: '请输入正确手机号',
					    duration: 2000
					});
				} else {
					uni.navigateTo({
						url: "../login-verify/login-verify"
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
