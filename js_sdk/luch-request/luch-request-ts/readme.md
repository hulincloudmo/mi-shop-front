**插件使用说明**

- 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
- 支持全局挂载
- 支持多个全局配置实例
- 支持typescript、javascript 版本
- 下载后把 http-request 文件夹放到项目 utils/ 目录下


**Example**
---
创建实例  

``` javascript 
const http = new Request();
```

执行` GET `请求

``` javascript 
http.get('/user/login', {userName: 'name', password: '123456'}).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置
http.get('/user/login', {userName: 'name', password: '123456'}, {
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    responseType: 'text'
}).then(res => {

}).catch(err => {

})
```
执行` POST `请求

``` javascript 
http.post('/user/login', {userName: 'name', password: '123456'} ).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置
http.post('/user/login', {userName: 'name', password: '123456'}, {
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    responseType: 'text'
}).then(res => {

}).catch(err => {

})
```

**全局请求配置**
--
``` javascript
{
    baseUrl: '', /* 全局根路径，需要注意，如果请求的路径为绝对路径，则不会应用baseUrl */
    header: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
}
```


全局配置修改` setConfig `

``` javascript
/**
     * @description 修改全局默认配置
     * @param {Function}   
*/
http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseUrl = 'http://www.bbb.cn'; /* 根域名 */
    config.header = {
        a: 1,
        b: 2
    }
    return config
})
```

**拦截器**
--

在请求之前拦截

``` javascript
/**
 * @param { Function} cancel - 取消请求,调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
 *
 * @param {String} text ['handle cancel'| any] - catch((err) => {}) err.errMsg === 'handle cancel'。非必传，默认'handle cancel'
 * @cancel {Object} config - catch((err) => {}) err.config === config; 非必传，默认为request拦截器修改之前的config
 * function cancel(text, config) {}
 */
http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
    config.header = {
        ...config.header,
        a: 1
    }
    /*
    if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
        cancel('token 不存在', config) //  把修改后的config传入，之后响应就可以拿到修改后的config。 如果调用了cancel但是不传修改后的config，则catch((err) => {}) err.config 为request拦截器修改之前的config
    }
    */
    return config;
})
```

在请求之后拦截

``` javascript
http.interceptor.response((response) => { /* 必须return response*/
    console.log(response);
    return response;
})
```

**typescript使用**
--
在` request.ts `里还暴露了五个接口
```javascript
{
    options, // request 方法配置参数
    handleOptions, // get/post 方法配置参数
    config, // init 全局config接口(setConfig 参数接口)
    requestConfig, // 请求之前参数配置项
    response // 响应体
}
```


**issue**
--
有任何问题或者建议可以=> <a href="https://ask.dcloud.net.cn/question/74922" target="_blank">issue提交</a>,先给个五星好评QAQ!!


**作者想说**
--
- 主体代码3kb
- 目前该插件已经上项目，遇到任何问题请先检查自己的代码（排除新版本发布的情况）。最近新上了` typescript ` 版本，因为本人没使用过ts,所以写的不好的地方，还请见谅~
####创作不易，五星好评你懂得！
