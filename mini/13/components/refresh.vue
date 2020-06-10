<template>
	<view class='refreshBox' :style="isTranform">
		<view class='refresh'  :class="isEnd==2?'animationSmall':''">
			<view class='refreshWord' v-if="isEnd == 0">
				<text style="font-size: 40upx;" :class="isTranf < 200 ? 'cuIcon-refresharrow text-lg text-bold' : 'cuIcon-refresh text-lg text-bold' "></text>
			</view>
			<view class='refreshCirle animation' v-if="isEnd == 1">
				<text style="font-size: 40upx;" class="cuIcon-refresh text-lg text-bold"></text>
			</view>
			<!-- <image class='iconYes' src='../static/icon-yes.png' v-if="isEnd==2"></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'refresh',
		props: {
			  isTop:{
				  type:Number,
				  default:1
			  }
		},
		data() {
			return {
				isTranf: 0,
				touchStart: '',
				touchMove: '',
				isEnd: 0
			};
		},
		
		methods: {
			refreshStart(e) {
				
				if (this.isEnd == 0 && this.isTop == 1) {
					this.touchStart = e.changedTouches[0].pageY
				}
			},
			refreshMove(e){
				if (this.isEnd == 0 && this.isTop == 1) {
					var touchStart = this.touchStart,
						oldMove = this.touchMove,
						newMove = e.changedTouches[0].pageY
						
					if (touchStart < newMove) {
						var isTranf = touchStart > newMove ? 0 : newMove - touchStart
						this.isTranf = isTranf
						this.touchMove = e.changedTouches[0].pageY
						// this.isEnd = 1
						// this.isEnd = newMove - touchStart < 200 ? 0 : 1
					}
				} else{
					this.isTranf = 0
					this.isEnd = 0
					this.touchStart = 9999
				}
			},
			refreshEnd(e) {
				var that = this
				console.log(this.isEnd);
				if (this.isEnd == 0 && this.isTop == 1) {
					if (this.isTranf >= 200) {
						this.isTranf = 200
						this.isEnd = 1
						this.$emit('isRefresh');
					} else {
						this.isTranf = 0
					}
				}
			},
			endAfter(){
				this.$emit("ChangeTop", 1)
				this.isEnd = 2
				this.isTranf = 0
				this.isEnd = 0
				// setTimeout(() => {
					
				// }, 600)
			}
		},
		computed: {
			isTranform() {
				var isTranf = this.isTranf > 200 ? 200 : this.isTranf
				var isTemp = `transform: translateY(${isTranf-100}px);`
				return isTemp
			},
			// isZoom() {
			// 	var isTranf = this.isTranf > 200 ? 200 : this.isTranf
			// 	var isTemp = `zoom:${isTranf/200};`
			// 	return isTemp
			// }
		}

	}
</script>

<style lang="scss">
	.refreshBox {
		margin:0 auto;
		width: 100%;
		height: 100upx;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 300upx;
		position: absolute;
		z-index: 99999;
		top: 0;
		left: 0;
		transform: translateY(-100upx);
	}

	// .animationSmall {
	// 	animation: small 1.1s both;
	// }

	@keyframes small {
		0% {
			transform: scale(1)
		}
		20%{
			transform: scale(1.4)
		}
		100% {
			transform: scale(0)
		}
	}
	.refreshWord{
		// width: 150upx;
		// height: 150upx;
		// font-size: 24upx;
		// line-height: 26upx;
		// text-align: center;
	}

	.refresh {
		width: 80upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80upx;
		background: #FFFFFF;
		box-shadow: 0 0 16upx 0 rgba(0, 0, 0, 0.10);
		border-radius: 9999upx;
	}

	.refreshCirle {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		// border: 6upx solid black;
		// border-bottom-color: transparent;
		// border-top-color: transparent;
	}

	// .animation {
	// 	animation: rotate 1.1s infinite;
	// 	animation-timing-function: cubic-bezier(0.3, 1.65, 0.7, -0.65);
	// }

	// @keyframes rotate {
	// 	0% {
	// 		transform: rotate(0deg);
	// 	}

	// 	100% {
	// 		transform: rotate(360deg);
	// 	}
	// }

	.true {
		color: black;
	}

	.iconYes {
		width: 34upx;
		height: 34upx;
	}
</style>
