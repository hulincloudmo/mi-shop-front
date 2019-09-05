import { baseUrl } from '../common/env.js'
import { systemInfo } from '../common/system.js'

// in app error or log into server
export function createAppFeed(data) {
	const content = Object.assign({}, data)
	// we construct platform info here
	content['platform'] = systemInfo.model + '-' + systemInfo.platform + '-' + systemInfo.system
	
	uni.request({
		url: baseUrl + '/app_feeds/',
		method: 'POST',
		data: content
	})
}
