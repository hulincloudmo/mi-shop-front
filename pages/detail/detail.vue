<template>
	<view>
        <!-- 详情 -->
		<swiperImage :resdata="banners" height="750" preview />
        <!-- 基础详情 -->
        <view class="p-2">
            <view class="font-md">{{detail.title}}</view>
            <view class="font-sm text-light-muted mb-3">
                {{detail.desc}}
            </view>
            <price>{{detail.pprice}}</price>
        </view>
        <!-- 产品亮点 -->
        <bright-points :brightList="baseAttrs" />
        <!-- 属性选择 -->
        <view class="p-2">
            <view class="round border bg-light-secondary">
                <uni-list-item @click="show('attr')">
                    <text class="mr-2 text-muted">已选</text>
                    <text class="">火焰红</text>
                </uni-list-item>
                
                <uni-list-item @click="show('express')">
                    <text class="mr-2 text-muted">配送</text>
                    <text class="mr-2">北京 东城</text>
                    <text class="main-text-color">现货</text>
                </uni-list-item>
                
               <uni-list-item :showArrow="false" @tap="show('serve')">
                   <view class="d-flex">
                       <view class="text-muted d-flex mr-2">
                           <view class="iconfont icon-finish main-text-color"></view>
                           <text class="ml-1">陌上青夏</text>
                       </view>
                       <view class="text-muted d-flex mr-2">
                           <view class="iconfont icon-finish main-text-color"></view>
                           <text class="ml-1">陌上青夏</text>
                       </view>
                       <view class="text-muted d-flex mr-2">
                           <view class="iconfont icon-finish main-text-color"></view>
                           <text class="ml-1">陌上青夏</text>
                       </view>
                   </view>
               </uni-list-item>
            </view>
        </view>
        <!-- 横向滚动评论 -->
        <view class="p-2">
            <scroll-comment :comments="comments"></scroll-comment>
        </view>
        <!-- 详情，富文本渲染 -->
        <view class="p-2" style="line-height: 0;padding: 0;">
           		<u-parse :content="article" @preview="preview" @navigate="navigate" /> 
        </view>
        <!-- 热门推荐 -->
        <card headTitle="热门推荐" :headTitleWeight="false">
            <view class="row -j-sb">
                <common-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index"></common-list>
            </view>
        </card>
         <!-- 底部操作条 -->
        <bottom-operate />
        
        <!-- 弹出框 -->
        <bottom-popup :popupClass="popup.attr" @hide="hide('attr')">
            <view class="d-flex a-center" style="height: 275rpx;">
                <image src="../../static/images/demo/list/1.jpg" mode="widthFix" style="width: 180rpx;height: 180rpx;"></image>
                <view class="pl-2">
                    <price priceSize="font" :unitSize="font">2365</price>
                    <text class="d-block">火焰红 64GB 标配</text>
                </view>
            </view>
            
            <scroll-view scroll-y class="w-100" style="height: 660rpx;">
                <card v-for="(item,index) in selects" :key="index" :headTitle="item.title" :headTitleWeight="false" :headBorderBottom="false">
                    <radio-group :label="item" :selected.sync='item.selected'></radio-group>
                </card>
                <view class="d-flex j-sb a-center">
                    <text>购买数量</text>
                    <uni-number-box :min="1" :value="detail.num" @change="detail.num = $event"></uni-number-box>
                </view>
            </scroll-view>
            <view @tap.stop="hide('attr')" class="main-bg-color text-white font d-flex a-center j-center radius" style="height: 90rpx;margin-left: -30rpx;margin-right: -30rpx;margin-bottom: -30rpx;margin-top: 14rpx;">
                加入购物车
            </view>
        </bottom-popup>
        <bottom-popup :popupClass="popup.express" @hide="hide('express')">
            <view class="d-flex a-center j-center font border-bottom border-light-secondary" style="height: 100rpx;">收货地址</view>
            <scroll-view scroll-y class="w-100" style="height: 835rpx;">
              <uni-list-item>
                  <view class="iconfont icon-dingwei font-weight">陌上青夏</view>
                  <view class="font-sm text-light-muted">陌上花开，可缓缓归矣</view>
              </uni-list-item>
            </scroll-view>
        </bottom-popup>
        <bottom-popup :popupClass="popup.serve" @hide="hide('serve')">
            <view class="d-flex a-center j-center font border-bottom border-light-secondary" style="height: 100rpx;">产品说明</view>
            <scroll-view scroll-y class="w-100" style="height: 835rpx;">
              <view class="py-1">
                  <view class="d-flex a-center">
                      <view class="iconfont icon-finish main-text-color mr-2"></view>   
                      陌上青夏
                  </view>
                  <text class="text-light-muted" style="margin-left: 50rpx;">
                      我就是不包邮
                  </text>
              </view>
            </scroll-view>
        </bottom-popup>
    </view>
</template>

<script>
    import swiperImage from "@/components/index/swiper-image.vue"
    import price from "@/components/common/price.vue"
    import brightPoints from "@/components/detail/brightPoints.vue"
    import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
    import uParse from "@/components/uni-ui/uParse/src/wxParse.vue"
    import card from "@/components/common/card.vue"
    import commonList from "@/components/common/common-list.vue"
    import bottomOperate from "@/components/detail/bottomOperate.vue"
    import bottomPopup from "@/components/common/bottom-popup.vue"
    import radioGroup from "@/components/common/radio-group.vue"
    import scrollComment from "@/components/detail/comment-list.vue"
    import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
    var htmlString = `<p>
		<img src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp">
		<img src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp">
		<img src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp">
		<img src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp">
		<img src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp">
		<img src="https://i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp">
		<img src="https://i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp">
	</p>
        `
	export default {
        components:{
            swiperImage,
            price,
            brightPoints,
            uniListItem,
            uParse,
            card,
            commonList,
            bottomOperate,
            bottomPopup,
            radioGroup,
            uniNumberBox,
            scrollComment
        },
		data() {
			return {
                article:htmlString,
                popup:{
                    attr: "none",
                    express: "none",
                    serve: "none"
                },
                comments:[
                	{
                		userpic:"/static/images/demo/demo6.jpg",
                		username:"陌上青夏",
                		create_time:"2019-07-31",
                		goods_num:123,
                		context:"陌上青夏",
                		imglist:[
                			"/static/images/demo/demo6.jpg",
                			"/static/images/demo/demo6.jpg",
                			"/static/images/demo/demo6.jpg"
                		]
                	},
                	{
                		userpic:"/static/images/demo/demo6.jpg",
                		username:"陌上青夏",
                		create_time:"2019-07-31",
                		goods_num:123,
                		context:"陌上青夏",
                		imglist:[
                			"/static/images/demo/demo6.jpg",
                			"/static/images/demo/demo6.jpg",
                			"/static/images/demo/demo6.jpg"
                		]
                	},
                	{
                		userpic:"/static/images/demo/demo6.jpg",
                		username:"陌上青夏",
                		create_time:"2019-07-31",
                		goods_num:123,
                		context:"陌上青夏",
                		imglist:[
                			"/static/images/demo/demo6.jpg",
                			"/static/images/demo/demo6.jpg",
                			"/static/images/demo/demo6.jpg"
                		]
                	}
                ],
				banners:[
					{ src: 'https://i8.mifile.cn/v1/a1/6d13e060-d5c5-e610-88d0-80816fa2b0ce.webp'},
					{ src: 'https://i8.mifile.cn/v1/a1/aff0b715-e63a-68f3-91b0-46a22543555e.webp'}
				],
				detail:{
					title:"小米MIX3 6GB+128GB",
					desc:"磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电",
					pprice:3299,
                    max:100,
                    num:1
				},
                baseAttrs:[
                	{ icon:"icon-cpu",title:"CPU",desc:"骁龙845八核" },
                	{ icon:"icon-cpu",title:"CPU",desc:"骁龙845八核" },
                	{ icon:"icon-cpu",title:"CPU",desc:"骁龙845八核" },
                	{ icon:"icon-cpu",title:"CPU",desc:"骁龙845八核" },
                	{ icon:"icon-cpu",title:"CPU",desc:"骁龙845八核" },
                	{ icon:"icon-cpu",title:"CPU",desc:"骁龙845八核" },
                	{ icon:"icon-cpu",title:"CPU",desc:"骁龙845八核" },
                ],
                hotList:[
                    {
                    	cover:"/static/images/demo/list/1.jpg",
                    	title:"米家空调",
                    	desc:"1.5匹变频",
                    	oprice:2699,
                    	pprice:1399
                    },
                    {
                    	cover:"/static/images/demo/list/1.jpg",
                    	title:"米家空调",
                    	desc:"1.5匹变频",
                    	oprice:2699,
                    	pprice:1399
                    },
                    {
                    	cover:"/static/images/demo/list/1.jpg",
                    	title:"米家空调",
                    	desc:"1.5匹变频",
                    	oprice:2699,
                    	pprice:1399
                    },
                    {
                    	cover:"/static/images/demo/list/1.jpg",
                    	title:"米家空调",
                    	desc:"1.5匹变频",
                    	oprice:2699,
                    	pprice:1399
                    },
                    {
                    	cover:"/static/images/demo/list/1.jpg",
                    	title:"米家空调",
                    	desc:"1.5匹变频",
                    	oprice:2699,
                    	pprice:1399
                    },
                    {
                    	cover:"/static/images/demo/list/1.jpg",
                    	title:"米家空调",
                    	desc:"1.5匹变频",
                    	oprice:2699,
                    	pprice:1399
                    }
                ],
                selects:[
                	{
                		title:"颜色",
                		selected:0,
                		list:[
                			{name:"黄色"},
                			{name:"黑色"},
                			{name:"红色"},
                		]
                	},
                	{
                		title:"容量",
                		selected:0,
                		list:[
                			{name:"64GB"},
                			{name:"128GB"},
                		]
                	},
                	{
                		title:"套餐",
                		selected:0,
                		list:[
                			{name:"标配"},
                			{name:"套餐一"},
                			{name:"套餐二"},
                		]
                	}
                ],
		}
        },
        // 页面返回行为修改
        onBackPress() {
            for(let key in this.popup) {
                if (this.popup[key] !== 'none') {
                    this.hide(key)
                    return true;
                }
            }
        },
		methods: {
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
				uni.showModal({
					content : "点击链接为：" + href,
					showCancel:false
				})
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
            moveHandle() {
                
            }
		}
	}
</script>

<style>

</style>
