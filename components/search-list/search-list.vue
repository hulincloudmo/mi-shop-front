<template>
	<view>
	    <view class="row p-2 border-bottom border-light-secondary animated animation-fade animation-scale-down">
	        <view class="span-6">
	            <image :src="good.titlepic" mode="widthFix" class="w-100"></image>
	        </view>
	        <view class="span-14 pl-2 d-flex flex-column" >
	            <view class="font font-weight">{{good.title}}</view>
	            <view class="font-sm text-light-muted line-h-md mb-auto">
	                {{good.desc}}
	            </view>
	            <price>996</price>
	            <view class="font-sm text-light-muted">
	                {{good.comment_num}} 评论  {{good.praise_rate}}好评
	            </view>
	        </view>
	    </view>
	</view>
</template>

<script>
    import price from '@/components/common/price.vue'
	export default {
        components:{
          price  
        },
		data() {
			return {
				
                
			};
		},
        props:{
            //商品数据
            good: {
                type:Object,
                require:true
            }
        }
	}
</script>

<style>

</style>
