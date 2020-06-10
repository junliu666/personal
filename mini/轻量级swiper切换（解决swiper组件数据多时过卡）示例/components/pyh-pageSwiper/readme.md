### pyh-pageSwiper 页面切换组件

页面切换组件，组件名：``pageSwiper``，代码块： pageSwiper。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
单页面引用
import pageSwiper from "@/components/pyh-pageSwiper/pyh-pageSwiper.vue"
import pageSwiperItem from '@/components/pyh-pageSwiper/pyh-pageSwiper-item.vue'
export default {
    components: {pageSwiper,pageSwiperItem}
}
```

在 ``template`` 中使用组件

```html
<pageSwiper ref="pageSwiper" :dataLength="data.length" :initIndex="index" @swiperChange="swiperChange" height="500px">
	<view>{{'显示的内容'}}</view>
</pageSwiper>
或
<pageSwiper ref="pageSwiper" :dataLength="data.length" :initIndex="index" @swiperChange="swiperChange" swiperType="static" height="500px">
	<pageSwiperItem :pageIndex='pageIndex' height="500px" :index="index" v-for="(item,pageIndex) in data" :key="pageIndex">
		<view>{{item}}</view>
	</pageSwiperItem>
</pageSwiper>
```

在 ``script`` 说明
可自定义（需要修改组件内对应参数名）

** pageSwiper 属性说明：**

|属性名		|类型	|默认值	                    |说明					|
|---		|----	|---	                    |---					|
|dataLength	|Number |0	            			|数据长度				|
|initIndex	|Number	|0	            			|初始下标				|
|swiperType	|String	|'lite'	            		|swiper类型（'lite'、'static'）|
|duration	|Number	|200            			|动画事件（单位ms）		|
|height		|String	|''            				|滚动容器固定高度		|

** pageSwiperItem 属性说明：**

|属性名		|类型	|默认值	                    |说明					|
|---		|----	|---	                    |---					|
|pageIndex	|Number	|0	            			|下标					|
|index		|Number	|0	            			|当前swiper下标			|
|height		|String	|0px            			|滚动容器固定高度		|

**swiperTo 事件说明：**

跳转至指定下标

**swiperChange 事件说明：**

返回下标

** up 事件说明：**

单项滚动到底部，返回下标（只在static模式下有效）

**感谢：**

> 有更多优化建议和需求，请联系作者。谢谢！