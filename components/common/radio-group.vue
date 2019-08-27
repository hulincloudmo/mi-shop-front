<template>
	<view class="row">
		<view class="span24-8 px-2 mb-2" 
		v-for="(item,index) in label.list" :key="index">
			<view class="rounded px-2 py-1 bg-light-secondary font-sm text-center border"
			:class="label.selected === index ? 'radio-active':'border-light-secondary'"
<<<<<<< HEAD
			@tap="changeRadio(index)">
=======
			@tap="changeRadio(item,index)">
>>>>>>> msqx-dev
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: Object,
		},
		methods: {
<<<<<<< HEAD
			changeRadio(index) {
=======
			changeRadio(item,index) {
>>>>>>> msqx-dev
				this.$emit('update:selected',index)
			}
		},
	}
</script>

<style scoped>
.radio-active{
	background: #FCE0D5!important;
	color: #EB7320!important;
	border-color: #EB7320!important;;
}
</style>
