<template>
	<view style="background-color: #F5F5F5;min-height: 100%;height: auto;">
        <!-- 地址选择 -->
		<view class="main-bg-color text-white d-flex a-center px-3" @tap="addressHandler" hover-class="main-bg-hover-color" style="height: 150px;">
		    <template v-if="hasAddress">
		        <view class="d-flex flex-column j-center">
		            <view class="d-flex">
		                <view class="font-weight font">
		                    {{userAddress.name}}
		                </view>
		                <view class="font-weight font mx-2">{{userAddress.phone}}</view>
		                <view v-if="userAddress.isDefault" class="border radius px-1 font-weight d-flex j-center a-center">
		                    默认
		                </view>
		                <view class="iconfont icon-you ml-auto"></view>
		            </view>
		            <view class="font-sm">
		                {{userAddress.area + userAddress.address}}
		            </view>
		        </view>
		    </template>
            <template v-else>
                <view class="d-flex w-100 a-center">
                    <view class="font-md mr-auto">新增收货地址</view>
                    <view class="iconfont icon-you"></view>
                </view>
            </template>
		</view>
        <!--  -->
        <view style="background-color: #F5F5F5;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;margin-top: -25rpx;overflow: hidden;">
            <view class="bg-white">
                <uni-list-item>
                    <view class="d-flex a-center">
                        <image src="/static/images/demo/demo6.jpg" v-for="i in 3" :key="i" class="radius mr-2" style="width: 100rpx;height: 100rpx;" mode="widthFix"></image>
                    </view>
                    <view class="" slot="rightContent">
                        共3件
                    </view>
                </uni-list-item>
                <uni-list-item :showArrowIcon="false">
                    <view >
                        商品总价
                    </view>
                    <view class="" slot="rightContent" >
                        <price fontColor="">20.00</price>
                    </view>
                </uni-list-item >
                <uni-list-item :showArrowIcon="false">
                    <view >
                        运费
                    </view>
                    <view class="" slot="rightContent">
                        包邮
                    </view>
                </uni-list-item>
                <uni-list-item>
                    <view >
                        优惠券
                    </view>
                    <view class="text-muted" slot="rightContent">
                        无可用
                    </view>
                </uni-list-item>
                <uni-list-item :showArrowIcon="false">
                    <view class="main-text-color">
                        小计
                    </view>
                    <view class="" slot="rightContent">
                        <price>20.00</price>
                    </view>
                </uni-list-item>
                <divider></divider>
                <uni-list-item @tap="navUtils('order-invoice')">
                    <view>
                        发票
                    </view>
                    <view class="text-muted" slot="rightContent">
                        电子发票-个人
                    </view>
                </uni-list-item>
            </view>
        </view>
        <view class="position-fixed border-top left-0 right-0 bottom-0 bg-white d-flex a-center j-end p-2">
            <text class="mr-2">合计:</text>
            <price>20.00</price>
            <view class="ml-2 px-2 py-1 main-bg-color" style="border-radius: 80rpx;" hover-class="main-bg-hover-color">
                <text class="text-white">去支付</text>
            </view>
        </view>
        <!-- 弹出框 -->
        <bottomPopup :popupClass="popup.express" @hide="hide('express')">
            <view class="d-flex a-center j-center font border-bottom border-light-secondary" style="height: 100rpx;">收货地址</view>
            <scroll-view scroll-y class="w-100" style="height: 835rpx;">
              <uni-list-item v-for="(item,index) in userAllAddress" :key="index" @tap="reAddress(index)">
                  <view class="iconfont icon-dingwei font-weight">{{item.name}}</view>
                  <view class="font-sm text-light-muted">{{item.area+item.address}}</view>
              </uni-list-item>
            </scroll-view>
            <view class="main-bg-color text-center font-md text-white" @tap="goToCreateAddress" style="position: absolute;bottom: 0;left: 0;right: 0;">新增收货地址</view>
        </bottomPopup>
	</view>
</template>

<script>
    import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
    import price from "@/components/common/price.vue"
    import { mapGetters } from "vuex"
    import bottomPopup from "@/components/common/bottom-popup.vue"
    import mixins from '@/common/mixins/common.js'
	export default {
        mixins:[mixins],
        components:{
            uniListItem,
            price,
            bottomPopup
        },
		data() {
			return {
				userAddress: {},
                userAllAddress: [],
                popup:{
                    express: "none",
                }
			}
		},
        computed:{
            ...mapGetters([
                'getAddressDefult',
                'hasAddress',
                'getAllAddress'
            ])
        },
        onLoad() {
            // 判断是否有地址
            this.userAllAddress = this.getAllAddress
            if(this.hasAddress) {
                if(this.getAddressDefult.length !== 0) {
                    this.userAddress =  this.getAddressDefult[0];
                } else {
                    this.userAddress = this.userAllAddress[0]
                }
            }
          
        },
		methods: {
			goToCreateAddress() {
                uni.navigateTo({
                    url: "/pages/user-set/set/user-address/user-address-new/user-address-new"
                })
            },
            addressHandler() {
                if(JSON.stringify(this.userAddress) === "{}") {
                    this.goToCreateAddress()
                } else {
                    this.chooseAddress()
                }
            },
            chooseAddress() {
                this.show('express')
            },
            show(key) {
                this.popup[key] = 'show'
            },
            hide(key) {
                this.popup[key] = 'hide'
                setTimeout(()=> {
                    this.popup[key] = 'none'
                },200);
            },
            reAddress(index) {
                this.userAddress = this.userAllAddress[index]
                this.hide('express')
            }
		}
	}
</script>

<style>

</style>
