<template>
	<view>
		<view class="p-2">
		    <view class="d-flex a-center j-center py-2 border-bottom border-light-secondary">
		        <text>用户评价(123)</text>
                <text class="main-text-color ml-auto mr-2">98.5%</text>
                <text>满意</text>
		    </view>
            <view class="d-flex flex-wrap pt-2" >
                <view @tap="changeActive(index)" 
                      class="px-2 py border radius mr-2 mb-2 cate-item" 
                      :class="cateIndex === index? 'active' : ''" 
                      v-for="(item,index) in cateList" 
                      :key="index">
                    {{item.name}}
                </view>
            </view>
		</view>
        <divider />
        <view class="p-2 d-flex a-start">
            <image src="/static/images/demo/demo6.jpg" mode="widthFix" style="width: 90rpx;height: 90rpx;" class="radius"></image>
            <view class="pl-2 flex-1">
                <view class="d-flex a-center">
                    <text class="font text-primary font-weight mr-auto">昵称</text>
                    <view class="iconfont icon-service main-text-color">
                        <text class="pl-1">棒!</text>
                    </view>
                </view>
                <view class="line-h-md font">
                    非常好
                </view>
                <view class="row flex-column">
                    <view class="px pb d-flex flex-wrap">
                       <view class="span24-8">
                           <image src="../../static/images/demo/cate_08.png" style="height: 200rpx;width: 200rpx;" mode="widthFix"></image>
                       </view>
                       <view class="span24-8">
                           <image src="../../static/images/demo/cate_08.png" style="height: 200rpx;width: 200rpx;" mode="widthFix"></image>
                       </view>
                       <view class="span24-8">
                           <image src="../../static/images/demo/cate_08.png" style="height: 200rpx;width: 200rpx;" mode="widthFix"></image>
                       </view>
                       <view class="span24-8">
                           <image src="../../static/images/demo/cate_08.png" style="height: 200rpx;width: 200rpx;" mode="widthFix"></image>
                       </view>
                    </view>
                    <view class="d-flex a-center">
                        <text class="text-light-muted mr-auto">2019.08.20</text>
                        <view class="d-flex text-light-muted mr-1">
                            0 <text class="iconfont icon-dianzan text-muted"></text>
                        </view>
                        <view class="d-flex text-light-muted mr-1">
                            10 <text class="iconfont icon-pinglun text-muted"></text>
                        </view>
                    </view>
                    <!-- 客服 -->
                    <view class="bg-light-secondary radius p-2 d-flex flex-column flex-wrap">
                        <view>
                            <text class="main-text-color">官方回复:</text>
                            <text>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text>
                        </view>
                        <view class="iconfont icon-dianzan text-light-muted d-flex j-end">
                            <text class="text-muted pl-1">赞客服 120</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
    import divider from "@/components/common/divider.nvue"
	export default {
        components:{
            divider
        },
		data() {
			return {
				cateIndex:0,
				cateList:[
					{ name:"全部" },
					{ name:"有图" },
					{ name:"非常喜欢" },
					{ name:"拍照好" },
					{ name:"手感很棒" },
					{ name:"效果好" },
					{ name:"性能很棒" },
				]
			}
		},
		methods: {
			changeActive(index) {
                this.cateIndex = index
            }
		}
	}
</script>

<style>
.cate-item {
    background: #FFEBEC;
    color: #7B6D6C;
    border-color: #F4E0E1;
}
.cate-item.active {
    background: #FF6B01!important;
    color: #FFFFFF!important;
    border-color: #DE7232!important;
}
</style>
