<template>
	<view>
		<divider />
        <my-card headTitle="发票类型" bodyPadding cardStyle="background-color:#ffffff">
            <mx-radio-group :label="selects" :selected.sync="selects.selected" />
            <text class="text-light-muted line-h">
                电子发票与纸质发票具有相同的法律效力，可作为报销、售后、维权凭证，推荐使用电子发票，不怕丢失，更方便，环保。
            </text>
        </my-card>
        <view class="p-2 d-flex a-center border-bottom bg-white">
            <text>个人姓名:</text>
            <text class="ml-2">陌上青夏</text>
        </view>
        <view class="p-2 d-flex a-center border-bottom bg-white">
            <text>发票内容:</text>
            <text class="ml-2">商品明细</text>
        </view>
        <divider />
        <view class="p-2 d-flex a-center border-bottom bg-white">
            <text>受票人联系方式:</text>
            <text class="ml-2">198****4523</text>
        </view>
        <view class="p-2 text-secondary d-flex flex-column">
            <text>发票须知:</text>
            <text>1.发票为实际支付金额，不包括优惠券等；</text>
            <text>2.电子发票可在订单完成后，在订单详情中查看；</text>
        </view>
	</view>
</template>

<script>
    import myCard from "@/components/common/card.vue"
    import mxRadioGroup from "@/components/common/radio-group.vue"
	export default {
        components: {
          myCard,
          mxRadioGroup
        },
		data() {
			return {
				selects:{
						title:"颜色",
						selected:0,
						list:[
				            { name: "个人" },
				            { name: "单位" }
				        ]
					}
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
    background-color: #EEEEEE;
}
</style>
