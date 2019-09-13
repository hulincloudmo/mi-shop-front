<template>
	<view>
	    <view class="d-flex flex-column a-center j-center py-5">
	    	<text class="text-light-muted">支付金额</text>
	        <price>20.00</price>
	    </view>
        <view class="py-5">
                <uni-list-item
                showExtraIcon 
                showRadio
                :radioCheck="radioCheck"
                radioColor="#FD6801"
                @click="checked"
                :showArrow="false" 
                extraIcon="icon-zhifubao text-primary" 
                extraIconStyle="font-size:60rpx" 
                title="支付宝支付" 
                note="推荐使用支付宝登录" />
                
                <uni-list-item
                showExtraIcon 
                showRadio
                :radioCheck="WXradioCheck"
                radioColor="#FD6801"
                @click="WXchecked"
                :showArrow="false" 
                extraIcon="icon-weixinzhifu text-success" 
                extraIconStyle="font-size:60rpx" 
                title="微信支付" 
                note="推荐使用微信登录" />
                
                <view 
                class="main-bg-color text-white font-md w-100 py-2 d-flex a-center j-center mt-3" 
                hover-class="main-bg-hover-color"
                @click="navUtils('pay-result')"
                >
                    <text class="text-white font-md">确认支付</text>
                </view>
        </view>
	</view>
</template>

<script>
    import price from "@/components/common/price.vue"
    import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
    import mixins from '@/common/mixins/common.js'
	export default {
        mixins:[mixins],
        components:{
            price,
            uniListItem
        },
		data() {
			return {
				radioCheck: true,
                WXradioCheck: false
			}
		},
		methods: {
			checked() {
                if(this.WXradioCheck) {
                    this.WXradioCheck = false
                }
                this.radioCheck = !this.radioCheck
            },
            WXchecked() {
                if (this.radioCheck) {
                    this.radioCheck = false
                }
                this.WXradioCheck = !this.WXradioCheck
            }
		}
	}
</script>

<style>

</style>
