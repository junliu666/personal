<template>
	<view>
		<view class="tabs">
			<view :class="['tab',{'active':index==i}]" v-for="(b,i) in data" :key="i" @tap="tabTap" :data-index="i">{{b}}</view>
		</view>
		<view class="tabsSpace"></view>
		<pageSwiper ref="pageSwiper" :dataLength="data.length" :initIndex="index" @swiperChange="swiperChange" :height="psHeight">
			<view style="width: 100%;height: 500rpx;text-align: center;color: #fff;line-height: 500rpx;" :style="{'background':data[index]}">{{data[index]}}</view>
		</pageSwiper>
		<!-- <pageSwiper ref="pageSwiper" :dataLength="data.length" :initIndex="index" @swiperChange="swiperChange" swiperType="static" :height="psHeight">
			<pageSwiperItem @up="loadData" :pageIndex='pageIndex' :height="psHeight" :index="index" v-for="(item,pageIndex) in data" :key="pageIndex">
				<view style="height: 500px;text-align: center;color: #fff;line-height: 500px;" :style="[{'background':item,'height':pageIndex==1?'1000px':''}]">{{item}}</view>
			</pageSwiperItem>
		</pageSwiper> -->
	</view>
</template>

<script>
	import pageSwiper from '@/components/pyh-pageSwiper/pyh-pageSwiper.vue'
	import pageSwiperItem from '@/components/pyh-pageSwiper/pyh-pageSwiper-item.vue'
	export default {
		data() {
			return {
				data:[
					"red",
					"yellow",
					"green",
					"blue"
				],
				index:0
			}
		},
		components:{pageSwiper,pageSwiperItem},
		computed:{
			psHeight(){
				var sys = uni.getSystemInfoSync();
				return sys.safeArea.height-parseInt(80*sys.windowWidth/750)+'px'
			}
		},
		methods: {
			tabTap(e){
				this.$refs.pageSwiper.swiperTo(parseInt(e.currentTarget.dataset.index))
			},
			swiperChange(index){
				this.index=index
			},
			loadData(index){
				console.log(index);
			}
		}
	}
</script>

<style>
	.tabs{width: 100%;height: 80rpx;line-height: 80rpx;white-space: nowrap;align-items: center;display: flex;position: fixed;top: 0;z-index: 1;background: #fff;}
	.tabsSpace{height: 80rpx;}
	.tabs .tab{color: #999;padding: 0 20rpx;}
	.tabs .tab.active{color: #000;}
</style>
