<template>
    <view>
        <view class="d-flex a-stretch bg-white left-0 bottom-0 right-0" style="100rpx;position: fixed;z-index: 99;">
            <view hover-class="bg-light-secondary" class="flex-1 d-flex flex-column a-center j-center line-h-md">
                <view class="iconfont icon-xihuan text-muted"></view> 收藏
            </view>
            
            <view hover-class="bg-light-secondary" class="flex-1 d-flex flex-column a-center j-center line-h-md">
                <view class="iconfont icon-gouwuche text-muted"></view> 购物车
            </view>
            
            <view class="d-flex a-center j-center main-bg-color font text-white" @click="goToShop" hover-class="main-bg-hover-color" style="flex:2.5">
                加入购物车
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		methods:{
			goToShop() {
				this.$emit('addCart')
			}
		}
	}
</script>

<style>
</style>
