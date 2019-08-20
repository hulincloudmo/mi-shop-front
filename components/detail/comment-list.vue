<template>
	    <view>
	        <scroll-view scroll-x class="scroll-row ml-2 d-flex">
	             <view class="scroll-row-item bg-light-secondary mr-2" v-for="(comment,index) in comments" :key="index" style="width: 620rpx;">
	                 <view class="d-flex a-center justify-between mb-2 ml-2">
	                     <image src="/static/images/demo/demo6.jpg" mode="widthFix" class="radius-circle" style="width:70rpx;height:70px"></image>
	                     <view class="ml-2 d-flex flex-column">
	                         <text class="font mt-1">{{comment.username}}</text>
	                         <text class="text-muted">{{comment.create_time}}</text>
	                     </view>
	                     <view style="margin-left: auto;" class="iconfont icon-dianzan text-muted pl-1">{{comment.goods_num}}</view>
	                 </view>
	                 
	                 <text class="d-block font mb-2 ml-2">
	                     {{comment.context}}
	                 </text>
	                 
	                 <view class="row">
	                     <view v-for="(picItem,picIndex) in comment.imglist" :key="picIndex" class="span24-8 px-2"><image :src="picItem" class="radius" style="height: 80px;" mode=""></image></view>
	                 </view>
	             </view>
	         </scroll-view>
	         
	        <navigator url="/pages/detail-comment/detail-comment">
	        <view class="d-flex a-center j-center py-2 mt-2 text-primary"
	        hover-class="bg-light-secondary">
	        	更多评论 <view class="iconfont icon-you"></view>
	        </view>
	        </navigator>
	    </view>
        
</template>

<script>
	export default {
        props:{
            comments:{
                type:Array,
                require:true
            }
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
