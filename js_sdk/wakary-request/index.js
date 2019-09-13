import Request from './wakary-request.js'

import {
	tokenInfo,
	updateAccess,
	isAccessExpired,
	isRefreshExpired,
	clearAllTokenInfo
} from './common/access.js'
import {
	baseUrl
} from './common/env.js'
import {
	createAppFeed
} from './api/appFeed.js'

const config = {
	baseUrl: baseUrl
}

const reqInterceptor = async (options) => {
	// here we add the global authorization token: JWT authorization
	// if we do not want auth, such as in login api, we supply a string to authType with 'None' value
	const authType = options.authType || 'Bearer'
	delete options.authType
	// if it allows token/non-token to return diff response
	// the default is we can not toggle
	const toggle = options.toggle || false
	delete options.toggle
	// here we add auth interceptor
	const accessExpired = isAccessExpired()
	const refreshExpired = isRefreshExpired()
	if (authType === 'None') {
		delete options.header.Authorization
		_requestLog(options, "None Auth Type")
		return options
	}
	if (tokenInfo.access) {
		options.header = Object.assign({}, options.header, {
			Authorization: authType + ' ' + tokenInfo.access
		})
	}
	// need auth, or it could be toggle. if have token, we must write token into header
	// 1. diff response for diff login state, i.e need access
	// 2. loged in user, access expired, need to refresh access auto
	// 3. loged in user, refresh expired, need to clear and re-login
	if (accessExpired) {
		if (refreshExpired) {
			clearAllTokenInfo()
			delete options.header.Authorization
			if (!toggle) {
				uni.$emit("logedOut")
				_requestLog(options, "ac/rf都已经过期，且不能匿名访问，需要重新登录")
				return false
			}
		} else {
			try{
				const acc = await _toRefreshAccess()
				options.header.Authorization = authType + ' ' + access
			}catch(e){
				// TODO: handler error to refresh token
				delete options.header.Authorization
				if (!toggle) {
					uni.$emit("logedOut")
					_requestLog(options, "刷新ac失败，且不能匿名访问，需要重新登录")
					return false
				}
			}
		}
	}
	_requestLog(options, "成功通过")
	return options
}

const resInterceptor = (response, conf={}) => {
	const statusCode = response.statusCode
	
	// response interceptor
	if (statusCode >= 200 && statusCode < 300) { //成功
	_responseLog(response, conf, "response 200-299")
		return response
	} else if (statusCode === 500) {
		_responseLog(response, conf, "response 500")
		return false
	} else {
		_responseLog(response, conf, "response 300-499")
		return false
	}
}

const req = new Request(config, reqInterceptor, resInterceptor)

// request log
function _requestLog(req, describe=null) {
	if (process.env.NODE_ENV === 'development') {
		console.log("地址：" + req.url)
		if (describe) {
			console.log("描述：" + describe)
		}
		console.log("详细：" + JSON.stringify(req))
	}
	//TODO into log server
}

// response log
function _responseLog(res, conf={}, describe=null) {
	let _statusCode = res.statusCode;
	if (process.env.NODE_ENV === 'development') {
		console.log("地址: " + conf.url)
		if (describe) {
			console.log("描述：" + describe)
		}
		console.log("结果: " + JSON.stringify(res))
	}
	//TODO into log server
	if (_statusCode === 500) {
		createAppFeed({
			title: '500: 服务器错误',
			detail: conf.url,
			version: 'v1'
		})
	}
}

function _toRefreshAccess() {
	return new Promise((resolve, reject)=>{
		uni.request({
			url: baseUrl + '/token/refresh/',
			method: 'POST',
			data: {
				refresh: tokenInfo.refresh
			},
			success: res => {
				if (res.statusCode >= 200 && res.statusCode < 300) {
					// continue to request
					// console.log('Refresh Token: ' + JSON.stringify(res))
					updateAccess(res.data.access)
					resolve(res.data.access)
				} else {
					// TODO: handle error info
					// here we clear all token info, we need to login again
					clearAllTokenInfo()
					reject("get error")
				}
			},
			fail: (e) => {
				reject('no_network')
				createAppFeed({
					title: '/token/refresh/',
					detail: 'File: request.js. ' + e,
					version: 'v1'
				})
			}
		})
	})
}

export default req
