<template>
	<view style="min-height: 100vh; background-color: white;">
		<cu-custom-firm bgColor="" :isBack="true">
			
			<block slot="backText">
				<text class="text-lg text-sub-main-firm"></text></block>
			<block slot="content"></block>
			<view slot="right" class="margin-right">
				<view class="round bg-main-firm flex flex-direction justify-center align-center align-center " style="width: 80upx; height: 80upx;">
					<text class="cuIcon-message" style="font-size: 45upx;"></text>
					<!-- <text class="text-sm">沟通一下</text> -->
				</view>
				<!-- <text class="cuIcon-search  margin-right-sm padding-sm" style="font-size: 40upx;"></text> -->
				<!-- <text class="cuIcon-roundadd padding-sm" style="font-size: 40upx;"></text> -->
			</view>
		</cu-custom-firm>
		<view class="" style="top:0 ; left:0; overflow: hidden; position: absolute; height: 50vh; border-bottom-left-radius: 125upx; width: 100vw;">
			<!-- <text class="cuIcon-back" style="z-index: 9999; font-size: 40upx; position: absolute; top: 80upx; left: 25upx;"></text> -->
			<image :src="userInfo.backImg == undefined || userInfo.backImg == null || userInfo.backImg == '' ? '/static/mine/bkc.jpg' : ''" mode="" style="width: 750upx; height: 50vh;"></image>
			
			<view class="  flex align-center justify-end" style="background-color: #efeff7; position: absolute; height: 150upx; bottom: 0upx; right: 0; border-top-left-radius: 150upx; width: 80%;">
				<view class=" justify-center flex flex-direction margin-right-lg">
					<view class="flex align-center">
						<text class="text-black text-lg ">这是一个昵称</text>
						<text class="cu-tag bg-main radius sm margin-left-sm">Lv. 5</text>
					</view>
					 
					<text class="margin-top text-grey cuIcon-location">北京 朝阳区</text>
				</view>
				<image :src="userInfo.avatar" class="round margin-right-sm" style="width: 140upx; height: 140upx;" mode=""></image>
			</view>
			
		</view>
		
		<view class="" style="height: 40vh; margin-top: 50upx;">
			
		</view>
		<scroll-view id="scroll"  scroll-x="true" class="  padding-tb-sm" style="white-space: nowrap; width: 100vw; z-index: 9999;">
			<view :id="'nav-'+index" @click="ChangeNav(index)" class=" " :class=" index == tabCur ? ' text-xlg text-bold text-main-firm' : 'text-lg text-sub-main-firm'" style="margin-left: 35upx; display: inline-block;" :key="index" v-for="(item, index) in nav">
				{{ item }}
			</view>
			<view class="round bg-main-firm margin-top-xs" :style="'transform:translateX(' + (preLength + scrollLeft )  + 'upx); width: 80upx; height: 10upx; transition: 0.5s'"></view>
			
		</scroll-view>
		<view class="padding-top flex justify-between align-center" style="margin-left: 35upx; width: 685upx;">
			<view class="flex align-end">
				<text class="text-lg ">
					<text style="font-size: 40upx;">个</text>人介绍
				</text>
				<text class="margin-left text-sm text-gray"></text>
			</view>
		</view>
		<view class="margin-top text-gray-main" style="width: 715upx; margin-left: 35upx; padding-bottom: 10upx;  padding-right: 35upx; ">
			<text style="margin-right: 35upx; ;">这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍这是一个个人介绍</text>
		</view>
		<view class="padding-top flex justify-between align-center" style="margin-left: 35upx; width: 685upx;">
			<view class="flex align-end">
				<text class="text-lg ">
					<text style="font-size: 40upx;">个</text>人照片
				</text>
				<text class="margin-left text-sm text-gray"></text>
			</view>
		</view>
		<scroll-view scroll-x="true"  class="margin-top" style="overflow-x: scroll; white-space: nowrap; overflow: hidden; width: 715upx; margin-left: 35upx; padding-bottom: 10upx;  padding-right: 35upx;">
			<image class="radius margin-right-sm" v-for="(item, index) in 10" style="display: inline-block; width: 120upx; height: 120upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
		</scroll-view>
		<view class="padding-top flex justify-between align-center" style="margin-left: 35upx; width: 685upx;">
			<view class="flex align-end">
				<text class="text-lg ">
					<text style="font-size: 40upx;">擅</text>长任务
				</text>
				<text class="margin-left text-sm text-gray"></text>
			</view>
		</view>
		<view class="margin-top flex flex-wrap text-gray-main" style="width: 715upx; margin-left: 35upx; padding-bottom: 10upx;  padding-right: 35upx;">
			<text class="margin-right" v-for="(item, index) in userInfo.parttime">{{ item.title }}</text>
		</view>
<!-- 		<view class="padding-top flex justify-between align-center" style="margin-left: 35upx; width: 685upx;">
			<view class="flex align-end">
				<text class="text-lg text-black text-bold">求职意向</text>
				<text class="margin-left text-sm text-gray">企业可见</text>
			</view>
			<text class="cuIcon-right text-gray"></text>
		</view>
		<view class="margin-top-sm flex flex-wrap" style="width: 685upx; margin-left: 35upx; padding-bottom: 10upx; border-bottom: 1px solid #F5F5F5; padding-right: 35upx;">
			<text class="margin-right" v-for="(item, index) in userInfo.fulltime">{{ item.title }}</text>
		</view> -->
		<view class="padding-top flex justify-between align-center" style="margin-left: 35upx; width: 685upx;">
			<view class="flex align-end">
				<text class="text-lg ">
					<text style="font-size: 40upx;">专</text>业技能
				</text>
				<text class="margin-left text-sm text-gray"></text>
			</view>
		</view>
		<view class="margin-top flex flex-wrap text-gray-main" style="width: 715upx; margin-left: 35upx; padding-bottom: 10upx;  padding-right: 35upx;">
			<text class="margin-right" v-for="(item, index) in userInfo.skills">{{ item.title }}</text>
		</view>
<!-- 		<view class="padding-top flex justify-between" style="width: 680upx; margin-left: 35upx">
			<view class="flex align-end">
				<text class="text-lg  ">是否展示发单记录</text>
				<text class="margin-left text-sm text-gray-main"></text>
			</view>
			<switch class="blue" @change="SwitchPost" :class="userInfo.showPost?'checked':''" :checked="userInfo.showPost?true:false"></switch>
		</view>
		<view class="padding-top flex justify-between" style="width: 680upx; margin-left: 35upx">
			<view class="flex align-end">
				<text class="text-lg  ">是否展示接单记录</text>
				<text class="margin-left text-sm text-gray"></text>
			</view>
			<switch class="blue" @change="SwitchTake" :class="userInfo.showTake?'checked':''" :checked="userInfo.showTake?true:false"></switch>
		</view> -->
		<view class="" style="height: 60upx;">
			
		</view>
<!-- 		<view class="padding-top flex justify-between" :style="userInfo.showResume ? 'width: 685upx; margin-left: 35upx;' : 'padding-bottom: 100upx;; width: 685upx; margin-left: 35upx;'  ">
			<view class="flex align-end">
				<text class="text-lg text-black text-bold">是否展示简历</text>
				<text class="margin-left text-sm text-gray">企业可见</text>
			</view>
			<switch class="blue" @change="SwitchA" :class="userInfo.showResume?'checked':''" :checked="userInfo.showResume?true:false"></switch>
		</view>
		<view class="flex justify-end margin-top" v-if="userInfo.showResume" :style="userInfo.showResume && userInfo.resumes != undefined && userInfo.resumes.length == 0  ? 'width: 715upx; padding-bottom: 100upx;' : 'width: 715upx; '">
			<button class="cu-btn round bg-main">选择简历</button>
		</view>
		<view class="" style="padding-bottom: 100upx;" v-if="userInfo.showResume">
			<view style="padding: 30upx; width: 685upx; margin-left: 35upx; border-radius: 20upx; box-shadow: 0 0 10upx 8upx #F5F5F5;" class=" margin-top flex justify-between align-center" v-for="(item,index) in userInfo.resumes" :key="index">
				<text>{{ item.title }}</text>
				<text class="cuIcon-right text-gray"></text>
			</view>
		</view> -->
		
	</view>
</template>

<script>

	export default {
		components:{
			
		},
		onReady(){
			var that = this
			const query = uni.createSelectorQuery().in(this)
			console.log(this.tabCur);
			uni.getSystemInfo({
				success(res) { 
					that.screenWidth = res.screenWidth
					that.scrollX = parseInt(that.tabCur) * 80 / (750 / that.screenWidth)
					query.select('#nav-' + that.tabCur).boundingClientRect(data => {
						// console.log(data.width);
						that.navLength = data.width * 750 / res.screenWidth 
						that.preLength = data.left * (750 / res.screenWidth) + ((data.width * 750 / res.screenWidth - 80) / 2)
					}).exec(() => {}); 
				}
			})
		},
		data() {
			return {
				scrollLeft: 0,
				preLength: 0,
				tabCur: 0,
				nav: ["用户信息",  "发布记录", "接单记录"],
				userInfo: {
					showTake: false,
					showPost: false,
					title: '',
					avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587747341903&di=9f29990b861524c2b87bd88bf05168b2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F24%2F20180824002213_altto.jpg',
					backImg: '',
					intro: '',
					showResume: false,
					resumes: [{
						title: '产品经历简历', id: 1
					}, {
						title: '产品经历简历', id: 2
					}, {
						title: '产品经历简历', id: 3
					}, {
						title: '产品经历简历', id: 4
					}],
					fulltime: [{
						title: '产品经理', id: 1
					}, {
						title: 'UI设计', id: 2
					}, {
						title: '前端开发', id: 3
					}],
					parttime:[{
						title: '搬运工', id: 1
					}, {
						title: '搬家', id: 2
					}, {
						title: '办公软件', id: 3
					}, {
						title: '家具安装', id: 4
					}],
					skills: [{
						title: '英语口语', id: 1
					}, {
						title: 'JAVA编程', id: 2
					}, {
						title: '办公软件', id: 3
					}, {
						title: '家具安装', id: 4
					} , {
						title: '家具安装', id: 4
					} , {
						title: '家具安装', id: 4
					}]
				}
			};
		},
		methods: {
			ChangeNav(data){
				var that = this
				
				this.tabCur = data
				that.scrollX = this.tabCur * 20 / (750 / that.screenWidth)
				this.SetNavLength(data)
				uni.pageScrollTo({
					duration: 0,
					scrollTop: 0
				})
			},
			SetNavLength(index){
				var that = this 
				this.$nextTick(function(){
					const query = uni.createSelectorQuery().in(this)
					uni.getSystemInfo({
						success(res) {
							query.select('#scroll').scrollOffset(data => {
								that.scrollLeft = data.scrollLeft * 750 / res.screenWidth
							})
							query.select('#nav-' + that.tabCur).boundingClientRect(data => {
								that.navLength = data.width * 750 / res.screenWidth
			
								that.preLength = data.left * (750 / res.screenWidth) + ((data.width * 750 / res.screenWidth - 80) / 2)
							}).exec(() => {});
						}
					})
				})
			},
			SwitchPost(){
				this.userInfo.showPost = !this.userInfo.showPost
			},
			SwitchTake(){
				this.userInfo.showTake = !this.userInfo.showTake
			},
			SwitchA(){
				this.userInfo.showResume = !this.userInfo.showResume
			},
			ChangeAvatar(){
				
			},
			ShowChnageName(){
				
			},
			Edit(){
				uni.navigateTo({
					url: 'my-home-edit/my-home-edit'
				})
			},
			upload() {
			    uni.chooseImage({
			        count: 1, //默认9
			        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
			        sourceType: ['album'], //从相册选择
			        success: (res) => {
			            
			        }
			    });
			},
		}
	}
</script>

<style lang="scss" scoped>
.meslist_canvas{position: fixed;top:0;width: 200px;height: 200px;visibility: hidden;}

</style>
