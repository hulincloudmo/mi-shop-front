<template>
	<view>
        <card :headTitle="item.label" v-for="(item,index) in list" :key="index">
		
                <uni-list-item :title="value.title" v-for="(value,valueIndex) in item.value" :key="valueIndex" @tap="navSet(`${value.path}`)"></uni-list-item>
        
        </card>
	</view>
</template>

<script>
    import card from '@/components/common/card.vue'
    import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
    
	export default {
        components:{
            card,
            uniListItem,
            
        },
		data() {
			return {
				list:[
					{
						label:"账号管理",
						value:[
							{ title:"个人资料",path:"user-data" },
							{ title:"收货地址",path:"user-address" },
						]
					},
					{
						label:"关于",
						value:[
							{ title:"关于商城",path:"" },
							{ title:"意见反馈",path:"" },
							{ title:"协议规则",path:"" },
							{ title:"资质证件",path:"" },
							{ title:"用户协议",path:"" },
							{ title:"隐私政策",path:"" },
						]
					},
				]
			}
		},
		methods: {
			navSet(path) {
                uni.navigateTo({
                    url: `/pages/user-set/set/${path}/${path}`
                })
            }
		}
	}
</script>

<style>

</style>
