<template>
	<view style="height: 100%;">
        <!-- 顶部选项卡 -->
		<view class="d-flex position-fixed top-0 left-0 right-0 bg-white" style="z-index: 9999;">
		    <view 
            v-for="(tab,tabIndex) in tabBar.list" :key="tabIndex"
            class="flex-1 text-center"
            style="height: 60rpx;"
            :class="tabIndex === tabBar.actived ? 'tabBar-active' : ''"
            @click="changeTab(tabIndex)"
            >
		        <text>{{tab.title}}</text>
		    </view>
            <!-- 占位 -->
            <view style="height: 60rpx;"></view>
		</view>
        <view class="d-flex flex-column p-5 mt-3" style="background-color: #F5F5F5;height: 100%;">
            <!-- 优惠卷为空 -->
            <view v-if="tabBar.list[tabBar.actived].coupon_num === 0">
                <image src="/static/images/nothing/no_pay.png" mode="widthFix"></image>
                <text class="text-center font-md font-weight main-text-color mt-3">您还没有券呢！快，去领一张！</text>
            </view>
            <!-- 存在优惠卷 -->
            <view v-else class="bg-white radius border d-flex a-center mb-2">
                <view class="d-flex flex-1 flex-column j-center p-2">
                        <text class="font">陌上花开，可缓缓归矣</text>
                        <text class="font text-light-muted">2019-10-01~2019-11-01</text>
                </view>
                <view class="main-bg-color text-white d-flex a-center j-center" style="width: 220rpx;height: 100%">
                    <view class="d-flex flex-column a-center j-center py-3">
                        <text class="font-md" style="line-height: 1.2;">1000<text class="font">元</text></text>
                        <text class="font">满3000元使用</text>
                        <view class="radius bg-white w-50 main-text-color text-center">
                            去使用
                        </view>
                    </view>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
        components:{
            
        },
		data() {
			return {
				tabBar: {
                    actived: 0,
                    list: [
                            {
                                title: "未使用",
                                coupon_num: 1,
                                coupon_list: [
                                    {
                                        title: "",
                                        start_time: "",
                                        end_time: "",
                                        coupon_price: "",
                                        desc: "",
                                        status: "",    // 0 未使用  1已使用  2已过期
                                        disable: false
                                    }
                                ],
                                nothingMsg: "没有券？"
                            },
                            {
                                title: "使用记录",
                                coupon_num: 0,
                                nothingMsg: "没有使用记录？"
                            },
                            {
                                title: "已过期",
                                coupon_num: 0,
                                nothingMsg: "券都过期啦？"
                            }
                    ]
                }
			}
		},
		methods: {
			changeTab(tabIndex) {
                this.tabBar.actived = tabIndex
            }
		}
	}
</script>

<style>
.tabBar-active{
    border-bottom: 1px solid #FD6801;
}
</style>
