<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar-main fixed flex align-center" :style="style">
				<view class="action flex " @tap="ShowSlide">
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
				CustomBar: this.CustomBar,
				style: null,
			};
		},

		name: 'cu-custom',
		computed: {
			// style() {
			// 	var StatusBar= this.StatusBar;
			// 	var CustomBar= this.CustomBar;
				
			// 	var bgImage = this.bgImage;
			// 	var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
			// 	if (this.bgImage) {
			// 		style = `${style}background-image:url(${bgImage});`;
			// 	}
			// 	return style
			// }
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			ShowSlide() {
				// uni.navigateTo({
				// 	url: '../../pages/login/login'
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
.cu-custom {
	display: block;
	position: relative;
}

.cu-bar-main{
	display: flex;
	position: relative;
	align-items: center;
	min-height: 100upx;
}

.cu-bar-main .action {
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: center;
	max-width: 100%;
}

.cu-bar-main .action.border-title {
	position: relative;
	top: -10upx;
}
</style>
