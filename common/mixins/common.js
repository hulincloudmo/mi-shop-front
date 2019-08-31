export default {
    methods:{
        navUtils(path) {
            if(path == null) {
                return
            }
            uni.navigateTo({
                url: `/pages/${path}/${path}`
            })
        }
    }
}