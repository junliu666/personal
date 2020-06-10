<template>
	<view class="wrapper bg-white">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">预约技师</block></cu-custom>
		<view class="main">
			<view class="flex margin-left-sm margin-top margin-bottom">
				<button @click="changeBookStatus" :class=" bookStatus == 1 ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm'">
					已在店内
				</button>
				<button @click="changeBookStatusB" :class=" bookStatus == 0 ? 'cu-btn text-lg bg-main2 round margin-right-sm' : 'cu-btn text-lg line-gray round margin-right-sm'">
					未到店
				</button>
			</view>
			<view class="flex margin-left-sm margin-top" v-if="bookStatus == 0">
					<button class="cu-btn text-lg bg-main2 round margin-right-sm">
						10:20
					</button>
					<button class="cu-btn text-lg line-gray round margin-right-sm">
						10:40
					</button>
					<button class="cu-btn text-lg line-gray round">
						11:00
					</button>
				</view>
				<input v-if="bookStatus == 0" style="margin-top: 60upx;" class="inputs margin-top margin-left-sm" placeholder="请输入联系方式 (手机号/微信号)"/>
				<input v-if="bookStatus == 1" style="margin-top: 60upx;" class="inputs margin-top margin-left-sm" placeholder="请输入房间号"/>
		</view>
		<view class="cu-bar tabbar bg-white  foot" style="justify-content: center;">
			<button @click="goBook" class="cu-btn lg bg-main3 round" style="width: 40%;">
				<text class=" "></text>确定预约
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bookStatus: 1,
				status: null,
			};
		},
		onLoad(options) {
			// this.bookStatus = options.status
		},
		methods:{
			changeBookStatus(){
				if(this.bookStatus != 1){
					this.bookStatus = 1
				}
			},
			changeBookStatusB(){
				if(this.bookStatus != 0){
					this.bookStatus = 0
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper{min-height: 100vh;}
.main{
		.head-bg{height: 160upx; width: 100%;}
		.head{width: 700upx; position: absolute; left: 25upx; top: 200upx;
			.head-avatar{width: 160upx; height: 160upx; position: absolute; top: -70upx; border-radius: 100%; left: 295upx; z-index: 999;}
		}
		.body{width: 700upx; margin-top: 180upx; margin-left: 25upx;
			.body-inner{width: 650upx;}
		}
		.inputs{width: 700upx; border-bottom: 1px solid #f5f5f5; padding-bottom: 20upx;}
	}
</style>
