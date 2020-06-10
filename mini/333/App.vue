<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// #ifdef APP-NVUE
			plus.screen.lockOrientation('portrait-primary');

			let appid = plus.runtime.appid;
			if (appid && appid.toLocaleLowerCase() != "hbuilder") {
				uni.request({
					url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
					data: {
						appid: plus.runtime.appid,
						version: plus.runtime.version
					},
					success: (res) => {
						console.log('success', res);
						if (res.statusCode == 200 && res.data.isUpdate) {
							let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
							// 提醒用户更新
							uni.showModal({
								title: '更新提示',
								content: res.data.note ? res.data.note : '是否选择更新',
								success: (showResult) => {
									if (showResult.confirm) {
										plus.runtime.openURL(openUrl);
									}
								}
							})
						}
					}
				})
			}

			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "texticons",
				'src': "url('./static/text-icon.ttf')"
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifdef APP-PLUS-NVUE */
	
	
	@import "common/main.css";
	/* @import "colorui/icon.css"; */
	@font-face {
	  font-family: 'aliicon';  /* project id 1763742 */
	  src: url('https://at.alicdn.com/t/font_1763742_riiaazjyv9h.eot');
	  src: url('https://at.alicdn.com/t/font_1763742_riiaazjyv9h.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_1763742_riiaazjyv9h.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_1763742_riiaazjyv9h.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1763742_riiaazjyv9h.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_1763742_riiaazjyv9h.svg#aliicon') format('svg');
	}
	.aliicon {
	  font-family: "aliicon" !important;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	/* #endif */
</style>
