###  使用方法
* 复制js部分

```
// 判断页面是否触顶 ,0触顶,1没有触顶
	var top=0
	import juiList  from '@/components/jui-list/jui-list.vue';
	export default {
		components: {juiList},
		// 监听页面是否触顶
		onPageScroll(e) {
			if(e.scrollTop<1){
				top=0
				uni.$emit("reMsg",0)
			}else{
				if(top!=1){
					top=1
					uni.$emit("reMsg",1)
				}				
			}
		},
		onReady() {	
			// 让swiper高度自适应
			this.getSwiper(0)
		},
		data() {
			return {
				listHeight:0,
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
				setTimeout(()=>{
					var query=uni.createSelectorQuery()
					query.select('#item'+id).boundingClientRect(data => {
						this.listHeight=data.height
					
					}).exec();
				},50)
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
	
```

*  view层

```
 <!--下拉刷新相关-> widthImg刷新图宽 heightRh下拉刷新整体高度(因对应导航栏高度) msgShow(是否显示文字) image(图片路径) -->
		  
		  <!--jui-list相关 swLine 滑动线条长度  SrPadding 导航栏整体padding  SrHeight 导航栏高
		   navHoverClass选中的导航文字样式  navClass未选中导航文字样式  dhList导航文字列表-->
		<jui-list @relist="relist" :dhList="list" :msgShow="false" :listHeight="listHeight" @navChange="navChange"  >
			<template slot="list">
				
				<swiper-item v-for="(x,i) in swList" :key="i" >
						<!-- 你的view -->				
				</swiper-item>
				
			</template>
	    </jui-list>

```

### jui-list组件属性

|属性名|描述|类型|默认值|
|:--|:--|:--|:--|
|dhTop|导航栏上padding (px)|int|20|
|navHoverClass|导航栏文字选中样式|String|my-title|
|navClass|导航栏文字未选中样式|String|无|
|listHeight|列表高度(会动态赋值,只要当高度出现异常才需要修改此属性)|否|-|
|SrHeight|导航栏高|String|80rpx|
|SrPadding|导航栏左右边距 (px)|int|20|
|swLine|滑块宽度 (px)|int|10|
|dhList|导航栏列表(此属性必填,且长度要与你的list一致)|Array|-|

### 下拉刷新组件属性见注释

## 平台仅支持App 和H5  ----->小程序要自己做一些修改