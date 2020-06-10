<template>
	<!-- :style="showFilter ? 'position: fixed;' : ''" -->
	<view  >
		<!-- <ourLoading isFullScreen active text="loading..." /> -->
		<main-head  @ShowModal="ShowModal"  bgColor="bg-main" :isBack="true">
			<block slot="logImg"> 
				<view class="round bg-white flex justify-center align-center" style="color: #72b9ea; width: 80upx; height: 80upx; background-color: #f9f9f9; " v-if="UserInfo == '' || UserInfo == undefined || UserInfo == null">
					登录
				</view>
				<image class="cu-avatar round bg-white " style="margin: 0; width: 80upx; height: 80upx;"  v-if="UserInfo != '' && UserInfo != undefined && UserInfo != null" src="../../static/logo.png"></image>
			</block>
			<block slot="content">
				<view  class="round  flex align-center bg-white" style=" height: 60upx; width: 250upx; margin: 0;">
					<text class="cuIcon-search text-bold margin-left-sm margin-left-sm"></text>
				</view>
			</block>
			<block slot="other">
				<view class="margin-left">
					{{ UserPartTimePrefer[0] }}
				</view>
			</block>
			<block slot="location">
				<view @click="GoFulltimeJob" style="font-size: 45upx;" class="  text-bold margin-left-sm  ">
					<text class="aliicon">&#xe6ae;</text>
				</view>
			</block>
			<block slot="location">
				<view @click="GoMap" style="font-size: 45upx;" class="  text-bold margin-left-sm  ">
					<text class="aliicon">&#xe649;</text>
				</view>
			</block>
		</main-head>
		
<!-- 		<button @click="FingerLogin" type="default">指纹识别</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
		<button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
		 -->
		<view id="operation" v-if="loadBody"  class="bg-main  padding " style="width: 100%; position: fixed; z-index: 999;">
			<view class="flex align-center justify-between" style="width: 700upx;">
				<view  class=" text-black text-bold" style="width: 150upx;">
					智能排序
					<text class=""></text>
				</view>
				<button  class="text-sm shadow-blur cu-btn text-black  round text-cut bg-white" style=" display: inline-block; margin: 0;   width: 160upx; text-align: center; justify-content: flex-start; height: 60upx; line-height: 60upx;">
					<text class="cuIcon-location "></text>五华区
				</button>
				<button  class="text-sm shadow-blur cu-btn text-black  round text-cut bg-white" style=" display: inline-block; margin: 0;   width: 160upx; text-align: center; justify-content: flex-start; height: 60upx; line-height: 60upx">
					<text class="aliicon  margin-right-xs ">&#xe699;</text>分类
				</button>
				<button @click="CloseFilter" class="text-sm shadow-blur cu-btn text-black  round text-cut bg-white" style=" display: inline-block; margin: 0; width: 160upx; text-align: center; height: 60upx; line-height: 60upx">
					<text class="aliicon margin-right-xs ">&#xe7eb;</text>筛选
				</button>
			</view>
		</view>
		
		<!-- 筛选 -->
		<view  v-if="showFilter" class=" " style="overflow: hidden;  height: 200upx; z-index: 998; width: 100vw; position: fixed; top: 0; height: 100vh;">
			<view @touchmove.stop.prevent="" class="" style="position: relative; height: 100%; width: 100%; background-color: rgba(0,0,0,0.5);">
				</view>
				<view @touchmove.stop.prevent="" @click="CloseFilter" class="" style="position: absolute; top:0; left: 0; height: 100%; width: 100%; background-color: rgba(0,0,0,0.5);">
					<view class="bg-white" :style="'padding-top:' + CustomBar + 'px; width: 100vw;'">
						<view class="padding-sm" style="width: 100%; height: 100%;">
							<view class="text-gray ">发布者</view>
							<view class="flex align-center margin-top-xs">
								<text style="margin: 0; margin-right: 10upx;" class="radius cu-tag bg-gray">高信用发布者</text>
								<text style="margin: 0; margin-right: 10upx;" class="radius cu-tag bg-gray">企业发布</text>
							</view>
							<view class="text-gray margin-top-sm">任务信息</view>
							<view class="flex align-center  flex-wrap">
								<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">有信用要求</view>
								<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">有三方险</view>
								<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">单人任务</view>
								<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">多人任务</view>
								<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">线上任务</view>
								<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">线下任务</view>
								<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">好友发布</view>
							</view>
							
							<view class="text-gray margin-top-sm">开工时间</view>
							<view class="flex align-center margin-top-xs">
								<button class="cu-btn  line-gray text-center" style="width: 250upx;">
									最早开工时间
								</button> -  
								<button class="cu-btn  line-gray text-center" style="width: 250upx;">
									最晚开工时间
								</button>
							</view>
							<view class="text-gray margin-top-sm">地点距离</view>
							<view class="flex align-center margin-top-xs" style="width: 100%;">
								<view class="flex align-center justify-between" style="width: 100%;">
									<view class="flex align-center">
										<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">1公里</view>
										<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">3公里</view>
										<view style="margin: 0; margin-right: 10upx; margin-top: 10upx;" class="radius cu-tag bg-gray ">5公里</view>
									</view>
								</view>
							</view>
							<view class="text-gray margin-top-sm">任务报酬</view>
							<view class="flex align-center margin-top-xs" style="width: 100%;">
								<view class="flex align-center justify-between" style="width: 100%;">
									<RangeSlider
										activeColor="#72b9ea"
										:width="slideWidth"
										:height="slideHeight"
										:blockSize="slideBlockSize"
										:min="slideMin"
										:max="slideMax"
										:values="rangeValues"
										:step="step"
										:liveMode="isLiveMode"
										@rangechange="onRangeChange"
									>
										<view slot="minBlock" class="range-slider-block"></view>
										<!-- 左边滑块的内容 -->
										<view slot="maxBlock" class="range-slider-block"></view>
										<!-- 右边滑块的内容 -->
									</RangeSlider>
									<view class="flex align-center">
										<text class="text-price text-main">{{ rangeValues[0] }}</text>
										<text class="text-main margin-left-xs margin-right-xs">-</text>
										<text class="text-price text-main">{{ rangeValues[1] }}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="foot flex">
							<button class="cu-btn line-gray lg radius" style="width: 50%; border-radius: 0">重置</button>
							<button class="cu-btn bg-main lg radius" style="width: 50%; border-radius: 0">完成</button>
						</view>
					</view>
				</view>
			
			
			
			
		</view>
		<!-- 列表风格2 -->
<!-- 		<view class="" style="margin-top: 120upx; ">
			
		</view>
		<view  class=" margin-tb-sm"  v-for="(item,index) in 10" :key="index" style="width: 100%;">
			<view class="margin-left-home flex shadow bg-white  padding-xs" style="width: 680upx; border-radius: 10upx;">
				<view class="flex">
					<image style=" width: 80upx; height: 80upx; border-radius: 10upx;  ;" class=" cu-avatar radius" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587248044876&di=66d5927b9dacd2fa4723179d9e6d2867&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F11%2F20180411180032_NyE5f.jpeg"></image>
				</view>
				<view class="flex flex-direction justify-center  " style="padding-left: 20upx; width: 580upx;">
					<view class="flex justify-between align-center">
						<view class="flex align-center flex-wrap" style="max-width: 480upx;">
							<text  class="text-cut  margin-right-sm text-bold" style="font-size: 36upx; ">挖掘机修理工</text>
							<text class="cu-tag bg-main sm radius text-cut" style="max-width: 100upx;">修理工</text>
						</view>
						<view class=" ">
							<text class="text-bold text-main">￥300</text>
						</view>
					</view>
					<view class=" flex align-center justify-between">
						<view class="flex align-stretch flex-wrap">
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">有保险</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">有信用要求</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">5级发布者</text>
							<text class="margin-top-xs cu-tag sm radius margin-right-xs" style="margin-left: 0">
								<text class="cuIcon-attention"></text>1024 
							</text>
						</view>
					</view>
					<view class="flex text-sm justify-between align-center margin-top-xs">
						<view class="">
							<view><text class="cuIcon-timefill text-gray margin-right-xs"></text>开工时间
								<text class="margin-left-sm">2020-04-20</text></view>
							<view class="flex align-center" style="width: 500upx;">
								<text style="max-width: 350upx;" class="margin-right-xs text-gray cuIcon-locationfill text-cut"></text>索菲特大酒店
								<text class="margin-left-sm">705m</text>
							</view>
						</view>
					</view>  
				</view>
			</view>
		<view class="" style="height: 165upx;">
		</view>
		</view> -->

		<!-- 企业 -->
		<!-- :class="showModal ? 'fixed' : ''" -->
		<view id="content-wrapper"  @touchmove="TouchMoveFresh"  @touchstart="TouchStartFresh" @touchend="TouchEndFresh">
			<view class="" style="margin-top: 100upx; ">
				
			</view>
			
			<view v-if="!target" :class="index == -1 ? 'padding-top bg-white' : 'padding-tb bg-white'"   v-for="(item,index) in 0"  style="width: 100%; margin-top: 30upx; margin-bottom: 30upx;">
						<view @click="ViewPoster" class="margin-left-home flex align-start " style="width: 680upx;">
							<view class="flex align-center" style="position:  relative;">
								<image style="width: 130upx; height: 80upx; border-radius: 10upx; margin-right: 20upx;" class="cu-avatar radius margin-right-xs" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587803033254&di=af47f688d8cf512cdf43fee1056f312a&imgtype=0&src=http%3A%2F%2Fedu.bryzq.com%2Fuploads%2F180316%2F1-1P3161431325D.jpg "></image>

							</view>
							<view @click="ViewDetail" class="" style="width: 530upx;">
								<view class="flex justify-between align-center">
									<view class="flex" style="">
										<text  class="text-cut text-lg margin-right-sm text-black">资深项目经理</text>
									</view>
									<view class=" ">
										<text class="text-price text-main text-bold">10-15k·14薪</text>
									</view>
								</view>
								<view class=" flex align-center justify-between margin-top-xs">
									<scroll-view class="flex align-stretch" scroll-x style="width:530upx; white-space: nowrap; overflow-x: scroll;">
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">3年</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">本科</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">项目管理</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">原型输出</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">需求分析</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">需求分析</text>

									</scroll-view>
								</view>
								<view class="flex text-sm justify-between align-center margin-top-xs" style="width: 100%;">
									<view class="">
										<view class="margin-top-xs">
											<text class=" margin-right-xs">阿里巴巴</text>
											<text class="margin-left-xs">已上市</text>
											<text class="margin-left-xs">500-9999人</text>
										</view>
										<view class="flex justify-between margin-top-xs align-center" style="width:530upx;">
											<view class="flex align-center">
												<image class="round" style="width: 50upx; height: 50upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
												<text class="margin-left-sm text-cut" style="width: 200upx;">李卓然 · 人事主管</text>
											</view>
											<view class="text-gray text-cut text-right" style="width: 250upx;">
												昆明市 五华区
											</view>
										</view>
									</view>
								</view>  
							</view>
						</view>
					</view>
					
					
					<!-- 个人 -->
					<view    :class="index == -1 ? 'padding-top bg-white' : 'padding-tb bg-white'"  v-for="(item,index) in partTimeList" :key="index" style="width: 100%; " >
						<view @click="ViewPoster" class="margin-left-home flex align-start " style="width: 680upx;">
							<view class="flex align-center" style="position:  relative;">
								<image style="width: 130upx; height: 130upx; border-radius: 10upx; margin-right: 20upx;" class="cu-avatar radius margin-right-xs" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg "></image>
								<view class="radius" style="position: absolute; bottom: 0; width: 130upx; background-color: rgba(0,0,0,0.5);">
									<text style="font-size: 20upx;">5级信用分</text>
								</view>
							</view>
							<view @click="ViewParttimeDetail(index)"  class="" style="width: 530upx;">
								<view class="flex justify-between align-center">
									<view class="flex" style="">
										<text  class="text-cut text-lg text-black" >挖掘机修理工你的撒旦</text>
									</view>
									<view class=" ">
										<text class=" text-main text-bold">420元/小时</text>
										
									</view>
								</view>
								<text class="text-gray text-sm">{{ index % 2 == 0 ? ' 修理工 | 个人发布 ' : '修理工 | 企业发布' }}</text>
								<view class=" flex align-center justify-between margin-top-xs">
									<view class="flex align-stretch flex-wrap">
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">有保险</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">有信用要求</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">招5人</text>
										<text class="margin-top-xs cu-tag  radius margin-right-xs" style="margin-left: 0">好友发布</text>
									</view>
									
								</view>
								<view class="flex text-sm justify-between align-center margin-top-sm">
									<view class="">
										<view class="flex align-center">
											<text class="cuIcon-calendar text-gray " style="font-size: 30upx; width: 40upx;"></text>
											开工时间
											<text class=" ">2020-04-20</text>
										</view>
										<view class="flex align-center justify-between margin-top-xs" style="width: 530upx;">
											<view class="flex align-center">
												<text style="font-size: 30upx; width: 40upx;" class=" text-gray cuIcon-location" ></text>
												<text style="width: 300upx;" class="text-cut">索菲特大酒店</text>
											</view>
											
											<text class="text-sm text-gray" >705m</text>
										</view>
									</view>
								</view>  
							</view>
						</view>
						<view v-if="index != 9" class="margin-top" style="height: 30upx; width: 100%; background-color: #f9f9f9;">
							
						</view>
					</view>
					<view class="" style="height: 150upx;">
					</view> 
		</view>
		
		
		<!-- 刷新提示 -->
		<view class="box" v-if="showLoad">
			<Loading6 :text="'加载中'"></Loading6>
		</view>
		<refresh  @ChangeTop="ChangeTop" ref="refresh" @isRefresh='isRefresh'></refresh>
<!-- 		<view  class="text-center flex justify-center fresh-box" :style="'transform: translateY(' + freshTop - 50 + ' px);'">
			<view class=" bg-sub-main text-lg text-bold round flex align-center justify-center" style="width: 80upx; height: 80upx;">
				<text :class="reachFresh ? 'cuIcon-refresh' : 'cuIcon-refresharrow'"></text>
			</view>
		</view> -->
		

		
	</view>
</template>

<script>
	import refresh from '../../components/refresh.vue';
	import Loading6 from "@/components/loading6.vue";
	import RangeSlider from '@/components/range-slider/range-slider.vue'
	// import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	// const PPFace = uni.requireNativePlugin('PP-BaiduFace');
	// var config={
	//     licenseName: 'idl-license',
	//     licenseSuffix: 'face-android',//这里ios 跟 android 应该不一样
	//     licenseId: '19788034', //这里ios 跟 android 应该不一样
	//     liveActionArray: ["Eye", "HeadUp", "HeadDown"],
	//     bgColor:"#56445D", //1,41版本加入 android背景颜色，ios需要修改资源图片完成
	//     textColor:"#C5E99B" //1.41版本加入  文本已经圆框颜色
	//     isSound:false, //1.42版本加入 默认是否开启语音提示（仅Android有效）默认值：false
	//     AutoClip:true //1.42版本加入 自动裁剪用户脸部区域 默认：false
	//     isBackCamera:_self.backCamera //1.43版本加入 启用后置摄像头 默认false
	// }
	// PPFace.faceliveness(config, result => {
	//     //result.base64ImageMap 一个动作一张外加一张正面采集
	
	// });
	
	// PPFace.recycler(config, result => {
	//    //result.base64ImageMap 图像集合 一张
	// );
	 
	export default {
		data() {
			return {
				// 图
				showFilter: false,
				rangeValues: [0, 100],
				slideWidth: 450,
				slideHeight: 80,
				slideBlockSize: 40,
				slideMin: 0,
				slideMax: 100,
				isLiveMode: true,
				step: 1,
				//
				timeMinValue: 0,
				timeMaxValue: 10,
				
				rangeValues2: [1, 6],
				serTime: '02:24:00-14:24:00',
				
				rangeValues3: [3, 5],
				// 
				partTimeList: 0,
				loadBody: true,
				isEnd: 0,
				isTop: 1,
				showLoad: false, 
				targetY: '',
				startY: '',
				endY: '',
				showModal: false,
				contentFixed: false,
				target: true,
				UserInfo: "",
				UserPartTimePrefer: ['全部零活', '游戏代练', '睡觉'],
				pageTop: '',
				freshY: '',
				freshTop: 0,
				startYFresh: '',
				freshAllow: false,
				showFresh: true,
				reachFresh: false
			};
		},
		onPullDownRefresh() {
			this.showLoad = true
		},
		mounted() {
			var that = this
			// 距离
			
			// 图
			
			// 
			setTimeout(() => {
				this.loadBody = true
				this.partTimeList = 10
			}, 1)
			const query = uni.createSelectorQuery().in(this)
			query.select('#content-wrapper').boundingClientRect(data => {
				console.log(data);
				that.pageTop = data.top
			}).exec(() => {}); 

			
		},
		
		components: {
			Loading6,
			refresh,
			RangeSlider
		},
		computed: {
			freshStyle(){
				var transitionY = this.freshTop
				// console.log(transitionY);
				var style = `transform: translateY(${transitionY-50}px);`
				return style
			}
		},
		methods: {
			// 图标
			CloseFilter(){
				this.showFilter = !this.showFilter
				// this.$emit("PageScroll", 300)
				
			},
			pad: function(num, n) {
				return Array(n - ('' + num).length + 1).join(0) + num;
			},
			onRangeChange: function(e) {
				this.rangeValues = [e.minValue, e.maxValue];
			
				console.log(this.rangeValues);
				console.log(JSON.stringify(e));
			},
			test: function() {
				this.rangeValues = [4.2, 6.6];
			},
			onRangeChange2: function(e) {
				let startTime = this.formatTimeBySliderValue(e.originalValue.minValue);
				let endTime = this.formatTimeBySliderValue(e.originalValue.maxValue);
				this.serTime = startTime + '-' + endTime;
			},
			onRangeChange3: function(e) {
				this.rangeValues3 = [e.minValue, e.maxValue];
			},
			formatTimeBySliderValue(value) {
				//按比例，将滑块上面的数值进行转换为时间形式
				//转换为分钟数
				let minutes = (24 * 60 * value) / this.slideMax;
				//转换为小时数
				let hours = parseInt(minutes / 60);
				//剩余分钟数
				let minutes_min = parseInt(minutes % 60);
				return '' + this.pad(hours, 2) + ':' + this.pad(minutes_min, 2) + ':' + '00';
			},
			// 
			checkIsSoterEnrolledInDeviceFingerPrint() {
			    uni.checkIsSoterEnrolledInDevice({
			        checkAuthMode: 'fingerPrint',
			        success(res) {
			            console.log(res);
			        },
			        fail(err) {
			            console.log(err);
			        },
			        complete(res) {
			            console.log(res);
			        }
			    })
			},
			startSoterAuthenticationFingerPrint() {
			    uni.startSoterAuthentication({
			        requestAuthModes: ['fingerPrint'],
			        challenge: '123456',
			        authContent: '请用指纹解锁',
			        success(res) {
			            console.log(res);
			        },
			        fail(err) {
			            console.log(err);
			        },
			        complete(res) {
			            console.log(res);
			        }
			    })
			},
			FingerLogin(){
				uni.startSoterAuthentication({
					requestAuthModes: ['fingerPrint'],
					challenge: '123123',
					authContent: "是否开启指纹登录",
					success(res){
						console.log(res)
					}
				})
			},
			isRefresh(){
				var that = this
				that.$refs.refresh.endAfter()
				that.showLoad = true
				setTimeout(() => {
					that.showLoad = false
				}, 2000)
			},
			ChangeTop(data){
				this.isTop = data
			},
			TouchMoveFresh(e){
				// 
				var that = this
				this.$refs.refresh.refreshMove(e);
			},
			TouchEndFresh(e){ 
				this.$refs.refresh.refreshEnd(e);

				
				
			},
			TouchStartFresh(e){
				var that = this
				this.$refs.refresh.refreshStart(e);
				// that.startY = e.changedTouches[0].clientY
				// this.$nextTick(function(){
					
				// 	const query = uni.createSelectorQuery().in(this)
				// 	query.select('#content-wrapper').boundingClientRect(data => {
				// 		if(data.top == that.pageTop){
				// 			that.isTop = 1
				// 			console.log(that.isTop);
							
				// 		} else {
				// 			that.isTop = 0
				// 		}
				// 	}).exec(() => {}); 
				// })
				
				
			},
			TouchStart(e){
				// this.startY = e.changedTouches[0]
			},
			TouchEnd(e){
				// this.endY = e.changedTouches[0].pageY
			},
			ShowModal(data){
				this.showModal = data
				
			},
			ViewParttimeDetail(index){
				uni.navigateTo({
					url: '../parttime-detail/parttime-detail?id=' + index
				})
			},
			ViewPoster(){
				
			},
			ViewDetail(){
				var url = this.target == true ? '../parttime-detail/parttime-detail' : '../fulltime-detail/fulltime-detail'
				uni.navigateTo({
					url
				})
			},
			GoFulltimeJob(){
				uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
				});
				this.target = !this.target
				
			},
			GoMap(){
				// #ifdef  APP-PLUS
				uni.navigateTo({
					url: '../take-job-mapR/take-job-mapR'
				})
				// #endif
				// #ifndef APP-PLUS
				uni.redirectTo({
					url: '../take-job-mapR/take-job-mapR'
				})
				// #endif
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.fresh-box{
		z-index: 99999; 
		width: 100%; 
		position: absolute; 
		top: 0;
		// transform: translateY(-50px)
	}
.drawer{
	
}
.drawer.show{
	
}
</style>
