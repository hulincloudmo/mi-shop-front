import { requestConfig } from './common.js'

// attention: the success/fail/complete handler here for global or custom config in request is just for uni.request's success/fail/complete.
// it's not meaning the status of 200-300. status 400 from server is also success in uni.request
export default class Request {
	constructor(config={}, reqInterceptor=null, resInterceptor=null, successHandler=null, failHandler=null, completeHandler=null) {
		// base
	    this.baseUrl = config.baseUrl
		this.header = config.header || {"Content-Type": "application/json;charset=UTF-8"},
		// global callback for success/fail/complete. They are also response interceptors.
		this.success = successHandler
		this.fail = failHandler
		this.complete = completeHandler
		// interceptors
		this.requestInterceptor = reqInterceptor
		this.responseInterceptor = resInterceptor
	}
	// type: request/upload/download.
	// the success/fail/complete handler will not override the global, it will just call after global
	async request(options, successHandler=null, failHandler=null, completeHandler=null) {
		const task = options.task || false
		const type = options.type || "request"
		// delete options.task
		let config = null
		try{
			config = await requestConfig(this, options, successHandler, failHandler, completeHandler)
		}catch(e){
			//TODO handle the exception
			return
		}
		if (!config || typeof config != 'object') {
			return
		}
		const that = this
		if (task) {
			config["success"] = (response) => {
				if (that.responseInterceptor) {
					that.responseInterceptor(response, config)
				}
				that.success && that.success(response)
				successHandler && successHandler(response)
			}
			config["fail"] = (response) => {
				that.fail && that.fail(response)
				failHandler && failHandler(response)
			}
			config["complete"] = (response) => {
				that.complete && that.complete(response)
				completeHandler && completeHandler(response)
			}
			if (type === "request") {
				return uni.request(config)
			} else if (type === "upload") {
				return uni.uploadFile(config)
			} else {
				return uni.downloadFile(config)
			}
			return
		}
		return new Promise((resolve, reject)=>{
			config["success"] = (response) => {
				let _res = null
				if (that.responseInterceptor) {
					_res = that.responseInterceptor(response, config)
				}
				that.success && that.success(response)
				successHandler && successHandler(response)
				// null or false for response returned by response interceptor
				if (!_res) {
					reject(response)
				} else {
					resolve(response)
				}
			}
			config["fail"] = (response) => {
				that.fail && that.fail(response)
				failHandler && failHandler(response)
				reject(response)
			}
			config["complete"] = (response) => {
				that.complete && that.complete(response)
				completeHandler && completeHandler(response)
			}
			if (type === "request") {
				uni.request(config)
			} else if (type === "upload") {
				uni.uploadFile(config)
			} else {
				uni.downloadFile(config)
			}
		})
	}
}
