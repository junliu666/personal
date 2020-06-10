<template>
	<view>
		<cu-custom bgColor="bg-white-firm" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">企业人员认证</block>
			<view slot="right" class="margin-right">
				<text class="aliicon"></text>
			</view>
		</cu-custom>
		<view class="margin-top" style="margin-left: 25upx; width: 700upx;">
			<view class="">
				<text style="font-size: 40upx;">企业信息</text>
				<view class="margin-top-xs round bg-main-firm" style="width: 80upx; height: 8upx;"></view>
			</view>
			<view class="text-lg margin-top" style="">营业执照</view>
			<view class="margin-top-sm grid col-4 grid-square flex-sub" style="">
				<view style="width: 300upx; height: 200upx;" v-if="licensePhoto != ''" class="bg-img" @tap="ViewImage" :data-url="imgList">
				 <image :src="licensePhoto"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view style="width: 300upx; height: 200upx; border: 1px solid #317d6d" class="" @tap="ChooseImage" v-if="licensePhoto == ''">
					<text class='cuIcon-cameraadd text-sub-main-firm'></text>
				</view>
			</view>
			<view class="text-lg" style="margin-top: 20upx;">企业简称</view>
			<view class="margin-top-sm padding-sm radius bg-white flex align-center" style=" height: 100upx; width: 100%;">
				<input type="text" value="" v-model="shotName" placeholder="企业简称" />
			</view>
			<view class="text-lg margin-top" style="">企业其他证件</view>
			<view class="margin-top-sm grid col-4 grid-square flex-sub" style="">
				<view  v-if="licensePhoto != ''" class="bg-img" @tap="ViewImage" :data-url="imgList">
				 <image :src="licensePhoto"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view style=" border: 1px solid #317d6d" class="" @tap="ChooseImage" v-if="licensePhoto == ''">
					<text class='cuIcon-cameraadd text-sub-main-firm'></text>
				</view>
			</view>
			
			
			<view class="margin-top-lg">
				<text style="font-size: 40upx;">个人信息</text>
				<view class="margin-top-xs round bg-main-firm" style="width: 80upx; height: 8upx;"></view>
			</view>
			<view class="text-lg margin-top" style="">个人身份证</view>
			<view class="margin-top-sm grid col-4 grid-square flex-sub " style="">
				<view style="width: 300upx; height: 200upx;" v-if="licensePhoto != ''" class="bg-img" @tap="ViewImage" :data-url="imgList">
				 <image :src="licensePhoto"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view style="width: 300upx; height: 200upx; border: 1px solid #317d6d" class="" @tap="ChooseImage" v-if="licensePhoto == ''">
					<text class='cuIcon-cameraadd text-sub-main-firm'></text>
				</view>
				<view style="width: 300upx; height: 200upx;" v-if="licensePhoto != ''" class="bg-img" @tap="ViewImage" :data-url="imgList">
				 <image :src="licensePhoto"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view style="width: 300upx; height: 200upx; border: 1px solid #317d6d" class="radius" @tap="ChooseImage" v-if="licensePhoto == ''">
					<text class='cuIcon-cameraadd text-sub-main-firm'></text>
				</view>
			</view>
			<view class="text-lg" style="margin-top: 20upx;">头像</view>
			<view class="margin-top-sm padding-sm radius bg-white flex align-center" style=" height: 100upx; width: 100%;">
				<input type="text" value="" v-model="shotName" placeholder="头像" />
			</view>
			<view class="text-lg" style="margin-top: 20upx;">姓名</view>
			<view class="margin-top-sm padding-sm radius bg-white flex align-center" style=" height: 100upx; width: 100%;">
				<input type="text" value="" v-model="shotName" placeholder="姓名" />
			</view>
			<view class="text-lg" style="margin-top: 20upx;">联系电话</view>
			<view class="margin-top-sm padding-sm radius bg-white flex align-center" style="  height: 100upx; width: 100%;">
				<input type="text" value="" v-model="shotName" placeholder="联系电话" />
			</view>
			<view class="text-lg" style="margin-top: 20upx;">职位</view>
			<view class="margin-top-sm padding-sm radius bg-white flex align-center" style="margin-bottom: 50upx;  height: 100upx; width: 100%;">
				<input type="text" value="" v-model="shotName" placeholder="职位" />
			</view>
			
			
			<button @click="GoIndex" class="flex align-center justify-center bg-main-firm text-lg round" style="width: 500upx; height: 90upx; ">提交信息</button>
			<view class="" style="height: 30upx;">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587803033254&di=af47f688d8cf512cdf43fee1056f312a&imgtype=0&src=http%3A%2F%2Fedu.bryzq.com%2Fuploads%2F180316%2F1-1P3161431325D.jpg
				licensePhoto: "",
				shotName: ''
			};
		},
		methods: {
			GoIndex(){
				uni.navigateTo({
					url: '../../firm-index/firm-index'
				})
			},
			DelImg(){},
			ViewImage(){},
			ChooseImage(){}
		}
	}
</script>

<style lang="scss">

</style>
