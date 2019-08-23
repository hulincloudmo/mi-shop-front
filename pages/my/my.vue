<template>
	<view>
	    <!-- 头部 -->
        <view class="position-relative d-flex a-center" style="height: 320rpx;">
            <view class="iconfont icon-xiaoxi position-absolute" :style="{ top: statusBarHeight + 50 + 'rpx' }" style="right: 30rpx; font-size: 50rpx;z-index: 9;"></view>
            <image src="../../static/images/bg.jpg" mode="" style="width: 100%;height: 320rpx;"></image>
            <view class="d-flex a-center ml-1 position-absolute left-0 right-0">
                <image src="/static/images/demo/demo6.jpg" class="radius-circle border-light" style="width: 145rpx;height: 145rpx;border: 5px solid" mode=""></image>
                <view class="ml-2 text-white font mr-auto">
                    <text>陌上青夏</text>
                </view>
                <view class="d-flex a-center j-center px-2 a-self-end" style="height: 70rpx;background-color: #FFD43F;color: #CC4A00;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;">
                    <view class="line-h iconfont icon-huangguan mr-1 ">会员积分1.99</view>
                </view>
            </view>
        </view>
        <!-- 图标 -->
        <card>
            <template v-slot:title>
                <view class="d-flex a-center j-sb">
                    <text class="font-weight font-md">我的订单</text>
                    <view class="text-secondary">
                        <text>全部订单</text>
                        <text class="iconfont icon-you"></text>
                    </view>
                </view>
            </template>
            <view class="d-flex a-center">
                <view class="flex-1 d-flex flex-column a-center j-center py-3" hover-class="bg-light-secondary" v-for="i in 4" :key="i">
                    <text class="iconfont icon-cpu font-lg line-h"></text>
                    <text>待付款</text>
                </view>
            </view>
        </card>
        <divider />
        <uni-list-item
        :showExtraIcon="true" 
        extraIcon="icon-VIP" 
        extraIconStyle="color:red;"
        title="设置"
        @tap="getMenu('user-set')"
        ></uni-list-item>
	</view>
</template>

<script>
    import amap from '@/common/amap-wx.js'
    import card from '@/components/common/card.vue'
    import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
        components:{
          card,
          uniListItem
        },
		data() {
			return {
				statusBarHeight:0,
                amapPlugin: null,
                key: "6a77963d87295a616c500290a590c487"
			}
		},
        onLoad() {
            //#ifdef APP-PLUS
            plus.screen.lockOrientation("portrait-primary")
            //#endif
            this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
            this.amapPlugin = new amap.AMapWX({
                key:this.key
            })
            this.amapPlugin.getRegeo({
                success:(data)=> {
                    console.log(JSON.stringify(data));
                }
            })
        },
        onReachBottom() {
            console.log('1');
        },
		methods: {
			touch(e){
                console.log(e);
            },
            getMenu(path) {
                if(path == null) {
                    return
                }
                uni.navigateTo({
                    url: `/pages/${path}/${path}`
                })
            }
		}
	}
</script>

<style>
   
</style>
