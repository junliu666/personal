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
		onLoad(options) {
			var pages = getCurrentPages()
			var currentPage = pages[pages.length-1]
			var url = currentPage.route
			
			uni.showLoading({
				title: '请稍等...'
			})
			Vue.prototype.MerchantId = options.scene == undefined ? 1 : options.scene
			uni.checkSession({
				success() {
					uni.getStorage({
						key: "Token",
						success(res) {
							if(res.data == undefined || res.data == '' || res.data == null){
								uni.reLaunch({
									url: '../index/index'
								})
							} else {
								Vue.prototype.Token = res.data
								uni.reLaunch({
									url: '../index/index'
								})
								
								
							}
						},
						fail(err) {
							uni.reLaunch({
								url: '../index/index'
							})
						}
					})
				}, fail() {
					uni.reLaunch({
						url: '../index/index'
					})
				}
			})
		}
	}
</script>

<style lang="scss">

</style>
