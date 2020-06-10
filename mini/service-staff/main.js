import Vue from 'vue'
import App from './App'

// Vue.prototype.Token = "ef1ebb07-e1a3-4371-abdc-9d866212a0c4"

import server from './static/js/server.js'
Vue.prototype.Server  = server.server1

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



