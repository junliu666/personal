import Vue from 'vue'
import App from './App'
// import "@/static/aliicon/iconfont"
import ourLoading from '@/components/our-loading/our-loading.vue'
Vue.component('ourLoading', ourLoading)

import junNav from './components/jun-nav.vue'
Vue.component('jun-nav',junNav)

import store from 'vuex/store.js'
Vue.prototype.$store = store

// 企业
import firmPosition from './pages/firm/firm-position/firm-position.vue'
Vue.component('firmPosition',firmPosition)

import firmRecommend from './pages/firm/firm-resume/firm-resume.vue'
Vue.component('firmRecommend',firmRecommend)

import firmPost from './pages/firm/firm-post/firm-post.vue'
Vue.component('firmPost',firmPost)

import firmMessage from './pages/firm/firm-message/firm-message.vue'
Vue.component('firmMessage',firmMessage)

import firmMine from './pages/firm/firm-mine/firm-mine.vue'
Vue.component('firmMine',firmMine)
// 个人

import takePartTime from './pages/take-parttime-job/take-parttime-job.vue'
Vue.component('takePartTime',takePartTime)

import takeFullTime from './pages/take-fulltime-job/take-fulltime-job.vue'
Vue.component('takeFullTime',takeFullTime)

import postPartTime from './pages/post-parttime-job/post-parttime-job.vue'
Vue.component('postPartTime',postPartTime)

import communicationList from './pages/communication-list/communication-list.vue'
Vue.component('communicationList',communicationList)

import mineHome from './pages/mine-home/mine-home.vue'
Vue.component('mineHome',mineHome)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import cuCustomFirm from './colorui/components/cu-custom-firm.vue'
Vue.component('cu-custom-firm',cuCustomFirm)

import mainHead from './colorui/components/main-head.vue'
Vue.component('main-head',mainHead)

import mapHead from './colorui/components/map-head.vue'
Vue.component('mapp-head',mapHead)

import firmHead from './colorui/components/firm-head.vue'
Vue.component('firm-head',firmHead)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



