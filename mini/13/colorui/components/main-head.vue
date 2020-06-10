<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar-main fixed flex align-center" :style="style" :topic="topic" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="ShowSlide" v-if="isBack" >
					<view class="text-sm  flex flex-direction justify-center align-center" style="color: #72b9ea">
						<slot name="logImg">
						</slot>
					</view>
					<slot name="backText"></slot>
				</view>
				<view class="margin-left" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<view class="flex justify-between align-center" style="width: 330upx;" >
					<view class="text-center text-cut" style="width: 150upx; ">
						<slot name="other"></slot>
					</view>
					
					<slot name="location"></slot>
				</view>
			</view>
		</view>
		
		<!-- 抽屉 -->
		<view  class="cu-modal drawer-modal justify-start " style="z-index: 9999; " :class="modalName=='DrawerModalL'?'show':''" @tap="hideModal">
				<view   @click.stop="" scroll-y style=" overflow: auto; overflow-y: scroll;"  class=" cu-dialog basis-lg"  :style="[{top:0+'px',height:'100vh', width: '60vw'}]">
					<view    >
						<view class="" :style="[{height: StatusBar + 'px', width: '60vw'}]">
							
						</view>
						
						<view class="" v-if="UserInfo == undefined">
							<view  class="margin-top flex flex-direction align-start " style="width: 80vw; margin-left: 5vw;">
								<text class="text-bold" style="font-size: 36upx;">登录享优贤</text>
							</view>
							<view class="text-gray text-sm" style="margin-left: 5vw; width: 60vw;;"></view>
							<view class="margin-top" style="width: 60vw; margin-left: 5vw;">
								<button @click="GoLogin" class="cu-btn round bg-main" style="width: 100%;">登录 / 注册</button>
							</view>
							<view class="flex justify-between padding-tb align-center" style="border-bottom: 1px solid #F0F0F0; width: 70vw ">
								<text class="text-main" style="margin-left: 5vw;">了解兼职招工信用生态</text>
								<text class="cuIcon-right" style="margin-right: 5vw;"></text>
							</view>
						</view>
						
						<view class="" v-if="UserInfo != undefined">
							<view class="margin-top flex justify-between align-start" style="width: 60vw; margin-left: 5vw;">
								<image class="round bg-main" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2508337205,2072470190&fm=26&gp=0.jpg" style="height: 120upx; width: 120upx;" mode=""></image>
								<view class="flex align-center">
									<view @click="GoWallet" class="padding-sm  margin-right">
										<image style="width: 40upx; height: 40upx;" src="../../static/mine/wallet.png" class=" " mode=""></image>
									</view>
									<view @click="GoSetting" class="padding-sm ">
										<image  style="width: 45upx; height: 40upx;" src="../../static/mine/setting.png" class=" " mode=""></image>
									</view>
									
								</view>
							</view>
							<view class="text-gray text-sm text-left" style="margin-left: 5vw; width: 60vw;;">ID: 3542661</view>
							<view class="text-gray text-sm text-left" style="margin-left: 5vw; width: 60vw;;">昵称或姓名</view>
							<view class="margin-top " style="height: 30upx; background-color: #F0F0F0;">
								
							</view>
							<view class="flex align-center justify-between shadow padding-tb"  style="width: 60vw; margin-left: 5vw; border-bottom: 30px   #f0f0f0;">
								<view class="flex align-end ">
									<text class="text-bold text-main">信用等级5</text>
									<text class="text-sm text-gray margin-left">已实名认证</text>
								</view>
								<text class="cuIcon-right"></text>
							</view>
							<view class=" " style="height: 30upx; background-color: #F0F0F0;">
								
							</view>
							<view  class="padding-tb-sm " style="width: 60vw; margin-left: 5vw;">
								<view class="flex align-center justify-between" style="width: 100%;">
									<text>我的发布</text>
									<view @click="GoPost(0)" class="flex align-center padding-tb-sm">
										<text class="text-gray text-sm">查看全部</text>
										<text class="cuIcon-right margin-left-sm text-gray text-sm"></text>
									</view>
								</view>
								<view  class="flex flex-wrap  margin-top-sm" style="width: 100%;">
									<view @click="GoPost(1)"  class="flex flex-direction padding-tb-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe656;</text>
										<text class="margin-top-xs text-sm">待预付</text>
									</view>
									<view @click="GoPost(2)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe616;</text>
										<text class="margin-top-xs text-sm">待择优</text>
									</view>
									<view @click="GoPost(3)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe79c;</text>
										<text class="margin-top-xs text-sm">待开始</text>
									</view>
									<view @click="GoPost(4)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe614;</text>
										<text class="margin-top-xs text-sm">待完成</text>
									</view>
									<view @click="GoPost(5)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe628;</text>
										<text class="margin-top-xs text-sm">待尾款</text>
									</view>
									<view @click="GoPost(6)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe621;</text>
										<text class="margin-top-xs text-sm">待评价</text>
									</view>
									<view @click="GoPost(7)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe615;</text>
										<text class="margin-top-xs text-sm">退款</text>
									</view>
								</view>
								
							</view>
							
							<view class="" style="width: 100%; border-bottom: 1px solid #F0F0F0;">
								
							</view>
							<!-- 接活 -->
							<view  class="padding-tb-sm " style="width: 60vw; margin-left: 5vw;">
								<view class="flex align-center justify-between" style="width: 100%;">
									<text>我的接活</text>
									<view @click="GoTake(0)" class="flex align-center padding-tb-sm">
										<text class="text-gray text-sm">查看全部</text>
										<text class="cuIcon-right margin-left-sm text-gray text-sm"></text>
									</view>
								</view>
								<view class="flex flex-wrap  margin-top-sm" style="width: 100%;">
									<view @click="GoTake(1)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe79c;</text>
										<text class="margin-top-xs text-sm">待开始</text>
										
									</view>
									<view @click="GoTake(2)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe614;</text>
										<text class="margin-top-xs text-sm">待完成</text>
									</view>
									<view @click="GoTake(3)" class="flex flex-direction padding-sm align-center" style="width: 25% ; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe628;</text>
										<text class="margin-top-xs text-sm">待尾款</text>
									</view>
									<view @click="GoTake(4)" class="flex flex-direction padding-sm align-center" style="width: 25%; color:  #5d5d5d; position: relative;">
										<view @click.stop="" class="badge sm bg-sub-main cu-tag" style="">
											20
										</view>
										<text class="aliicon" style="font-size: 40upx;">&#xe621;</text>
										<text class="margin-top-xs text-sm">待评价</text>
									</view>
								</view>
								
							</view>
							
							<!-- <view  class="padding-tb flex flex-row align-center justify-between" style="width: 60vw; margin-left: 5vw;">
								<view @click="GoPost" class="flex flex-direction align-center">
									<text style="color: #737373;" class="text-bold">0</text>
									<text style="color: #737373;" class="margin-top text-sm">发布</text>
								</view>
								<view @click="GoTake" class="flex flex-direction align-center">
									<text style="color: #737373;" class="text-bold">0</text>
									<text style="color: #737373;" class="margin-top text-sm">接活</text>
								</view>
								<view @click="GoDoing" class="flex  flex-direction align-center">
									<text style="color: #737373;" class="text-bold">0</text>
									<text style="color: #737373;" class="margin-top text-sm">进行中</text>
								</view>
								<view  @click="GoCollect" class="flex flex-direction align-center">
									<text style="color: #737373;" class="text-bold">0</text>
									<text style="color: #737373;" class="margin-top text-sm">收藏</text>
								</view>
							</view> -->
				
						</view>
						
						<view class="" style="width: 100%; border-bottom: 1px solid #F0F0F0;">
							
						</view>
					
					
					
					
					
					
						<view @click="ChooseNav(index)" class="flex align-center padding-tb-sm drawer-nav" v-for="(item,index) in drawListTop"  style="width: 100%;">
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title != focusTarget" :src="item.icon" mode=""></image>
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title == focusTarget" :src="item.iconFocus" mode=""></image>
							<text>{{ item.title }}</text>
						</view>
						<view class="" style="width: 100%; border-bottom: 1px solid #F0F0F0;">
							
						</view>
						<view @click="ChooseNavB(index)" class="flex align-center padding-tb-sm drawer-nav" v-for="(item,index) in drawList"  style="width: 100%;">
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title != focusTarget" :src="item.icon" mode=""></image>
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title == focusTarget" :src="item.iconFocus" mode=""></image>
							<text >{{ item.title }}</text>
						</view>
						
						<view class="" style="width: 100%; border-bottom: 1px solid #F0F0F0;">
							
						</view>
						<view v-if="UserInfo == undefined && item.title == '客服中心'" @click="ChooseNavC(index)" class="flex align-center padding-tb-sm drawer-nav" v-for="(item,index) in drawListBottom"  style="width: 100%; ">
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title != focusTarget" :src="item.icon" mode=""></image>
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title == focusTarget" :src="item.iconFocus" mode=""></image>
							<text >{{ item.title }}</text>
						</view>
						<view v-if="UserInfo != undefined" @click="ChooseNavC(index)" class="flex align-center padding-tb-sm drawer-nav" v-for="(item,index) in drawListBottom"  style="width: 100%; ">
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title != focusTarget" :src="item.icon" mode=""></image>
							<image class="margin-right margin-left" style="width: 50upx; height: 50upx;" v-if="item.title == focusTarget" :src="item.iconFocus" mode=""></image>
							<text >{{ item.title }}</text>
						</view>
						<view class="" style="height: 50upx;">
							
						</view>
					</view>
				</view>			
		</view>
<!-- 		<uni-drawer   :visible="drawerShow" mode="right">
		        <view class="drawer-mask" @touchmove.stop.prevent = "">
		          <view class="drawer-content">
		            <view>
		              <Subtitle msg="测试测试" />
		            </view>
		            <view class="dept-content">
		            </view>
		            <view class="dept-btns">
		            </view>
		          </view>
		        </view>
		      </uni-drawer> -->

	</view>
</template>

<script>
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	
	
	export default {
		data() {
			return {
				drawerShow: false,
				showLeft: false,
				focusTarget: '',
				drawListTop: [{
					title: '我的主页',
					icon: '/static/mine/personla.png',
					iconFocus: '/static/mine/personla-focus.png',
					url: '../../pages/personal/pages/my-home/my-home'
				},{
					title: '我的投递',
					icon: '/static/mine/desire.png',
					iconFocus: '/static/mine/desire-focus.png',
					url: '../../pages/personal/pages/my-desire/my-desire'
				},{
					title: '我的评价',
					icon: '/static/mine/comment.png',
					iconFocus: '/static/mine/comment-focus.png',
					url: '../../pages/personal/pages/my-comment/my-comment'
				},{
					title: '我的收藏',
					icon: '/static/mine/comment.png',
					iconFocus: '/static/mine/comment-focus.png',
					url: '../../pages/personal/pages/my-collect/my-collect'
				}],
				drawList: [ {
					title: '邀请码',
					icon: '/static/mine/qrcode.png',
					iconFocus: '/static/mine/qrcode-focus.png',
					url: '../../pages/personal/pages/invite-qrcode/invite-qrcode'
				}, {
					title: '好友列表',
					icon: '/static/mine/friend.png',
					iconFocus: '/static/mine/friend-focus.png',
					url: '../../pages/personal/pages/my-friend/my-friend'
				}, {
					title: '浏览记录',
					icon: '/static/mine/his.png',
					iconFocus: '/static/mine/his-focus.png',
					url: '../../pages/personal/pages/my-history/my-history'
				}],
				drawListBottom: [
					{
						title: '切换身份',
						icon: '/static/mine/switch.png',
						iconFocus: '/static/mine/swtich-focus.png',
						url: '../../pages/personal/pages/my-switch/my-switch'
					}, {
						title: '客服中心',
						icon: '/static/mine/service.png',
						iconFocus: '/static/mine/service-focus.png',
						url: '../../pages/personal/pages/my-service/my-service'
					}, {
						title: '意见反馈',
						icon: '/static/mine/advice.png',
						iconFocus: '/static/mine/advice-focus.png',
						url: '../../pages/personal/pages/my-advice/my-advice'
					}
				],
				modalName: null,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		
		components: {
			
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		mounted() {
			console.log(this.UserInfo);
		},
		props: {
			topic: {
				default: ""
			},
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			
			GoPost(data){
				uni.navigateTo({
					url: '../../pages/personal/pages/my-post/my-post?target=' + data
				})
			},
			GoTake(data){
				uni.navigateTo({
					url: '../../pages/personal/pages/my-take/my-take?target=' + data
				})
			},
			GoCollect(){
				uni.navigateTo({
					url: '../../pages/personal/pages/my-collect/my-collect'
				})
			},
			GoWallet(){
				this.modalName = null
				this.focusTarget = null
				this.$emit('ShowModal', false)
				uni.navigateTo({
					url: '../../pages/personal/pages/my-wallet/my-wallet'
				})
			},
			moveHandle(){
				console.log(123);
			},
			GoDoing(){
				this.modalName = null
				this.focusTarget = null
				this.$emit('ShowModal', false)
				uni.navigateTo({
					url: '../../pages/doing-parttimejob/doing-parttimejob'
				})
			},
			GoLogin(){
				this.modalName = null
				this.focusTarget = null
				this.$emit('ShowModal', false)
				uni.navigateTo({
					url: '../../pages/login/login'
				})
			},
			// 导航
			GoSetting(){
				this.modalName = null
				this.$emit('ShowModal', false)
				uni.navigateTo({
					url: '../../pages/personal/setting/setting'
				})
			},
			
			// Nav
			ChooseNavC(index){  // 底部 切换用户 客服中心 
				var that = this
				if(this.focusTarget != this.drawListBottom[index].title){
					this.focusTarget = this.drawListBottom[index].title
					that.modalName = null
					that.focusTarget = null
					this.$emit('ShowModal', false)
					uni.navigateTo({
						url: that.drawListBottom[index].url
					})
				}
			},
			ChooseNavB(index){ // 中间 邀请码 好友 浏览记录 
				var that = this
				if(this.focusTarget != this.drawList[index].title){
					this.focusTarget = this.drawList[index].title
					this.$emit('ShowModal', false)
					that.modalName = null
					that.focusTarget = null
					uni.navigateTo({
						url: that.drawList[index].url
					})
				}
			},
			ChooseNav(index){ // 头部 主页 简历
				var that = this
				if(this.focusTarget != this.drawListTop[index].title){
					this.focusTarget = this.drawListTop[index].title
					that.modalName = null
					that.focusTarget = null
					this.$emit('ShowModal', false)
					uni.navigateTo({
						url: that.drawListTop[index].url
					})
					
				}
			},
			ShowSlide() {
				this.$emit('ShowModal', true)
				this.modalName = 'DrawerModalL'
				
			},
			hideModal(){
				this.$emit('ShowModal', false)
				this.modalName = null
			},
			closeDrawer(e) {
				this.drawerShow = false
				this.$emit('ShowModal', false)
			},
		}
	}
</script>

<style lang="scss" scoped>
// .drawer-nav:active{
// 	background-color: #ececec;
// 	transition: 0.5s;
// 	color: #72b9ea;
// }
	.uni-drawer {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		z-index: 999;
	}

	.uni-drawer__content {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		position: absolute;
		top: 0;
		width: 220px;
		bottom: 0;
		background-color: #ffffff;
		transition: transform 0.3s ease;
	}

	.uni-drawer--left {
		left: 0;
		transform: translateX(-220px);
	}

	.uni-drawer--right {
		right: 0;
		transform: translateX(220px);
	}

	.uni-drawer__content--visible {
		transform: translateX(0px);
	}


	.uni-drawer__mask {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
		transition: opacity 0.3s;
	}

	.uni-drawer__mask--visible {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		opacity: 1;
	}
</style>
