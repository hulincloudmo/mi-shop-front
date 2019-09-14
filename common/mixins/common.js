export default {
    methods:{
        /**
         * @description 嵌套文件的跳转工具
         * @example 
         * navUtils('index',animation)
         * @param {Object} path
         * @param {Object} animation
         */
        navUtils(path,animation) {
            if(path == null) {
                return
            }
			if(path === 'index' || 'class' || 'my' || 'cart') {
				uni.switchTab({
					url: `/pages/${path}/${path}`
				})
			}
            uni.navigateTo({
                url: `/pages/${path}/${path}`,
                animationType: animation || ""
            })
        }
    }
}