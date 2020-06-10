<template>
	<view>
		<cu-custom bgColor="bg-main" :isBack="true"><block slot="backText"></block><block slot="content">任务进程</block></cu-custom>
		<view v-for="(item,index) in taskDetai" :key="index" >
			<view class="cu-timeline" >
				<view class="cu-time">{{ index }}</view>
				<view class="cu-item text-main" v-for="(subItem, subIndex) in item" :key="subIndex">
					<view class="content " style="background-color: #F9F9F9;">
						<view class="flex justify-between align-center">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-main">{{ parseInt(subItem.time.split(':')[0])  > 12 ? '下午' : '上午' }}</view>
								<view class="cu-tag line-main">{{ subItem.time }}</view>
							</view>
							<button  v-if="index === '2019年04月28日' && subItem.status == '任务完成，等待尾款' " class="cu-btn bg-main round shadow-blur">{{ subItem.status == '任务完成，等待尾款' ? '付尾款' : '' }}</button>
						</view>
						
						<view class="margin-top">{{ subItem.status }}</view>
					</view>
				</view>
			</view>
		</view>
		

<!-- 		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<text>01:30</text> 【喵星】 MX-12138 已揽收，准备发往银河系
				</view>
			</view>
		</view> -->

<!-- 		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue shadow-blur content">
					<view class="cu-list menu-avatar radius">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content">
								<view class="text-grey">文晓港</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-infofill text-red"></text> 消息未送达</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">文晓港
									<view class="cu-tag round orange sm">SVIP</view>
								</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-redpacket_fill text-red"></text> 收到红包</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<text class="cuIcon-notice_forbid_fill text-gray"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				taskDetai: {
					"2019年04月28日": [
						{status: '任务完成，等待尾款',
						 time: '10:00'}
					],
					"2019年04月27日": [
						{status: '任务完成，等待尾款',
						 time: '10:00'},
						{status: '任务完成，等待尾款',
						 time: '20:00'}
					],
					"2019年04月26日": [
						{
							status: '任务完成，等待尾款',
							 time: '10:00'
						},
						{status: '任务进行中',
						 time: '10:00'}
					],
					"2019年04月25日": [
						{status: '任务进行中',
						 time: '10:00'}
					],
					"2019年04月24日": [
						{status: '任务进行中',
						 time: '20:00'}
					],
					"2019年04月23日": [
						{status: '任务进行中',
						 time: '10:00'}
					],
					"2019年04月22日": [
						{status: '任务开始',
						 time: '10:00'}
					],
					"2019年04月21日": [
						{status: '确定接单者',
						 time: '10:00'}
					],
				}
			};
		}
	}
</script>

<style>

</style>
