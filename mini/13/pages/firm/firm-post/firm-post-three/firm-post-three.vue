<template>
	<view class="main bg-white">
		<cu-custom bgColor="bg-white" :isBack="true"><text slot="backText" style="font-size: 30upx; margin-left: 20upx;">上一步</text><block slot="content"></block><text slot="right"  @tap="CancelBack" class="margin-right" style="padding: 20upx">取消</text></cu-custom>
		<view style="margin-left: 25upx; font-size: 40upx;  margin-top: 0upx;" class="text-black">
			任务报酬 3/3
			<view class="bg-main-firm round margin-top-sm" style="height: 10upx; width: 80upx;"></view>
		</view> 
		<view class="cu-form-group margin-top-sm" style="border: 0;">
			<view class="title" style="font-size: 30upx;">任务报酬</view>
			<input @input="CheckPrice" type="number"  style="font-size: 30upx;" placeholder="0" v-model="postData.price" name="input"></input>
		</view>

		<view class="" style="width: 750upx; height: 30upx; background-color: #f9f9f9;">
			
		</view>

		<view class="cu-form-group " >
			<view class="title" style="font-size: 30upx">是否为工作人员购买保险</view>
			<view class="flex flex-direction align-center">
				<switch class='green' @change="SwitchA" :class="postData.insurance?'checked':''" :checked="postData.insurance?true:false"></switch>
				<text style="font-size: 20upx;">{{ postData.insurance == false ? '不购买' : '购买' }}</text> 
			</view>
		</view>
		<view v-if="switchA == true" style="width: 700upx; font-size: 30upx" class="margin-left-sm flex justify-between align-center margin-bottom">
			<text class="text-main-firm" style="text-decoration: underline; font-size: 30upx">意外险说明</text>
			<text style="font-size: 30upx">保险费10元</text>
		</view>
		
		<view v-if="postData.price != '' && postData.price != 0" class="" style="width: 750upx; height: 30upx; background-color: #f9f9f9;">
			
		</view>
		
		<view v-if="postData.price != '' && postData.price != 0" style="width: 700upx; font-size: 30upx" class="margin-top margin-left-sm flex justify-end align-center">
			<view >
				<text class="  margin-right-sm"  style="font-size: 50upx">费用</text> 
				<text style="font-size: 40upx " class="text-main text-bold text-price" >{{ postData.insurance ? 10 + parseInt(postData.price)  : postData.price }}元 / 人</text>
			</view>
		</view>
		<button @tap="Post" style="margin-top: 50upx; margin-left: 20%;width: 60%; height: 90upx; font-size: 40upx;" @click="NumSteps" class="cu-btn round bg-main-firm">下一步</button>
		<view class="" style="height: 30upx; ">
			
		</view> 
<!-- 		<view class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
			<view class="action"  data-cur="basics" style="height: 100%; width: 60%;"> 
				<button @tap="Post" style="width: 60%; height: 90%; font-size: 40upx;"  class="cu-btn round bg-main">零活确认</button>
			</view>
		</view> -->
	</view>
</template>

<script>
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
				postData: '',
				switchA: true,
				price: null
			};
		},
		onLoad() {
			this.postData = this.postParttimejobPersonal
		},
		methods:{
			...mapActions(['SETSTATE']),
			CheckPrice(){
				if(this.postData.price.toString().indexOf('.') != -1){
					this.postData.price = parseInt(this.postData.price.toString().split('.')[0]) 
					this.$forceUpdate()
					uni.showToast({
						icon: 'none',
						title: '请输入整数金额(无角、分)'
					})
				}
			},
			SwitchA(){
				this.postData.insurance = !this.postData.insurance
			},
			CancelBack(){
				uni.navigateBack({
					delta: 3
				})
			},
			Post(){
				if(this.postData.price == '' || this.postData.price == 0){
					uni.showToast({
						icon: 'none',
						title: '请输入金额'
					})
				} else {
					this.postData.totalPrice = this.postData.insurance == true ? ((10 + parseInt(this.postData.price)) * parseInt(this.postData.peopleNum))  : (parseInt(this.postData.price) * parseInt(this.postData.peopleNum))
					this.SETSTATE(this.postData)
					uni.navigateTo({
						url: '../firm-post-confirm/firm-post-confirm'
					})
				}
				
			},
		}
	}
</script>

<style lang="scss">
.main{
	min-height: 100vh;
}
</style>
