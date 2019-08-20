<template>
		    <view class="d-flex" style="box-sizing: border-box; height: 100%;">
		        <scroll-view scroll-y class="border-right border-light-secondary"  style="flex: 1;height: 100%;background-color: white;">
		            <view class="py-1 d-flex a-center j-center left-scroll-item" v-for="(item,index) in slideList" :key="index" style="height: 50px;">
                            <view class="py-1 font text-muted cate" @tap="changeActive(index)" :class="activeIndex === index? 'silde-active' : ''">
                                {{item.name}}
                            </view>
		            </view>
		        </scroll-view>
		        
		       
                    <scroll-view scroll-y style=" flex:3.5; height: 100%" :scroll-top="scrollTop" @scrolltolower="mainToLower">
                        <view id="text" class="px-2 py-2">
                            <image lazy-load src="/static/image/images/bg.jpg"  mode="widthFix" style="border-radius: 26rpx;"></image>
                        </view>
                                    <uni-card
                                        v-for="(item,index) in mainList"
                                        :key="index"
                                        :title="item.title"
                                        mode="basic"
                                        :is-shadow="true"
                                        :extra="item.extra"
                                        :note="item.note"
                                    >
                                    <view class="row">
                                        <view class="span24-8 d-flex flex-column a-center" v-for="(good,goodIndex) in item.goodsList" :key="goodIndex">
                                            <image :src="good.src" mode="widthFix"></image>
                                            <text>{{good.name}}</text>
                                        </view>
                                    </view>
                                    </uni-card>
                   
                    </scroll-view>
                <view>
                    
                </view>
		    </view>
</template>

<script>
    import uniCard from '@/components/uni-ui/uni-card/uni-card.vue'
	export default {
        components:{
            uniCard
        },
		data() {
			return {
                activeIndex:0,
				slideList:[],
                mainList:[],
                slideDomsTop:[],
                mainDomsTop:[],
                mainScollTop: 0,
                scrollTop:0
			}
		},
        onLoad() {
                for (var i = 0; i < 20; i++) {
                        this.slideList.push({
                          name: '家居新品'
                                        })
                }
                this.mainList.push(
                        {
                            title:"为你推荐",
                            extra:"by-陌上青夏",
                            note:"陌上花开，可缓缓归矣",
                            goodsList:[
                               {    
                                   src:'/static/image/images/demo/cate_01.png',
                                   name:'手机'
                                },
                                {
                                    src:'/static/image/images/demo/cate_01.png',
                                    name:'手机'
                                 },
                                 {    
                                   src:'/static/image/images/demo/cate_01.png',
                                   name:'手机'
                                }
                            ]
                        },
                        {
                            title:"为你推荐",
                            extra:"by-陌上青夏",
                            note:"陌上花开，可缓缓归矣",
                            goodsList:[
                               {    
                                   src:'/static/image/images/demo/cate_01.png',
                                   name:'手机'
                                },
                                {
                                    src:'/static/image/images/demo/cate_01.png',
                                    name:'手机'
                                 },
                                 {    
                                   src:'/static/image/images/demo/cate_01.png',
                                   name:'手机'
                                }
                            ]
                        },
                        {
                            title:"为你推荐",
                            extra:"by-陌上青夏",
                            note:"陌上花开，可缓缓归矣",
                            goodsList:[
                               {    
                                   src:'/static/image/images/demo/cate_01.png',
                                   name:'手机'
                                },
                                {
                                    src:'/static/image/images/demo/cate_01.png',
                                    name:'手机'
                                 },
                                 {    
                                   src:'/static/image/images/demo/cate_01.png',
                                   name:'手机'
                                }
                            ]
                        }
                )
        },
        onReachBottom() {
            console.log("chufadi");
        },
        methods: {
			changeActive(index) {
                this.activeIndex = index
                this.scrollTop = 10
            },
            mainToUpper() {
                this.activeIndex--
            },
            mainToLower() {
                this.activeIndex++
                this.scrollTop = 10
            }
		}
	}
</script>

<style>
.silde-active{
    color: white;
    border-radius: 300rpx;
    background-color: red;
}
.cate {
    width: 128rpx;
    text-align: center;
    font-size:15px;
}
</style>
