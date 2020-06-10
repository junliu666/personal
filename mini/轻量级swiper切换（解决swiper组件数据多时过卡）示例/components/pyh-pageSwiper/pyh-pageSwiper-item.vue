<template>
	<view class="pageSwiperItem" :style="{'width':screenWidth+'px'}">
		<scroll-view scroll-y="true" v-if="height" :style="{'height':height}" @scrolltolower="upLoaderFun" @scroll="scrollFun" :scroll-top="scrollTop">
			<slot></slot>
			<view class="pyh-pageSwiperMask" v-show="showLoading" @touchstart.stop="returnFalse" @touchmove.stop.prevent="returnFalse" @touchend.stop="returnFalse">
				<view class="pyh-pageSwiperMask-text">
					<view class="loadRotate"></view>
					加载中...
				</view>
			</view>
		</scroll-view>
		<block v-else>
			<slot></slot>
			<view class="pyh-pageSwiperMask" v-show="showLoading" @touchstart.stop="returnFalse" @touchmove.stop.prevent="returnFalse" @touchend.stop="returnFalse">
				<view class="pyh-pageSwiperMask-text">
					<view class="loadRotate"></view>
					加载中...
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name:"pageSwiperItem",
		props: {
			index:{
				type: Number,
				default: 0
			},
			pageIndex:{
				type: Number,
				default: 0
			},
			height:{
				type: String,
				default: ""
			}
		},
		data () {
			return {
				screenWidth: 375,
				current:0,
				showLoading: true,
				reload:false,
				oldScrollTop:0,
				scrollTop:0
			}
		},
		watch:{
			index(index){
				this.current = index
				if(index==this.pageIndex){
					this.showLoading=false
				}else if(this.height){
					this.scrollTop = this.oldScrollTop
					this.$nextTick(function() {
						this.scrollTop = 0
					});
				}
			}
		},
		created() {
			uni.getSystemInfo({
				success: res => {
					this.screenWidth = res.windowWidth
					this.current = this.index
					if(this.index==this.pageIndex)this.showLoading=false
				}
			})
		},
		methods: {
			returnFalse(){},
			scrollFun(e){
				this.oldScrollTop = e.detail.scrollTop
			},
			upLoaderFun(){
				this.$emit("up",this.index)
			}
		}
	}
</script>

<style lang="scss">
.pageSwiperItem{
	overflow-x: hidden;
	width: 750rpx;
	position: relative;
}
.pyh-pageSwiperMask{
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background: #f8f8f8;
}
.pyh-pageSwiperMask-text{
	width: 750rpx;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
/* 旋转动画 */
.loadRotate {
	margin-right: 10rpx;
	display: inline-block;
	width: 32upx;
	height: 32upx;
	border-radius: 50%;
	border: 2upx solid #333;
	border-bottom-color: transparent;
	vertical-align: middle;
	-webkit-animation: loadRotate 0.6s linear infinite;
	animation: loadRotate 0.6s linear infinite;
}

@-webkit-keyframes loadRotate {
	0% {
		-webkit-transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes loadRotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
