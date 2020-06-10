<template>
	<view class="main">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">粉丝列表</block></cu-custom>
		
		<view class="body">
			<view class="margin-top-sm flex align-center justify-between margin-left-sm" style="width: 700upx;" v-for="(item,index) in followList" :key="index">
				<image class="cu-avatar round lg" :src="item.userInfo.headimgurl"></image>
				<text>{{ item.userInfo.nickname }}</text>
				<text>{{ item.cteate_time.split(' ')[0] }}关注</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				followList: [],
				page: 1,
				totalPage: 0
			};
		},
		onReachBottom() {
			if(this.page < this.totalPage){
				this.page += 1
				this.GetFollowList()
			}
		},
		onLoad() {
			this.GetFollowList()
		},
		methods:{
			GetFollowList(){
				var that = this
				uni.request({
					header: {token: that.Token},
					url: that.Server + 'userStaff/list',
					data: {
						page: that.page,
						size: 10
					},
					success(res) {
						uni.hideLoading()
						if(res.data.code == 0){
							that.totalPage = res.data.data.totalPage
							for (let i in res.data.data.list) {
								that.followList.push(res.data.data.list[i])
							}
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
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.main{min-height:  100vh; background-color: white;}
</style>
