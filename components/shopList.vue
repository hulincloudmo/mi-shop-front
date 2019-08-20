<template>
	

<view style="width: 372.5upx;">
	    <image :src="item.cover" mode="widthFix" lazy-load="true"></image>
	    <view class="p-2 pt-1 ml-2">
	        <view class="d-flex font-md">{{ item.title }}</view>
	        <view class="d-flex font text-light-muted">{{ item.desc }}</view>
	        <view class="d-flex my-1">
	            <price>{{ item.pprice }}</price>
	            <view class="font-sm text-light-muted line-through ml-1" style="align-self: flex-end;">￥{{ item.oprice }}</view>
	        </view>
	    </view>
	</view>
</template>

<script>
    import price from './common/price.vue'
	export default {
        components:{
            price
        },
		data() {
			return {
				
			};
		},
        props:{
            item:Object,
            index:Number
        }
	}
</script>

<style>

</style>
