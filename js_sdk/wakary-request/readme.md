# wakary-request请求库
准备在一个大型项目中使用的请求库，会一直维护更新。有任何问题可以加我`QQ：382006503`或者微信。颗粒细，可配置和定制能力强。

当前功能如下：

- 请求拦截，比如Header/URL配置检测、自动刷新Token等；
- 响应拦截；
- 在uni.request的回调中使用的全局callback；
- api级别的callback；
- 支持常规请求，上传以及下载；
- 支持Promise以及Task；
- 更多...

# 说明
核心代码是 `wakary-request.js` 这个文件，主要以结构清晰，简单明了为主，方便参与项目的同学快速明白，学习成本低。`common.js`是`wakary-request.js`中需要引入的，用来处理请求配置信息。

`index.js` 是一个使用示范，里面有 `请求拦截` 与 `响应拦截`。请求拦截 里面我主要是针对 `JWT` 认证的这种进行了示范，其中包括了`自动刷新token`的功能。

当前的`index.js`放到您的项目中不一定能够拦截成功，它只是我们在一个测试项目中用到的拦截器。这里是用来作为展示，告诉您如何实例化一个请求，然后设置拦截。

您需要根据您的项目实现您自己的拦截。下面的文档会告诉您如何一步步去实现。

`common`文件夹是一些可能会用到的系统环境等信息。

`api`文件夹内示范了如何封装一个`请求api`。

我们在项目中也是按照这种规范来使用的，`api`会单独抽离出来，在需要使用的页面或者文件引入需要的`api`。

# 文档

核心文件是`wakary-request.js`和`common.js`。

`index.js`以及`api`文件夹，`common`文件夹都是`示例代码`。

我们的大致使用流程如下：

- 正如在`index.js`中代码，我们需要实例一个我们需要的请求器：
  - `const req = new Request(config, reqInterceptor, resInterceptor)`。其中`config`，`reqInterceptor`，`resInterceptor`是您的基本`配置信息`以及`请求拦截器`，`响应拦截器`；
  - 您可以参考我们的实现完善您自己的请求器；
  - 当然，如果您发现仅仅只是实例化一个请求器，难以满足您的需求，您可以实例化多个请求器，分别在不同的`api`构造时使用不同的请求器即可。
  - 在我们当前的示例中，这个拦截器有几个特点：JWT 请求头；可以设置 `authType` 为` None/Bearer/...`。`None`表示用户身份无需验证，比如登录注册这种，请求头里面不需要带上用户身份信息(比如`token`)。如果需要带上用户身份信息，那么还可以设置是否`toggle`，也就是如果`token`信息已经失效，而且刷新失败，如果允许`toggle`，那么则允许匿名访问，会继续发送请求，不允许`toggle`则不会发送请求。而且示例中的拦截器会自动判断`token/refresh`是否过期，自动刷新`token`等。
  - 示例代码我们会放出一个更加简单的，移除掉里面的大多数`import`。
- 您已经实例化了您的请求器，那么就可以构造您的`API`了。我们的用法是专门建立一个`api`文件夹来管理所有的`api`，然后在需要用到的页面引入即可。
- `api`的构造，其实就是用到`class Request`中的`request`方法，我们可以设置`options`，`successHandler`，`failHandler`，`completeHandler`等信息.
  - `options`实际上和`uni.request`里面的配置信息差不多，您还可以根据需要添加您自己的字段，用来更加方便的处理您的拦截器。和`uni.request`的区别是，我们把`success`，`fail`，`complete`从`options`中移除了出来，即使您在`options`里面设置了也不会起到作用。
  - `successHandler`，`failHandler`，`completeHandler`才是在`uni.request`中的`success`，`fail`，`complete`的回调。而且我们还可以在实例请求器的时候，设置全局的`successHandler`，`failHandler`，`completeHandler`。需要注意的是，全局的`handler`和`api`级别的`handler`并不是覆盖的关系，而是都会起到作用。
  - 另外，我们在`options`中使用`type`，`task`来标记请求类型以及是否返回`Task`。`type`可以是`request`(默认值，可以不写.普通请求),`upload`（上传）,`download`（下载），`task`可以是`false`（默认值，可以不写，返回Promise），`true`（返回task）.
- 然后在您的页面引入`api`，开始使用。

## 注意
> 需要注意的是：
> 
> **我们的`class Request`中的`request`方法，前面带有`async`标记。**

在您使用 `Task`，而不是 `new Promise` 的时候，请记得处理您的 `Task`。

## 示范
我们现在有一个上传视频的Task，要求提示上传进度。还有一个上传视频封面的`api`，不是`task`.

`api`

```js
export function createVideoProject(file, name, data={}, success=null, fail=null, complete=null) {
	return request.request({
		url: '/projects/video_upload/',
		filePath: file,
		name: name,
		formData: data,
		// to return request task, and it's upload.
		task: true,
		type: "upload"
	}, success, fail, complete)
}

export function updateProjectCover(id, file) {
	return request.request({
		url: '/projects/' + id + '/cover/',
		filePath: file,
		name: 'cover',
		formData: {},
		type: "upload"
	})
}
```

`usage`

```js
			async toUpload() {
				...
				const that = this
				this.showProgress = true
				try{
					projectTask = await createVideoProject(this.videoSrc, 'video', {
						name: this.name.trim()
					}, (sucRes)=>{
						uni.showToast({
							title: '视频上传成功'
						})
						const projectData = JSON.parse(sucRes.data)
						
						updateProjectCover(projectData.id, that.cover).then(response => {
							that.showProgress = false
							...
						}).catch(()=>{
							that.showProgress = false
							
							uni.showToast({
								icon: 'none',
								title: '封面处理失败'
							})
							...
						})
					}, ()=>{
						that.showProgress = false
						uni.showToast({
							icon: 'none',
							title: '视频上传失败'
						})
					}, ()=>{
						//
					})
				}catch(e){
					//TODO handle the exception
					console.log("wrong")
				}
				projectTask.onProgressUpdate((res)=>{
					that.pg = res.progress
				})
			}
```

注意我们的使用：`projectTask = await createVideoProject`

非`task`的返回，也就是`Promise`返回的，我们直接`updateProjectCover().then().catch()`即可。

# 结束语
有任何Bug或者使用问题，随时联系`QQ：382006503`.

开源不易，觉得有用请点赞。会一直不断改进，吸收各位的意见。
