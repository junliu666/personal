<template>
	<view class="main bg-white" >
		<cu-custom bgColor="bg-main" :isBack="true"><block slot="backText"></block><block slot="content">发布任务 1/3</block></cu-custom>
		
		<view  class="">
			<!-- 类型 -->
			<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
				<text class="cuIcon-pullright"></text>
			</view>
			<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
					<view @tap="ChooseType(index)" class="cu-item arrow" v-for="(item,index) in typeList" :key="index">
						<view class="content">
							<text class="cuIcon-github text-grey"></text>
							<text class="text-grey">{{ item.title }}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			
			<scroll-view scroll-y :class="modalName=='viewModal' ? 'DrawerPage show' : ''" >
				<view class="cu-form-group-page margin-top-sm" style="border: 0;">
					<view class="flex align-center">
						<view class="title" style="font-size: 30upx;">任务标题</view>
						<input placeholder-style="color: #afafaf" class="margin-left" style="width: 490upx;"  placeholder="请输入2到10个字的标题" v-model="postData.title" maxlength="10" @blur="CheckTitle" name="input"></input>
					</view>
					
				</view>
				<view class="cu-form-group-page ">
					<view class="flex align-center">
						<view class="title" style="font-size: 30upx;">所需人数</view>
						<input class="margin-left" style="font-size: 30upx; width: 490upx;" type="number" v-model="postData.peopleNum" maxlength="10"></input>
					</view>
					
				</view>
				<view @tap="ShowType" class="cu-form-group-page ">
					<view class="flex align-center">
						<view class="title" style="font-size: 30upx;">任务类型</view>
						<text class="text-cut margin-left" :style="postData.typeTitle == '' ? 'color: #afafaf' : ''" style="width:490upx; ">{{ postData.typeTitle == '' ? '请选择零活类型' : postData.typeTitle }}</text>
					</view>
					
					<text style="font-size: 30upx;"  class='cuIcon-right text-gray'></text>
				</view>
				<view @tap="ChooseLocation" class="cu-form-group-page ">
					<view class="flex align-center">
						<view class="title" style="font-size: 30upx;">工作地点</view>
						<text class="text-cut margin-left" style="width:490upx; " :style="address == '' ? 'color: #afafaf' : ''">{{ address == '' ? '请选择地点' : address }}</text>
					</view>
					
					<text style="font-size: 30upx;"  class='cuIcon-right text-gray'></text>
				</view>
				
				<view class="cu-form-group-page " @click="GoCalendar" >
					<view class="flex align-center">
						<view class="title" style="font-size: 30upx;">任务日期</view>
						<text  class="text-cut margin-left" style="width:490upx; ">{{ postData.showDate }}</text>
					</view>
					
					<text style="font-size: 30upx;"  class='cuIcon-right text-gray'></text>
				</view>
	
				<!-- <calendar v-if="loadBody" @TellFather="TellFather" :singleDate="!postData.dateStatus" @change="changeDate"  class="margin-left-sm"></calendar> -->
<!-- 				<view>
				    <uni-calendar 
				    :insert="true"
				    :lunar="true" 
				    :start-date="'2019-3-2'"
				    :end-date="'2019-5-20'"
					:range="true"
				    @change="change"
				     />
				</view> -->
				
				<!-- 日期选择 -->
				<!-- <calendar :show="showCaledar"  :singleDate="singleDate" @change="changeDate" class="margin-left-sm"></calendar> -->
<!-- 				<view v-if="loadBody" class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
					<view class="cu-dialog" @tap.stop="">
						<radio-group class="block" @change="RadioChange">
							<view class="cu-list menu text-left">
								<view class="cu-item" v-for="(item,index) in dateSelections" :key="index">
									<label class="flex justify-between align-center flex-sub">
										<view class="flex-sub"> {{item}}</view>
										<radio class="round" :class="radio== item ?'blue checked':''" :checked="radio== item ?true:false"
										 :value="item"></radio>
									</label>
								</view>
							</view>
						</radio-group>
					</view>
				</view> -->
				
				<view  class="" style="width: 750upx; height: 30upx; background-color: #f9f9f9;">
					
				</view>
				
				<view  class="flex text-gray margin-tb-sm"  style="width: 725upx; margin-left: 25upx; font-size: 26upx;">
							字数 {{ postData.detail.trim().length }}/500
						</view>
						
						<view class="cu-form-group" style="margin-top: 20upx; padding-top: 0;">
							<textarea style="margin-top: 0; padding-top: 0; line-height: 2; height: 200upx;"  @blur="CheckDetail"  maxlength="500" v-model="postData.detail"  placeholder="任务详细描述(不少于20个字)" :style="postData.detail == '' ? 'color: #afafaf' : ''"></textarea>
						</view>
						
<!-- 						<view class="flex justify-end" style="width: 725upx;">
							<button class="cu-btn bg-sub-main radius" @tap="VoiceIn">
								<text class="cuIcon-voicefill margin-right-sm"></text>语音输入
							</button>
						</view> -->
						
						<view class=" margin-top" style="width: 750upx; height: 30upx; background-color: #f9f9f9;">
							
						</view>
						
						<view class="cu-bar ">
							<view class="action">
								<text style="font-size: 30upx;">描述图片</text> 
							</view>
							<view class="action">
								{{ postData.imgs.length }}/8
							</view>
						</view>
						
						<view class="cu-form-group margin-top-sm">
							<view class="grid col-4 grid-square flex-sub">
								<view class="bg-img" v-for="(item,index) in postData.imgs" :key="index" @tap="ViewImage" :data-url="postData.imgs[index]">
								 <image :src="postData.imgs[index]" mode="aspectFill"></image>
									<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
										<text class='cuIcon-close'></text>
									</view>
								</view>
								<view class="solids" @tap="ChooseImage" v-if="postData.imgs.length<8">
									<text class='cuIcon-cameraadd'></text>
								</view>
							</view>
						</view>
						 
			</scroll-view>
			<view class="" style="height: 160upx; ">
				
			</view>
			<view v-if="modalName != 'viewModal' && footShow " class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
				<view class="action"  data-cur="basics" style="height: 100%; width: 60%;"> 
					<button @tap="NexStep" style="width: 60%; height: 90upx;" @click="NumSteps" class="cu-btn round bg-main text-lg">下一步</button>
				</view>
			</view>
		</view>
		
		
		
		
		
		
		
		 
		 
	</view>
</template>

<script>
	// import calendar from '../../components/date-picker/date-picker.vue'
	import uniTransition from '@/colorui/components/uni-transition/uni-transition.vue'
	// import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'

	import {  
	       mapState,  
	       mapActions,
	   } from 'vuex'; 
		
	export default {
		onLoad() {
			var that = this
			var date = new Date()
			var month = date.getMonth() + 1 < 10 
			var day = date.getDate()
			// setTimeout(() => {
			// 	this.loadBody = true
			// 	setTimeout(() => {
			// 		that.loadCalendar = true
			// 	}, 1)
			// }, 1)
			
		},
		computed: {
			...mapState([ 'postParttimejobPersonal'])
		},
		data() {
			return {
				loadBody: false,
				loadCalendar: false,
				// 类型
				typeList: [{
					title: '情节',
					id: 2
				}, {
					title: '情节',
					id: 3
				}, {
					title: '情节',
					id: 4
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}, {
					title: '情节',
					id: 5
				}],
				transShow: 'a',
				modalName: null,
				modeClass: ['fade'],
				transfromClass: {
					'position': 'fixed',
					'bottom': 0,
					'top': 0,
					'left': 0,
					'right': 0,
					'width': '750upx',
					'height': '100vh',
					'backgroundColor': 'white',
					/* #ifndef APP-NVUE */
					'display': 'flex',
					/* #endif */
				},
				//  数据
				imgList: [],
				// 日期选择
				footShow: true,
				// startDate: '2020年4月23日',
				// endDate: '2020年4月24日',
				switchB: false,
				radio: '',
				dateSelections: ['工作一天', '工作多天'],
				showCaledar: 'a',
				dateStr: '',
				// 表单数据
				postData: {},
				latitude: '',
				longitude: '',
				address: '',

				step: 1,
				title: '',
				type: '',
				time: '',
				detail: '',
			};
		},
		onShow() {
			this.postData = this.postParttimejobPersonal
			console.log(this.postData);
			this.SetTime()
			
		},
		components: {
			// calendar, uniCalendar
		},
		methods:{
			...mapActions(['SETSTATE']),
			GoCalendar(){
				uni.navigateTo({
					url: 'post-date/post-date'
				})
			},
			ShowType(){
				this.modalName = 'viewModal'
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			ChooseType(index){
				this.postData.typeId = this.typeList[index].id
				this.postData.typeTitle = this.typeList[index].title
				this.modalName = null
				
				// this.transShow = true
			},
			change(){},
			onTap(){
				this.transShow = false
			},
			changeMarker(){
				// this.transMarkerShow = false
			},
			NexStep(){
				if(this.postData.title == '' || this.postData.title.length < 2){
					uni.showToast({
						icon: 'none',
						title: '请输入2到10字标题'
					})
				} else if (this.postData.typeId == ''){
					uni.showToast({
						icon: 'none',
						title: '请选择类别'
					})
				} else if (this.latitude == ''){
					uni.showToast({
						icon: 'none',
						title: '请选择地址'
					})
				} else if (this.postData.date == '' && this.postData.dateStatus == false ){
					uni.showToast({
						icon: 'none',
						title: '请重新选择日期'
					})
				} else if (typeof( this.postData.date) != 'object' && this.postData.dateStatus == true ){
					uni.showToast({
						icon: 'none',
						title: '请重新选择日期'
					})
				} else if (this.postData.detail == ''){
					uni.showToast({
						icon: 'none',
						title: '请输入任务详细描述'
					})
				} else if (this.postData.detail.trim().length < 20  ){
					uni.showToast({
						icon: 'none',
						title: '请输入20字以上细节描述'
					})
				} else {
					var location = {
						latitude: this.latitude,
						longitude: this.longitude,
						address: this.address
					}
					this.postData.location = location
					this.SETSTATE(this.postData)
					uni.navigateTo({
						url: '/pages/post-parttime-job/post-parttime-job-two/post-parttime-job-two'
					})
				}
				
			},
			ChooseLocation(){
				var that = this
				uni.chooseLocation({
					success(res) {
						that.latitude = res.latitude
						that.longitude = res.longitude
						that.address = res.name
					}
				})
			},
			ChooseImage() {
				var that = this
				uni.chooseImage({
					count: 8, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					// sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.postData.imgs.length != 0) {
							for(var i in res.tempFilePaths){
								if(this.postData.imgs.length < 8){
									this.postData.imgs.push(res.tempFilePaths[i])
								}
							}
						} else {
							this.postData.imgs = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.postData.imgs,
					current: e.currentTarget.dataset.url,
					indicator: true
				});
			},
			DelImg(index) {
				uni.showModal({
					title: '删除图片',
					content: '确定要删除这个图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.postData.imgs.splice(index, 1)
						}
					}
				})
			},
			CheckDetail(e){
				if(this.postData.detail.trim().length < 20 && this.postData.detail != '' ){
					uni.showToast({
						icon: 'none',
						title: '请至少输入20个字的零活描述'
					})
				}
			},
			SetTime(){
				if(this.postData.date == ''){
					var date = new Date()
					var year = date.getFullYear()
					var month = 1 + date.getMonth() < 10 ? 1 + date.getMonth() : 1 + date.getMonth()
					var showDate = month + '月'
					month = month < 10 ? 0 + '' + month : month
					var day = date.getDate()
					showDate = showDate + day + '日'
					var weeks = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
					var nowWeek = date.getDay()
					var week = weeks[nowWeek];
					this.postData.week = week
					this.postData.date = year + '-' + month + '-' + day
					this.postData.showDate = showDate
				} 
				
				// console.log(this.postData.date);
			},
			SwitchB(e){
				this.postData.dateStatus = e.detail.value
				this.postData.date = ""
			},
			RadioChange(e){
				this.radio = e.detail.value
				if(e.detail.value == '工作一天'){
					this.singleDate = true
				} else {
					this.singleDate = false
				}
				this.showCaledar = true
				this.hideModal()
			},
			ShowDate(){
				this.modalName = "RadioModal"
				
			},
			ChangeShowCalender(){
				this.showCaledar = 'b'
			},
			TellFather(data){
				this.footShow = !data
			},
			changeDate(e){
				this.showCaledar = 'a'
				if(this.postData.dateStatus == false){
					this.postData.date = e.choiceDate.year + '-' + e.choiceDate.month + '-' + e.choiceDate.day
				} else {
					this.postData.date = [e.choiceDate[0].year + '-' + e.choiceDate[0].month + '-' + e.choiceDate[0].day, e.choiceDate[1].year + '-' + e.choiceDate[1].month + '-' + e.choiceDate[1].day]
				}
			},
			CheckTitle(){
				if(this.title != '' && this.title.length<2){
					uni.showToast({
						icon: 'none',
						title: '标题至少输入两个字'
					})
				}
			},
			VoiceIn(){
				var that = this
				var options = {};
				uni.showModal({
					content: '点击 <确定> 后说出语音，无需长按或点击，说完后稍等会识别，部分手机长按键盘空格键也可以语音输入',
					success(res) {
						if(res.confirm){
							options.engine = 'iFly';
							options.punctuation = true; // 是否需要标点符号
							options.timeout = 10 * 1000;
							plus.speech.startRecognize(options, function(s) {
								that.postData.detail = that.postData.detail + s
								plus.speech.stopRecognize();
							});
						}
					}
				})
				
				
				
			},
			
		}
	}
</script>

<style lang="scss" scoped>	
.cu-form-group-page{
	display: flex;
	justify-content: space-between;
	padding-top: 20upx;
	padding-bottom: 20upx;
	width: 750upx;
	padding-left: 25upx;
	padding-right: 25upx;
	align-items: center;
	border-top: 1px solid #F5F5F5;
}

.cu-form-group-page input{
	border: 0;
	outline: none;
	font-size: 28upx;
}

.main{
	min-height: 100vh;
}

input:disabled{
	background-color: rgba(0,0,0,0);
}

.DrawerPage {
		position: fixed;
		width: 100vw;
		left: 0vw;
		transition: all 0.4s;
		min-height: 100vh
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		// box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-color: rgba(0,0,0,0.3);
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		z-index: 9999;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
