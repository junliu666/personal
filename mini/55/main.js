import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import mainHead from './components/main-head.vue'
Vue.component('main-head',mainHead)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
