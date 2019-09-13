<template>
	<view class="p-2" style="background-color: #F5F5F5;height: 100%;">
		 <block v-for="(item,index) in msgList" :key="index">
             <view class="mb-2 p-2 bg-white border" hover-class="bg-light" @tap="openDetail(item)">
                 <view class="text-dark font-md">{{item.title}}</view>
                 <view class="font text-light-muted">
                     {{item.msg}}
                 </view>
                 <view class="font text-light-muted">{{item.create_time}}</view>
             </view>
         </block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgList:[
                    {
                        title: "陌上花开，可缓缓归矣",
                        msg: "陌上青夏",
                        create_time: "9月"
                    }
                ]
			}
		},
		methods: {
			openDetail(nav) {
                uni.navigateTo({
                    url: '/pages/msg-detail/msg-detail?detail=' + JSON.stringify(nav)
                })
            }
		}
	}
</script>

<style>

</style>
