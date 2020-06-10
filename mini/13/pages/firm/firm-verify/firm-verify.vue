<template>
	<view style="min-height: 100vh; ;" class=" flex justify-between flex-direction">
		<!-- <cu-custom bgColor="bg-white-firm" :isBack="false">
			<block slot="backText"></block>
			<block slot="content">资质认证</block>
			<view slot="right" class="margin-right">
				<text class="aliicon">&#xe609;</text>
			</view>
		</cu-custom> -->
		
		<view style="margin-left: 50upx; font-size: 50upx;  margin-top: 80upx;" class="text-black">
			企业资质认证
			<view class="bg-main-firm round margin-top-sm" style="height: 10upx; width: 200upx;"></view>
		</view>
		
		<view class="nav-list">
			<navigator :url="item.url" hover-class="none"  class="nav-li" navigateTo :class="'bg-'+item.color"
			 style="width: 675upx; height: 300upx;" v-for="(item,index) in elements" :key="index">
				<view class="nav-title">{{item.title}}</view>
				<view class="nav-name">{{item.name}}</view>
				<text class="aliicon">{{ index == 0 ? '&#xe62d;' : '&#xe605;' }}</text>
				<view class=" margin-top  flex align-center">
						<view class="cuIcon-title margin-right-sm"></view>{{ index == 0 ? '企业营业执照' : '个体工商户营业执照' }}
				</view>
				<view class=" margin-top-sm  flex align-center">
						<view class="cuIcon-title margin-right-sm"></view>个人身份证
				</view>
				<view v-if="index == 1" class=" margin-top-sm  flex align-center">
						<view class="cuIcon-title margin-right-sm"></view>门店信息
				</view>
			</navigator>
		</view>
		<view class="flex flex-direction " style="margin-bottom: 30upx; margin-left: 50upx;">
			<view class="text-lg margin-top-sm" style="">
						阅读
						<text class="text-sub-main-firm">《企业用户协议》</text>
					</view>
					<view class="flex align-center margin-top-lg" style="">
						<view class="flex flex-direction align-center margin-right">
							<button style="width: 100upx; height: 100upx;" class="flex align-center justify-center cu-btn line-sub-main-firm padding round">
								<text class="aliicon text-lg">&#xe60f;</text>
							</button>
							<text class="text-sub-main-firm">切换角色</text>
						</view>
						<view class="flex flex-direction align-center margin-left">
							<button style="width: 100upx; height: 100upx;" class="flex align-center justify-center cu-btn line-sub-main-firm padding round">
								<text class="aliicon text-lg">&#xe64a;</text>
							</button>
							<text class="text-sub-main-firm">退出登录</text>
						</view>
			<!-- 			<view class="flex flex-direction align-center margin-left">
							<view class="flex align-center justify-center bg-gray padding round">
								<text class="aliicon text-lg">&#xe60f;</text>
							</view>
							<text class="">切换角色</text>
						</view> -->
					</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
					title: '企业人员认证',
					name: '',
					icon: '&#xe62d;',
					color: 'main-firm',
					url: './firm-verify-first/firm-verify-first'
				}, {
					title: '个体工商户认证',
					name: '',
					icon: '&#xe605;',
					color: 'main-firm',
					url: './firm-verify-small/firm-verify-small'
				}]
			};
		},
		methods: {
			GoSwitch(){
				uni.navigateTo({
					url: './firm-verify-small/firm-verify-small'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
