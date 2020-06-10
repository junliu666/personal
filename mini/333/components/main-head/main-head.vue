<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar-main fixed flex align-center" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
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
		props: {
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
			ShowSlide() {
				uni.navigateTo({
					url: '../../pages/login/login'
				})
			}
		}
	}
</script>

<style>

</style>
