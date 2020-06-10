<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">轮播图管理</block></cu-custom>
		<view class="cu-bar  margin-top">
			<view class="action">
				轮播图
			</view>
			<view class="action">
				{{swiperList.length}}/3
			</view>
		</view>
		<view class="cu-form-group" style="background-color: transparent;">
			<view class="grid col-4 grid-square flex-sub">
				<view style="width: 700upx; height: 300upx;" class="bg-img" v-for="(item,index) in swiperList" :key="index" @tap="ViewImage" :data-url="swiperList[index]">
				 <image  :src="item.img_url" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="swiperList.length<3" style="width: 700upx; height: 300upx;">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// imgList: ['../../static/girls/1.jpg'],
				swiperList: []
			};
		},
		onLoad() {
			this.GetSwiperList()
		},
		methods:{
			GetSwiperList(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'banner/list',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.swiperList = res.data.data
							console.log(that.swiperList);
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
					}
				})
			},
			ChooseImage(e) {
				var that = this
				console.log(e);
				var target = e.currentTarget.dataset.target
				console.log(target);
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						uni.showLoading({
							
						})
						var tempFilePaths = res.tempFilePaths
						var tempFiles = res.tempFiles
						
						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success(res) {
									let canvasWidth = res.width //图片原始长宽
									let canvasHeight = res.height
									let img = new Image()
									img.src = res.path
									let canvas = document.createElement('canvas');
									let ctx = canvas.getContext('2d')
									canvas.width = canvasWidth
									canvas.height = canvasHeight 
									ctx.drawImage(img, 0, 0, canvasWidth , canvasHeight )
									canvas.toBlob(function(fileSrc) {	
										fileSrc.name = "name.jpg";
										console.log(fileSrc);
										let imgSrc = URL.createObjectURL(fileSrc)
										var src = new window.File([fileSrc], 'name.jpg', {
											type: "image/jpeg"
										})
										// #ifdef H5
										var xhr = new XMLHttpRequest();
										xhr.open("POST", "https://www.qiafantech.com/club/file/img/upload", true);
										var file = new FormData()
										file.append('file', src)
										xhr.send(file)
										xhr.addEventListener('load', (res)=>{
											var url = JSON.parse(res.currentTarget.response)
											if(url.code == 0){
												uni.request({
													method: "POST",
													header: {token: that.MerchantToken.token},
													url: that.Server + 'banner/add',
													data: {
														url: url.data
													},
													success(res) {
														uni.hideLoading()
														if(res.data.code == 0){
															that.GetSwiperList()
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
													}
												})
												
												// that.merchantLogo = url.data
												uni.hideLoading()
											} else if (url.code == 500){
												uni.hideLoading()
												uni.showToast({
													icon: 'none',
													title: '上传失败'
												})
												
											} 
											uni.hideLoading()										});
										// #endif
									}, 'image/jpeg', 0.2)
							}
						})
					},
				});
			},
			ViewImage(){},
			DelImg(e) {
				var that = this
				console.log(parseInt(that.swiperList[e.currentTarget.dataset.index].id) + 1);
				uni.showModal({
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							uni.request({
										header: {token: that.MerchantToken.token},
										url: that.Server + 'banner/del?bannerId=' + that.swiperList[e.currentTarget.dataset.index].id,
										success(res) {
											uni.hideLoading()
											if(res.data.code == 0){
												that.GetSwiperList()
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
										}
									})
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
