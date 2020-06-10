<template>
	<view style="min-height: 100vh;" class="bg-white">
		<cu-custom-firm bgColor="bg-white" :isBack="true">
			
			<block slot="backText">
				<text class="text-lg text-sub-main-firm">个人信息</text></block>
			<block slot="content"></block>
			<view slot="right" class="margin-right">
				
				<!-- <text class="cuIcon-search  margin-right-sm padding-sm" style="font-size: 40upx;"></text> -->
				<!-- <text class="cuIcon-roundadd padding-sm" style="font-size: 40upx;"></text> -->
			</view>
		</cu-custom-firm> 
		
		<!-- 更换名称 -->
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">更换昵称</view>
					<view class="action" >
						<text class="cuIcon-close text-sub-main" @tap="hideModal"></text>
					</view>
				</view>
				<view class="padding-xl">
					<input type="text" placeholder="请输入2到6字昵称" maxlength="6" />
					<view class="text-sm margin-tb text-gray">使用真实姓名能提高接发单成功率</view>
					<view class="margin-top flex justify-end">
						<button @tap="ChangeName" class="cu-btn round bg-main lg">确定</button>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-modal" :class="modalName=='invite'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">填写邀请码</view>
					<view class="action" >
						<text class="cuIcon-close text-sub-main" @tap="hideModal"></text>
					</view>
				</view>
				<view class="padding-xl">
					<input type="text" placeholder="请输入邀请码" maxlength="6" />
					<view class="margin-top flex justify-end">
						<button @tap="SubInvite" class="cu-btn round bg-main lg">确定</button>
					</view>
				</view>
			</view>
		</view>
		
		<view @click="ChangeAvatar" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title">头像</view>
			<view class="flex flex-row align-center">
				<image style="width: 120upx; height: 120upx;" class="margin-tb-sm margin-right-sm radius" :src="UserInfo.avatar" mode=""></image>
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="ShowChnageName" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title" >昵称</view>
			<view class="flex align-center">
				<text class="margin-right-sm">这是我的昵称</text>
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="GoSecurity" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0;">
			<view class="title" style="padding-left: 0;" >安全隐私</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view class="" style="height: 30upx; background-color: #f9f9f9; width: 100%;">
			
		</view>
		<view class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title" style="padding-left: 0;">用户协议</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title" style="padding-left: 0;">隐私政策</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view class="" style="height: 30upx; background-color: #f9f9f9; width: 100%;">
			
		</view>
		<button class="cu-btn round bg-main-firm margin-top text-lg" style="width: 50vw; margin-left: 25vw; height: 90upx;">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				UserInfo: {
					avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587747341903&di=9f29990b861524c2b87bd88bf05168b2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F24%2F20180824002213_altto.jpg',
					name: '你不知道我的名字'
				},
				avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587747341903&di=9f29990b861524c2b87bd88bf05168b2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F24%2F20180824002213_altto.jpg',
			};
		},
		methods:{
			SubInvite(){
				
			},
			ShowInvite(){
				this.modalName = 'invite'
			},
			hideModal(){
				this.modalName = null
			},
			ChangeAvatar(){
				var that = this
				uni.chooseImage({
					count: 1,
					success: (res) => {
						console.log(res);
						that.UserInfo.avatar = res.tempFilePaths[0]
						// that.$forceUpdate()
					}
				})
			},
			GoAddress(){
				uni.navigateTo({
					url: 'address/address'
				})
			},
			GoSecurity(){
				uni.navigateTo({
					url: 'security/security'
				})
			},
			ChangeName(){
				console.log(123);
			},
			ShowChnageName(){
				this.modalName = 'Modal'
			},
		}
	}
</script>

<style lang="scss">

</style>
