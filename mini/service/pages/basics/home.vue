<template name="basics">
	<view>
		<cu-custom  bgColor="bg-black" :isBack="false" :mainPage="true"><block slot="backText" style="font-size: 40upx;"> <text @click="showLocation" style="font-size: 50upx; margin-right: 12upx;" class="cuIcon-locationfill text-main"></text> <text @click="showLocation">{{ merchantInfo.title }}</text></block><block slot="content"></block></cu-custom>
		<view class="main">
			<!-- 首页导航 -->
			<view class="bg-white header" v-if="swiperList.length != 0">
				<swiper v-if="swiperList" class="card-swiper" :class="dotStyle?'square-dot':'square-dot'" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#f9f9f9"
				 indicator-active-color="#f5df2c">
					<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
						<view class="swiper-item">
							<image :src="item.img_url" mode="aspectFill"></image>
							<!-- <image :src="item.imgUrl" mode="aspectFill" v-if="item.type=='image'"></image> -->
							<!-- <video :src="item.imgUrl" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
						</view>
					</swiper-item>
				</swiper>
				
				<!-- 排名 -->
				<view v-if="recStaff.length != 0" class="text-center margin-left-sm margin-top"><text class="cuIcon-medalfill text-main margin-right-sm text-lg"></text>推荐技师</view>
				<view v-if="recStaff.length != 0" class="rank flex align-end justify-center margin-top-sm">
					<view class="rank-1 margin-right-lg" @click="bookB(recStaff[1].id)" data-key="0">
						<image src="../../static/2222.png" style="width: 100%; height: 100%; z-index: 9;" mode=""></image>
						<!-- <image src="../../static/two-two.png" style="width: 100%; height: 100%;"></image> -->
						<image  :src="recStaff[1].head_img" class="inner-girl" mode=""></image>
					</view>
					<view class="rank-2"  @click="bookB(recStaff[0].id)" data-key="0">
						<image src="../../static/11111.png" style="width: 100%; height: 100%; z-index: 9;" mode=""></image>
						<!-- <image src="../../static/one-one.png" style="width: 100%; height: 100%;" mode=""></image> -->
						<image  :src="recStaff[0].head_img" class="inner-girl" mode=""></image>
<!-- 						<view class="text-main" style=" position: absolute; left: 50upx; bottom: -20upx">
							<text class=" ">No1.</text>12号
						</view> -->
					</view>
					<view class="rank-3 margin-left-lg"  @click="bookB(recStaff[2].id)" data-key="0">
						<image src="../../static/33333.png" style="width: 100%; height: 100%; z-index: 9;" mode=""></image>
						<!-- <image src="../../static/three-three.png" style="width: 100%; height: 100%;" mode=""></image> -->
						<image  :src="recStaff[2].head_img" class="inner-girl" mode=""></image>
<!-- 						<view class="text-main3" style=" position: absolute; left: 55upx; bottom: -20upx">
							<text class=" ">No3.</text>12号
						</view> -->
					</view>
				</view>
				<view class="flex align-center justify-center text-sm margin-top-xs" style="width: 100%;">
					<text style="width: 130upx; overflow: hidden;" class="text-center margin-right-lg">{{ recStaff[1].name}}</text>
					<text style="width: 158upx; overflow: hidden;" class="text-center">{{ recStaff[0].name}}</text>
					<text style="width: 130upx; overflow: hidden;" class="text-center margin-left-lg">{{ recStaff[2].name}}</text>
				</view>
			</view>
			
			<!-- 列表 -->
			<!-- 排序筛选 -->
			<!-- 排序 -->
			<view class="cu-modal" :class="modalName=='order'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar  justify-end">
						<view class="action" @tap="hideModal">
							<view class="content text-green">技师排序</view>
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						<button @tap.stop="changeSort" data-name='distance' :class=" orderMethod == 0 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">打赏数</button>
						<button @tap.stop="changeSort" data-name='distance' style="margin-left: 20upx;" :class=" orderMethod == 1 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">上钟数量</button>
						<!-- <button @tap.stop="changeSort" data-name='price' style="margin-left: 20upx;" :class=" sortMethod == 2 ? 'cu-btn round bg-main' : 'cu-btn round line-gray'">忙碌中</button> -->
					</view>
				</view>
			</view>
			<!-- 筛选 -->
			<view class="cu-modal" :class="modalName=='filter'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar  justify-end">
						<view class="action" @tap="hideModal">
							<view class="content text-green">技师筛选</view>
							<text class="cuIcon-close text-red"></text>
						</view>
				推荐	</view>
					<view class="padding-xl">
						<button @tap.stop="changeSort" data-name='distance' :class=" filterMethod == 0 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">全部</button>
						<button @tap.stop="changeSort" data-name='distance' style="margin-left: 20upx;" :class=" filterMethod == 1 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">空闲中</button>
						<button @tap.stop="changeSort" data-name='price' style="margin-left: 20upx;" :class=" filterMethod == 2 ? 'cu-btn round bg-main2' : 'cu-btn round line-gray'">忙碌中</button>
					</view>
				</view>
			</view>
			<!-- 预约 -->
			<view class="cu-modal" :class="modalName=='book'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar  justify-end">
						<view class="action" @tap="hideModal">
							<view class="content text-green">预约技师</view>
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						<button @tap.stop="book" data-status='0' class=" cu-btn round bg-main2">未到店</button>
						<button @tap.stop="book" data-status='1' style="margin-left: 20upx;" class=" cu-btn round bg-main2">已到店</button>
					</view>
				</view>
			</view>
			<view v-if="staffList.length != 0" class="flex justify-between margin-top-sm align-center ">
				<view class="flex margin-left-sm">
					<button :data-status="2" @tap="changeStatus" style="width: 150upx;" :class=" status == '2' ? 'cu-btn sm bg-main2 round margin-right-sm' : 'cu-btn sm line-gray round margin-right-sm' ">
						全部
					</button>
					<button :data-status="0" @tap="changeStatus" style="width: 150upx;" :class=" status == '0' ? 'cu-btn sm bg-main2 round margin-right-sm' : 'cu-btn sm line-gray round margin-right-sm' ">
						空闲
					</button>
					<button :data-status="1" @tap="changeStatus" style="width: 150upx;" :class=" status == '1' ? 'cu-btn sm bg-main2 round margin-right-sm' : 'cu-btn sm line-gray round margin-right-sm' ">
						忙碌
					</button>
				</view>
				<view class="flex margin-right-sm">
					<text class="cuIcon-search " @click="goSearch" data-name="filter" style="font-size: 50upx;"></text>
					<!-- <text class="cuIcon-order  margin-left" @click="changeModal" data-name="order" style="font-size: 50upx;"></text> -->
				</view>
			</view>
			<view  v-if="staffList.length != 0" style=";" class="justify-end margin-left-sm text-gray text-sm margin-top-sm">
				<view @tap="CallMerchant" class="cuIcon-phone margin-right-xs"> 联系商家</view>
			<view>
			<!-- 列表 -->
			<view class="text-gray margin-top text-center" style="width: 100%;" v-if="staffList.length == 0">
				商家暂无技师
			</view>
			
			<view v-if="staffList.length != 0" class="flex align-center flex-direction"  >
				<view v-for="(iitem, iindex) in staffList" :key="iindex" v-if="status == '2' ? iitem.is_free == true || iitem.is_free == false : status == false ? iitem.is_free == false : status == true ? iitem.is_free == true : ''"  @click="book" :data-key="iitem.id" data-name="book" class="items  flex justify-between align-center margin-top-xs">
					<view class="flex">
						<view @tap.stop="showImg(iitem.head_img)" class="flex flex-direction align-center" style="position: relative;">
							<view class="flex flex-direction justify-center text-white align-center radius" style="width: 40upx; height: 40upx; background-color: rgba(0, 0, 0, 0.5); position: absolute; left: 0; top: 0; z-index: 999;">
								<text class="cuIcon-crownfill text-main" style="font-size: 16upx;"></text>
								<text class="" style="font-size: 16upx;">{{ iitem.total_gift }}</text>
							</view>
							<view  class="" style="position: relative;">
								<image  :src="iitem.head_img" class="cu-avatar radius" style="width: 120upx; height: 120upx;"></image>
								<text class="margin-top-xs bg-main3 text-center text-xs" style="background-color: rgba(0, 0, 0, 0.5); bottom: 0; left: 0; width: 120upx; position: absolute; z-index: 999;;">{{ iitem.label }}</text>
							</view>
							<text class="text-sm text-center" style="width: 120upx;">{{ iitem.name }}号</text>
							
						</view>
						
						<view class="flex flex-direction margin-left-sm">
							<!-- 编号 入职 -->
							<view class="flex justify-between align-center">
								<view class="flex align-center" v-if="iitem.is_free == true">
									<text class="cuIcon-title text-green2 "></text>空闲
								</view>
								<view class="flex align-center" v-if="iitem.is_free == false">
									<text class="cuIcon-title text-red "></text>忙碌
								</view>
								<view class="text-gray margin-left-sm" v-if="iitem.endTime != 'a'">
									下钟时间：{{ iitem.endTime == 'b' ? '未开始' : iitem.endTime.split(" ")[1] }}
								</view>
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
							<view class="margin-top-xs text-gray">
								{{ iitem.synopsis }}
							</view>
						</view>
					</view>
					<view style="padding: 20upx" @tap.stop="Collect(iindex)">
						<text :class="iitem.isCollection == true ? 'cuIcon-likefill text-red' : 'cuIcon-likefill text-gray'" style="font-size: 50upx;"></text>
					</view>
				</view>
			</view>
			<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white">
						<view class="action text-green"></view>
						<view class="action text-blue" @tap="hideModal">取消</view>
					</view>
					<view class="padding bg-white">
						<view @tap="Call(index)" class="text-center margin-top" v-for="(item, index) in telNum" :key="index">
							{{ item }}
						</view>
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
		name: "basics",
		props: ["UserInfoB", "staffList", "merchantInfo", "swiperList","recStaff"],
		data() {
			return {
				status: 2,
				orderMethod: 0,
				filterMethod: 0,
				modalName: null,
				cardCur: 0,
				telNum: null,
				// swiperList: [{
				// 	id: 0,
				// 	type: 'image',
				// 	url: '../../static/girls/1.jpg'
				// }, {
				// 	id: 1,
				// 	type: 'image',
				// 	url: '../../static/girls/2.jpg',
				// }, {
				// 	id: 2,
				// 	type: 'image',
				// 	url: '../../static/girls/3.jpg'
				// }],
				dotStyle: false,
			};
		},
		created(){
			console.log(this.$props.staffList);
		},
		methods:{
			Call(index){
				if(this.$props.UserInfoB == undefined){
					uni.showModal({
						title: '请授权微信登录',
						success(res) {
							if(res.confirm){
								uni.reLaunch({
									url: '../login/login'
								})
							}
						}
					})
				} else {
					uni.makePhoneCall({
						phoneNumber: this.telNum[index]
					})
				}
				
			},
			CallMerchant(){
				this.telNum = JSON.parse(this.merchantInfo.tel) 
				this.modalName = "bottomModal"
				
			},
			showImg(img){
				uni.previewImage({
					urls: [img]
				})
			},
			changeStatus(e){
				this.status = e.currentTarget.dataset.status
			},
			Collect(iindex){
				var that = this
				if(this.$props.UserInfoB == undefined){
					uni.showModal({
						title: '请授权微信登录',
						success(res) {
							if(res.confirm){
								uni.reLaunch({
									url: '../login/login'
								})
							}
						}
					})
				} else {
					this.$emit('Collect', iindex)
					this.staffList[iindex].isCollection = !this.staffList[iindex].isCollection
					// 因为先改样子再变，所以要反过来
					if(this.$props.staffList[iindex].isCollection == false){
						uni.request({
							method: "POST",
							header: {
								token: that.Token
							},
							url: that.Server + 'userStaff/del',
							data: {
								staffId: this.$props.staffList[iindex].id
							},
							success(res) {
								if(res.data.code == 0){
									
								} else if (res.data.code == 101) {
									uni.showToast({
										icon: 'none',
										title: '登录超时，将重新授权登录',
										duration: 500
									})
									setTimeout(() => {
										uni.reLaunch({
											url: '../login/login'
										})
									}, 500)
								} else {
									that.$emit('Collect', iindex)
									uni.showToast({
										icon: 'none',
										title: res.data.msg
									})
								}
							}
						})
					} else {
						uni.request({
							method: "POST",
							header: {
								token: that.Token
							},
							url: that.Server + 'userStaff/add',
							data: {
								staffId: this.$props.staffList[iindex].id
							},
							success(res) {
								if(res.data.code == 0){
									
								} else if (res.data.code == 101) {
									uni.showToast({
										icon: 'none',
										title: '登录超时，将重新授权登录',
										duration: 500
									})
									setTimeout(() => {
										uni.reLaunch({
											url: '../login/login'
										})
									}, 500)
								} else {
									uni.showToast({
										icon: 'none',
										title: res.data.msg
									})
								}
							}
						})
					}
				}
				
			},
			GetStaffList(){
				var that = this
				uni.request({
					header: {
						token: that.Token
					},
					url: that.Server + 'staff/list',
					data: {
						merchantId: that.MerchantId
					},
					success(res) {
						if(res.data.code == 0){
							for(var i in res.data.data){
								that.staffList.push(res.data.data[i])
							}
						} else if (res.data.code == 101) {
							uni.showToast({
								icon: 'none',
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
			},
			goSearch(){
				if(this.$props.UserInfoB == undefined){
					uni.showModal({
						title: '请授权微信登录',
						success(res) {
							if(res.confirm){
								uni.reLaunch({
									url: '../login/login'
								})
							}
						}
					})
				} else {
					uni.navigateTo({
						url: '../search/search'
					})
				}
				
			},
			book(e){
				this.modalName = null
				uni.navigateTo({
					url: "../people-detail/people-detail?id=" + e.currentTarget.dataset.key
				})
			},
			bookB(id){
				this.modalName = null
				uni.navigateTo({
					url: "../people-detail/people-detail?id=" + id
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
				console.log(123);
				uni.openLocation({
					latitude: parseFloat(this.merchantInfo.lat) ,
					longitude: parseFloat(this.merchantInfo.lon),
					address: this.merchantInfo.address,
					name: this.merchantInfo.title,
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					}
				})
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
		.header{padding-bottom: 10upx;
			.rank{
				.rank-1{width: 130upx; height: 170upx;   position: relative; 
					.inner-girl{position: absolute; width: 120upx; height: 120upx; left: 6upx; top: 47upx; z-index: 0; border-radius: 100%;}
				}
				.rank-2{width: 158upx; height: 207upx;  position: relative;
					.inner-girl{position: absolute; width: 144upx; height: 144upx; left: 10upx; top: 57upx; z-index: 0; border-radius: 100%}
				}
				.rank-3{width: 130upx; height: 170upx; position: relative; 
				.inner-girl{position: absolute; width: 120upx; height: 120upx; left: 6upx; top: 47upx; z-index: 0; border-radius: 100%}
					
				}
				.rank-4{width: 140upx; }
				.rank-5{width: 170upx;}
				.rank-6{width: 140upx;}
			}
		}
		.items{width: 700upx; background-color: white; border-radius: 10upx; padding: 5upx}
	}
</style>
