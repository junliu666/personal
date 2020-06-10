<template>
	<view class="bg-white wrapper">
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"></block><block slot="content">预约管理</block></cu-custom>	
		
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tagList" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view class="flex align-center justify-between margin-right-sm">
			<view class="">
				<view class="margin-left-sm text-gray margin-top" style="font-size: 30upx;">数量: {{ orderList.filter(item => item.status == TabCur ).length }}</view>
			</view>			
		</view>
		<view class=" margin-left-sm margin-top" style="width: 700upx; margin-bottom:  120upx;" v-for="(item, index) in orderList" v-if="TabCur == item.status" :key="index">
			<view class="flex justify-between" style="width: 100%;">
				<text>{{  item.staffInfo.name }}</text>
				<text>{{ item.create_time.split(" ")[0] }}</text>
			</view>
			<view class="flex justify-between margin-top-sm" style="width: 100%;">
				<text>{{ item.room_no != undefined && item.room_no != "" ? '房间 ' + item.room_no : '' }}</text>
				<text>{{ item.start_time == undefined ? "" : item.start_time.split(" ")[1] + " - " }}  {{ item.end_time == undefined ? "" : item.end_time.split(" ")[1] }}</text>
			</view>
			<view v-if="item.project_info != undefined" class="flex justify-between margin-top-sm" style="width: 100%;">
				<text>服务项目 {{ item.project_info.title }}</text>
				<text>项目时间 {{ item.project_info.useTime }}</text>
			</view>
			<view class="flex justify-end  " style="width: 100%;">
				<button @tap="CancelOrder(index)" class="cu-btn round bg-main2 margin-top-sm margin-bottom-sm" v-if="TabCur == 0">
					<text class="cuIcon-deletefill margin-right-xs"></text>取消预约
				</button>
<!-- 				<button class="cu-btn round bg-main2">
					<text class="cuIcon-appreciatefill"></text>再次预约
				</button> -->
			</view>
			<view class="divide-line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["totalCount", "totalPage", "orderList"],
		data() {
			return {
				TabCur: 0,
				tagList: ['等待开始', '服务中', '服务完成', '预约取消']
			};
		},
		mounted() {
			console.log(this.$props.totalCount, this.$props.totalPage, this.$props.orderList);
		},
		methods:{
			CancelOrder(index){
				var that = this
				uni.showModal({
					title: '确定取消预约吗？',
					success(re) {
						if(re.confirm){
							uni.request({
								header: {token: that.MerchantToken.token},
								url: that.Server + 'order/cancel',
								data: {
									orderId: that.$props.orderList[index].id
								},
								success(res) {
									uni.hideLoading()
									if(res.data.code == 0){
										uni.showToast({
											icon: 'none',
											title: '预约取消成功'
										})
										that.$emit("CancelOrder", index)
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
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrapper{min-height: 100vh;}
</style>
