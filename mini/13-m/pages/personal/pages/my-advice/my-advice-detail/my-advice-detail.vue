<template>
	<view class="main bg-white">
		<cu-custom bgColor="bg-main" :isBack="true"><text slot="backText" style="font-size: 30upx; margin-left: 20upx;"></text><block slot="content">反馈回复</block><text slot="right"  @tap="" class="margin-right" style="padding: 20upx"></text></cu-custom>
		<view class=" padding-top" style="margin-left: 35upx;">
			<text class="  text-bold text-black text-lg">交易纠纷</text> 
		</view>
		<view class="" style="margin-left: 35upx; width: 680upx;">
			<text style="width: 100%;">
				的发生地话费的发生地话费卡手机电话费金卡大师傅艰苦的发生地话费卡手机电话费金卡大师傅艰苦的发生地话费卡手机电话费金卡大师傅艰苦的发生地话费卡手机电话费金卡大师傅艰苦卡手机电话费金卡大师傅艰苦
				
			</text>
		</view>
		<view class="cu-form-group margin-top-sm">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in AdviceData.imgs" :key="index" @tap="ViewImage" :data-url="AdviceData.imgs[index]">
				 <image :src="AdviceData.imgs[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" :data-index="index">
					</view>
				</view>
			</view>
		</view>
		
		<view class="margin-top" style="height: 30upx; background-color: #F5F5F5; ">
			
		</view>
		<view class=" padding-top" style="margin-left: 35upx;">
			<text class="  text-bold text-main text-lg">管理员回复</text> 
		</view>
		<view class="" style="margin-left: 35upx; width: 680upx;">
			<text style="width: 100%;">
				的发生地话费的发生地话费卡手机电话费金卡大师傅艰苦的发生地话费卡手机电话费金卡大师傅艰苦的发生地话费卡手机电话费金卡大师傅艰苦的发生地话费卡手机电话费金卡大师傅艰苦卡手机电话费金卡大师傅艰苦
				
			</text>
		</view>
		<view class="cu-form-group margin-top-sm">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in AdviceData.imgs" :key="index" @tap="ViewImage" :data-url="AdviceData.imgs[index]">
				 <image :src="AdviceData.imgs[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" :data-index="index">
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
				AdviceData: {
					imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587906243807&di=891a80e87b710d2a9fd82621667cc8be&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FzHWzcwd14Q0D4SDEtzKzygaAMbyUdIa3lLrOIO5gB_gru7nMSCtlSj7iGU77jW6uTYGVDmosZWTLal1WbWRW3A.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587906243807&di=891a80e87b710d2a9fd82621667cc8be&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FzHWzcwd14Q0D4SDEtzKzygaAMbyUdIa3lLrOIO5gB_gru7nMSCtlSj7iGU77jW6uTYGVDmosZWTLal1WbWRW3A.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587906243807&di=891a80e87b710d2a9fd82621667cc8be&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FzHWzcwd14Q0D4SDEtzKzygaAMbyUdIa3lLrOIO5gB_gru7nMSCtlSj7iGU77jW6uTYGVDmosZWTLal1WbWRW3A.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587906243807&di=891a80e87b710d2a9fd82621667cc8be&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FzHWzcwd14Q0D4SDEtzKzygaAMbyUdIa3lLrOIO5gB_gru7nMSCtlSj7iGU77jW6uTYGVDmosZWTLal1WbWRW3A.jpg']
				}
			}
		},
		onLoad() {
		},
		methods:{
			ViewImage(e) {
				uni.previewImage({
					urls: this.AdviceData.imgs,
					current: e.currentTarget.dataset.url,
					indicator: true
				});
			},
		},
	}
</script>

<style lang="scss">
.main{
	min-height: 100vh;
}
</style>
