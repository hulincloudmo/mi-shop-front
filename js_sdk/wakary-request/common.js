export async function requestConfig(ins, options, successHandler=null, failHandler=null, completeHandler=null) {
	// base
	ins.header = options.header || ins.header
	ins.baseUrl = options.baseUrl || ins.baseUrl
	// config base
	let config = {
		url: ins.baseUrl + options.url,
		header: ins.header
	}
	if (ins.requestInterceptor) {
		// do the request interceptor and get the new config. we just we Object.assign, no need to deep copy
		let _cg = null
		try{
			_cg = await ins.requestInterceptor(Object.assign({}, options, config))
		}catch(e){
			//TODO handle the exception
			return false
		}
		// if the config is false or null, just return, no need to request
		if (!_cg || typeof _cg !== 'object') {
			return false
		}
		// renew options
		Object.assign(options, _cg)
		// renew base. we can also change the url and header in interceptors
		config.url = options.url
		config.header = options.header
	}
	const type = options.type || "request"
	// config detail, we do not use options directly => remove unneeded props
	if (type === "request") {
		config["data"] = options.data || options.params || {}
		config["method"] = options.method || "GET"
		config["dataType"] = options.dataType || "json"
		config["responseType"] = options.responseType || "text"
	} else if (type === "upload") {
		config['filePath'] = options.filePath
		config['name'] = options.name
		config["method"] = options.method || "POST"
		config['formData'] = options.formData
		// fileType for alipay
		config["fileType"] = options.fileType || "image"
		// reinforce the Content-Type
		config.header['Content-Type'] = 'multipart/form-data;charset=UTF-8'
	} // download need nothing else to config
	return config
}

function _isPromise(obj) {
	return obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}
