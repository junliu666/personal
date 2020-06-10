<template>
	<view>
		<cu-custom bgColor="bg-main" :isBack="true"><text slot="backText" style="font-size: 30upx; margin-left: 20upx;"></text><block slot="content"></block><text slot="right"  class=" margin-right" style="padding: 20upx">联系客服</text></cu-custom>
		<view class="text-center bg-main" style="position: relative; width: 100%; height: 300upx;">
			<view class="text-bold" style="font-size: 42upx;">
				<text class="aliicon margin-right-sm">&#xe656;</text>等待预付
			</view>
			<view class="margin-top" style="font-size: 30upx;">
				任务编号 {{ orderDetail.id }}
				<text @click="CopyId" class="padding-sm aliicon margin-left-xs">&#xe800;</text>
			</view>
			
			<!-- 基本信息 -->
			<view class="padding-lg bg-white" style="position: absolute; left: 0; bottom: -200upx; border-radius: 35upx; width: 100%;">
				<view class="text-black  flex justify-between align-center"  style="width: 100%;">
					<text class="text-lg">{{ orderDetail.title }}</text> 
					<text class="text-gray">{{ orderDetail.type }}</text>
				</view>
				<view class="margin-top-xs text-black  flex align-center justify-between" style="width: 100%;">
					<text class="text-gray text-sm">{{ orderDetail.create_time }}</text>
				</view>
				<view class="margin-top text-black  flex align-center" style="width: 100%;">
					<text class="cuIcon-calendar margin-right-sm"></text>
					<text>任务时间 {{ orderDetail.startTime }} - {{ orderDetail.endDate }}</text>
				</view>
				<view class="margin-top-xs text-black  flex " style="width: 100%;">
					<text class="cuIcon-location margin-right-sm"></text>
					<text>{{ orderDetail.area}} · {{ orderDetail.address }}</text>
				</view>
			</view>
		</view>
		
		<!-- 任务描述 -->
		<view class="padding-lg bg-white" style="margin-top: 230upx; border-radius: 35upx; width: 100%;">
			<view class="  flex justify-between align-center"  style="width: 100%;">
				<text class="text-lg text-gray">任务描述</text> 
			</view>
			<view class="margin-top" style="width: 100%;">
				<text>{{ showAllDetail ? orderDetail.detail : orderDetail.detail.slice(0, 50) }}</text>
				<text v-if="!showAllDetail" @click="ShowAllDetail" class="margin-left-sm text-main">查看全部</text>
			</view>
			<view class="margin-top-xs flex flex-wrap justify-center" style="width: 100%;">
				<image class="margin-top-xs radius margin-right-sm" style="width: 120upx; height: 120upx;" v-for="(item, index) in orderDetail.imgs" :key="index" :src="item" mode=""></image>
			</view>
		</view>
		
		<!-- 任务要求 -->
		<view class="padding-lg bg-white margin-top" style="border-radius: 35upx; width: 100%;">
			<view class="  flex justify-between align-center"  style="width: 100%;">
				<text class="text-lg text-gray">任务要求</text> 
			</view>
			<view class="margin-top-xs text-black  flex align-center" style="width: 100%;">
				<text class="cuIcon-info margin-right-sm"></text>
				{{ orderDetail.creditRequire ? '有信用限制' : '无信用限制' }}
				<text class="cuIcon-friend margin-right-sm margin-left-login"></text>
				{{ orderDetail.friend ? '通知好友' : '不通知好友' }}
			</view>
			<view class="margin-top-xs text-black  flex flex-wrap" style="width: 100%;">
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
				<text style="margin:0; margin-right: 20upx; margin-top: 20upx;" class="cu-tag radius bg-gray">健康证</text>
			</view>
		</view>
		
		<!-- 任务费用 -->
		<view class="padding-lg bg-white margin-top" style=" border-radius: 35upx; width: 100%;">
			<view class="  flex justify-between align-center"  style="width: 100%;">
				<text class="text-lg text-gray">任务费用</text> 
			</view>
			<view class="margin-top justify-between  flex align-center" style="width: 100%;">
				<text class="text-gray">任务人数</text>
				<text class="text-black">{{ orderDetail.peopleNum }}人</text>
			</view>
			<view class="margin-top-xs justify-between  flex align-center" style="width: 100%;">
				<text class="text-gray">人均费用</text>
				<text class="text-black">{{ orderDetail.price }}元/{{ orderDetail.payType }}</text>
			</view>
			<view class="margin-top-xs justify-between  flex align-center" style="width: 100%;">
				<text class="text-gray">保险费用</text>
				<text class="text-black">{{ orderDetail.insurancePrice }}元</text>
			</view>
			<view class="margin-top-xs justify-between  flex align-center" style="padding-top: 10upx; border-top: 1px solid #F5F5F5; width: 100%;">
				<text class="text-gray">任务总费用</text>
				<text class="text-main text-lg text-bold">{{ orderDetail.totalPrice }}元</text>
			</view>
		</view>
		
		<!-- 任务保险 -->
		<view class="padding-lg bg-white margin-top" style=" border-radius: 35upx; width: 100%;">
			<view class="  flex justify-between align-center"  style="width: 100%;">
				<text class="text-lg text-gray">任务保险</text> 
			</view>
			<view v-if="!orderDetail.insurance" class="margin-top justify-between  flex align-center" style="width: 100%;">
				无商业险购买
			</view>
			<view class="" v-if="orderDetail.insurance">
				<view class="padding-tb justify-between  flex align-center" style="width: 100%; border-bottom: 1px solid #F5F5F5;">
					<text class="">第三方责任险·15元</text>
					<text class="text-lg text-gray cuIcon-right"></text>
				</view>
				<view class="padding-top justify-between  flex align-center" style="width: 100%;">
					<text class="">人身意外险·15元</text>
					<text class="text-lg text-gray cuIcon-right"></text>
				</view>
			</view>
		</view>
		<view class="" style="height: 130upx;">
			
		</view>
		<view  class="cu-bar tabbar bg-foot shadow foot" style="box-shadow: none;">
			<view class="flex align-center justify-end" data-cur="basics" style=" ; height: 100%; width: 100%;"> 
				<button @tap="NexStep"  class="cu-btn round line-gray margin-right-sm">取消任务</button>
				<button @tap="NexStep"  class="cu-btn round line-gray margin-right-sm">修改信息</button>
				<button @tap="NexStep"  class="cu-btn round bg-main margin-right-sm">支付费用</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderDetail: {
					id: '2106320153210',
					imgs: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587667119799&di=1300d3daab4c267aefa8cde10d471617&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F06%2F20180806101031_hZyjM.thumb.700_0.jpeg"],
					detail: "详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述详细任务描述",
					insurance: true,
					insurancePrice: 30,
					price: 20,
					friend: false,
					creditRequire: false,
					area: "西湖区",
					address: "这是一个详细的地址 非常的详细, 非常的详细非常的详细非常的详细非常",
					startTime: "2020年4月5日",
					endDate: "2020年5月5日",
					create_time: '2020年4月5日 10:00:00',
					title: '这是一个标题标题',
					price: '300',
					type: '修理工',
					payType: "完工结",
					peopleNum: 10,
					totalPrice: 300
				},
				showAllDetail: false
			};
		},
		methods: {
			CopyId(){
				uni.setClipboardData({
					data: this.orderDetail.id,
					success(res) {
						uni.showToast({
							icon: 'none',
							title: '已复制'
						})
					}
				})
			},
			ShowAllDetail(){
				this.showAllDetail = true
			},
			NexStep(){}
		}
	}
</script>

<style lang="scss">

</style>
