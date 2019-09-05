// it's just api for login/logout/refreshtoken...
import request from '../index.js'

export function appLoginWithWeChat(data) {
	return request.request({
		url: '/we_chat/login/',
		method: 'POST',
		data: data,
		authType: 'None'
	})
}

export function mpLoginWithWeChat(data) {
	return request.request({
		url: '/mp_we_chat/login/',
		method: 'POST',
		data: data,
		authType: 'None'
	})
}

export function loginWithPhonePassword(data) {
	return request.request({
		url: '/phone/login/',
		method: 'POST',
		data: data,
		authType: 'None'
	})
}

export function phoneRegister(data) {
	return request.request({
		url: '/user/phone_register/',
		method: 'POST',
		data: data,
		authType: 'None'
	})
}

export function logout() {
	return request.request({
		url: '/logout/',
		method: 'POST'
	})
}

export function refreshAccess(refresh) {
	return request.request({
		url: '/token/refresh/',
		method: 'POST',
		data: {
			refresh: refresh
		}
	})
}
