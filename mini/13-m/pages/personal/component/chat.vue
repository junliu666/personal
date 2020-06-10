<template>
	<view>
		<cu-custom bgColor="bg-main" :isBack="true"><view slot="backText" style="margin-left: 30upx; font-size: 32upx;">我是你爸爸</view><block slot="content"></block></cu-custom>
		
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-main"></view>
					<view class="action text-main" @tap="hideModal">关闭</view>
				</view>
				<view class="padding-xl flex justify-between" style="width: 680upx; margin-left: 35upx;">
					<view @click="ChoosePhoto" class="flex flex-direction align-center">
						<view class="bg-white flex justify-center align-center " style="border-radius: 20upx; width: 100upx; height: 100upx;">
							<text class="cuIcon-picfill" style="font-size: 40upx;"></text>
						</view>
						<text class="margin-top-sm text-sm">照片</text>
					</view>
					
					<view @click="ChooseCanemra" class="flex flex-direction align-center">
						<view class="bg-white flex justify-center align-center " style="border-radius: 20upx; width: 100upx; height: 100upx;">
							<text class="cuIcon-camerafill" style="font-size: 40upx;"></text>
						</view>
						<text class="margin-top-sm text-sm">拍照</text>
					</view>
					
					<view @click="ChooseLocation" class="flex flex-direction align-center">
						<view class="bg-white flex justify-center align-center " style="border-radius: 20upx; width: 100upx; height: 100upx;">
							<text class="cuIcon-locationfill" style="font-size: 40upx;"></text>
						</view>
						<text class="margin-top-sm text-sm">位置</text>
					</view>
					
					<view @click="ChooseFriend" class="flex flex-direction align-center">
						<view class="bg-white flex justify-center align-center " style="border-radius: 20upx; width: 100upx; height: 100upx;">
							<text class="cuIcon-peoplefill" style="font-size: 40upx;"></text>
						</view>
						<text class="margin-top-sm text-sm">名片</text>
					</view>
					
					<view @click="ChooseVoice" class="flex flex-direction align-center">
						<view class="bg-white flex justify-center align-center " style="border-radius: 20upx; width: 100upx; height: 100upx;">
							<text class="cuIcon-voicefill" style="font-size: 40upx;"></text>
						</view>
						<text class="margin-top-sm text-sm">语音文字</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-chat">
			<view class="cu-item self">
				<view class="main">
					<view class="content bg-main bg-main shadow">
						<text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">2018年3月23日 13:23</view>
			</view>
			<view class="cu-info round">对方撤回一条消息!</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<text>喵喵喵！喵喵喵！</text>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view>
			<view class="cu-info">
				<text class="cuIcon-roundclosefill text-red "></text> 对方拒绝了你的消息
			</view>
			<view class="cu-info">
				对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
				<text class="text-blue">发送好友验证</text>
			</view>
			<view class="cu-item self">
				<view class="main">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" class="radius" mode="widthFix"></image>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date"> 13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action text-bold text-grey">
						3"
					</view>
					<view class="content shadow">
						<text class="cuIcon-sound text-xxl padding-right-xl"> </text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</view>
					<view class="content shadow">
						喵星球，喵喵市
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						@#$^&**
					</view>
					<view class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<view @click="ShowBottom" class="action">
				<text class="cuIcon-add text-grey"></text>
			</view>
			<button class="cu-btn bg-main shadow round">发送</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				InputBottom: 0
			};
		},
		methods: {
			// 底部操作
			ChooseCanemra(){
				uni.chooseImage({
					count: 1,
					sourceType: ['camera']
				})
			},
			ChoosePhoto(){
				uni.chooseImage({
					sourceType: ['album']
				})
			},
			ChooseLocation(){
				uni.chooseLocation({
					
				})
			},
			ChooseFriend(){},
			ChooseVoice(){},
			hideModal(){
				this.modalName = null
			},
			ShowBottom(){
				this.modalName = 'bottomModal'
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
</style>
