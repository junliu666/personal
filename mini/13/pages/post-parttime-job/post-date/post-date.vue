<template>
	<view style="min-height: 100vh; background-color: white;">
		<cu-custom bgColor="bg-main" :isBack="true"><block slot="backText"></block><block slot="content">选择日期</block>
			<view @click="Confirm" class="margin-right" slot="right">
				确定
			</view>
		</cu-custom>
		
		<view>
			<uni-calendar 
			:insert="true"
			:lunar="true" 
			:start-date="today"
			:end-date="'2050-6-20'"
			:range="true"
			@change="change"
			/>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import {
	    mapState,  
	    mapActions,
	} from 'vuex'; 
	export default {
		data() {
			return {
				today: '',
				postData: ''
			};
		},
		components: {
			uniCalendar
		},
		computed: {
			...mapState([ 'postParttimejobPersonal'])
		},
		onLoad() {
			this.postData = this.postParttimejobPersonal
			var date = new Date()
			var year = date.getFullYear()
			var month = 1 + date.getMonth() < 10 ? 1 + date.getMonth() : 1 + date.getMonth()
			var day = date.getDate()
			this.today = year + '-' + month + '-' + day
		},
		methods: {
			...mapActions(['SETSTATE']),
			Confirm(){
				this.SETSTATE(this.postData)
				uni.navigateBack({
					delta: 1
				})
			},
			change(e){
				var date = ''
				var showDate = ''
				if(e.range.before == ''){
					date = e.fulldate
					if(date.split('-')[1][0] == '0'){
						showDate = date.split('-')[1][1] + '月' + date.split('-')[2] + '日'
					}
				} else {
					if(e.range.before == ''){
						date = e.range.after
						if(date.split('-')[1][0] == '0'){
							showDate = date.split('-')[1][1] + '月' + date.split('-')[2] + '日'
						}
					} else if (e.range.after == ''){
						date = e.range.before
						if(date.split('-')[1][0] == '0'){
							showDate = date.split('-')[1][1] + '月' + date.split('-')[2] + '日'
						}
					} else {
						if(parseInt(e.range.before.split('-')[2]) < parseInt(e.range.after.split('-')[2])){
							date = e.range.before + "-" + e.range.after
							if(e.range.before.split('-')[1][0] == '0'){
								e.range.before = e.range.before.split('-')[0] + '-' + e.range.before.split('-')[1][1] + '-' + e.range.before.split('-')[2]
							}
							if(e.range.after.split('-')[1][0] == '0'){
								e.range.after = e.range.after.split('-')[0] + '-' + e.range.after.split('-')[1][1] + '-' + e.range.after.split('-')[2]
							}
							showDate = e.range.before.split('-')[1] + '月' + e.range.before.split('-')[2] + '日' + " - " + e.range.after.split('-')[1] + '月' + e.range.after.split('-')[2] + '日'
						} else {
							date = e.range.after + "-" + e.range.before
							if(e.range.before.split('-')[1][0] == '0'){
								e.range.before = e.range.before.split('-')[0] + '-' + e.range.before.split('-')[1][1] + '-' + e.range.before.split('-')[2]
							}
							if(e.range.after.split('-')[1][0] == '0'){
								e.range.after = e.range.after.split('-')[0] + '-' + e.range.after.split('-')[1][1] + '-' + e.range.after.split('-')[2]
							}
							showDate = e.range.after.split('-')[1] + '月' + e.range.after.split('-')[2] + '日' + " - " + e.range.before.split('-')[1] + '月' + e.range.before.split('-')[2] + '日'
						}
					}
					
				}
				this.postData.showDate = showDate
				this.postData.date = date
				
			}
		}
	}
</script>

<style lang="scss">

</style>
