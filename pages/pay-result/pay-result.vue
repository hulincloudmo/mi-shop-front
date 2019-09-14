<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
		    <text class="iconfont icon-iconfontxuanzhong4 main-text-color" style="font-size: 100rpx;"></text>
            <text class="text-dark font-md line-h-sm">支付成功</text>
		</view>
        <view class="px-5">
            <view
            class="main-bg-color font-md w-100 py-2 d-flex a-center j-center mt-3" 
            hover-class="main-bg-hover-color"
            >
                <text class="text-white font-md" @click="navUtils('order-detail')">查看订单</text>
            </view>
            <view
            class="font-md w-100 py-2 d-flex a-center j-center mt-3 border" 
            >
                <text class="font-md" @click="navUtils('index')">返回首页</text>
            </view>
        </view>
	</view>
</template>

<script>
	import mixin from '@/common/mixins/common.js'
	export default {
		mixins:[mixin],
		components:{
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
