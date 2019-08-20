<template>
	<view>
		<view class="d-flex border-bottom border-top a-center" style="height: 100rpx;">
		   <view class="flex-1 d-flex a-center j-center" v-for="(item,index) in screen.list" :key="index" @tap="changeScreen(index)">
                <text :class="screen.currentIndex === index? 'main-text-color': 'text-muted'" >{{item.name}}</text>
                <view>
                    <view class="iconfont">
                        <view :class="item.status === 1? 'main-text-color': 'text-muted'" class="iconfont icon-paixu-shengxu line-h0 "></view>
                        <view :class="item.status === 2? 'main-text-color': 'text-muted'" class="icon-paixu-jiangxu line-h0 "></view>
                    </view>
                </view>
           </view>
           <view class="flex-1 d-flex a-center j-center main-text-color" @tap="showDrawer">
                <text>综合</text>
           </view>
		</view>
        <!-- 商品列表 -->
        <block v-for="(good,index) in goodsList" :key="index">
            <search-list :good="good" />
        </block>
       
        <!-- 右侧弹出抽屉 -->
        <uni-drawer :visible="show_drawer" mode="right" @close="showDrawer">
            <view class="p-3">
                <card :headTitle="item.title" :headTitleWeight="false" :headBorderBottom="false" v-for="(item,index) in searchFiter" :key="index">
                    <view class="row">
                        <view class="flex-1 px-1 mb-2" v-for="(content,contentIndex) in item.fiterItem" :key="contentIndex">
                            <view class="px-2 py-1 bg-light text-center" @tap="changeClass(index,contentIndex)" :class="content.status == 1 ? 'main-text-color': ''">
                                {{content.name}}
                            </view>
                        </view>
                    </view>
                    
                </card>
                <view class="d-flex position-fixed bottom-0 right-0 w-100 text-center">
                    <view class="flex-1 main-bg-color text-white font-sm py-2">确定</view>
                    <view class="flex-1 bg-light font-sm py-2">重置</view>
                </view>
            </view>
        </uni-drawer>
	</view>
    
</template>

<script>
    import uniDrawer from "@/components/uni-ui/uni-drawer/uni-drawer.vue"
    import card from '@/components/common/card.vue'
    import searchList from '@/components/search-list/search-list.vue'
	export default {
        components:{
          uniDrawer,
          card,
          searchList
        },
		data() {
			return {
                show_drawer: false,
				screen:{
					currentIndex:0,
					list:[
						{ name:"综合",status:1 },
						{ name:"销量",status:0 },
						{ name:"价格",status:0 },
					]
				},
                searchFiter:[
                    {
                            title: "服务",
                            rightIndex:0,
                            fiterItem: [
                                { name:'促销', status: 1 },
                                { name: '分期', status: 0 },
                                { name: '仅看有货', status: 0 }
                            ]
                        },
                        {
                            title: "分类",
                            rightIndex:0,
                            fiterItem: [
                                { name:'耳机',status:1 },
                                { name: '户外', status:0 },
                                { name: '配件', status:0 }
                            ]
                    }
                ],
                goodsList:[
                    { title:"可爱的米兔", titlepic:"/static/image/images/demo/demo6.jpg",desc:"送礼佳品 /价格实惠 /可播放音乐 /厉害就对了",good_price:"996", comment_num:"1300",praise_rate:"98%" },
                    { title:"可爱的米兔", titlepic:"/static/image/images/demo/demo6.jpg",desc:"送礼佳品 /价格实惠 /可播放音乐 /厉害就对了",good_price:"996", comment_num:"1300",praise_rate:"98%" },
                    { title:"可爱的米兔", titlepic:"/static/image/images/demo/demo6.jpg",desc:"送礼佳品 /价格实惠 /可播放音乐 /厉害就对了",good_price:"996", comment_num:"1300",praise_rate:"98%" },
                    { title:"可爱的米兔", titlepic:"/static/image/images/demo/demo6.jpg",desc:"送礼佳品 /价格实惠 /可播放音乐 /厉害就对了",good_price:"996", comment_num:"1300",praise_rate:"98%" },
                    { title:"可爱的米兔", titlepic:"/static/image/images/demo/demo6.jpg",desc:"送礼佳品 /价格实惠 /可播放音乐 /厉害就对了",good_price:"996", comment_num:"1300",praise_rate:"98%" }
                ]
			}
		},
        onLoad() {
            // if(this.searchFiter[0].fiterItem[0].text == undefined) {
            //     this.searchFiter[0].fiterItem[0]['text'] = 'text';
            //     
            // }
        },
		methods: {
			changeScreen(index) {
                if(index === this.screen.currentIndex ) {
                    this.screen.list[index].status = this.screen.list[index].status == 1? 2 : 1
                }    else {
                    this.screen.list[this.screen.currentIndex].status = 0;
                    this.screen.currentIndex = index;
                    this.screen.list[index].status = 1;
                }
            },
            showDrawer() {
                this.show_drawer = !this.show_drawer;
            },
            changeClass(index,contentIndex) {
                this.searchFiter[index].fiterItem[this.searchFiter[index].rightIndex].status = 0;
                this.searchFiter[index].rightIndex = contentIndex;
                this.searchFiter[index].fiterItem[contentIndex].status = 1;
            }
		}
	}
</script>

<style>

</style>
