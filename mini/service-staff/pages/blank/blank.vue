<template>
	<view>
		
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			log: function(){
			            var href = window.location.href
			            href = encodeURIComponent(href)
						window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx33e8017040b88d13&redirect_uri=" + href + "&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
			        },
			        auth: function(code){
			            var that = this
			            var data = {
			                code: code
			            }
						// alert(code)
						uni.request({
							data: {
								code: code
							},
							url: that.Server + 'staff/login',
							success(res) {
								if(res.data.code == 0){
									alert(JSON.stringify(res))
									Vue.prototype.Token = res.data.data.token
									uni.setStorageSync('StaffToken', res.data.data.token)
									uni.redirectTo({
										url: "../index/index"
									})
								} else {
									uni.showToast({
										title: '出错了,请重新进入',
										icon: 'none'
									});
								}
								//var re = JSON.parse(res)
							// 	alert(JSON.parse(res.data))
								// alert(JSON.parse(res.data.data))
								
							},
							fail(err) {
								var err = JSON.parse(err)
								//alert(err)
							}
						})
			        },
		},
		onLoad() {
			uni.showLoading({
				
			})
			var that = this
			// #ifdef H5
				/*
				        *  用户验证部分
				        */
					 //   Vue.prototype.Token = "ef1ebb07-e1a3-4371-abdc-9d866212a0c4"
						uni.setStorageSync('StaffToken', 'cafbbe68-c4e7-4fd0-8706-59cd48cc9399')
						// uni.clearStorageSync()
						var token = uni.getStorageSync('StaffToken')
						// alert(token)
				        if(token == null || token == undefined || token == ''){     // 如果 code 没有 那么就还是请求code然后获取token
				            var length = window.location.href.length
				            if(length > 50){
								var code = window.location.href
								code = code.split('?')[1]
								code = code.split('&')[0]
								code = code.split('=')[1]
				                that.auth(code)
				            } else {
				                that.log()
				            }
				        } else {         // 如果code有 那么就请求 token check 的接口
							// #ifdef H5
							// var qqLocation = new qq.maps.Geolocation("CYNBZ-3UYLP-HCXDC-L6YBO-YK2J3-FTBBQ", "xixih5");
							// qqLocation.getLocation((data) => {
							// 	console.log(data);
							// 	Vue.prototype.City = data.city;
							// 	Vue.prototype.Location = [data.lat, data.lng]					
							// })
							// #endif
				            Vue.prototype.Token = token
							uni.redirectTo({
								url: "../index/index"
							})
							// that.PageCur = 'home'
							
							//that.checkToken()
				        }
			// #endif
		}
	}
</script>

<style lang="scss">

</style>
