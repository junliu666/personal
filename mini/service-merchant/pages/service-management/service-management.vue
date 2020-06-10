<template>
	<view class="main bg-white">
		<view class="cu-modal" :class="modalName=='money'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">提现会到当前微信账号</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="flex align-center justify-center">
						<input type="number"  placeholder="请输入提现金额" />
					</view>					
					<button @tap.stop="changeSort" data-name='distance' class="cu-btn round bg-main3 margin-top-sm">确定</button>
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='divide'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">新增项目</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="flex align-center justify-center">
						<input style="border-bottom: 1px solid;" v-model="serviceName"  placeholder="项目名称" />
						
					</view>	
					<view class="flex align-center justify-center">
						<input style="border-bottom: 1px solid;" class="margin-top" v-model="serviceTime" type="number"  placeholder="项目时间(分钟)" />	
					</view>	
					<button @tap.stop="addService" data-name='distance' class="cu-btn round bg-main3 margin-top">确定</button>
				</view>
			</view>
		</view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">服务项目</block></cu-custom>
		<view class="flex align-center justify-between margin-right-sm">
			<view class="">
			</view>
			<view class="margin-top">
				<button @tap="add" data-name="divide" class="cu-btn bg-main2 round">
					<text class="cuIcon-add margin-right-xs"></text>新增服务项目
				</button>
			</view>
		</view>
		
		<view class=" margin-left-sm margin-top" style="width: 700upx;" v-for="(item, index) in serviceList" :key="index">
			<view class="flex justify-between" style="width: 100%;">
				<text>{{ item.title }}</text>
				<text>60分钟</text>
				<button @tap="DeleteService(index)" class="cu-btn bg-main3"><text class="cuIcon-deletefill margin-right-xs"></text>移除项目</button>
			</view>
			<view class="divide-line margin-top"></view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				serviceName: '',
				serviceTime: '',
				modalName: null,
				serviceList: ''
			};
		},
		onLoad() {
			this.GetServiceList()
		},
		methods:{
			DeleteService(index){
				var that = this
				uni.showModal({
					content: '确定删除码？',
					success(res) {
						if(res.confirm){
							uni.request({
								header: {token: that.MerchantToken.token},
								url: that.Server + 'merchantProject/del',
								data: {
									projectId: that.serviceList[index].id,
								},
								success(res) {
									if(res.data.code == 0){
										that.serviceList.splice(index, 1)
										that.modalName = null
										uni.showToast({
											icon: 'none',
											title: '删除成功'
										})
										
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
			add(){
				this.modalName = "divide"
			},
			addService(){
				var that = this
				uni.request({
					method: "POST",
					header: {token: that.MerchantToken.token},
					url: that.Server + 'merchantProject/add',
					data: {
						title: that.serviceName,
						useTime: parseInt(that.serviceTime)
					},
					success(res) {
						if(res.data.code == 0){
							that.modalName = null
							uni.showToast({
								icon: 'none',
								title: '新增成功'
							})
							that.GetServiceList()
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
			GetServiceList(){
				var that = this
				uni.showLoading({
					
				})
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'merchantProject/list',
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.serviceList = res.data.data
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
			showDivide(e){
				this.modalName = e.currentTarget.dataset.name
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh;}
</style>
