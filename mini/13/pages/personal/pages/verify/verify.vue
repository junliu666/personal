<template>
	<view>
		<cu-custom bgColor="bg-main" :isBack="true">1<block slot="backText"></block><block slot="content">实名认证</block>
			<view @click="PassInfo" class="margin-right" slot="right">
				跳过
			</view>
		</cu-custom>
		<view class="text-lg margin-top margin-left" style="">上传身份证</view>
		<view class="margin-top-sm grid col-4 grid-square flex-sub margin-left" style="">
			<view style="width: 300upx; height: 200upx;" v-if="licensePhoto != ''" class="bg-img" @tap="ViewImage" :data-url="imgList">
			 <image :src="licensePhoto"></image>
				<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
					<text class='cuIcon-close'></text>
				</view>
			</view>
			<view style="width: 300upx; height: 200upx; border: 1px solid #8799a3" class="" @tap="ChooseImage" v-if="licensePhoto == ''">
				<text class='cuIcon-cameraadd text-sub-main-firm'></text>
			</view>
			<view style="width: 300upx; height: 200upx;" v-if="licensePhoto != ''" class="bg-img" @tap="ViewImage" :data-url="imgList">
			 <image :src="licensePhoto"></image>
				<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
					<text class='cuIcon-close'></text>
				</view>
			</view>
			<view style="width: 300upx; height: 200upx; border: 1px solid #8799a3" class="radius" @tap="ChooseImage" v-if="licensePhoto == ''">
				<text class='cuIcon-cameraadd text-sub-main-firm'></text>
			</view>
		</view>
		<view @tap="DoFase" class="cu-form-group-page" style="border-bottom: 1px solid #F5F5F5;">
			<view class="flex align-center">
				<view class="title text-lg" style="">人脸认证</view>
			</view>
			
			<text style="font-size: 30upx;"  class='cuIcon-right text-gray'></text>
		</view>
		<button class="cu-btn round text-lg bg-main margin-top-xl" style="margin-left: 25vw; width: 50vw; height: 90upx;" @click="Confirm">
			提交认证
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				licensePhoto: '',
				imgList: [],
				
			};
		},
		methods:{
			Confirm(){},
			DoFase(){},
			ViewImage(){},
			ChooseImage(){},
			DelImg(){},
			PassInfo(){
				uni.reLaunch({
					url: '../../../take-job-mapR/take-job-mapR'
				})
				// uni.showModal({
				// 	content: '实名认证通过才可发布和接取任务，确定跳过吗?',
				// 	success(res){
				// 		if(res.confirm){
							
				// 		}
				// 	}
				// })
			}
		}
	}
</script>

<style lang="scss">

</style>
