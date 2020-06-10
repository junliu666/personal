<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">更换技师</block></cu-custom>
		<view class="main">
			<view class="flex align-center flex-direction"  >
				<view v-if="iitem.is_free == true"  v-for="(iitem, iindex) in staffList" :key="iindex"  :data-key="iitem%2" data-name="book" class="items  flex justify-between align-center margin-top-xs">
					<view class="flex">
						<view class="flex flex-direction align-center" style="position: relative;">
							<view class="flex flex-direction justify-center text-white align-center radius" style="width: 40upx; height: 40upx; background-color: rgba(0, 0, 0, 0.5); position: absolute; left: 0; top: 0; z-index: 999;">
								<text class="cuIcon-crownfill text-main" style="font-size: 16upx;"></text>
								<text class="" style="font-size: 16upx;">{{ iitem.total_gift }}</text>
							</view>
							<view class="" style="position: relative;">
								<image @tap="viewHeadImg(iitem.head_img)" :src="iitem.head_img" class="cu-avatar radius" style="width: 120upx; height: 120upx;"></image>
								<text class="margin-top-xs bg-main3 text-center text-xs" style="background-color: rgba(0, 0, 0, 0.5); bottom: 0; left: 0; width: 120upx; position: absolute; z-index: 999;;">{{ iitem.label }}</text>
							</view>
							<text class="text-sm" style="width: 120upx;">{{ iitem.name }}</text>
							
						</view>
						
						<view class="flex flex-direction margin-left-sm">
							<!-- 编号 入职 -->
							<view class="flex justify-between align-center" style="width: 530upx;">
								<view class="flex align-center">
									<text class="cuIcon-title text-green2 "></text>空闲
								</view>
								<button @tap="changeStaff(iindex)" class="cu-btn round line-gray">选择技师</button>
							</view>
							<view class=" text-xs text-gray" style="margin-top: 5upx;">
								{{ iitem.age }}岁 | {{ iitem.height }}cm
							</view>
							<!-- 标签 -->
							<view class="flex margin-top-xs">
								<text class="cu-tag  bg-main2 round sm">{{ iitem.tag[0] }}</text>
								<text class="cu-tag  bg-main2 round sm">{{ iitem.tag[1] }}</text>
							</view>
							<!-- 下钟时间 -->
							<view class="" style="width: 550upx;">
								<scroll-view scroll-x="true" class="margin-top-sm flex" style="overflow: hidden; flex-wrap: nowrap; white-space: nowrap; ">
									<image @tap="viewImg(iindex, imgIndex)" :src="imgItem" class="radius margin-right-sm" style="width: 120upx; height: 120upx; display: inline-block;" v-for="(imgItem, imgIndex) in iitem.imgs" :key="imgIndex"></image>
								</scroll-view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staffList: null
			};
		},
		onLoad(options) {
			this.orderId = options.orderId
			this.GetStaffList()
		},
		methods:{
			viewHeadImg(img){
				uni.previewImage({
					urls: [img]
				})
			},
			viewImg(iindex, imgIndex){
				uni.previewImage({
					urls: this.staffList[iindex].imgs,
					current: imgIndex
				})
			},
			changeStaff(index){
				var that = this
				uni.showModal({
					content: '确定更换技师吗？',
					success(res) {
						if(res.confirm){
							uni.showLoading({
								title: '请稍等'
							})
							uni.request({
								header: {
									token: that.Token
								},
								url: that.Server + 'order/replaceStaff',
								data: {
									orderId: that.orderId,
									staffId: that.staffList[index].id
								},
								success(res) {
									uni.hideLoading()
									if(res.data.code == 0){
										uni.showToast({
											title: '技师更换成功',
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
									uni.hideLoading()
								}
							})
						}
					}
				})
				
			},
			GetStaffList(){
				var that = this
				uni.showLoading({
					
				})
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'staff/list',
					data: {
						merchantId: that.MerchantId
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							for(var i in res.data.data){
								res.data.data[i].imgs = JSON.parse(res.data.data[i].imgs)
							}
							
							that.staffList = res.data.data
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
						uni.hideLoading()
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100vh;
	}
	.main{margin-bottom: 120upx;
		.header{padding-bottom: 30upx;
			.rank{
				.rank-1{width: 160upx; height: 140upx;   position: relative;
					.inner-girl{position: absolute; width: 110upx; height: 110upx; border-radius: 100%; left: 25upx; top: 8upx;}
				}
				.rank-2{width: 190upx; height: 190upx;  position: relative;
					.inner-girl{position: absolute; width: 118upx; height: 118upx; border-radius: 100%; left: 36upx; top: 17upx;}
				}
				.rank-3{width: 160upx; height: 160upx;  position: relative;
				.inner-girl{position: absolute; width: 115upx; height: 115upx; border-radius: 100%; left: 24.5upx; top: 16upx;}
					
				}
				.rank-4{width: 140upx; }
				.rank-5{width: 170upx;}
				.rank-6{width: 140upx;}
			}
		}
		.items{width: 700upx; background-color: white; border-radius: 10upx; padding: 5upx}
	}
</style>
