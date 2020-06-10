<template>
	<view>

		<jui-list @relist="relist" :dhList="list" :listHeight="listHeight" @navChange="navChange" :swList="swList"  >
			<!-- 写法要注意 -->	
			<view :id="'item'+i" :slot="'list'+i" v-for=" (x,i) in swList " :key="i" >
				<!-- 这里写你的业务 -->
				<view class="bg-gradual-index-row" v-if="i!=1"
				style="width: 750rpx;height: 1000rpx;"></view>
				
				<view class="bg-gradual-blue-sm" v-if="i==1"
				style="width: 750rpx;height: 1000rpx;"></view>	
				
			</view>									
						
		</jui-list>
		
	</view>
</template>


<script>
	// 判断页面是否触顶 ,0触顶,1没有触顶
	var top=0
	import juiList  from '@/components/jui-list/jui-list.vue';
	export default {
		components: {juiList},
		onReady() {	
			// 让swiper高度自适应
			this.getSwiper(0)
		},
		data() {
			return {
				listHeight:1000,
				list:["首页","小首页","呜呜呜呜","导航nav","导航nav","导航nav","导航nav"],
				// 俩个list 长度要一致
				swList:[1,2,3,4,5,6,7]
			}
		},
		methods: {
			// 改变nav时触发 e为当前nav的索引
			navChange(e){				
				this.getSwiper(e)
			},
			// 自适应swiper高度
			getSwiper(id){
				// 等待虚拟dom渲染
				this.$nextTick(()=>{
					var query=uni.createSelectorQuery()
					query.select('#item'+id).boundingClientRect(data => {
						// 给swiper高度
						this.listHeight=data.height
					
					}).exec();
				})
			},
			// 刷新
			relist(){
				// 这里写刷新业务
				setTimeout(()=>{
					// 收回下拉刷新
					uni.$emit("reMsg",-1)
				},2000)
			}
		}
	}
</script>




<style>

</style>
