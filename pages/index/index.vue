<template>
    <view>
        <!-- 轮播图 -->
        <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
            <swiper-item v-for="(carousel, carouselIndex) in carouselList" :key="carouselIndex">
                <image :src="serverUrl + carousel.chartPath" lazy-load="true" style="height: 350upx;" mode=""></image>
            </swiper-item>
        </swiper>
        <!-- 功能分块 -->
        <view class="row j-center m-2" style="background-color: white;">
            <view class="span-4 d-flex flex-column j-center a-center py-1">
                <image src="../../static/image/images/indexnav/1.png" mode="widthFix" style="width: 60upx; height: 60upx;" class="image" @click="tetx"></image>
                <text class="font-sm">新品发布</text>
            </view>

            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/2.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">小米众筹</text>
            </view>
            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/3.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">以旧换新</text>
            </view>
            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/4.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">1分拼团</text>
            </view>
            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/5.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">超值特卖</text>
            </view>

            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/6.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">小米秒杀</text>
            </view>
            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/7.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">真心想要</text>
            </view>
            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/8.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">电视热卖</text>
            </view>
            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/9.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">家电热卖</text>
            </view>
            <view class="span-4 d-flex flex-column j-center a-center py-3">
                <image src="../../static/image/images/indexnav/10.gif" mode="widthFix" style="width: 60upx; height: 60upx;" class="image"></image>
                <text class="font-sm">米粉卡</text>
            </view>
        </view>
        <!-- 分割线 -->
        <divider />
        <!-- 三图 -->
        <view class="d-flex">
            <image src="../../static/image/images/demo/demo1.jpg" lazy-load style="width: 373rpx; height: 530rpx;border-right: 2upx solid #F5F5F5;"></image>
            <view class="d-flex flex-column">
                <image src="../../static/image/images/demo/demo2.jpg" style="width: 375rpx;height: 267rpx;border-bottom: 2rpx solid #F5F5F5;"></image>
                <image src="../../static/image/images/demo/demo3.jpg" style="width: 375rpx;height: 264rpx;"></image>
            </view>
        </view>

        <divider />
        <!-- 卡片 -->
        <!-- <card :bodyCover="CoverUrl" :headTitle="Title"></card> -->
        <card>
            <block v-slot="{ title }">热卖商品</block>
            <image src="../../static/image/images/bg.jpg" mode="widthFix"></image>
        </card>
        <!-- 列表 -->
        <view class="row justify-between">
            <block v-for="(item, itemIndex) in commonList" :key="itemIndex">
                <shop-list :item="item" :index="itemIndex" />
            </block>
        </view>
    </view>
</template>

<script>
import card from '../../components/common/card.vue';
import price from '@/components/common/price.vue';
import shopList from "../../components/shopList.vue"
export default {
    data() {
        return {
            carouselList: [],
            serverUrl: 'http://192.168.2.233:8081',
            CoverUrl: '/static/image/images/demo/search-banner.png',
            Title: '热卖商品',
            commonList: [
                {
<<<<<<< HEAD
                    cover: '/static/image/images/demo/cate_01.png',
=======
                    cover: '../../static/image/images/demo/cate_01.png',
>>>>>>> msqx-dev
                    title: '王源V8',
                    desc: '这颜值你不买？',
                    oprice: 9999,
                    pprice: 998
                },
                {
<<<<<<< HEAD
                    cover: '/static/image/images/demo/cate_01.png',
=======
                    cover: '../../static/image/images/demo/cate_01.png',
>>>>>>> msqx-dev
                    title: '王源V8',
                    desc: '这颜值你不买？',
                    oprice: 9999,
                    pprice: 998
                },
                {
<<<<<<< HEAD
                    cover: '/static/image/images/demo/cate_01.png',
=======
                    cover: '../../static/image/images/demo/cate_01.png',
>>>>>>> msqx-dev
                    title: '王源V8',
                    desc: '这颜值你不买？',
                    oprice: 9999,
                    pprice: 998
                },
                {
<<<<<<< HEAD
                    cover: '/static/image/images/demo/cate_01.png',
=======
                    cover: '../../static/image/images/demo/cate_01.png',
>>>>>>> msqx-dev
                    title: '王源V8',
                    desc: '这颜值你不买？',
                    oprice: 9999,
                    pprice: 998
                },
                {
<<<<<<< HEAD
                    cover: '/static/image/images/demo/cate_01.png',
=======
                    cover: '../../static/image/images/demo/cate_01.png',
>>>>>>> msqx-dev
                    title: '王源V8',
                    desc: '这颜值你不买？',
                    oprice: 9999,
                    pprice: 998
<<<<<<< HEAD
                },{
                    cover: '/static/image/images/demo/cate_01.png',
=======
                },
                {
                    cover: '../../static/image/images/demo/cate_01.png',
>>>>>>> msqx-dev
                    title: '王源V8',
                    desc: '这颜值你不买？',
                    oprice: 9999,
                    pprice: 998
                }
<<<<<<< HEAD
                
=======
>>>>>>> msqx-dev
            ]
        };
    },
    components: {
        card,
        price,
        shopList,
    },
    onLoad() {
        let serverUrl = this.serverUrl;
        let me = this;
        uni.request({
            url: `${serverUrl}/index/carousel/list`,
            method: 'POST',
            success(res) {
                me.carouselList = res.data.data.rows;
            }
        });
        // #ifdef APP-PLUS
        var currentWebview = this.$mp.page.$getAppWebview();
        let tn = currentWebview.getStyle().titleNView;
        tn.searchInput.placeholder = 'Gemini';
        currentWebview.setStyle({
            titleNView: tn
        });
        // console.log(currentWebview.getStyle().titleNView);
        // currentWebview.setTitleNViewSearchInputText("hello")
        // console.log(currentWebview.getTitleNViewSearchInputText());

        // #endif
    },
    onShow() {},
    methods: {
    }
};
</script>

<style>
  
</style>
