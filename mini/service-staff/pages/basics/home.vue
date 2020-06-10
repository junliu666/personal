<template name="basics">
	<view class="page bg-white">
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"><block slot="backText" style="font-size: 40upx;"> <text @click="showLocation" style="font-size: 50upx; margin-right: 12upx;" class=" text-main"></text> <text @click="showLocation">{{ userInfo.name }}</text></block><block slot="content"></block></cu-custom>
		<view class="cu-modal" :class="modalName=='service'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">选则服务项目</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="margin-top-sm flex align-center justify-between" v-for="(item,index) in serviceList" :key="index">
						<text>{{ item.title }}</text>
						<text>{{ item.use_time }}分钟</text>
						<button @tap="selectService(index)" class="cu-btn radius bg-main2">选择</button>
					</view>
				</view>
			</view>
		</view>
		<!-- <button type="primary" @tap="StaffScan"></button> -->
		<view class="cu-modal" :class="modalName=='serviceAdd'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">加钟项目</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="margin-top-sm flex align-center justify-between" v-for="(item,index) in serviceList" :key="index">
						<text>{{ item.title }}</text>
						<text>{{ item.use_time }}</text>
						<button @tap="selectServiceAdd(index)" class="cu-btn radius bg-main2">选择</button>
					</view>
				</view>
			</view>
		</view>
		
		<view class="main">
			<view class="flex justify-between align-center margin-top margin-left-sm" style="width: 725upx">
				<view class="">
					状态：
					<text :class="userInfo.is_free == true ? 'cuIcon-title text-green2' : 'cuIcon-title text-red'"></text>
					{{ userInfo.is_free == true ? '空闲' : '忙碌' }}
				</view>
				<button @tap="changeBusyStatus(true)" class="cu-btn bg-main2 round">
					<text class="cuIcon margin-right-xs"></text>{{ currentOrder == undefined && userInfo.is_free == true ? '我被预约' : currentOrder == undefined && userInfo.is_free == false ? '我已空闲' : userInfo.is_free == true && currentOrder.is_accept == false ? '我被预约' : userInfo.is_free == false && currentOrder.is_accept == false ? '我已空闲' : userInfo.is_free == false && currentOrder.is_accept == true ? '提前下钟' : '' }}
				</button>
			</view>
			
			<view class="flex justify-end margin-left-sm margin-top-sm" style="width: 725upx;">
<!-- 				<button class="cu-btn bg-main2 round margin-right-sm">
					<text class="cuIcon margin-right-xs"></text>我已空闲 / 我被预约
				</button> -->
				<button @tap="changeModal" data-name="serviceAdd" v-if="currentOrder != undefined && userInfo.is_free == false && currentOrder.is_accept == true" class="cu-btn bg-main3 radius">
					<text class="cuIcon-add margin-right-xs"></text>顾客加钟
				</button>
			</view>
<!-- 			<view class="flex justify-center margin-left-sm margin-top-sm" style="width: 700upx;">
				<button class="cu-btn bg-main3 round">
					<text class=" margin-right-xs"></text>顾客加钟 / 确定上钟
				</button>
			</view> -->
<!-- 			
			<view class="margin-top-sm margin-right-sm">
				这里相当于空闲状态的按钮是：我已预约和确定上钟。忙碌状态时：我已空闲和顾客加钟
			</view> -->
			<view v-if="userInfo.is_free == true" class="flex flex-direction align-center justify-center" style="min-height: 60vh;">
				当前无预约
			</view>
			<view v-if="userInfo.is_free == false" class="flex flex-direction align-center justify-center" style="min-height: 60vh;">
				<view v-if="currentOrder != undefined && currentOrder.id != undefined" class="out-round flex align-center justify-center margin-top" style="position: relative;">
					<image src="../../static/tabbar/clock.png" style="width: 100%; height: 100%; position: absolute; left: 0; top: 0;" mode=""></image>
					<view class="flex align-center flex-direction justify-center inner-round shadow-blur">
						<text class="text-lg">{{  currentOrder.end_time != undefined ? '下钟时间' : currentOrder.room_no != undefined ? '预约时间' : '预计到店时间' }}</text>
						<text class="text-lg text-bold margin-top text-lg">{{ currentOrder.end_time != undefined ? currentOrder.end_time.split(" ")[1] : currentOrder.room_no != undefined ? currentOrder.create_time.split(" ")[1] : currentOrder.arrive_time.split(" ")[1] }}</text>
					</view>
				</view>
				
				<view class="flex justify-center margin-top" style="width: 100%;">
					<view style="width: 50%; height: 80upx; background-color: #f9f9f9;" class=" cu-tag round margin-top text-center">
						{{ currentOrder == undefined ? '顾客未到店' : currentOrder.end_time != undefined ? '正在服务中' : currentOrder.room_no != undefined && currentOrder.room_no != '' ? '顾客已到店' : '顾客还没到店' }}
					</view>
				</view>
				
				<view v-if=" currentOrder != undefined && currentOrder.id != undefined && currentOrder.end_time == undefined" class="flex justify-center margin-top" style="width: 100%;">
					<view style="width: 50%; height: 80upx; background-color: #f9f9f9;" class=" cu-tag round margin-top text-center">
						{{ currentOrder.room_no != undefined ? '房间号 ' + currentOrder.room_no : '电话' + currentOrder.tel }} 
					</view>
				</view>
				
				<view v-if="userInfo.is_free == false && currentOrder == undefined || userInfo.is_free == false && currentOrder.is_accept == false" class="  flex justify-center margin-top-xl" style="width: 100%;">
					<button @tap="changeModal" data-name="service" class="margin-right-sm cu-btn bg-main3 radius">
						<text class="cuIcon-check margin-right-xs"></text>确定上钟
					</button>
				</view>
				
			</view>
			
			
<!-- 			<view class="flex align-center margin-left-sm margin-top">
				<text class="cuIcon-titles text-main "></text>
				<view class="">
					预约时间 / 上钟时间
				</view>
			</view>
			<view class="margin-top text-gray text-bold text-center text-lg" style="width: 100%;">
				9:00 - 10:00
			</view>
			<view class="flex align-center margin-left-sm margin-top">
				<text class="cuIcon-titles text-main "></text>
				<view class="">
					房间
				</view>
			</view> -->
			
			
<!-- 			<view class="cu-form-group">
				<view class="title">预约/上钟时间</view>
				<input placeholder="9:00 - 9:30" name="input" disabled="true"></input>
				<text class='cuIcon-timefill text-main'></text>
			</view>
			
			<view class="cu-form-group">
				<view class="title">房间号</view>
				<input placeholder="1号房间" name="input" disabled="true"></input>
				<text class='cuIcon-homefill text-main'></text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: ["userInfo", "serviceList", "currentOrder"],
		name: "basics",
		data() {
			return {
				endTime: null,
				workStatus: 0,  // 0还没确定 1已经确定
				orderMethod: 0,
				filterMethod: 0,
				modalName: null,
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../static/girls/1.jpg'
				}, {
					id: 1,
					type: 'image',
					url: '../../static/girls/2.jpg',
				}, {
					id: 2,
					type: 'image',
					url: '../../static/girls/3.jpg'
				}],
				dotStyle: false,
			};
		},
		mounted(){
			console.log(this.$props.currentOrder);
		},
		methods:{
			StaffScan(){
				this.$emit("StaffScan")
			},
			selectServiceAdd(index){
				var that = this
				// console.log(that.$props.orderList[index].id,);
				this.modalName = null
				uni.showModal({
					title: '',
					content: '确定加钟该项目？（选择后无法改变）',
					success: (res) => {
						if(res.confirm){
							var date = new Date(that.currentOrder.end_time)
							var year = date.getFullYear()
							var m = date.getMonth()
							m += 1
							var month = m < 10 ? '0' + m : m
							var d = date.getDate()
							var day = date.getDate() < 10 ? '0' + d : d
							var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
							var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
							var startTime = year + "-" + month + "-" + day + " " + hour + ":" + min + ':00'
							var userTime = this.$props.serviceList[index].use_time
							
							var resultMin = date.setMinutes(date.getMinutes() + userTime)
							var hourSecond = date.getHours()
							var resultHour = hourSecond < 10 || hourSecond == 0 ? '0' + hourSecond : hourSecond
							var minSecond = date.getMinutes()
							var resultMini = minSecond < 10 || minSecond == 0 ? '0' + minSecond : minSecond
							resultMin = resultHour + ":" + resultMini
							resultMin = year + "-" + month + "-" + day + " " + resultMin + ':00'
							
							var data = {
								id: that.currentOrder.id,
								endTime: resultMin
							}
							that.$emit("ServiceAdd", data)
							
						} else {
							
						}
					}
				})
			},
			changeBusyStatus(status){
				console.log(this.$props.currentOrder);
				var targetStatus = !this.$props.userInfo.is_free
				var data = {
					id: this.$props.currentOrder == undefined ? undefined : this.$props.currentOrder.id,
					targetStatus, 
					workStatus: this.$props.currentOrder == undefined ? 0 : this.$props.currentOrder.is_accept == false ? 0 : 1
				}
				this.$emit("CancelOrder", data)
			},
			
			selectService(index){
				var that = this
				this.modalName = null
				uni.showModal({
					title: '',
					content: '确定选择该项目？（选择后无法改变）',
					success: (res) => {
						if(res.confirm){
							this.workStatus = 1
							var date = new Date()
							var year = date.getFullYear()
							var m = date.getMonth()
							m += 1
							var month = m < 10 ? '0' + m : m
							var d = date.getDate()
							var day = date.getDate() < 10 ? '0' + d : d
							var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
							var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
							var startTime = year + "-" + month + "-" + day + " " + hour + ":" + min + ':00'
							var userTime = this.$props.serviceList[index].use_time
							
							var resultMin = date.setMinutes(date.getMinutes() + userTime)
							var hourSecond = date.getHours()
							var resultHour = hourSecond < 10 || hourSecond == 0 ? '0' + hourSecond : hourSecond
							var minSecond = date.getMinutes()
							var resultMini = minSecond < 10 || minSecond == 0 ? '0' + minSecond : minSecond
							resultMin = resultHour + ":" + resultMini
							resultMin = year + "-" + month + "-" + day + " " + resultMin + ':00'
							
							
							var data = {
								orderId: that.currentOrder == undefined ? '' : that.currentOrder.id,
								startTime,
								endTime: resultMin,
								projectId: this.$props.serviceList[index].id,
								roomNO: that.currentOrder == undefined ? '' : that.currentOrder.roomNO
							}
							console.log(data);
							this.$emit("UpService", data)
							that.endTime = resultMin.split(" ")[1]
						} else {
							this.modalName = 'service'
						}
					}
				})
			},
			goSearch(){
				uni.navigateTo({
					url: '../search/search'
				})
			},
			book(e){
				this.modalName = null
				uni.navigateTo({
					url: "../people-detail/people-detail?status=" + e.currentTarget.dataset.key
				})
			},
			viewDetail(){
				this.modalName = "book"
			},
			hideModal(){
				this.modalName = null
			},
			changeModal(e){
				this.modalName = e.currentTarget.dataset.name
			},
			showLocation(){
				
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style scoped lang="scss">
	.page {
		height: 100vh;
	}
	// height: 100vh;
	.main{margin-bottom: 120upx;
		.out-round{ width: 400upx; height: 400upx; border-radius: 100%;
			.inner-round{width: 280upx; height: 280upx; border-radius: 100%; background-color: white;}
		}
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
		.items{width: 700upx; background-color: white; border-radius: 10upx; padding: 10upx}
	}
</style>
