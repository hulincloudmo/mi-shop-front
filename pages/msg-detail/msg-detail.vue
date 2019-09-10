<template>
	<view>
        <!-- 标题 -->
		<view class="font text-dark font-md font-weight ml-2 my-3">
		    {{detail.title}}
		</view>
        <!-- 内容 -->
        <view class="">
            <gao-parse :content="article" @preview="preview" @navigate="navigate"></gao-parse>
        </view>
	</view>
</template>

<script>
    var htmlString = `<p>
    	<img src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp">
    	<img src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp">
    	<img src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp">
    	<img src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp">
    	<img src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp">
    	<img src="https://i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp">
    	<img src="https://i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp">
    </p>`
    import gaoParse from "@/components/gaoyia-parse/parse.vue"
	export default {
        components:{
          gaoParse  
        },
		data() {
			return {
				detail: {},
                article: htmlString
			}
		},
        onLoad(e) {
            let data = JSON.parse(e.detail)
            uni.setNavigationBarTitle({
                title: data.title
            })
            this.detail = data
        },
		methods: {
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
				uni.showModal({
					content : "点击链接为：" + href,
					showCancel:false
				})
			}
		}
	}
</script>

<style>

</style>
