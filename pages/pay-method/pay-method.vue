<template>
	<view>
	    <view class="d-flex flex-column a-center j-center py-5">
	    	<text class="text-light-muted">支付金额</text>
	        <price>20.00</price>
	    </view>
        <view class="py-5">
            <uni-list-item></uni-list-item>
        </view>
	</view>
</template>

<script>
    import price from "@/components/common/price.vue"
    import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
        components:{
            price,
            uniListItem
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
