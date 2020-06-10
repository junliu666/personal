<template>
	<view style="min-height: 100vh;" class="bg-white">
		<cu-custom bgColor="bg-main" :isBack="true"><block slot="backText"></block><block slot="content">安全隐私</block></cu-custom>
		<view @click="GoSecurity" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title"style="padding-left: 0;" >安全问题</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="GoSecurity" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title"style="padding-left: 0;" >绑定手机</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="GoSecurity" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title"style="padding-left: 0;" >密码设置</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
		<view @click="GoSecurity" class="cu-form-group " style="padding-left: 0; margin-left: 40upx; border: 0; border-bottom: 1px solid #f5f5f5;">
			<view class="title"style="padding-left: 0;" >实名认证</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text> 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			GoSecurity(){}
		}
	}
</script>

<style>

</style>
