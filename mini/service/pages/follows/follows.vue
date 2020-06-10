<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">关注技师</block></cu-custom>
		<view class="main">
			<view class="flex align-center flex-direction"  >
				<view v-if="userStaff.length == 0" class="margin-top text-center" style="width: 100%;">
					暂无关注技师
				</view>
				<view v-if="userStaff.length != 0" v-for="(iitem, iindex) in userStaff" :key="iindex" @click="book" :data-key="iitem%2" data-name="book" class="items  flex justify-between align-center margin-top-xs">
					<view class="flex">
						<view class="flex flex-direction align-center" style="position: relative;">
							<view class="flex flex-direction justify-center text-white align-center radius" style="width: 40upx; height: 40upx; background-color: rgba(0, 0, 0, 0.5); position: absolute; left: 0; top: 0; z-index: 999;">
								<text class="cuIcon-crownfill text-main" style="font-size: 16upx;"></text>
								<text class="" style="font-size: 16upx;">{{ iitem.staffInfo.total_gift }}</text>
							</view>
							<view class="" style="position: relative;">
								<image @tap="viewHeadImg(iitem.staffInfo.head_img)" :src="iitem.staffInfo.head_img" class="cu-avatar radius" style="width: 120upx; height: 120upx;"></image>
								<text class="margin-top-xs bg-main3 text-center text-xs" style="background-color: rgba(0, 0, 0, 0.5); bottom: 0; left: 0; width: 120upx; position: absolute; z-index: 999;;">{{ iitem.staffInfo.label }}</text>
							</view>
							<text class="text-sm">{{ iitem.staffInfo.name == undefined ? '技师无编号' : iitem.staffInfo.name + '号' }}</text>
							
						</view>
						
						<view class="flex flex-direction margin-left-sm" style="width: 550upx;">
							<!-- 编号 入职 -->
							<view class="flex justify-between align-center">
								<view class="flex align-center">
									<view class="flex align-center" v-if="iitem.staffInfo.is_free == true">
										<text class="cuIcon-title text-green2 "></text>空闲
									</view>
									<view class="flex align-center" v-if="iitem.staffInfo.is_free == false">
										<text class="cuIcon-title text-red "></text>忙碌
									</view>
									<view class="text-gray margin-left-sm" v-if="iitem.staffInfo.is_free == false">
										下钟时间：{{ iitem.staffInfo.endTime == undefined ? '未定' : (iitem.staffInfo.endTime || '').split(' ')[1] }}
									</view>
								</view>
								<view @tap="Delete(iindex)" class="round  padding-xs">
									<text class="cuIcon-deletefill text-grey text-dele"></text>
								</view>
							</view>
							<view class=" text-xs text-gray" style="margin-top: 5upx;">
								{{ iitem.staffInfo.age }}岁 | {{ iitem.staffInfo.height }}cm
							</view>
							<!-- 标签 -->
							<view class="flex margin-top-xs">
								<text class="cu-tag  bg-main2 round sm">最受欢迎</text>
								<text class="cu-tag  bg-main2 round sm">服务达人</text>
							</view>
							<!-- 下钟时间 -->
							<view class="margin-top-xs text-gray text-sm">
								{{ iitem.staffInfo.synopsis }}
							</view>
							<view class="flex justify-end margin-top-xs">
								<!-- <button @tap="SendGift" class="cu-btn sm radius line-gray">打赏技师</button> -->
								<button @tap="changeMerchant(iindex)" class="cu-btn sm margin-left-sm radius line-gray">查看商家</button>
								<button @tap="orderStaff(iindex)" :disabled="iitem.staffInfo == undefined"  class="cu-btn sm radius margin-left-sm line-gray">{{ iitem.staffInfo == undefined ? '技师已下岗' : '预约技师' }}</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data() {
			return {
				userStaff: [],
				page: 1,
				totalPage: null,
			};
		},
		onLoad() {
			this.GetCollectList()
		},
		onReachBottom() {
			if(this.page < this.totalPage){
				this.page += this.page
				this.GetCollectList()
			}
		},
		methods:{
			SendGift(){
				uni.showToast({
					icon: 'none',
					title: '请等待版本更新'
				})
			},
			viewHeadImg(img){
				uni.previewImage({
					urls: [img]
				})
			},
			Delete(index){
				var that = this
				console.log(that.userStaff[index]);
				uni.showModal({
					content: '确定不再关注' + that.userStaff[index].staffInfo.name + '吗？',
					success(res) {
						if(res.confirm){
							uni.request({
								method: "POST",
								header: {
									token: that.Token
								},
								url: that.Server + 'userStaff/del',
								data: {
									staffId: that.userStaff[index].staffInfo.id
								},
								success(res) {
									
									if(res.data.code == 0){
										that.userStaff.splice(index, 1)
									} else if (res.data.code == 101) {
										uni.showToast({
											title: '登录超时，将重新授权登录',
											duration: 500
										})
										setTimeout(() => {
											uni.reLaunch({
												url: '../login/login'
											})
										}, 500)
									} else {
										uni.showModal({
											content: res.data.msg
										})
									}
								}
							})
							
							
						}
					}
				})
			},
			changeMerchant(index){
				var that = this
				var merchantId = that.userStaff[index].staffInfo.merchant_id
				uni.reLaunch({
					url: '../blank/blank?scene=' + merchantId
				})
			},
			orderStaff(index){
				var staffId = this.userStaff[index].staffInfo.id == undefined ? undefined : this.userStaff[index].staffInfo.id
				if(staffId == undefined){
					uni.showToast({
						icon: 'none',
						title: '技师已下岗'
					})
				} else {
					uni.navigateTo({
						url: '../people-detail/people-detail?id=' + staffId
					})
				}
				
			},
			GetCollectList(){
				var that = this
				uni.showLoading({
					title: '请稍等'
				})
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'userStaff/list',
					data: {
						page: that.page,
						size: 10
					},
					success(res) {
						if(res.data.code == 0){
							that.totalPage = res.data.data.totalPage
							for(var i in res.data.data.list){
								that.userStaff.push(res.data.data.list[i])
							}
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
			book(e){
				this.modalName = null
				// uni.navigateTo({
				// 	url: "../people-detail/people-detail?status=" + e.currentTarget.dataset.key
				// })
			},
		}
	}
</script>

<style lang="scss" scoped>
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
