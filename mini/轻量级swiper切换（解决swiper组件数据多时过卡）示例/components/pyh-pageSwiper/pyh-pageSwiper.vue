<template>
	<view class="pageSwiperBox">
		<view class="pageSwiper"
		:style="{
			width: swiperWidth + 'px',
			transform: 'translateX(' + (nowX + transX) + 'px)',
			transition: !dragging ? duration + 'ms' : 'none'
		}"
		@touchstart="touchStart"
		@touchmove="touchMove"
		@touchend="touchEnd"
		>
			<block v-if="swiperType=='lite'">
				<view class="pageSwiperItem" :style="{'width':screenWidth+'px','height':(i!=1?'100vh':'')}" v-for="(item,i) in 3" :key="i" v-show="!waitShow">
					<slot v-if="i==1"></slot>
					<view class="pyh-pageSwiperMask" v-show="i!=1" @touchstart.stop="returnFalse" @touchmove.stop.prevent="returnFalse" @touchend.stop="returnFalse">
						<view class="pyh-pageSwiperMask-text">
							<view class="loadRotate"></view>
							加载中...
						</view>
					</view>
				</view>
			</block>
			<block v-else-if="swiperType=='static'">
				<slot></slot>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name:"pageSwiper",
		props: {
			swiperType:{
				type: String,
				default: "lite"
			},
			dataLength: {
				type: Number,
				default: 1
			},
			initIndex: {
				type: Number,
				default: 0
			},
			duration: {
				type: Number,
				default: 200
			},
			height:{
				type: String,
				default: ""
			}
		},
		data () {
			return {
				swiperWidth: 3 * 375,
				screenWidth: 375,
				index:0,
				current: 1,
				nowX: 0,
				transX: 0,
				dragging: true,
				canMove: true,
				showLoading:true,
				waitShow:false,
				pageTop:0
			}
		},
		created() {
			if(this.dataLength<=1)this.canMove=false
			this.index=this.initIndex
			uni.getSystemInfo({
				success: res => {
					this.screenWidth = res.windowWidth;
					if(this.swiperType=='lite'){
						this.swiperWidth = 3*res.windowWidth
						this.nowX=-1*this.current*this.screenWidth
					}else if(this.swiperType=="static"){
						this.swiperWidth = this.dataLength*res.windowWidth
						this.current=this.index
						this.nowX=-1*this.index*this.screenWidth
					}
					this.dragging=false
					if(!this.height){
						var sQ = uni.createSelectorQuery().in(this);
						var getTop = setInterval(()=>{
							sQ.select(".pageSwiperBox").boundingClientRect(data => {
								if(data){
									clearInterval(getTop)
									this.pageTop = data.top;
								}
							}).exec();
						},100)
					}
				}
			})
		},
		methods: {
			returnFalse(){},
			swiperTap(){
				this.$emit("swiperTap",this.current)
			},
			swiperTo(index){
				this.dragging=false
				this.index=index
				if(this.swiperType=='lite'){
					this.$emit("swiperChange",index)
				}else if(this.swiperType=="static"){
					this.current=this.index
					this.nowX=-1*this.index*this.screenWidth
					this.$emit("swiperChange",index)
				}
				if(!this.height){
					uni.pageScrollTo({
						scrollTop:this.pageTop,
						duration:0
					})
				}
			},
			touchStart (e) {
				if (!this.canMove)return false;
				this.touchStartObj = e.mp.touches[0];
				this.moveObj=null
			},
			touchMove (e) {
				if (!this.canMove)return false;
				var moveObj = e.mp.touches[0];
				if(!this.moveObj){
					this.moveObj = moveObj
					if(Math.abs(this.moveObj.clientY - this.touchStartObj.clientY)<=5){
						this.dragging = true;
					}else{
						this.dragging = false;
						return false
					}
				}
				if(!this.dragging)return false
				var last = this.dataLength-1
				if(this.index==0&&moveObj.clientX - this.touchStartObj.clientX > 0){
					this.dragging=false
					return false
				}else if(this.index==last&&moveObj.clientX - this.touchStartObj.clientX < 0){
					this.dragging=false
					return false
				}
				this.transX = parseInt(moveObj.clientX - this.touchStartObj.clientX);
				if(moveObj.clientX<0||moveObj.clientX>this.screenWidth){
					this.touchEnd()
				}
			},
			touchEnd () {
				if (Math.abs(this.transX) > this.screenWidth / 4&&this.canMove&&this.dragging) {
					if (this.transX > 0) {
						this.nowX += this.screenWidth;
						this.current--;
					} else {
						this.nowX -= this.screenWidth;
						this.current++;
					}
					var transAdd = this.transX>0?false:true
					var index = transAdd?this.index+1:this.index-1
					this.transX = 0;
					this.dragging = false;
					this.canMove = false;
					setTimeout(() => {
						this.canMove = true;
						this.$emit("swiperChange",index)
						if(!this.height){
							uni.pageScrollTo({
								scrollTop:this.pageTop,
								duration:0
							})
						}
						if(this.swiperType=="lite"){
							this.waitShow=true
							this.dragging=true
							this.index=index
							this.current=1
						}else if(this.swiperType=='static'){
							if(transAdd){
								this.waitShow=true
								this.dragging=true
							}
							this.index=index
						}
						this.nowX=-1*this.current*this.screenWidth
						setTimeout(()=>{
							this.waitShow=false
							this.dragging=false
						},200)
					}, this.duration)	
				}else {
					this.transX = 0;
				}
			}
		}
	}
</script>

<style lang="scss">
.pageSwiperBox{
	width: 100%;
	overflow-x: hidden;
}
.pageSwiper{
	width: 100%;
	position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.pageSwiper-wrap{
	width: 100%;
	display: flex;
	align-items: flex-start;
	min-height: 100%;
}
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
