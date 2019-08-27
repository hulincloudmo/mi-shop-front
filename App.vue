<script>
	export default {
		onUniNViewMessage(e) {
            console.log(e);
        }
	}
</script>



<style>
	/*每个nvue页面公共css */
          /* #ifdef APP-PLUS-NVUE */
          @import url("./common/ty-main-nvue.css"); 
          /* #endif */
    /* 每个vue页面公共css */
    /* #ifndef APP-PLUS-NVUE */
    @import url("./common/ty-main.css"); 
    @import url("./common/animation.css"); 
    @import url("./common/icon.css"); 
    @import url("/common/common.css");
    @import url("/common/uni.css");
<<<<<<< HEAD
=======
    @import url('/common/parse.css');
>>>>>>> msqx-dev
    /* #endif */
</style>
