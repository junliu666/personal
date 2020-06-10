<template>
	<view style="min-height: 100vh; background-color: white;">
		<cu-custom bgColor="bg-main" :isBack="false">1<block slot="backText"></block><block slot="content">信息设置</block>
		<view @click="PassInfo" class="margin-right" slot="right">
			跳过
		</view>
		</cu-custom>
		<!-- 更换名称 -->
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">昵称</view>
					<view class="action" >
						<text class="cuIcon-close text-sub-main" @tap="hideModal"></text>
					</view>
				</view>
				<view class="padding-xl">
					<input type="text" v-model="nameInput" placeholder="请输入2到6字昵称" maxlength="6" />
					<view class="text-sm margin-tb text-gray">使用真实姓名能提高接发单成功率</view>
					<view class="margin-top flex justify-end">
						<button @tap="ChangeName" class="cu-btn round bg-main lg">确定</button>
					</view>
				</view>
			</view>
		</view>
		
		<view @click="ShowChnageName" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title">昵称</view>
			<view class="flex align-center">
				<text class="margin-right-sm">{{ userInfo.nickName == undefined ? '一个新人' : userInfo.nickName }}</text>
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="ChangeAvatar" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title">头像</view>
			<view class="flex flex-row align-center">
				<image v-if="userInfo.headImg != undefined && userInfo.headImg != ''" style="width: 120upx; height: 120upx;" class="margin-tb-sm margin-right-sm radius" :src="userInfo.headImg" mode=""></image>
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title">性别</view>
			<switch class='switch-sex' @change="SwitchSex" :class="userInfo.sex?'checked':'unchecked'" :checked="userInfo.sex?true:false" color="#e54d42"></switch>
		</view>
		<view @click="ChooseImgs" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0;">
			<view class="title">个人照片</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<scroll-view scroll-x="true"  class="" :style="imgs.length == 0 ? 'overflow-x: scroll; white-space: nowrap; overflow: hidden; width: 715upx; margin-left: 35upx; padding-right: 35upx; border-bottom: 1px solid #f5f5f5;' : 'overflow-x: scroll; white-space: nowrap; overflow: hidden; width: 715upx; margin-left: 35upx; padding-bottom: 10upx;  padding-right: 35upx; border-bottom: 1px solid #f5f5f5;'">
			<image class="radius margin-right-sm" v-for="(item, index) in imgs" style="display: inline-block; width: 120upx; height: 120upx;" :src="item" mode=""></image>
		</scroll-view>
		
		<view @click="ShowChnageName" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0;">
			<view class="title">意向任务</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view class=" flex flex-wrap text-gray-main" :style="userInfo.advantage == '' ? 'width: 715upx; margin-left: 35upx;   padding-right: 35upx; border-bottom: 1px solid #f5f5f5;' : 'width: 715upx; margin-left: 35upx; padding-bottom: 10upx;  padding-right: 35upx; border-bottom: 1px solid #f5f5f5;'">
			<text class="margin-right" v-for="(item, index) in userInfo.advantage">{{ item.title }}</text>
		</view>
		<view @click="ShowChnageName" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; ">
			<view class="title">擅长技能</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view class="= flex flex-wrap text-gray-main" :style="userInfo.skill == '' ? 'width: 715upx; margin-left: 35upx;   padding-right: 35upx; border-bottom: 1px solid #f5f5f5;' : 'width: 715upx; margin-left: 35upx; padding-bottom: 10upx;  padding-right: 35upx; border-bottom: 1px solid #f5f5f5;'">
			<text class="margin-right" v-for="(item, index) in userInfo.skill">{{ item.title }}</text>
		</view>
		<view @click="ChooseWx" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title">微信收款码</view>
			<view class="flex flex-row align-center">
				<image v-if="userInfo.wechatAccount != undefined && userInfo.wechatAccount != ''" style="width: 120upx; height: 120upx;" class="margin-tb-sm margin-right-sm radius" :src="userInfo.wechatAccount" mode=""></image>
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="ChooseAli" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title">支付宝收款码</view>
			<view class="flex flex-row align-center">
				<image v-if="userInfo.alipayAccount != undefined && userInfo.alipayAccount != ''" style="width: 120upx; height: 120upx;" class="margin-tb-sm margin-right-sm radius" :src="userInfo.alipayAccount" mode=""></image>
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<button  class="cu-btn round text-lg bg-main margin-top-xl" style="margin-left: 25vw; width: 50vw; height: 90upx;" @click="Confirm">
			确定
		</button>
		<view class="box" v-if="showLoad">
			<Loading6 :text="'加载中'"></Loading6>
		</view>
	</view>
</template>

<script>
	import Loading6 from "@/components/loading6.vue";
	
	export default {
		data() {
			return {
				imgs: '',
				nameInput: '',
				modalName: null,
				userInfo: {
					nickName: '',
					headImg: '',
					advantage: '',
					skill: '',
					sex: true,
					alipayAccount: '',
					wechatAccount: '',
					introduce: '',
					imgs: [],
					
				},
				showLoad: false,
			};
		},
		components: {
			Loading6
		},
		methods:{
			ChooseWx(){},
			ChooseAli(){},
			SwitchSex(){
				this.userInfo.sex = !this.userInfo.sex
			},
			ChooseImgs(){
				
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
								if(that.Token.auth_status == false){
									uni.navigateTo({
										url: '../verify/verify'
									})
								} else {
									uni.reLaunch({
										url: '../../../take-job-mapR/take-job-mapR'
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
			Confirm(){
				var that = this
				this.showLoad = true
				this.userInfo.imgs = JSON.stringify(this.userInfo.imgs)
				uni.request({
					method: "POST",
					url: this.Server + '/member/edit',
					header: {
						token: this.Token.token
					},
					data: this.userInfo,
					success(res) {
						console.log(res);
						if(res.data.code == 0){
							
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
			},
			hideModal(){
				this.modalName = null
			},
			ChangeName(){
				this.userInfo.nickName = this.nameInput
				this.modalName = null
			},
			ShowChnageName(){
				this.modalName = 'Modal'
			},
			ChangeAvatar(){
				
			},
			PassInfo(){
				if(this.Token.auth_status == false){
					uni.navigateTo({
						url: '../verify/verify'
					})
				} else {
					uni.reLaunch({
						url: '../../../take-job-mapR/take-job-mapR'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
</style>
