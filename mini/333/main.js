import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';

import mainHead from './components/main-head/main-head.vue'
Vue.component('main-head',mainHead)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
