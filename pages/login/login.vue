<template>
	<view>
		<uniStatusBar />
        <view class="d-flex a-center j-sb px-3 py-2 text-light-muted">
            <view class="iconfont icon-shanchu1" @tap="goBack"></view>
            <view @tap="forgetPassword">忘记密码</view>
        </view>
        <view class="p-5">
            <view class="font-weight font-md">密码登录</view>
            <input @focus="focus('username')" @blur="blur('username')" v-model="loginForm.username" class="mb-2 w-100 border-bottom uni-input px-0" :class="focuClass.username? 'main-input-color':''" type="text" placeholder="请输入手机号/邮箱/乱七八糟的账号" placeholder-class="text-light-muted" value="" />
            <input @focus="focus('password')" @blur="blur('password')" v-model="loginForm.password" class="w-100 border-bottom mb-2 uni-input px-0" :class="focuClass.password? 'main-input-color':''" type="password" placeholder="请输入密码" placeholder-class="text-light-muted" value="" />
            <view class="py-2 2-100 d-flex a-center j-center main-bg-color text-white radius" hover-class="main-bg-hover-color" @tap="submit()">
                登录
            </view>
            <label class="mt-2 checkbox d-flex a-center">
                <checkbox value="" checked />
                <text class="text-light-muted">已阅读并同意陌上青夏所有的协议，不管你愿不愿意，你就是要同意</text>
            </label>
        </view>
	</view>
</template>

<script>
    import uniStatusBar from "@/components/uni-ui/uni-status-bar/uni-status-bar.vue"
    import formVal from "@/common/formValidation.js"
	export default {
        components:{
            uniStatusBar
        },
		data() {
			return {
				focuClass:{
                    username: false,
                    password: false
                },
                loginForm:{
                    username: "",
                    password: ""
                }
			}
		},
		methods: {
			goBack() {
                uni.navigateBack({
                    delta:1
                })
            },
            forgetPassword() {
                
            },
            focus(key) {
                this.focuClass[key] = true
            },
            blur(key) {
                this.focuClass[key] = false
            },
            submit() {
                // let rule = [
                //     {
                //         name: "username",
                //         rule: ['require','typ'],
                //         msg: ['账号不能为空','账号不合法']
                //     },
                //     {
                //         name: "password",
                //         rule: ['require'],
                //         msg: ['密码不能为空']
                //         }
                // ]
                // let checkRes = formVal.validation(this.loginForm,rule)
                // if(!checkRes) {
                //     // 通过验证
                //     
                // }
            }
        }
	}
</script>

<style>

</style>
