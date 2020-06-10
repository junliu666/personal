<template>
	<view class="bg-white wrapper">
		<cu-custom bgColor="bg-black" :isBack="false" :mainPage="true"></block><block slot="content">预约管理</block></cu-custom>	
		
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation>
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tagList" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view class="flex align-center justify-between margin-right-sm">
			<view class="">
				<view class="margin-left-sm text-gray margin-top" style="font-size: 30upx;">数量: {{totalCount}}</view>
			</view>			
		</view>
		<view class=" margin-left-sm margin-top" style="width: 700upx;" v-for="(item, index) in orderList" :key="index">
			<view v-if="item.is_cancel == false" class="flex justify-between" style="width: 100%;">
				<text>服务项目：{{ item.project_info.title }}</text>
				<text>项目时间：{{ item.project_info.useTime }}</text>
			</view>
			<view v-if="item.is_cancel == false" class="flex justify-between margin-top-sm" style="width: 100%;">
				<text>{{ item.start_time.split(" ")[0] }}</text>
				<text>{{ item.start_time.split(" ")[1] }} - {{ item.end_time.split(" ")[1] }}</text>
			</view>
			<view v-if="item.is_cancel == false  && index != orderList.length - 1" class="divide-line margin-top-sm"></view>
		
			<view v-if="item.is_cancel == true" class="" style="width: 100%;">
				<text>预约时间：{{ item.create_time }}</text>
				<view v-if="item.is_cancel == true && index != orderList.length - 1" class="divide-line margin-top-sm"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['orderList', 'totalCount'],
		data() {
			return {
				TabCur: 0,
				tagList: ['服务完成', '预约取消']
			};
		},
		mounted() {
			console.log(this.$props.orderList);
		},
		methods:{
			tabSelect(e) {
				if(this.TabCur != e.currentTarget.dataset.id){
					this.TabCur = e.currentTarget.dataset.id;
					this.$emit("ChangeOrderStatus", parseInt(e.currentTarget.dataset.id) + 1)
				} else {
					
				}
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrapper{min-height: 100vh;}
</style>
