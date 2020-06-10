
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({ 
	state: {
		postParttimejobPersonal: {
			title: '',
			typeId: '',
			typeTitle: '',
			location: {
				latitude: '',
				longitude: '',
				address: ''
			},
			dateStatus: false,
			date: '',
			startDate: '',
			endDate: '',
			peopleNum: 1,
			detail: '',
			imgs: [],
			creditRequire: false,
			detailRequire: '',
			detailRequireTitle: '',
			price: '',
			insurance: true,
			totalPrice: ''
		}
	},
	
	
	mutations: {
		setState(state, data){
			console.log(data);
			state.postParttimejobPersonal = data
		},
	},
	
	actions: {
		SETSTATE({ commit }, data){
			commit('setState', data)
		}
	}
})

export default store
