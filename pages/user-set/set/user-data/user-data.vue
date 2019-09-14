<template>
	<view>
		<divider></divider>
		<uni-list-item title="头像">
			<block slot="rightContent">
				<image src="/static/images/demo/demo6.jpg"
				style="height: 90rpx;width: 90rpx;"
				class="radius-circle border border-light"></image>
			</block>
		</uni-list-item>
		<uni-list-item title="姓名">
			<block slot="rightContent">
				陌上青夏
			</block>
		</uni-list-item>
		<uni-list-item title="性别">
            <block slot="rightContent">
            	我是可爱的男孩子
            </block>
        </uni-list-item>
		<uni-list-item title="生日">
            <block slot="rightContent">
            	1999-06-14
            </block>
        </uni-list-item>
		<divider></divider>
		<uni-list-item title="修改密码"></uni-list-item>
		<uni-list-item title="密保手机">
            <block slot="rightContent">
            	************
            </block>
        </uni-list-item>
	</view>
</template>

<script>
    import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
        components:{
            uniListItem
        },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
