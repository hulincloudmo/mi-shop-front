<template>
    <view class="d-flex line-h" :class="priceSize + ' ' + fontColor">
    	<text class="a-self-start" :class="unitSize">￥</text><slot />
    </view>
</template>

<script>
    export default {
        props:{
        	priceSize:{
        		type:String,
        		default:"font-sm"
        	},
        	unitSize:{
        		type:String,
        		default:"font-sm"
        	},
            fontColor: {
                type: String,
                default: "main-text-color"
            }
        }
    }
</script>

<style>
</style>
