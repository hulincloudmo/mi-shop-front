/**
 * Request 0.0.8
 * @Class uni-app request网络请求库
 * @Author lu-ch
 * @Date 2019-07-25
 * @Email webwork.s@qq.com
 * http://ext.dcloud.net.cn/plugin?id=392
 * **/
interface header { // header 接口
  'Content-Type'?: string,
  [propName: string]: any
}

interface config { // init 全局config接口
  baseUrl: string,
  header: header,
  method: string,
  dataType: string,
  responseType: string
}

interface interceptor { // init 拦截器接口
  request: Function,
  response: Function
}

interface options { // request 方法配置参数（public）
  url: string,
  dataType?: string,
  data?: object,
  header?: header,
  method?: string,
  responseType?: string
}

interface handleOptions { // get/post 方法配置参数（public）
  header?: header,
  dataType?: string,
  responseType?: string
}

interface newOptions { // 定义新的配置接口
  baseUrl: string
  url: string,
  dataType: string,
  data: object,
  header: header,
  method: string,
  complete?: Function,
  responseType: string
}

interface requestCb { // 请求拦截器回调
  (x: object, y: Function): object
}

interface responseCb { // 相应拦截器回调
  (x: object): object
}

interface response { // 响应体 (public)
  statusCode?: number,
  config: Object,
  errMsg: string,
  [propName: string]: any
}

interface requestConfig { // 请求之前参数配置项 (public)
  readonly baseUrl: string
  url: string,
  dataType: string,
  data: object,
  header: header,
  method: string,
  readonly complete: Function,
  responseType: string
}

export default class Request {
  config: config = {
    baseUrl: '',
    header: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
  }

  static posUrl (url: string): boolean { /* 判断url是否为绝对路径 */
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }

  interceptor: interceptor = {
    request: (f: requestCb) => {
      if (f) {
        this.requestBeforeFun = f
      }
    },
    response: (f: responseCb) => {
      if (f) {
        this.requestComFun = f
      }
    }
  }

  private requestBeforeFun (config: object, cancel?: Function): object {
    return config
  }

  private requestComFun (response: object): object {
    return response
  }

  set setConfig (f: Function) {
    this.config = f(this.config)
  }

  request (options: options) {
    let _options: newOptions = {
      baseUrl: this.config.baseUrl,
      dataType: options.dataType || this.config.dataType,
      responseType: options.responseType || this.config.responseType,
      url: Request.posUrl(options.url) ? options.url : (this.config.baseUrl + options.url),
      data: options.data || {},
      header: options.header || this.config.header,
      method: options.method || this.config.method
    }
    return new Promise((resolve: Function, reject: Function) => {
      let next: boolean = true
      let _config: object = {}
      _options.complete = (response: response) => {
        response.config = _config
        let nResponse = this.requestComFun(response)
        if (response.statusCode === 200) { // 成功
          resolve(nResponse)
        } else {
          reject(nResponse)
        }
      }
      let cancel = (t = 'handle cancel', config = _options): void => {
        let err = {
          errMsg: t,
          config: config
        }
        reject(err)
        next = false
      }
      _config = { ...this.requestBeforeFun(_options, cancel) }
      if (!next) return
      uni.request(_config)
    })
  }

  get (url: string, data: object = {}, options: handleOptions = {}) {
    return this.request({
      url,
      data,
      method: 'GET',
      ...options
    })
  }

  post (url: string, data: object = {}, options: handleOptions = {}) {
    return this.request({
      url,
      data,
      method: 'POST',
      ...options
    })
  }
}

export {
  options,
  handleOptions,
  config,
  requestConfig,
  response
}
