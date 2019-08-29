<template>
	<view>
		<uni-list-item :hoverEffect="false" :showArrow="false">
            <view class="d-flex a-center p-2 font">
                <text class="text-light-muted font-sm">收货人</text>
                <input class="ml-2 mr-auto" type="text"  v-model="form.name" />
                <block class="" slot="right">
                    <text class="iconfont icon-VIP"></text>
                </block>
            </view>
        </uni-list-item>
        <uni-list-item :hoverEffect="false"  class="position-relative">
            <view class="d-flex a-center p-2 font bg-white" style="width: 550rpx;">
                <text class="text-light-muted font-sm">手机号码</text>
                <input class="ml-2 mr-auto" type="string"  v-model="form.phone" />
            </view>
            <block slot="right">
                    <text class="ml-2 position-absolute" style="left: 620rpx;top: 47rpx;">+86</text>
                </block>
        </uni-list-item>
        <uni-list-item :hoverEffect="false"  @tap="picker()">
            <view class="d-flex a-center p-2 font bg-white">
                <text class="text-light-muted">所在地区</text>
               <input class="ml-2" disabled type="text" placeholder="请选择所在地区" v-model="form.area" />
            </view>
        </uni-list-item>
        <uni-list-item :hoverEffect="false" :showArrow="false">
            <view class="d-flex a-center p-2 font">
                <text class="text-light-muted font-sm">详细收货地址</text>
                <input class="ml-2 mr-auto" type="text" v-model="form.address" />
                <block class="" slot="right">
                    <text class="iconfont icon-VIP"></text>
                </block>
            </view>
        </uni-list-item>
        <view class="p-4 border-bottom bg-white d-flex a-center">
            <text class="font-sm text-secondary mr-1 mr-auto">是否设置默认收货地址:</text>
            <switch color="#FD6801" :checked="form.isDefault" @change="form.isDefault = $event.detail.value" />
        </view>
        
        <view class="p-3">
            <view class="text-center w-100 main-bg-color text-white font-md radius py-2" hover-class="main-bg-hover-color" @tap="confirm">
                保存
            </view>
        </view>
        <!-- 各类弹出式组件 -->
        <template>
            <!-- 三级城市联动 -->
                <city-picker ref="picker" @confirm="pick" mode="region"></city-picker>
        </template>
	</view>
</template>

<script>
    const formVal = require("@/common/formValidation.js")
    import cityPicker from '@/components/w-picker/w-picker.vue'
    import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
    import { mapMutations,mapActions } from 'vuex'
	export default {
        components:{
            cityPicker,
            uniListItem,
            
        },
		data() {
			return {
                form: {
                    name: "",
                    phone: "",
                    area: "",
                    address: "",
                    isDefault: true
                },
                editIndex: ""
			}
		},
        onLoad(e) {
            if(e.form && e.editIndex) {
                let res = JSON.parse(e.form)
                this.editIndex = JSON.parse(e.editIndex)
                this.form = res
            }
        },
		methods: {
            ...mapMutations([
                
            ]),
            ...mapActions([
                'updateAddressAction'
            ]),
			picker() {
                this.$refs.picker.show();
            },
            pick(e) {
                this.form.area=e.result
            },
            confirm() {
                let me = this
                let form = this.form;
                let rules = [
                    {
                        name: "name",
                        rule: ["required", "minLength:2"],
                        msg: ["请输入收货人姓名","姓名必须2个字符以上"]
                    },
                    {
                        name: "phone",
                        rule: ['required', 'isMobile'],
                        msg: ['请输入手机号', '请输入合法的手机号']
                    },
                    {
                        name: "area",
                        rule: ['required'],
                        msg: ['请输入您的地址']
                    },
                    {
                        name: "address",
                        rule: ['required'],
                        msg: ['请输入您的详细收货地址']
                    }
                ]
                let checkRes = formVal.validation(form,rules);
                if(!checkRes) {
                    this.updateAddressAction({
                        index: me.editIndex,
                        item: me.form
                    })
                    uni.showToast({
                        title: "保存成功"
                    })
                    uni.navigateBack({
                        delta: 1
                    })
                } else {
                    uni.showToast({
                        title: checkRes
                    })
                }
            }
		}
	}
</script>

<style>
page{
    background-color: #F1F1F1;
}
</style>
