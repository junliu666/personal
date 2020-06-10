<template>
	<view class="main bg-white">
		<view class="cu-modal" :class="modalName=='divide'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar  justify-end">
					<view class="action" @tap="hideModal">
						<view class="content text-green">分成设置</view>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="flex align-center justify-center">
						<input type="number"  placeholder="请输入抽成比例" />
						<text>% (百分比)</text>
					</view>					
					<button @tap.stop="changeSort" data-name='distance' class="cu-btn round bg-main3 margin-top-sm">确定</button>
				</view>
			</view>
		</view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">店员管理</block></cu-custom>
		<view class="flex align-center justify-between margin-right-sm">
			<view class="">
				<view class="margin-left-sm text-gray margin-top" style="font-size: 30upx;">店员总数: 20人</view>
			</view>			
			<button class="cu-btn round bg-main2 margin-top"> <text class="cuIcon-add margin-right-sm"></text>新增店员</button>
		</view>
		
		<view class=" margin-left-sm margin-top-sm" style="width: 700upx;" v-for="(item, index) in 5" :key="index">
			<view class="flex justify-between" style="width: 100%;">
				<text>店员姓名</text>
				<text>13112556785</text>
				<text>2020-12-01</text>
			</view>
			<view class="flex justify-end margin-top-sm">
				<button class="cu-btn sm bg-main3 round">辞退店员</button>
			</view>
			<view class="divide-line margin-top-xs"></view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				modalName: null
			};
		},
		methods:{
			hideModal(){
				this.modalName = null
			},
			showDivide(){
				this.modalName = 'divide'
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh;}
</style>
