<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">搜索技师</block></cu-custom>
		<view class="main bg-white">
			<view class="flex lg align-center cu-btn justify-around bg-main3 round margin-top" style="padding-left: 0; width: 80%; margin-left: 10%;">
				<text class="cuIcon-search" style="font-size: 40upx;" @tap="PickerChangeStatus"></text>
				<input @input="search" confirm-type="确认" class=" text-golg" style="font-size: 28upx; text-align: left;" placeholder="请输入要搜索的技师"  />
				<view class="">
				</view>
			</view>
			
			<view class="margin-left-sm margin-top">
				<view class="flex flex-wrap">
					<view v-for="(item,index) in 3" :key="index">
						<button class="cu-btn bg-gray round margin-top-sm margin-right-sm">
							<text class="cuIcon-searchlist"></text>
							{{ item + 1 }}号技师
						</button>
						
					</view>
				</view>
			</view>
			
			<view class="divide-line margin-top" style="width: 100%;">
				
			</view>
			
			<view class="margin-left-sm margin-top">
				<text class="cuIcon-title margin-right-xs"></text>最近搜索
				<view class="flex flex-wrap">
					<view v-for="(item,index) in 10" :key="index">
						<button class="cu-btn bg-gray round margin-top margin-right-sm">{{ item }}号技师</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusPicker: 0
			};
		},
		onLoad(){
			this.GetStaffInfo()
		},
		methods:{
			GetStaffInfo(){
				var that = this
			},
			search(){},
			PickerChangeStatus(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh;}
</style>
