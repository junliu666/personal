<template>
	<view style="min-height: 100vh;" class="bg-white">
		<main-head bgColor="bg-main" :isBack="true">
			<block slot="logImg"> 
				<view class="round bg-white flex justify-center align-center" style="color: #72b9ea; width: 80upx; height: 80upx; background-color: #f9f9f9; " v-if="UserInfo == '' || UserInfo == undefined || UserInfo == null">
					登录
				</view>
				<image class="cu-avatar round bg-white " style="margin: 0; width: 80upx; height: 80upx;"  v-if="UserInfo != '' && UserInfo != undefined && UserInfo != null" src="../../static/logo.png"></image>
			</block>
			<block slot="content">
				<view class=" round bg-white flex align-center" style="height: 60upx; width: 250upx; margin: 0;">
					<text class="cuIcon-search text-bold margin-left-sm text-gray margin-left-sm"></text>
				</view>
			</block>
			<block slot="other">
				<view class="margin-left">
					
				</view>
			</block>
			<block slot="location">
				<view style="font-size: 45upx;" class=" text-white text-bold margin-left-sm  ">
					<text class=""></text>
				</view>
			</block>
			<block slot="location">
				<view @tap="GoIndex" style="font-size: 30upx;" class=" text-white text-bold margin-left-sm  ">
					<text class="">查看更多</text>
				</view>
			</block>
		</main-head>
		
		<!-- map -->
		<map :scale="scale" style="width: 750upx; height: 80vh;" :latitude="latitude" :longitude="longitude"  :markers="covers"></map>

		
		
		<!-- foot -->
		<view class="cu-bar tabbar bg-white foot" style="margin-top: 250upx; box-shadow: none; border: 0; justify-content: space-between; height: 150upx;">
			<view class="flex justify-start"   style="width: 50%;" >
			</view>
			<view class="flex justify-end"   data-cur="communicationList" style="width: 50%; ">
				<button @click="PostTask" class="cu-btn text-white round flex align-center justify-center bg-sub-main margin-right"  style="font-size: 36upx; width: 100upx; height: 100upx;  ">
					<text class="aliicon " style="font-size: 45upx;">&#xe600;</text>
				</button>
				<button @click="MessageList" class="cu-btn text-white round flex align-center justify-center bg-main margin-right"  style="width: 100upx; height: 100upx;">
					<view class="cuIcon-messagefill text-lg " style="font-size: 55upx;">
						<view class="badge sm bg-sub-main cu-tag" style="">
							new
						</view>
					</view> 
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: null,
				UserInfo: null,
				title: 'map',
				latitude: "",
				longitude: "",
				scale: 14,
				label: {
					content: '挖掘机修理工',
					color: '#72b9ea',
					x: 0,
					y: 0,
					bgColor: 'rgba(0,0,0,0.5)',
					padding: 10,
					fontSize: 10
				},
				covers: [{
				    latitude: 0,
				    longitude: 0,
				    iconPath: '../../static/work.png', 
					label:{
					    content:'￥90 挖掘机修理工',
					    color:'#72b9ea',
					    bgColor:'#fff',
					    padding:5,
					    borderRadius:4
					},
					callout:{
					    content:'挖掘机修理工',
					    color:'#72b9ea',
					    fontSize:12
					}
				}, {
				    latitude: 0,
				    longitude: 0,
				    iconPath: '../../static/work.png',
					label:{
					    content:'￥90 挖掘机修理工',
					    color:'#72b9ea',
					    bgColor:'#fff',
					    padding:5,
					    borderRadius:4
					},
					callout:{
					    content:'挖掘机修理工',
					    color:'#F76350',
					    fontSize:12,
						
					}
				}],
				// round: {
				// 	latitude: 0,
				// 	longitude: 0,
				// 	radius: 2000,
				// 	color: '#515151',
				// 	strokeWidth: 1,
				// 	fillColor: '#515151',
				// }
			};
		},
		onLoad(options) {
			this.options = options.target
			var that = this
			that.SetMap()
		},
		methods: {
			GoIndex(){
				if(this.options == ''){
					uni.navigateTo({
						url: '../index-page/index-page'
					})
				}
			},
			PostTask(){},
			MessageList(){},
			SetMap(){
				var that = this
				uni.getLocation({
					type: 'gcj02',
					// altitude: tr ue,
					success(res) {
						console.log(res);
						that.latitude = res.latitude
						that.longitude = res.longitude
						 
						that.covers[0].latitude = res.latitude
						that.covers[0].longitude = res.longitude
						
						// that.covers[1].latitude = res.latitude + 0.005
						// that.covers[1].longitude = res.longitude + 0.005
						
						// that.round.latitude = res.latitude
						// that.round.longitude = res.longitude
						 
						// that.circles.latitude = res.latitude
						// that.circles.longitude = res.longitude
					}
				})
			},
			chooseKLocation(){
				uni.chooseLocation({
					
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
