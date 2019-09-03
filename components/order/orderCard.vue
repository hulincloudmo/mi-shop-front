<template>
    <view class="bg-white p-2 position-relative" style="border-radius: 15px;">
        <!-- 头部 -->
        <view class="w-100 flex-row" style="height: 20px;">
            <text class="nvue-icon mr-2" style="font-size: 15px;">&#xe664;</text>
            <text class="font font-weight" style="margin-top: -2px;">{{order.shop}}</text>
            <text v-if="order.order_status === 1" class="font position-absolute" style="color: #FD6801;right: 40px;">交易成功</text>
            <text v-if="order.order_status === 0" class="font position-absolute" style="color: red;right: 40px;">交易失败</text>
        </view>
        <!-- 图文内容 -->
        <view class="mt-2 flex-wrap" style="flex-direction: row;">
            <view><image src="/static/image/images/demo/cate_01.png" mode="widthFix" style="width: 200rpx;height: 200rpx;"></image></view>
            <view class="ml-2 mt-2">
                <text class="font" style="width: 450rpx;">{{order.order_name}}</text>
                <view class="a-end">
                    <price>{{order.order_price}}</price>
                    <text class="text-muted font mt-1">X{{order.order_count}}</text>
                </view>
                <view class="flex-row">
                    <text class="font">共1件商品</text>
                    <text class="ml-1 font">合计:</text>
                    <price>{{order.order_price*order.order_count}}</price>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import price from "@/components/common/price.nvue"
    export default {
        components:{
            price
        },
        props:{
            order:{
                type: Object,
                require: true
            }
        },
        created() {
          var domMoudle = weex.requireModule("dom")
          domMoudle.addRule('fontFace',{
              'fontFamily': 'iconfont',
              'src': "url('/static/font/iconfont.ttf')"
          })  
        },
    }
</script>

<style>
    .nvue-icon {
        font-family:iconfont
    }
</style>
