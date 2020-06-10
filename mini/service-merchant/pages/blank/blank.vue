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
			var that = this
			// console.log(options);
			// Vue.prototype.MerchantId = 1
			uni.showLoading({
				mask: true
			})
			uni.getStorage({
				key: "MerchantToken",
				success(res) {
					console.log(res);
					if(res.data == undefined || res.data == '' || res.data == null){
						uni.reLaunch({
							url: '../login/login'
						})
					} else {
						Vue.prototype.MerchantToken = res.data
						uni.reLaunch({
							url: '../index/index'
						})
					}
				},
				fail(err) {
					uni.reLaunch({
						url: '../login/login'
					})
				}
			})
			
		}
	}
</script>

<style lang="scss">

</style>
