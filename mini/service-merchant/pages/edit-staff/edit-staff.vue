<template>
	<view class="page bg-white">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">编辑技师</block></cu-custom>
		
		<view class="cu-form-group" style="border:0">
			<view class="title">技师编号</view>
			<input v-model="name" name="input"></input>
			<text class='cuIcon-peoplefill text-main'></text>
		</view>
<!-- 		<view class="cu-form-group" style="border:0">
			<view class="title">技师年龄</view>
			<input placeholder="24" type="number" name="input"></input>
		</view>
		<view class="cu-form-group" style="border:0">
			<view class="title">技师身高</view>
			<input placeholder="163" type="number" name="input"></input>
		</view> -->
<!-- 		<view class="cu-bar">
			<view class="action">
				技师照片 - 第一张会作为头像
			</view>
			<view class="action">
				{{imgList.length}}/5
			</view>
		</view> -->
<!-- 		<view class="cu-form-group" style="background-color: transparent;">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				 <image  :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<5">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view> -->
		
		<view class="cu-form-group" style="border-top: 1px solid #f5f5f5;">
			<view class="title">技师等级</view>
			<button @tap="showModal" data-name="editLevel" class="cu-btn round bg-main3">新增等级</button>
		</view>
		
		
		
		<view class="cu-modal" :class="modalName=='editLevel'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">新增等级</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<input type="text" v-model="levelName" placeholder="请输入等级名称" />
					<button @tap.stop="AddLevel" style="width: 50%;"  class="margin-top cu-btn round bg-main3">确定</button>
				</view>
			</view>
		</view>
		
		<view class=" margin-left-sm flex-wrap" style="width: 700upx;">
			<view v-for="(item, index) in levels" :key="index" class="flex align-center justify-between margin-top-sm">
				<view @tap="ChangeLevel(index)" class="flex align-center">
					<text :class="label == item.title ? 'cuIcon-roundcheck text-red margin-right-sm' : 'text-gray cuIcon-round margin-right-sm'" style="font-size: 40upx;"></text>{{ item.title }}
				</view>
				<button @tap="DeleteLevel(index)" class="cu-btn bg-main2 radius">删除</button>
			</view>
			<!-- <text style="margin: 0; margin-right: 10upx; margin-top: 10upx;" :class="index == 1  ? 'cu-tag radius bg-red margin-right-xs' : 'cu-tag radius bg-gray margin-right-xs'" v-for="(item, index) in tags" :key="index">{{ item }}</text> -->
		</view>
		
<!-- 		<view class="cu-form-group margin-top" style="border-top: 1px solid #f5f5f5;">
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="个人介绍个人介绍个人介绍个人介绍个人介绍"></textarea>
		</view> -->
		
		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @tap="fireStaff" data-name="book" class="cu-btn lg bg-main2 round margin-right-sm" style="width: 40%;">
				<text class=" margin-right-sm"></text>辞退技师
			</button>
			<button @tap="confirmEdit" data-name="book" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class="cuIcon-edit margin-right-sm"></text>确定修改
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				levelName: '',
				id: null,
				label: null,
				name: null,
				modalName: null,
				imgList: ['../../static/girls/1.jpg', '../../static/girls/1.jpg'],
				tags: ['红牌技师', '特级技师', '高级技师'],
				levels: null,
				resultLevel: null,
				isFree: null
			};
		},
		onLoad(options) {
			this.id = options.id
			this.name = options.name
			this.label = options.label
			this.isFree = options.isFree
			this.GetLevel()
		},
		methods:{
			fireStaff(){
				var that = this
				if(this.isFree == "false"){
					console.log(123);
					uni.showToast({
						icon: 'none',
						title: '技师忙碌，不可辞退',
						duration: 1500
					})
				} else {
					uni.showModal({
						content: '确定辞退技师吗？',
						success(res) {
							if(res.confirm){
								uni.request({
									header: {token: that.MerchantToken.token},
									url: that.Server + 'staff/del',
									data: {
										staffId: parseInt(that.id)
									},
									success(res) {
										uni.hideLoading()
										if(res.data.code == 0){
											uni.showToast({
												icon: 'none',
												title: '辞退完成',
												duration: 1500
											})
											setTimeout(() => {
												uni.navigateBack({
													delta: 2
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
									}
								})
							}
						}
					})
				}
				
			},
			confirmEdit(){
				var that = this
				console.log(this.name);
				console.log(this.resultLevel);
				uni.showModal({
					content: '确定修改资料吗？',
					success(res) {
						if(res.confirm){
							uni.request({
								method: "POST",
								header: {token: that.MerchantToken.token},
								url: that.Server + 'staff/edit',
								data: {
									staffId: parseInt(that.id),
									name: that.name,
									level: that.levels[that.resultLevel].title
								},
								success(res) {
									uni.hideLoading()
									if(res.data.code == 0){
										uni.showToast({
											icon: 'none',
											title: '修改成功',
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
								}
							})
						}
					}
				})
			},
			ChangeLevel(index){
				var that = this
				this.label = this.levels[index].title
				that.resultLevel = index
			},
			AddLevel(){
				uni.showLoading({
					
				})
				var that = this
				if(this.levelName != ''){
					var permit = true
					for(var i in that.levels){
						if(that.levels[i].title == that.levelName){
							that.modalName = null
							uni.showToast({
								icon: 'none',
								title: '等级重复',
								duration: 1000
							})
							setTimeout(() => {
								that.modalName = "editLevel"
							}, 1000)
							permit = false
							break;
						}
					} 
					console.log(permit);
					if(this.levelName.length > 6){
						uni.showToast({
							icon: '名称最多6个字'
						})
					} else if (permit == false) {
					} else {
						uni.request({
							method: "POST",
							header: {token: that.MerchantToken.token},
							url: that.Server + 'staffLevel/add',
							data: {
								title: that.levelName
							},
							success(res) {
								uni.hideLoading()
								if(res.data.code == 0){
									that.modalName = null
									that.GetLevel()
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
				} else {
					uni.showToast({
						icon: 'none',
						title: '请输入等级名称'
					})
				}
			},
			DeleteLevel(index){
				var that = this
				uni.showModal({
					content: '确定删除吗？',
					success(res) {
						if(res.confirm){
							uni.request({
								header: {token: that.MerchantToken.token},
								url: that.Server + 'staffLevel/del',
								data: {
									levelId: that.levels[index].id
								},
								success(res) {
									uni.hideLoading()
									if(res.data.code == 0){
										that.levels.splice(index, 1)
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
			GetLevel(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'staffLevel/list',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.levels = res.data.data
							for(var i in that.levels){
								if(that.levels[i].title == that.label){
									that.resultLevel = i
									break
								}
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
					}
				})
			},
			hideModal(){
				this.modalName = null
			},
			showModal(e){
				this.modalName = e.currentTarget.dataset.name
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(){},
			DelImg(e) {
				uni.showModal({
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
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
