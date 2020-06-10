<template>
	<view class="content">
		<image v-for="(logoSrc,i) in logoSrcs" :key="i" class="logo" :src="logoSrc"></image>
		<view>
			<button @click="inter(1)">活体检测</button>
			<button @click="inter(2)">人脸图像采集</button>
		</view>
		<view>
			默认静音(仅Android有效)
			<switch :checked="!isSound" @change="(e)=>{isSound=!e.target.value}" />
		</view>
		<view style="margin-top: 20rpx;">
			bestImage0默认截取脸部区域
			<switch :checked="AutoClip" @change="(e)=>{AutoClip=e.target.value}" />
		</view>
		<view style="margin-top: 20rpx;">
			后置摄像头
			<switch :checked="backCamera" @change="(e)=>{backCamera=e.target.value}" />
		</view>
		<scroll-view scroll-y="true">
			<view class="msg" v-html="msg">
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				msg: '',
				logoSrcs: ['/static/logo.png'],
				isSound: true,
				AutoClip: true,
				backCamera:false
			}
		},
		onLoad() {

		},
		methods: {
			inter(inx) {
				const _self = this;
				const PPFace = uni.requireNativePlugin('PP-BaiduFace');
				let config = {
					licenseName: 'idl-license',
					licenseSuffix: 'face-android',
					licenseId: 'test-0602-02-face-android',
					liveActionArray: ["Eye", "HeadLeft", "HeadLeftOrRight"],
					bgColor: "#56445D",
					textColor: "#C5E99B",
					isSound: _self.isSound, //默认是否开启语音提示（仅Android有效）默认值：false
					AutoClip: _self.AutoClip ,//自动裁剪用户脸部区域 默认：false
					isBackCamera:_self.backCamera //启用后置摄像头
				}

				if (plus.os.name == 'iOS') {
					config.licenseSuffix = 'face-ios';
					config.licensseId = 'test-0602-02-face-ios';
				}

				if (inx == 1) {
					PPFace.faceliveness(config, result => {
						_self.msg = new Date().getHours() + ':' + new Date().getMinutes() + '  ' + JSON.stringify(result) + '<br/>' +
							_self.msg;
						if (result.FaceStatusEnum == '"OK"') {
							_self.saveImgs(result.base64ImageMap);
						}
					});

				} else if (inx == 2) {
					PPFace.recycler(config, result => {
						_self.msg = new Date().getHours() + ':' + new Date().getMinutes() + '  ' + JSON.stringify(result) + '<br/>' +
							_self.msg;
						if (result.FaceStatusEnum == '"OK"') {
							_self.saveImgs(result.base64ImageMap);
						}
					});
				}

			},
			saveImgs(imgsobj) {
				let _self = this;
				_self.logoSrcs = [];
				for (let key in imgsobj) {
					var base64data = imgsobj[key];
					_self.bitmapsave(base64data);
				}
			},
			bitmapsave(basedata) {
				let _self = this;
				var bitmap = new plus.nativeObj.Bitmap("test");
				bitmap.loadBase64Data(basedata, function(e) {
					bitmap.save('_doc/_tmp/head' + new Date().getTime() + '.png', {}, function(e) {
						_self.logoSrcs.push(e.target);
					});
				}, function() {
					console.log('加载Base64图片数据失败：' + JSON.stringify(e));
				});
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 50upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.msg {
		text-align: left;
		padding: 40rpx;
		font-size: 25rpx;
		color: #F0AD4E;
	}
</style>
