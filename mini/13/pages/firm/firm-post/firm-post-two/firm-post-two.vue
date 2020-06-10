<template>
	<view class="main bg-white">
		<cu-custom bgColor="bg-white" :isBack="true"><text slot="backText" style="font-size: 30upx; margin-left: 20upx;">上一步</text><block slot="content"></block><text @tap="CancelBack" slot="right"  class="margin-right" style="padding: 20upx">取消</text></cu-custom>
		<view style="margin-left: 25upx; font-size: 40upx;  margin-top: 0upx;" class="text-black">
			任务要求 2/3
			<view class="bg-main-firm round margin-top-sm" style="height: 10upx; width: 80upx;"></view>
		</view> 
		<view class="margin-left-sm margin-top" style="margin-bottom: 0; border: 0;">
			<view class="" style="font-size: 30upx">职位相关</view>
		</view>
		<view class="flex-wrap flex align-center" style="width: 700upx; margin-left: 25upx;">
			<view @click="SelectTag(index)" v-for="(item,index) in tagItems" :key="index">
				<text style="" :class="item.select == true ? 'cu-tag lg bg-main-firm margin-top-sm margin-right-sm radius' : 'radius cu-tag lg bg-gray margin-top-sm margin-right-sm' ">{{ item.title }}</text>
			</view>
		</view>
		<view class="margin-left-sm margin-top-sm" style="margin-bottom: 0; border: 0;">
			<view class="" style="font-size: 30upx">求职者要求</view>
		</view>
		<view class="flex-wrap flex align-center" style="width: 700upx; margin-left: 25upx;">
			<view @click="SelectTag(index)" v-for="(item,index) in tagItems" :key="index">
				<text style="" :class="item.select == true ? 'cu-tag lg bg-main-firm margin-top-sm margin-right-sm radius' : 'radius cu-tag lg bg-gray margin-top-sm margin-right-sm' ">{{ item.title }}</text>
			</view>
		</view>
		<view class="margin-tb" style="width: 750upx; height: 30upx; background-color: #f9f9f9;">
			
		</view>
		<view class="margin-left-sm flex align-center justify-between margin-right-sm" >
			<view class="title" style="font-size: 30upx">信用等级要求</view>
			<view class="flex flex-direction align-end">
				<switch class='green' @change="SwitchA" :class="postData.creditRequire?'checked':''" :checked="postData.creditRequire?true:false"></switch>
				<text style="font-size: 20upx;">{{ postData.creditRequire == false ? '全部用户可见' : '信用等级3以下不可见' }}</text> 
			</view>
		</view>
		
		<button @tap="NexStep" style="margin-top: 50upx; margin-left: 20%;width: 60%; height: 90upx; font-size: 40upx;" @click="NumSteps" class="cu-btn round bg-main-firm">下一步</button>
		<view class="" style="height: 30upx; ">
			
		</view> 
		
		
		 
		 <!-- <view class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
		 	<view class="action"  data-cur="basics" style="height: 100%; width: 60%;"> 
		 		<button @tap="NexStep" style="width: 60%; height: 90%; font-size: 40upx;" @click="NumSteps" class="cu-btn round bg-main-firm">下一步</button>
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
				tagItems: [
					{title: '健康证要求', id: 1},
					{title: '有经验优先', id: 2},
					{title: '五官端正', id: 3},
					],
				switchA: false,
			};
		},
		onLoad() {
			for(var i in this.tagItems){
				this.tagItems[i].select = false
			}
			console.log(this.tagItems);
			this.postData = this.postParttimejobPersonal
		},
		methods:{
			...mapActions(['SETSTATE']),
			SelectTag(index){
				this.tagItems[index].select = !this.tagItems[index].select
				this.$forceUpdate()
			},
			SwitchA(e){
				this.postData.creditRequire = !this.postData.creditRequire
			},
			CancelBack(){
				uni.navigateBack({
					delta: 2
				})
			},
			NexStep(){
				this.postData.detailRequire = this.tagItems
				this.SETSTATE(this.postData)
				
				uni.navigateTo({
					url: '../firm-post-three/firm-post-three'
				})
			},
		}
	}
</script>

<style lang="scss">
.main{
	min-height: 100vh;
}
</style>
