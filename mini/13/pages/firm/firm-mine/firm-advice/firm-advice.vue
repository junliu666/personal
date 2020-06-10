<template>
	<view :class=" viewReply ? 'main bg-white' : ''">
		<cu-custom-firm bgColor="bg-white-firm" :isBack="true">
			
			<block slot="backText">
				<text class="text-lg text-sub-main-firm">意见反馈</text></block>
			<block slot="content"></block>
			<view slot="right" class="margin-right">
				<text @click="Change" class="text-sub-main-firm">查看回复</text>
				<!-- <text class="cuIcon-search  margin-right-sm padding-sm" style="font-size: 40upx;"></text> -->
				<!-- <text class="cuIcon-roundadd padding-sm" style="font-size: 40upx;"></text> -->
			</view>
		</cu-custom-firm>
	
		<view class="" v-if="viewReply">
			<view class=" padding-top" style="margin-left: 35upx;">
				<text class="  text-bold text-black text-lg">问题类型</text> 
			</view>
			<view class="flex align-center flex-wrap" style="width: 680upx; margin-left: 35upx;">
				<text style="margin: 0; margin-right: 20upx; margin-top: 20upx;" :class=" item.status == false ? 'bg-gray cu-tag radius  ' : ' bg-main-firm  cu-tag radius'" v-for="(item, index) in typeList">
					{{ item.title }}
				</text>
			</view>
			<view class="  padding-tb  flex justify-between" style="margin-left: 35upx; width: 680upx;">
				<text class="  text-bold text-black text-lg">反馈内容</text> 
				<text class="text-gray">{{ AdviceData.detail.length }}/500</text>
			</view>
			<view class="flex flex-direction radius" style="width: 680upx; padding: 20upx; margin-left: 35upx; height: 500upx; border: 1px solid #f5f5f5">
				<view class="flex justify-center">
					<textarea style="width: 640upx; padding: 20upx; font-size: 26upx; line-height: 2; "   maxlength="500" v-model="AdviceData.detail"  placeholder="请输入反馈内容"></textarea>
				</view>
				<view class=" flex justify-end text-gray margin-tb" style="width: 100%;">
					{{ AdviceData.imgs.length }}/4
				</view>
				<view class="cu-form-group margin-top-sm">
					<view class="grid col-4 grid-square flex-sub">
						<view class="bg-img" v-for="(item,index) in AdviceData.imgs" :key="index" @tap="ViewImage" :data-url="AdviceData.imgs[index]">
						 <image :src="AdviceData.imgs[index]" mode="aspectFill"></image>
							<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solids" @tap="ChooseImage" v-if="AdviceData.imgs.length<4">
							<text class='cuIcon-cameraadd'></text>
						</view>
					</view>
				</view>
			</view>
		<view class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
			<view class="action"  data-cur="basics" style="height: 100%; width: 60%;"> 
				<button @tap="Post" style="width: 60%; height: 90upx; "  class="cu-btn round bg-main-firm text-lg">提交反馈</button>
			</view>
		</view>
		</view>
		
		
		<!-- 查看回复 -->
		<view class="" v-if="!viewReply " style="">
			<view  @click="ViewDetail" class=" shadow-blur flex flex-direction justify-between  bg-white margin-tb" style="; box-shadow:  0 1px 5px rgba(0, 0, 0, 0.06); padding: 20upx; border-radius: 15upx; width: 680upx; margin-left: 35upx; height: 250upx;"  v-for="(item,index) in 10" :key="index">
				<view class="">
					<view style="width: 640upx;" class="flex justify-between text-lg text-black">
						<view class="flex align-center">
							<text class="margin-right-sm cu-tag sm bg-main-firm radius">已回复</text>
							<text>交易纠纷</text>
							
						</view>
						
						<text class="text-gray text-sm">反馈编号：15322112</text>
					</view>
					<view style="width: 640upx;" class="text-cut margin-top-sm">但是放假啊昆仑山搭街坊拉萨酱豆腐刻录机ask领导士大夫士大夫士大夫士大夫士大夫</view>
				</view>
				<view class="">
					2020年4月10号 15:10:35 
				</view>
			</view>
		</view>
		<view class="" style="height: 30upx;" v-if="!viewReply ">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				viewReply: true,
				AdviceData: {
					detail: '',
					type: '',
					imgs: ''
				},
				typeList: [
					{
						title: '交易纠纷', id: 1, status: false
					}, {
						title: '提现问题', id: 1, status: false
					}, {
						title: '信用积分', id: 1, status: false
					}, {
						title: '功能问题', id: 1, status: false
					}, {
						title: '需求反馈', id: 1, status: false
					}, {
						title: '产品建议', id: 1, status: false
					}, {
						title: '其他', id: 1, status: true
					},
				]
			};
		},
		onLoad() {
		},
		methods:{
			ViewDetail(){
				uni.navigateTo({
					url: './firm-advice-detail/firm-advice-detail'
				})
			},
			Post(){
				
			},
			ChooseImage() {
				var that = this
				uni.chooseImage({
					count: 8, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					// sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.AdviceData.imgs.length != 0) {
							for(var i in res.tempFilePaths){
								if(this.AdviceData.imgs.length < 4){
									this.AdviceData.imgs.push(res.tempFilePaths[i])
								}
							}
						} else {
							this.AdviceData.imgs = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.AdviceData.imgs,
					current: e.currentTarget.dataset.url,
					indicator: true
				});
			},
			DelImg(index) {
				uni.showModal({
					title: '删除图片',
					content: '确定要删除这个图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.AdviceData.imgs.splice(index, 1)
						}
					}
				})
			},
			Change(){
				this.viewReply = !this.viewReply
			},
		},
	}
</script>

<style lang="scss">
.main{
	min-height: 100vh;
}
</style>
