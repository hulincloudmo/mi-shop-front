import { baseUrl } from './env.js'

export const systemInfo = {
	model: "",
	pixelRatio: 2,
	platform: "devtools",
	screenHeight: 667,
	screenWidth: 375,
	statusBarHeight: 20,
	system: "",
	windowHeight: 603,
	windowWidth: 375
}

function uploadErrorInfo(data) {
	uni.request({
		url: baseUrl + '/app_feeds/',
		method: 'POST',
		data: data
	})
}

export function getSystemInfoSync() {
	try {
		const res = uni.getSystemInfoSync()
		systemInfo.model = res.model
		systemInfo.pixelRatio = res.pixelRatio
		systemInfo.platform = res.platform
		systemInfo.screenHeight = res.screenHeight
		systemInfo.screenWidth = res.screenWidth
		systemInfo.statusBarHeight = res.statusBarHeight
		systemInfo.system = res.system
		systemInfo.windowHeight = res.windowHeight
		systemInfo.windowWidth = res.windowWidth
	} catch (e) {
		uploadErrorInfo({
			title: 'uni.getSystemInfoSync',
			detail: 'File: /common/system.js. ' + e
		})
	}
}

export function getSystemInfo() {
	uni.getSystemInfo({
		success(res) {
			systemInfo.model = res.model
			systemInfo.pixelRatio = res.pixelRatio
			systemInfo.platform = res.platform
			systemInfo.screenHeight = res.screenHeight
			systemInfo.screenWidth = res.screenWidth
			systemInfo.statusBarHeight = res.statusBarHeight
			systemInfo.system = res.system
			systemInfo.windowHeight = res.windowHeight
			systemInfo.windowWidth = res.windowWidth
		},
		fail(e) {
			uploadErrorInfo({
			title: 'uni.getSystemInfo',
			detail: 'File: /common/system.js. ' + e
		})
		}
	})
}
