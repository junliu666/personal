<template>
	<view style="min-height: 100vh; background-color: white;">
		<cu-custom bgColor="bg-main" :isBack="true">
			<block slot="backText"></block><block slot="content"></block>
			<view class="" slot="right">
			</view>
		</cu-custom>
		
		
		
		<view class="flex align-center bg-main" style="width: 100%; height: 250upx; position: relative;">
			<view class="text-bold" style="font-size: 50upx ;position: absolute; width: 700upx; left: 25upx; top: 25upx">
				享优贤钱包
			</view>
			<view class=" bg-white padding " style="box-shadow: 0  0  10upx 5upx rgba(0,0,0,0.1); position: absolute; width: 700upx; left: 25upx; top: 125upx; height: 250upx; border-radius: 30upx;">
				<view class="flex align-center justify-between" style="width: 100%;">
					<text class="text-bold text-main" style="font-size: 45upx;">余额</text>
					<view class="flex align-end">
						<text class="cuIcon-qr_code padding-sm text-gray" style="font-size: 40upx;"></text>
						<text @click="GoBankCard" class="cuIcon-card padding-sm text-gray" style="font-size: 40upx;"></text>
					</view>
				</view>
				<view class="flex align-center justify-between margin-top-sm" style="width: 100%;">
					<text class="text-bold text-main" style="font-size: 45upx;"><i>10.00元</i></text>
					<button style="margin-top: 0; margin-left: 0; margin-bottom: 0;" class="cu-btn bg-main round margin-sm">提现</button>
				</view>
			</view>
		</view>
		<view class="" style="width: 100%;  padding-top: 155upx; background-color: #ffffff;">
			
		</view>
		<view style="font-size: 40upx; padding-top: 30upx;margin-left: 25upx; width: 700upx; background-color: #ffffff;" class="flex justify-between align-center text-bold">
			<text >交易记录</text>
			<text class="text-gray " style="font-size: 30upx;">2020年4月</text>
		</view>
		
		<view class="flex align-center justify-between" style="padding-bottom: 20upx; padding-top: 30upx; background-color: #ffffff; width: 750upx; padding-left: 25upx; padding-right: 25upx; ">
			<view class="flex align-center">
				<button :class="target == 0 ? 'cu-btn bg-main round margin-right' : 'margin-right cu-btn bg-gray round'">全部</button>
				<button :class="target == 1 ? 'cu-btn bg-main round margin-right' : 'margin-right cu-btn bg-gray round'">支出</button>
				<button :class="target == 2 ? 'cu-btn bg-main round margin-right' : 'margin-right cu-btn bg-gray round'">收入</button>
			</view>
			<picker fields="month" @change="bindPickerChange" :start="startDate" :end="endDate" mode="date" :value="index">
			    <image @click="ChooseDate" src="../../../../static/mine/calendar.png" style="width: 80upx; height: 80upx;" mode=""></image>
			</picker>
			
		</view>
		<view style="padding-top: 10upx; width: 700upx; margin-left: 25upx; background-color: #ffffff;" class="flex justify-end">
			<view class="flex flex-direction text-gray">
				<view class="">
					收入 <text  class=" text-price">10.00</text>
				</view>
				<view class="">
					支出 <text  class=" text-price">20.00</text>
				</view>
			</view>
			
		</view>
		<view class="" style="width: 100%;">
			<view v-for="(item,index) in tradeList" :key="index">
				<view class="flex  padding-tb" style="width: 700upx; margin-left: 25upx;">
					<view :class=" item.type == 0 ? 'round bg-gray   flex align-center justify-center' : ' round bg-main  flex align-center justify-center'" style="width: 120upx; height: 120upx;">
						{{ item.type == 0 ? '出' : '入' }}
					</view>
					<view class="flex flex-direction justify-between " style="padding-bottom: 30upx; height: 150upx; margin-left: 30upx; width: 550upx; border-bottom: 1px solid #f5f5f5;">
						<view class="flex align-center justify-between" style="width: 100%;">
							<text>{{ item.title }}</text>
							<text :class="item.type == 0 ? 'text-bold':'text-main text-bold'" style="font-size: 40upx;"><i>{{ item.type == 0 ? '-':'+' }}{{ item.money }}元</i></text>
						</view>
						
						<text class="text-gray">{{ item.source }}</text>
						<text class="text-gray text-sm">{{ item.date }}</text>
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
				startDate: '',
				endDate: '',
				date: '123123',
				target: 0,
				tradeList: [{
					title: '任务标题任务标题任务',
					source: '支付宝',
					date: '2020-04-20 11:00',
					type: 0,
					money: 123
				}, {
					title: '任务标题任务标题任务',
					source: '提现到微信收款码',
					date: '2020-04-20 11:00',
					type: 1,
					money: 123
				}, {
					title: '任务标题任务标题任务',
					source: '提现到支付宝收款码',
					date: '2020-04-20 11:00',
					type: 1,
					money: 123
				}, {
					title: '充值享优贤会员',
					source: '微信支付',
					date: '2020-04-20 11:00',
					type: 0,
					money: 123
				}, {
					title: '任务标题任务标题任务',
					source: '微信支付',
					date: '2020-04-20 11:00',
					type: 0,
					money: 123
				}, {
					title: '任务标题任务标题任务',
					source: '提现到银行卡',
					date: '2020-04-20 11:00',
					type: 1,
					money: 123
				}]
			};
		},
		methods: {
			bindPickerChange(){
				
			},
			ChooseDate(){
				
			},
			GoBankCard(){
				uni.navigateTo({
					url: 'my-wallet-bankcard/my-wallet-bankcard'
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
