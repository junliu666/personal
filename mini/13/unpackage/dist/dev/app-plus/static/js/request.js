var request = function(url, token, data, method){
	uni.request({
		method,
		// header: {
		// 	token
		// },
		url: this.Server + url,
		data,
		success(res) {
			if(res.data.code == 0){
				return res.data.data
			} else if(res.data.code == 500){
				uni.showModal({
					content: res.data.msg
				})
			} else if (res.data.code == 101){
				uni.showModal({
					content: '登录超时，请重新登录'
				})
			}
		}, fail(err){
			console.log(err);
			uni.showModal({
				content: '请求错误'
			})
		}
	})
}

module.exports = request