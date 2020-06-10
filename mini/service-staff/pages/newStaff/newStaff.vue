<template>
	<view class="page bg-white" style="margin-bottom: 120upx;">
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"><block slot="backText" style="font-size: 40upx;"> <text style="font-size: 50upx; margin-right: 12upx;" class=" text-main"></text> <text @click="showLocation">填写资料</text></block><block slot="content"></block></cu-custom>
		<view class="cu-bar">
			<view class="action">
				我的头像
			</view>
			<view class="action">
			</view>
		</view>
		<view class="cu-form-group" style="background-color: transparent;">
			<view class="grid col-4 grid-square flex-sub">
				<view v-if="staffInfo.head_img != null && staffInfo.head_img != undefined" class="bg-img"  @tap="ViewImage" :data-url="imgList[index]">
				 <image  :src="staffInfo.head_img" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" data-target="head_img" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" data-target="head_img" v-if="staffInfo.head_img == null || staffInfo.head_img == undefined">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
		<view class="cu-form-group" style="border:0">
			<view class="title">我的编号</view>
			<input placeholder="技师编号" v-model="staffInfo.name" name="input"></input>
			<text class='cuIcon-peoplefill text-main'></text>
		</view>
		<view class="cu-form-group" style="border:0">
			<view class="title">我的年龄</view>
			<input placeholder="年龄" v-model="staffInfo.age" type="number" name="input"></input>
		</view>
		<view class="cu-form-group" style="border:0">
			<view class="title">我的身高(厘米)</view>
			<input placeholder="身高" v-model="staffInfo.height" type="number" name="input"></input>
		</view>
		<view class="cu-form-group" style="border:0">
			<view class="title">我的体重(公斤)</view>
			<input placeholder="体重" v-model="staffInfo.weight" type="number" name="input"></input>
		</view>
		<view class="cu-bar">
			<view class="action">
				我的照片
			</view>
			<view class="action">
				{{staffInfo.imgs.length}}/5
			</view>
		</view>
		<view class="cu-form-group" style="background-color: transparent;">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in staffInfo.imgs" :key="index" @tap="ViewImageB(index)" :data-url="imgList[index]">
				 <image  :src="item" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" data-target="imgs" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" data-target="imgs" v-if="staffInfo.imgs.length<5">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
		<view class="cu-form-group" style="border-top: 1px solid #f5f5f5;">
			<view class="title">我的标签</view>
			<text class='cuIcon-tagfill text-main'></text>
		</view>
		<view class="flex align-center margin-left-sm flex-wrap" style="width: 700upx;">
			<view  @tap="SelectTag(index)" style="margin: 0; margin-right: 5upx; margin-top: 5upx;" :class="item.is_exist == true ? 'cu-tag radius bg-main2 margin-right-xs' : 'cu-tag radius bg-gray margin-right-xs'" v-for="(item, index) in tags" :key="index">{{ item.tag }}</view>
		</view>
		<view class="cu-form-group margin-top" style="border-top: 1px solid #f5f5f5;">
			<textarea placeholder="个人的一句话" maxlength="50" :disabled="modalName!=null" @input="textareaAInput" v-model="staffInfo.synopsis"></textarea>
		</view>
		<view class="cu-form-group margin-top" style="border-top: 1px solid #f5f5f5;">
			<textarea placeholder="个人介绍" maxlength="255" :disabled="modalName!=null" @input="textareaAInput" v-model="staffInfo.introduce"></textarea>
		</view>
		
		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @tap="editConfirm" data-name="book" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class="cuIcon-edit margin-right-sm"></text>完成
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: ['../../static/girls/1.jpg', '../../static/girls/1.jpg'],
				tags: null,
				staffInfo: null,
				modalName: null,
				totalTag: 0
			};
		},
		
		onLoad() {
			this.GetStaffInfo()
			
		},
		methods:{
			editConfirm(){
				var that = this
				if(this.staffInfo.name != '' && this.staffInfo.head_img != '' && this.staffInfo.name != '' && this.staffInfo.age != '' && this.staffInfo.name != '' && this.staffInfo.weight != '' && this.staffInfo.age != '' && this.staffInfo.height != '' && this.staffInfo.synopsis != '' && this.staffInfo.introduce != ''){
					var hasTag = false
					for(var i in that.tags){
						if(that.tags[i].is_exist == true){
							hasTag = true
							break
						}
					}
					if(hasTag == true){
						uni.showLoading({
							
						})
						
						var tag = []
						for(var i in that.tags){
							if(that.tags[i].is_exist == true){
								tag.push(that.tags[i].id)
							}
						}
						var data = {
						  age: that.staffInfo.age,
						  headImg: that.staffInfo.head_img,
						  height: that.staffInfo.height,
						  imgs: JSON.stringify(that.staffInfo.imgs) ,
						  introduce: that.staffInfo.introduce,
						  name: that.staffInfo.name,
						  sex: that.staffInfo.sex,
						  synopsis: that.staffInfo.synopsis,
						  tag: JSON.stringify(tag),
						  weight: that.staffInfo.weight
						}
						uni.request({
							method: "POST",
							header: {token: that.Token},
							url: that.Server + 'staff/update',
							data,
							success(res) {
								uni.hideLoading()
								if(res.data.code == 0){
									uni.showToast({
										title: '填写完成，即将返回',
										duration: 1500
									})
									setTimeout(() => {
										uni.reLaunch({
											url: '../blank/blank'
										})
									}, 1500)
								} else if (res.data.code == 101) {
									uni.clearStorageSync()
									uni.showToast({
										icon: "none",
										title: '登录超时，将重新授权登录',
										duration: 1000
									})
									setTimeout(() => {
										uni.reLaunch({
											url: '../blank/blank'
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
					} else {
						uni.showToast({
							icon: 'none',
							title: '请选择至少一个标签！'
						})
					}
					
				} else {
					uni.showToast({
						icon: 'none',
						title: '请填写全部资料！'
					})
				}
				
				
				
			},
			SelectTag(index){
				
				if(this.totalTag < 5 || this.totalTag == 5){
					this.tags[index].is_exist = this.tags[index].is_exist == false ? true : false
					this.totalTag = this.tags[index].is_exist == true ? this.totalTag + 1 : this.totalTag - 1
					this.$forceUpdate(this.tags)
				}
			},
			ViewImage(){
				uni.previewImage({
					urls: [this.staffInfo.head_img],
					current: 0
				})
			},
			ViewImageB(index){
				uni.previewImage({
					urls: this.staffInfo.imgs,
					current: index
				})
			},
			GetTags(){
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'staffTag/list',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.tags = res.data.data
							for(var i in that.tags){
								for(var j in that.staffInfo.tag){
									if(that.staffInfo.tag[j].tag == that.tags[i].tag){
										that.tags[i].is_exist = true
										that.totalTag += 1
										break
									} else {
										that.tags[i].is_exist = false
									}
								}
							}
							console.log(that.tags);
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
			GetStaffInfo(){
				uni.showLoading({
					
				})
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'staff/info',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.userInfo = res.data.data
							res.data.data.imgs = res.data.data.imgs == undefined ? [] : JSON.parse(res.data.data.imgs)
							res.data.data.name = res.data.data.name == undefined ? '' : res.data.data.name
							res.data.data.age = res.data.data.age == undefined ? '' : res.data.data.age
							res.data.data.height = res.data.data.height == undefined ? '' : res.data.data.height
							res.data.data.weight = res.data.data.weight == undefined ? '' : res.data.data.weight
							res.data.data.tag = res.data.data.tag == undefined ? [] : res.data.data.tag
							that.staffInfo = res.data.data
							that.GetTags()
						} else if (res.data.code == 101) {
							uni.clearStorageSync()
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../blank/blank'
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
						
						// // 上传服务器
						// if(target == "head_img"){
							
						// } else {
						// 	if (this.imgList.length != 0) {
						// 		this.imgList = this.imgList.concat(res.tempFilePaths)
						// 	} else {
						// 		this.imgList = res.tempFilePaths
						// 	}
						// }
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
												if(target == "head_img"){
													that.staffInfo.head_img = url.data
												} else {
													that.staffInfo.imgs.push(url.data)
												}
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
						
						// for(var i=0; i<this.imgList.length; i++){
						// 		uni.getImageInfo({
						// 			src: this.imgList[i],
						// 			success(res) {
						// 				let canvasWidth = res.width //图片原始长宽
						// 				let canvasHeight = res.height
						// 				let img = new Image()
						// 				img.src = res.path
						// 				let canvas = document.createElement('canvas');
						// 				let ctx = canvas.getContext('2d')
						// 				canvas.width = canvasWidth
						// 				canvas.height = canvasHeight 
						// 				ctx.drawImage(img, 0, 0, canvasWidth , canvasHeight )
						// 				canvas.toBlob(function(fileSrc) {	
						// 					fileSrc.name = "name.jpg";
						// 					console.log(fileSrc);
						// 					let imgSrc = URL.createObjectURL(fileSrc)
						// 					var src = new window.File([fileSrc], 'name.jpg', {
						// 						type: "image/jpeg"
						// 					})
						// 					// #ifdef H5
						// 					var xhr = new XMLHttpRequest();
						// 					xhr.open("POST", "https://www.qiafantech.com/club/file/img/upload", true);
						// 					var file = new FormData()
						// 					file.append('file', src)
						// 					xhr.send(file)
						// 					xhr.addEventListener('load', (res)=>{
						// 						var url = JSON.parse(res.currentTarget.response)
						// 						if(url.code == 0){
						// 							that.merchantLogo = url.data
						// 							uni.hideLoading()
						// 						} else if (url.code == 500){
						// 							uni.hideLoading()
						// 							uni.showToast({
						// 								icon: 'none',
						// 								title: '上传失败'
						// 							})
													
						// 						} 
						// 						uni.hideLoading()										});
						// 					// #endif
						// 				}, 'image/jpeg', 0.2)
						// 			}
						// 		})
						// }
						
					},
				});
			},
			DelImg(e) {
				var that = this
				var target = e.currentTarget.dataset.target
				console.log(target);
				uni.showModal({
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							if(target == "head_img"){
								that.staffInfo.head_img = null
							} else {
								that.staffInfo.imgs.splice(e.currentTarget.dataset.index, 1)
								
							}
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.page{min-height: 100vh;}
</style>
