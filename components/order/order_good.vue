<template>
    <view class="mt-2 flex-wrap">
        <block v-for="(good,index) in goodList" :key="index">
            <view>
                <image src="/static/image/images/demo/cate_01.png" lazy-load mode="widthFix" style="width: 200rpx;height: 200rpx;"></image>
            </view>
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
        </block>
    </view>
</template>

<script>
    export default {
        props: {
            goodList: {
                type: Array,
                require: true
            }
        }
    }
</script>

<style>
    
</style>
