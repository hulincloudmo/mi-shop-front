import {
	createAppFeed
} from '../api/appFeed.js'

export const tokenInfo = {
	access: null,
	accessTime: null,
	refresh: null,
	refreshTime: null
}

export function retrieveTokenInfo() {
	try {
		const access = uni.getStorageSync('access')
		if (access) {
			tokenInfo.access = access
		}

		const accessTime = uni.getStorageSync('access_time')
		if (accessTime) {
			tokenInfo.accessTime = accessTime
		}

		const refresh = uni.getStorageSync('refresh')
		if (refresh) {
			tokenInfo.refresh = refresh
		}

		const refreshTime = uni.getStorageSync('refresh_time')
		if (refreshTime) {
			tokenInfo.refreshTime = refreshTime
		}
	} catch (e) {
		createAppFeed({
			title: 'uni.getStorageSync',
			detail: 'File: /common/access.js. key: retrieve token info ' + JSON.stringify(e)
		})
	}
}

// it include clear
export function updateAccess(token) {
	tokenInfo.access = token
	if (!token) {
		tokenInfo.accessTime = null
	} else {
		tokenInfo.accessTime = new Date().getTime()
	}
	_updateAccessIntoStorage(token)
}

function _updateAccessIntoStorage(token) {
	if (!token) {
		// clear
		uni.removeStorage({
			key: 'access',
			fail: function(e) {
				createAppFeed({
					title: 'uni.removeStorage',
					detail: 'File: /common/access.js. key: access ' + JSON.stringify(e)
				})
			}
		})
		uni.removeStorage({
			key: 'access_time',
			fail: function(e) {
				createAppFeed({
					title: 'uni.removeStorag',
					detail: 'File: /common/access.js. key: access_time ' + JSON.stringify(e)
				})
			}
		})
	} else {
		// save it into storage for next launch usage
		uni.setStorage({
			key: 'access',
			data: token,
			fail: function(e) {
				createAppFeed({
					title: 'uni.setStorage',
					detail: 'File: /common/access.js. key: access ' + JSON.stringify(e)
				})
			}
		})
		uni.setStorage({
			key: 'access_time',
			data: tokenInfo.accessTime,
			fail: function(e) {
				createAppFeed({
					title: 'uni.setStorage',
					detail: 'File: /common/access.js. key: access_time ' + JSON.stringify(e)
				})
			}
		})
	}
}

// it include clear
export function updateRefresh(refresh) {
	tokenInfo.refresh = refresh
	if (!refresh) {
		tokenInfo.refreshTime = null
	} else {
		tokenInfo.refreshTime = new Date().getTime()
	}
	// save it into storage for next launch usage
	_updateRefreshIntoStorage(refresh)
}

function _updateRefreshIntoStorage(refresh) {
	if (!refresh) {
		// clear
		uni.removeStorage({
			key: 'refresh',
			fail: function(e) {
				createAppFeed({
					title: 'uni.removeStorage',
					detail: 'File: /common/access.js. key: refresh ' + JSON.stringify(e)
				})
			}
		})
		uni.removeStorage({
			key: 'refresh_time',
			fail: function(e) {
				createAppFeed({
					title: 'uni.removeStorage',
					detail: 'File: /common/access.js. key: refresh_time ' + JSON.stringify(e)
				})
			}
		})
	} else {
		// save it into storage for next launch usage
		uni.setStorage({
			key: 'refresh',
			data: refresh,
			fail: function(e) {
				createAppFeed({
					title: 'uni.setStorage',
					detail: 'File: /common/access.js. key: refresh ' + JSON.stringify(e)
				})
			}
		})
		uni.setStorage({
			key: 'refresh_time',
			data: tokenInfo.refreshTime,
			fail: function(e) {
				createAppFeed({
					title: 'uni.setStorage',
					detail: 'File: /common/access.js. key: refresh_time ' + JSON.stringify(e)
				})
			}
		})
	}
}

export function updateTokenInfo(token, refresh) {
	updateAccess(token)
	updateRefresh(refresh)
}

export function isAccessExpired() {
	const nowTime = new Date().getTime()
	if (!tokenInfo.accessTime) {
		return true
	}
	// access 24h, we minus 20s
	const expireTime = 1 * 24 * 3600 * 1000 - 20 * 1000
	if (nowTime - tokenInfo.accessTime < expireTime) {
		return false
	}
	return true
}

export function isRefreshExpired() {
	const nowTime = new Date().getTime()
	if (!tokenInfo.refreshTime) {
		return true
	}
	// refresh 30d, we minus 1h
	const expireTime = 30 * 24 * 3600 * 1000 - 1 * 3600 * 1000
	if (nowTime - tokenInfo.refreshTime < expireTime) {
		return false
	}
	return true
}

export function clearAllTokenInfo() {
	updateTokenInfo(null, null)
}
