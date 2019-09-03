<template>
    <view class="position-absolute flex-column j-center a-center left-0 right-0 bottom-0 top-0">
        <image :src="getIcon" mode="widthFix" style="width: 300rpx;"></image>
        <text style="color:#B2B2B2 ;">{{msg}}</text>
    </view>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: "no_comment.png"
            },
            msg: {
                type: String,
                default: "您的订单消失不见了呢"
            }
    },
    computed:{
        getIcon() {
            return `/static/images/nothing/${this.icon}.png`
        }
    }
    }
    
</script>

<style>
</style>
