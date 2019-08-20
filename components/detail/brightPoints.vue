<template>
    <scroll-view scroll-x class="scroll-row">
        <view class="scroll-row-item d-flex" style="width: 170rpx;height: 110rpx;">
            <view class="d-flex flex-column a-center j-center mx-2" v-for="(item,index) in brightList" :key="index">
                <view class="line-h-sm iconfont" :class="item.icon"></view>
                <view class="line-h-sm">{{item.title}}</view>
                <view class="line-h-sm text-muted">
                    {{item.desc}}
                </view>
            </view>
        </view>
    </scroll-view>
</template>

<script>
    export default {
        props:{
            brightList:{
                type: Array,
                require: true
            }
        }
    }
</script>

<style>
</style>
