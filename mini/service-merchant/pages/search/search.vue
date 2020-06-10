<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="backText">返回</block><block slot="content">搜索技师</block></cu-custom>
		<view class="main bg-white">
			<view class="flex lg align-center cu-btn justify-around bg-main3 round margin-top" style="padding-left: 0; width: 80%; margin-left: 10%;">
				<text class="cuIcon-search" style="font-size: 40upx;" @tap="PickerChangeStatus"></text>
				<input v-model="searchName" @input="search" confirm-type="确认" class=" text-golg" style="font-size: 28upx; text-align: left;" placeholder="请输入要搜索的技师"  />
				<view class="">
				</view>
			</view>
			
			
			
			<view class="divide-line margin-top" style="width: 100%;">
				
			</view>
			<view class="margin-left-sm margin-top">
				<view class="flex flex-wrap">
					<view v-for="(item,index) in searchResult" :key="index">
						<button @tap="viewStaff(index)" class="cu-btn bg-gray round margin-top-sm margin-right-sm">
							<text class="cuIcon-searchlist"></text>
							{{ item.name }}
						</button>
						
					</view>
				</view>
			</view>
<!-- 			<view class="margin-left-sm margin-top">
				<text class="cuIcon-title margin-right-xs"></text>最近搜索
				<view class="flex flex-wrap">
					<view v-for="(item,index) in 10" :key="index">
						<button class="cu-btn bg-gray round margin-top margin-right-sm">{{ item }}号技师</button>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchName: '',
				statusPicker: 0,
				searchResult: [],
				staffList: null
			};
		},
		onLoad(){
			this.GetStaffList()
		},
		watch: {
			searchName(nv, ov){
				this.searchResult = []
				if(nv != ''){
					
					for(var i in this.staffList){
						console.log(this.staffList[i].name);
						if(this.staffList[i].name.indexOf(nv) != -1){
							var data = {
								name: this.staffList[i].name,
								id: this.staffList[i].id
							}
							this.searchResult.push(data)
							console.log(this.searchResult);
						}
						
					}
				}
				
			}
		},
		methods:{
			viewStaff(index){
				this.searchResult
				uni.navigateTo({
					url: "../people-detail/people-detail?staffId=" + this.searchResult[index].id
				})
			},
			GetStaffList(){
				var that = this
				uni.request({
					header: {token: that.MerchantToken.token},
					url: that.Server + 'merchant/staffList',
					success(res) {
						if(res.data.code == 0){
							that.staffList = res.data.data
						} else if (res.data.code == 101) {
							uni.showToast({
								icon: "none",
								title: '登录超时，将重新授权登录',
								duration: 1000
							})
							setTimeout(() => {
								uni.reLaunch({
									url: '../login/login'
								})
							}, 2000)
						} else {
							uni.showToast({
								icon: "none",
								title: res.data.msg,
								duration: 1000
							})
						}
					}
				})
			},
			search(){
				
			},
			PickerChangeStatus(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{min-height: 100vh;}
</style>
