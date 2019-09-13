<template>
	<view>
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
		    <view class="d-flex flex-column mb-3">
		        <text class="font-md">卖家已发货</text>
                <text class="font">还差7天10时自动确定</text>
		    </view>
            <view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
		</view>
        <view class="p-3 bg-white d-flex flex-column">
            <view class="d-flex">
                <text class="font-md text-dark mr-3">陌上青夏</text>
                <text class="text-light-muted mt-1">18019080616</text>
            </view>
            <view class="text-light-muted font">
                广西省 南宁市 青霞区 陌上花开，可缓缓归矣
            </view>
        </view>
        <divider></divider>
        
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
        onLoad(e) {
            let orderData = JSON.parse(e.order)
            console.log(orderData);
        },
		methods: {
			
		}
	}
</script>

<style>

</style>
