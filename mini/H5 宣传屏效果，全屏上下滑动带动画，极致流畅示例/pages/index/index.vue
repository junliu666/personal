<!-- 模板 -->
<template>
  <div>
    <div id="fullpage" class="site__header">
      <div class="section bg1">
        <div class="section-main flex flex-v flex-align-center">
          <p class="p1">玩转自驾游</p>
          <p class="p2">一个app就够了</p>
          <p class="p3">小马在途APP下载</p>
          <image class="iphone" src="/static/dowapp/dow.png" @click="appdow"></image>
          <div class="bb flex flex-l flex-pack-center">
            <image class="sjpmzs" src="/static/dowapp/sjpmzs.png"></image>
            <image class="logo animated" src="/static/dowapp/logo.png" data-show="fadeIn" data-hide="fadeOut" data-delay="200"></image>
          </div>
        </div>
        <image class="bgimg" src="/static/dowapp/bg1.png"></image>
        <image class="jt" src="/static/dowapp/jt.gif"></image>
      </div>
      <div class="section bg2">
        <div class="section-main flex flex-v flex-align-center">
          <p class="p1">线路+门票+酒店</p>
          <p class="p2">一站全搞定</p>
          <p class="p3">精心设计更适合自驾游的线路景点，配上无可挑剔的酒店，让您感受真正的自驾游乐趣。</p>
          <div class="bb flex flex-l">
            <image class="xl" src="/static/dowapp/xl.png"></image>
            <image class="xl1" src="/static/dowapp/xl1.png"></image>
            <image class="xl2 animated" src="/static/dowapp/xl2.png" data-delay="0" data-show="fadeIn" data-hide="fadeOut"></image>
            <image class="xl3 animated" src="/static/dowapp/xl3.png" data-delay="400" data-show="fadeInDown" data-hide="fadeOut"></image>
            <image class="xl4 animated" src="/static/dowapp/xl4.png" data-delay="200" data-show="fadeInDown" data-hide="fadeOut"></image>
            <image class="xl5 animated" src="/static/dowapp/xl5.png" data-delay="400" data-show="fadeInDown" data-hide="fadeOut"></image>
          </div>
        </div>
      </div>
      <div class="section bg3">
        <div class="section-main flex flex-v flex-align-center">
          <p class="p1">对讲机+位置共享+线路导航</p>
          <p class="p2">让行程变得更有序</p>
          <p class="p3">创建属于队伍的专属行程群，群内实时高效对讲，一键共享所有景点及目的地，车子及成员位置实时掌控。</p>
          <div class="bb flex flex-l">
            <image class="dj" src="/static/dowapp/dj.png"></image>
            <image class="dj1" src="/static/dowapp/dj1.png"></image>
            <image class="dj2" src="/static/dowapp/dj2.png"></image>
            <image class="dj3" src="/static/dowapp/dj3.png"></image>
            <image class="dj4" src="/static/dowapp/dj4.png"></image>
            <image class="dj5 animated" src="/static/dowapp/dj5.png" data-show="fadeInLeftBig" data-hide="fadeOut" data-delay="0"></image>
            <image class="dj6 animated" src="/static/dowapp/dj6.png" data-show="pulse infinite" data-hide="fadeOut" data-delay="0"></image>
            <image class="dj7 animated" src="/static/dowapp/dj7.png" data-delay="0" data-show="fadeIn" data-hide="fadeOut"></image>
            <image class="dj8 animated" src="/static/dowapp/dj8.png" data-show="fadeInRight" data-hide="fadeOut" data-delay="400"></image>
            <image class="dj9 animated" src="/static/dowapp/dj9.png" data-show="fadeInRight" data-hide="fadeOut" data-delay="400"></image>
          </div>
        </div>
      </div>
      <div class="section bg4">
        <div class="section-main flex flex-v flex-align-center">
          <p class="p1">景区智能语音导览</p>
          <p class="p2">文化故事全知道</p>
          <p class="p3">景区游览线路推荐，自动定位讲解，景点智能语音讲解。</p>
          <div class="bb flex flex-l">
            <image class="dl" src="/static/dowapp/dl.png"></image>
            <image class="dl1" src="/static/dowapp/dl1.png"></image>
            <image class="dl2 animated" src="/static/dowapp/dl2.png" data-delay="200" data-show="fadeInRight" data-hide="fadeOut"></image>
            <image class="dl3" src="/static/dowapp/dl3.png"></image>
            <image class="dl4 animated" src="/static/dowapp/dl4.png" data-delay="200" data-show="fadeInRight" data-hide="fadeOut"></image>
            <image class="dl5" src="/static/dowapp/dl5.png"></image>
            <image class="dl6" src="/static/dowapp/dl6.png"></image>
            <image class="dl7" src="/static/dowapp/dl7.png"></image>
            <image class="dl8 animated" src="/static/dowapp/dl8.png" data-delay="0" data-show="fadeIn" data-hide="fadeOut"></image>
            <image class="dl9 animated" src="/static/dowapp/dl9.png" data-delay="0" data-show="fadeIn" data-hide="fadeOut"></image>
          </div>
        </div>
      </div>
      <div class="section bg5">
        <div class="section-main flex flex-v flex-align-center">
          <image class="logo animated" src="/static/dowapp/logo2.png" data-show="fadeIn" data-hide="fadeOut" data-delay="200"></image>
          <image class="iphone" src="/static/dowapp/dow2.png" @click="appdow"></image>
          <image class="xz1" src="/static/dowapp/xz1.png"></image>
          <image class="xz2" src="/static/dowapp/xz2.png"></image>
        </div>
        <image class="bg2" src="/static/dowapp/bg2.png"></image>
      </div>
    </div>
  </div>
</template>
// flex布局兼容性写法
// flex：定义布局为盒模型
// flex-v：盒模型垂直布局
// flex-l：盒模型水平布局
// flex-1：子元素占据剩余的空间
// flex-align-center：子元素垂直居中
// flex-pack-center：子元素水平居中
// flex-pack-justify：子元素两端对齐
// border-box：元素padding不影响
// flex-text：按钮文本居中
<script>
import PhyTouch from '@/util/phy-touch'
import Transform from '@/util/phy-touch/transform.js'
import FullPage from '@/util/phy-touch/alloy_touch.full_page.js'
window.Transform = Transform

export default {
  data () {
    return {
      phyTouch: null,
    }
  },
  onReady () {
    this.phyTouch = new FullPage('#fullpage', {
      animationEnd: function () { },
      leavePage: function () { },
      beginToPage: function () { }
    })
  }
}
</script>
<style>
@import "./index";
@import "../../static/css/animate.css";
</style>

