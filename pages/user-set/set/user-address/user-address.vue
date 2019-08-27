<template>
	<view>
        <block v-for="(item,index) in list" :key="index">
            <uni-swipe-action :options="options2" @click="bindClick($event,index)">
                <uni-list-item @tap="addressEdit(index)">
                    <view class="d-flex flex-column text-secondary">
                        <view class="d-flex a-center">
                            <text class="main-text-color">收货人:</text>
                            <text>{{item.name}}</text>
                            <text class="main-text-color ml-2" v-if="item.isDefault">[默认]</text>
                        </view>
                        <view class="d-flex a-center">
                            <text>联系方式:{{item.phone}}</text>
                        </view>
                        <view class="d-flex a-center">
                            <text>收货地址:{{item.area+item.address}}</text>
                        </view>
                    </view>
                </uni-list-item>
            </uni-swipe-action>
        </block>
	</view>
</template>

<script>
    import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
    import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue'
    import { mapState,mapMutations } from 'vuex'
	export default {
        components:{
            uniListItem,
            uniSwipeAction
        },
		data() {
			return {
                
				options2: [{
					text: '修改',
					style: {
						backgroundColor: '#007aff'
					}
				}, 
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			}
		},
        computed:{
          ...mapState({
              'list': state=>state.address.addressList
          })  
        },
        onNavigationBarButtonTap(e) {
            if(e.index === 0) {
                uni.navigateTo({
                    url: '/pages/user-set/set/user-address/user-address-new/user-address-new'
                })
            }
        },
		methods: {
            ...mapMutations([
               'delAddress' 
            ]),
			addressEdit(index) {
                uni.navigateTo({
                    url: `/pages/user-set/set/user-address/user-address-edit/user-address-edit?form=${JSON.stringify(this.list[index])}&editIndex=${index}`
                })
            },
            bindClick(e,index) {
                let me = this;
            	if(e.index === 1) {
                    uni.showModal({
                        content: '删除该收货地址？',
                        success: function (res) {
                            if (res.confirm) {
                                uni.showToast({
                                    title: "删除成功"
                                })
                                me.delAddress(index)
                            } else if (res.cancel) {
                                
                            }
                        }
                    });
                    
                } else if(e.index === 0) {
                   setTimeout(()=>{
                       uni.navigateTo({
                           url: `/pages/user-set/set/user-address/user-address-edit/user-address-edit?form=${JSON.stringify(this.list[index])}&editIndex=${index}`
                       })
                   },50)
                }
            },
		}
	}
</script>

<style>

</style>
