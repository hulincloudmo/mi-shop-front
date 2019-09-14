export default {
    methods:{
        /**
         * @description 嵌套文件的跳转工具
         * @example 
         * navUtils('index',animation)
         * @param {Object} path
         * @param {Object} animation
         */
        navUtils(path,animation,data) {
            if(path == null) {
                return
            }
			if(data) {
				data = "" 
			}
			if(path === 'index' || 'class' || 'my' || 'cart') {
				uni.switchTab({
					url: `/pages/${path}/${path}`
				})
			}
            uni.navigateTo({
                url: `/pages/${path}/${path}?data=${JSON.stringify(data)}`,
                animationType: animation || ""
            })
        },
		/**
		 * @description 深拷贝对象，但如果对象中有undefined，null属性时会被忽略
		 * @param {Object} obj
		 */
		deepCopy(obj) {
			return JSON.parse(JSON.stringify(obj))
		},
		/**
		 * @description 生成唯一guid
		 */
		S4() {
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		},
		guid() {
			return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
		}
    }
}