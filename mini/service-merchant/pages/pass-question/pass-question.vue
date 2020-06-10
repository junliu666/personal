<template>
	<view class="wrapper bg-white">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">密码设置</block></cu-custom>
		
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tagList" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		
		<view class="flex flex-direction align-center " style="margin-top: 200upx;" v-if="TabCur == 0">
			<text style="width: 450upx;" class="cuIcon-title margin-bottom">原密码</text>
			<view style="margin-bottom: 80upx;" :class="username == '' ? 'flex align-center inputs' : 'flex align-center inputs2'">
				<input confirm-type="确定" style="outline: none; border: 0; " type="text"  v-model="username" placeholder="请输入原密码..."  />
			</view>
			<text style="width: 450upx;" class="cuIcon-title margin-bottom">新密码</text>
			<view style="margin-bottom: 80upx;" :class="password == '' ? 'flex align-center inputs' : 'flex align-center inputs2'">
				<input confirm-type="确定" style="outline: none; border: 0;" type="text"  v-model="password" placeholder="请输入新密码..."  />
			</view>
		</view>
		
		<view v-if="TabCur == 1">
			<view class="padding-top margin-left">
				<text class="cuIcon-title margin-right-sm"></text>安全问题1：你母亲的姓名？
			</view>
			<input style="margin-left: 80upx;" placeholder="请输入你的答案..." class="margin-top" type="text" value="" />
			<view class="  margin-top margin-left">
				<text class="cuIcon-title margin-right-sm"></text>安全问题1：你最喜欢的城市？
			</view>
			<input style="margin-left: 80upx;" placeholder="请输入你的答案..." class="margin-top" type="text" value="" />
			<view class="  margin-top margin-left">
				<text class="cuIcon-title margin-right-sm"></text>安全问题1：你最喜欢的颜色？
			</view>
			<input style="margin-left: 80upx;" placeholder="请输入你的答案..." class="margin-top" type="text" value="" />
		</view>
		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @tap="changePass" class="cu-btn lg bg-main2 round margin-right" style="width: 40%;">
				<text class="cuIcon-formfill margin-right-sm text-red"></text>{{ TabCur == 0 ? '修改密码' : '保存答案' }}
			</button>
		</view>
	</view>
</template>
	
<script>
	export default {
		data() {
			return {
				TabCur: 0,
				tagList: ['修改密码'],
				username: '',
				password: ''
			};
		},
		methods: {
			changePass(){
				var that = this
				if(this.TabCur == 0){
					if(this.username == ''){
						uni.showToast({
							icon: 'none',
							title: '请输入原密码'
						})
					} else if (this.password == ''){
						uni.showToast({
							icon: 'none',
							title: '请输入新密码'
						})
					} else {
						uni.showModal({
							content: '确定修改密码？',
							success(res) {
								if(res.confirm){
									console.log(123);
									uni.request({
										method: "POST",
										header: {token: that.MerchantToken.token},
										url: that.Server + 'merchant/updatePwd',
										data: {
											newPwd: that.password,
											oldPwd: that.username
										},
										success(res) {
											uni.hideLoading()
											if(res.data.code == 0){
												uni.showToast({
													icon: 'none',
													title: '修改成功',
													duration: 1500
												})
												setTimeout(() => {
													uni.navigateBack({
														
													})
												}, 1500)
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
								}
							}
						})
						
					}
					
				}
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrapper{min-height: 100vh;
	.inputs{width: 450upx; padding-bottom: 20upx; height: 60upx; border-bottom: 2px solid #666666; margin-bottom: 80upx;}
	.inputs:hover{border-color: #f5df2c; transition: 0.5s}
	.inputs2{width: 450upx; padding-bottom: 20upx; height: 60upx; border-bottom: 2px solid #f5df2c; margin-bottom: 80upx;}
}
</style>
