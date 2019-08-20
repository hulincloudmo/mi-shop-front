<template>
	<view >
		<uni-nav-bar  :fixed="true" :right-text="shopEdit? '完成': '编辑'" title="购物车" :statusBar="true" @click-right="shopEdit =! shopEdit" :shadow="false"></uni-nav-bar>
        <!-- 空的购物车 -->
        <view v-if="!Shop" class="py-5 d-flex a-center j-center">
            <view class="iconfont icon-gouwuche text-light-muted" style="font-size: 30rpx;">
                <text class="text-light-muted mx-2">购物车还是空的呢~</text>
            </view>
            <view class="px-2 py-1 border border-light-secondary" hover-class="bg-light-secondary">
                去逛一圈
            </view>
        </view>
        <!-- 购物车选择 -->
        <view v-if="Shop" class="row flex-column mt-3">
            <view class="d-flex" style="background-color: white;" v-for="(item,index) in shoppingCartList" :key="index">
                <view class="col-2 d-flex a-center j-center">
                    <label class="radio d-flex a-center j-center" style="width: 100rpx;height: 100rpx;" @click="item.checked = !item.checked">
                        <radio value="1" color="#FD6801" :checked="item.checked" />
                    </label>
                </view>
                <view class="col-10 d-flex">
                    <image 
                    src="/static/images/demo/cate_01.png" 
                    mode="widthFix" 
                    style="width: 180rpx;height: 180rpx;"
                    class="border border-light-secondary radius p-2 mr-2"
                    ></image>
                    <view class="flex-1">
                        <view class="d-flex flex-column">
                            <view class="text-dark" style="font-size: 28rpx;">
                                {{item.good_name}}
                            </view>
                            <view class="d-flex text-light-muted">
                                <text v-for="(attr,attrIndex) in item.attrs" :key="attrIndex" class="mr-1">{{attr.list[attr.selected].name}}</text>
                            </view>
                            <view class="mt-auto d-flex j-sb">
                                <price class="mt-1"><view style="font-size: 17px;">
                                    {{item.good_price}}
                                </view></price>
                                <view class="a-self-end" style="margin-top: 15px;">
                                    <uni-number-box :min="item.min_num" :max="item.max_num" :value="item.num"></uni-number-box>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <!-- 底部工具条 -->
        <view class="d-flex a-center" style="height: 100rpx;">
            
        </view>
	</view>
</template>

<script>
    import { mapState,mapGetters } from 'vuex'
    import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
    import price from "@/components/common/price.vue"
    import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	export default {
        components:{
          uniNavBar,
          price,
          uniNumberBox
        },
		data() {
			return {
				shopEdit: false,
                checked: false,
                Shop: true,
                shoppingCartList:[
                    {
                        checked:false,
                        id: "text",
                        good_name: "小米9",
                        attrs:[
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
                        good_price: "996",
                        num: "1",
                        min_num: "1",
                        max_num: "5",
                        extra: [
                            {
                                title: "服务",
                                content: "意外保证",
                                price: "99起"
                            }
                        ]
                    }
                ]
			}
		},
        onLoad() {
          console.log(JSON.stringify(this.$store.state)); 
           console.log(JSON.stringify(this.list));
        },
        computed:{
            ...mapState({
                list:state=>state.cart.shopList
            })
        },
		methods: {
			selectItem() {
                this.checked = !this.checked
            }
		}
	}
</script>

<style>

</style>
