<template>
	<view style="height: 100vh;">
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content">好评率80%</block>
			<view class="" slot="right">
			</view>
		</cu-custom>
		<view class=" bg-main padding-sm" :style="NavStyle" >
			<view  class="flex align-center" style="width: 100%; ">
				<view @click="ChangeNav(index)" :class=" index == tabCur ? 'text-center text-xlg text-bold' : 'text-center text-lg'" :style="'width:' + 100/nav.length + 'vw'" :key="index" v-for="(item, index) in nav">
					{{ item }}
				</view>
			</view>
			<view class="round bg-white margin-top-xs" :style="'transform:translateX(' + ((710/ (2 * nav.length)) * (2 * (tabCur+1) - 1) - 23 )  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'">
			</view>
		</view>

		<view class="" @touchstart="touchstart" @touchend="touchend" style="">
		<view class="" style="height: 105upx;">
			
		</view>
		<!-- 发布 -->
		<view v-if="tabCur == 0" :class="index == -1 ? 'padding-tb bg-white' : 'bg-white margin-bottom padding-tb'" style="width: 100%;" v-for="(item,index) in 10" :key="index">
			<view class="" style="width: 680upx; margin-left: 35upx;">
				<view class="flex  align-center justify-between" style="width: 100%;">
					<view class="flex align-center">
						<image style="width: 80upx; height: 80upx;" class="round margin-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
						<view class="flex flex-direction">
							<text class="text-gray text-sm">2020年4月5日</text>
							<text>我是我自己</text>
						</view>
					</view>
					<view class="flex align-center    text-sub-main ">
						<text class="aliicon text-lg margin-right-xs">&#xe643;</text> 
						好评
					</view>
				</view>
				<view class="radius margin-top-sm padding-sm bg-white " style="box-shadow: 0  0  10upx 5upx rgba(0,0,0,0.1);width: 100%;">
					<view class="flex justify-between" style="width: 100%;">
						<text class="text-blank">发布标题发布标题发布</text>
						<text class="text-main text-bold">300元/完工结</text>
					</view>
				</view>
				<view class=" margin-top-sm" style="line-height: 2; width: 100%;">
					<text v-if="comment.length == 0" >无评价内容</text>
					<text v-if="comment.length < 50 && comment.length > 0" >{{ comment }}</text>
					<text v-if="comment.length > 50 && showAll != index" >{{ comment.slice(0, 50) }}</text>
					<text @click="ShowAll(index)" v-if="comment.length > 50 && showAll != index" class="text-main margin-left-sm">展开</text>
					<text v-if="comment.length > 50 && showAll == index" class="">{{ comment }}</text>
				</view>
				<view style="padding: 0;" v-if="commentData.imgs.length != 0"   class="cu-form-group margin-top-sm">
					<view class="grid col-4 grid-square flex-sub" >
						<view  class="bg-img" v-for="(item,index) in commentData.imgs" :key="index" @tap="ViewImage" :data-url="commentData.imgs[index]">
						 <image  :src="commentData.imgs[index]" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 接活 -->
		<view v-if="tabCur == 1" :class="index == -1 ? 'padding-tb bg-white' : 'bg-white margin-bottom padding-tb'" style="width: 100%;" v-for="(item,index) in 10" :key="index">
			<view class="" style="width: 680upx; margin-left: 35upx;">
				<view class="flex  align-center justify-between" style="width: 100%;">
					<view class="text-black">
						2020年5月3日
					</view>
					<view class="flex align-center text-sub-main ">
						<text class="aliicon text-lg margin-right-xs">&#xe643;</text> 
						好评
					</view>
				</view>
				<view class="radius margin-top-sm padding-sm  shadow" style="box-shadow: 0  0  10upx 5upx rgba(0,0,0,0.1); width: 100%;">
					<view class="flex justify-between" style="width: 100%;">
						<text class="text-blank">发布标题发布标题发布</text>
						<text class="text-main text-bold">300元/完工结</text>
					</view>
					<view class="flex  align-center margin-top-sm" style="width: 100%;">
						<image style="width: 80upx; height: 80upx;" class="round margin-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg" mode=""></image>
						<view class="flex flex-direction">
							<text class="text-gray text-sm">{{ index % 2 == 0 ? '个人发布者' : '阿里巴巴' }}</text>
							<text>我是一个发布者{{ index % 2 == 0 ? '' : '·HR' }}</text>
						</view>
					</view>
				</view>
				<view class=" margin-top-sm" style="line-height: 2; width: 100%;">
					<text v-if="comment.length < 50" >{{ comment }}</text>
					<text v-if="comment.length > 50 && showAll != index" >{{ comment.slice(0, 50) }}</text>
					<text @click="ShowAll(index)" v-if="comment.length > 50 && showAll != index" class="text-main margin-left-sm">展开</text>
					<text v-if="comment.length > 50 && showAll == index" class="">{{ comment }}</text>
				</view>
				<view style="padding: 0;" v-if="commentData.imgs.length != 0"   class="cu-form-group margin-top-sm">
					<view class="grid col-4 grid-square flex-sub" >
						<view  class="bg-img" v-for="(item,index) in commentData.imgs" :key="index" @tap="ViewImage" :data-url="commentData.imgs[index]">
						 <image  :src="commentData.imgs[index]" mode="aspectFill"></image>
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
		onReachBottom() {
			console.log(123);
		},
		data() {
			return {
				commentData: {
					imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg']
				},
				showAll: -1,
				comment: '这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价，这是用户评价用户评价这是用户评价用户评价，这是用户评价用户评价',
				postList: [{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123},{title: '123', price: 123}, {title: '123', price: 123}],
				takeList: [{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321},{title: '312', price: 312}, {title: '321', price: 321}],
				nav: ["我的发布", "我的接单"],
				tabCur: 0,
				startClientX: '',
			}
		},
		components:{},
		computed: {
			NavStyle(){
				var CustomBar = this.CustomBar
				var NavStyle = `z-index: 999; position: fixed; top: ${CustomBar}px; left: 0; right: 0;  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);`
				return NavStyle
			},
			divStyle(){
				var CustomBar = this.CustomBar
				var divStyle = `height: ${CustomBar}px`
				return divStyle
			},
		},
		methods: {
			ViewImage(){
				uni.previewImage({
					urls: this.commentData.imgs,
					current: e.currentTarget.dataset.url,
					indicator: true
				});
			},
			ShowAll(index){
				this.showAll = index
			},
			scrolltolower(e){
				console.log(e);
			},
			ChangeNav(data){
				this.tabCur = data
				uni.pageScrollTo({
					duration: 0,
					scrollTop: 0
				})
			},
			ViewDetailTake(){
				uni.navigateTo({
					url: '../doing-parttimejob-detail/doing-parttimejob-detail'
				})
			},
			ViewDetailPost(){
				uni.navigateTo({
					url: '../doing-parttimejob-poster-detail/doing-parttimejob-poster-detail'
				})
			},
			touchstart(e){
				this.startClientX = e.changedTouches[0].clientX;
			},
			touchend(e){
				if(this.tabCur == 0 && e.changedTouches[0].clientX - this.startClientX < -100){
					
					this.tabCur = 1
					
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 0
					})
				} else if(this.tabCur == 1 && e.changedTouches[0].clientX - this.startClientX > 100){
					this.tabCur = 0
					
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 0
					})
				}
				
			},
		}
	}
</script>

<style>

</style>
