<template>
	<view style="min-height: 100vh;">
		<view class="padding-sm" style="box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);">
			<view  class="flex align-center " style="width: 100%; ">
				<view @click="ChangeNav(index)" :class=" index == tabCur ? 'text-center text-lg text-bold' : 'text-center text-lg'" :style="'width:' + 100/nav.length + 'vw'" :key="index" v-for="(item, index) in nav">
					{{ item }}
				</view>
			</view>
			<view class="round bg-main margin-top-sm" :style="'transform:translateX(' + ((710/ (2 * nav.length)) * (2 * (tabCur+1) - 1) - 25 )  + 'upx); width: 50upx; height: 10upx; transition: 0.5s'">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nav: '',
			tabCur: ''
		},
		data() {
			return {
				
			};
		},
		methods: {
			ChangeNav(index){
				this.$emit('ChangeNav', index)
			},
		}
	}
</script>

<style lang="scss">

</style>
