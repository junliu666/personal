<template>
	<view class="main bg-white" >
		<cu-custom bgColor="bg-main" :isBack="true"><block slot="backText"></block><block slot="content">确认信息</block><text slot="right"  @tap="CancelBack" class="margin-right" style="padding: 20upx">取消</text></cu-custom>
		<view class="action margin-left-sm padding-top">
			<text style="font-size: 40upx;" class=" text-gray">基本信息</text> 
		</view>
		<view class="bg-gray round margin-bottom margin-top-xs" style="margin-left: 25upx; width: 80upx; height: 8upx;">
			
		</view>
		<view @tap="GoPostOne" class=" align-center margin-left-sm flex flex-wrap  justify-between" style="width: 725upx;">
			<text class="cuIcon-newsfill text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-bottom-sm" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<text >{{ postData.title }}</text>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
		</view>
		<view @tap="GoPostOne" class="align-center margin-left-sm flex flex-wrap justify-between" style="width: 725upx;">
			<text class="cuIcon-calendar text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-tb-sm" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<text v-if="postData.dateStatus == false" >{{ postData.showDate }}</text>
				<text v-if="postData.dateStatus == true" style="width: 650upx;">{{ postData.date[0] + ' - ' + postData.date[1] }}</text>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
			
		</view>
		<view @tap="GoPostOne" class=" align-center margin-left-sm flex flex-wrap margin-top-sm justify-between" style="width: 725upx;">
			<text class="cuIcon-locationfill text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-tb-sm align-center" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<text >{{ postData.location.address }}</text>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
		</view>
		<view @tap="GoPostOne" class="align-center margin-left-sm flex flex-wrap margin-top-sm justify-between" style="width: 725upx;">
			<text class="cuIcon-peoplefill text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-tb-sm" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<text >需要{{ postData.peopleNum }}人</text>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
		</view>
		<view v-if="postData.detail != ''" @tap="GoPostOne" class="margin-top " style="border-radius: 15upx; margin-left: 25upx; width: 700upx; padding-top: 20upx; padding-bottom: 20upx; padding-right: 20upx; padding-left: 20upx; border: 3px solid #f5f5f5 ;">
			<text class="">{{ postData.detail }}</text>
		</view>
		
<!-- 		<view class="flex flex-wrap margin-left-sm" style="width: 700upx;">
			<image v-for="(item, index) in postData.imgs" :src="item" class="margin-top-sm radius" style="width: 150upx; height: 150upx; margin-right: 33upx;" mode=""></image>
		</view> -->
		<view v-if="postData.imgs.length != 0"  class="cu-form-group margin-top-sm">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in postData.imgs" :key="index" @tap="ViewImage" :data-url="postData.imgs[index]">
				 <image :src="postData.imgs[index]" mode="aspectFill"></image>
				</view>
			</view>
		</view>

		<view class="action margin-left-sm padding-top">
			<text style="font-size: 40upx;" class="text-gray ">人员要求</text> 
		</view>
		<view class="bg-gray round margin-top-xs margin-bottom" style="margin-left: 25upx; width: 80upx; height: 8upx;">
			
		</view>
		<view @tap="GoPostTwo" class="align-center margin-left-sm flex flex-wrap  justify-between" style="width: 725upx;">
			<text class="cuIcon-selectionfill text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-bottom-sm" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<text >{{ postData.creditRequire ? '有信用等级要求' : '不限制信用等级' }}</text>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
		</view>
		<view @tap="GoPostTwo" v-if="postData.detailRequire.length != 0" class="margin-left-sm flex flex-wrap" style="width: 700upx;">
			<text v-for="(item, index) in postData.detailRequire" class="cu-tag lg radius bg-main margin-right-sm margin-top-sm">{{ item.title }}</text>
		</view>

		<view class="action margin-left-sm padding-top">
			<text style="font-size: 40upx;" class="text-gray">费用信息</text> 
		</view>
		<view class="bg-gray round margin-top-xs margin-bottom" style="margin-left: 25upx; width: 80upx; height: 8upx;">
			
		</view>
		<view @tap="GoPostThree" class="align-center margin-left-sm flex flex-wrap  justify-between" style="width: 725upx;">
			<text class="cuIcon-selectionfill text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-bottom-sm" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<text >{{ postData.insurance ? '购买保险' : '不购买保险' }}</text>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
		</view>
		<view @tap="GoPostThree" class="align-center margin-left-sm flex flex-wrap margin-top-sm justify-between" style="width: 725upx;">
			<text class="cuIcon-sponsorfill text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-tb-sm" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<view class="flex align-center">
					<text class="margin-right-sm">报酬</text>
					<text class="text-price">{{ postData.price }}元/人</text>
				</view>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
		</view>
		<view @tap="GoPostThree" class="align-center margin-left-sm flex flex-wrap margin-top-sm justify-between" style="width: 725upx;">
			<text class="cuIcon-moneybagfill text-main text-lg" style="margin-right: 20upx; font-size: 40upx;"></text>
			<view class="flex justify-between padding-tb-sm" style="width: 650upx; border-bottom: 1px solid #f5f5f5;">
				<view class="flex align-center">
					<text class="margin-right-sm">总付款</text>
					<text class="text-price">{{ postData.totalPrice }}元</text>
				</view>
				<text class="cuIcon-right text-lg text-gray margin-right-lg"></text>
			</view>
		</view>
		<view class="" style="height: 165upx;">
		</view>
		<view class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
			<view class="action"  data-cur="basics" style="height: 100%; width: 60%;"> 
				<button @tap="NexStep" style="width: 60%; height: 90upx; "  class="text-lg cu-btn round bg-main">确认发布</button>
			</view>
		</view>
	</view>
</template>

<script>
	import calendar from '../../../components/date-picker/date-picker.vue'
	import {
	       mapState,  
	       mapActions,
	   } from 'vuex'; 
	export default {
		computed: {
			...mapState([ 'postParttimejobPersonal'])
		},
		data() {
			return {
				postData: ''
			};
		},
		onLoad() {
			
			if(this.postParttimejobPersonal.dateStatus == false){
				if(this.postParttimejobPersonal.date.indexOf('年') == -1){
					this.postParttimejobPersonal.date =	this.postParttimejobPersonal.date.split('-')
					this.postParttimejobPersonal.date = this.postParttimejobPersonal.date[0] + '年' + this.postParttimejobPersonal.date[1] + '月' + this.postParttimejobPersonal.date[2] + '日'
					
				}
			} else {
				if(this.postParttimejobPersonal.date[0].indexOf('年') == -1){
					var dateOne = this.postParttimejobPersonal.date[0]
					var dateTwo = this.postParttimejobPersonal.date[1]
					dateOne =	dateOne.split('-')
					dateOne = dateOne[0] + '年' + dateOne[1] + '月' + dateOne[2] + '日'
					dateTwo =	dateTwo.split('-')
					dateTwo = dateTwo[0] + '年' + dateTwo[1] + '月' + dateTwo[2] + '日'
					var date = [dateOne, dateTwo]
					this.postParttimejobPersonal.date = date
				}
				
			}
			this.postData = this.postParttimejobPersonal
			console.log(this.postData);
		},
		components: {
			calendar
		},
		methods:{
			...mapActions(['SETSTATE']),
			GoPostOne(){
				uni.navigateBack({
					delta: 3
				})
			},
			GoPostTwo(){
				uni.navigateBack({
					delta: 2
				})
			},
			GoPostThree(){
				uni.navigateBack({
					delta: 1
				})
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.postData.imgs,
					current: e.currentTarget.dataset.url,
					indicator: true
				});
			},
			CancelBack(){
				uni.navigateBack({
					delta: 4
				})
			},
			NexStep(){
				uni.showModal({
					title: '发布提醒',
					content: '请确认信息无误，并预付零活报酬确保接活人员的权益，如果取消将会退还',
					success(res) {
						if(res.confirm){
							
						}
					}
				})
				// uni.navigateTo({
				// 	url: ''
				// })
			},
		}
	}
</script>

<style lang="scss" scoped>
.main{
	min-height: 100vh;
}

input:disabled{
	background-color: rgba(0,0,0,0);
}
</style>
