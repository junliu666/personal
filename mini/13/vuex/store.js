
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({ 
	state: {
		userInfo: {
			avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587747341903&di=9f29990b861524c2b87bd88bf05168b2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F24%2F20180824002213_altto.jpg',
			name: '你不知道我的名字'
		},
		postParttimejobPersonal: {
			showDate: '',
			week: '',
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
		clearUserInfo(state){
			state.userInfo = undefined
		},
		setState(state, data){
			// console.log(data);
			state.postParttimejobPersonal = data
		},
	},
	
	actions: {
		CLEARUSERINFO({ commit }){
			commit('clearUserInfo')
		},
		SETSTATE({ commit }, data){
			commit('setState', data)
		}
	}
})

export default store
