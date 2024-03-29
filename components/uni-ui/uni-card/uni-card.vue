<template>
	<view style="margin: 20rpx;" :class="{ 'uni-card--full': isFull === true || isFull === 'true', 'uni-card--shadow': isShadow === true || isShadow === 'true' }" class="uni-card" @click="onClick">
		<view v-if="mode === 'style'" class="uni-card__thumbnailimage">
			<image :src="thumbnail" mode="aspectFill" />
			<view v-if="title" class="uni-card__thumbnailimage-title">{{ title }}</view>
		</view>
		<view v-if="mode === 'title'" class="uni-card__title">
			<view class="uni-card__title-header">
				<image :src="thumbnail" mode="aspectFill" />
			</view>
			<view class="uni-card__title-content">
				<view class="uni-card__title-content-title">{{ title }}</view>
				<view class="uni-card__title-content-extra">{{ extra }}</view>
			</view>
		</view>
		<!-- 标题 -->
		<view v-if="mode === 'basic' && title" class="uni-card__header">
			<view v-if="thumbnail" class="uni-card__header-extra-img-view">
				<image :src="thumbnail" class="uni-card__header-extra-img" />
			</view>
			<view style="font-weight: bold;" class="uni-card__header-title-text">{{ title }}</view>
			<view v-if="extra" class="uni-card__header-extra-text">{{ extra }}</view>
		</view>
		<!-- 内容 -->
		<view class="uni-card__content uni-card__content--pd">
			<view v-if="mode === 'style' && extra" class="uni-card__content-extra">{{ extra }}</view>
			<slot />
		</view>
		<!-- 底部 -->
		<view v-if="note" class="uni-card__footer">
			<slot name="footer">
				<text>{{ note }}</text>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniCard',
		props: {
			title: {
				type: String,
				default: ''
			}, // 标题
			extra: {
				type: String,
				default: ''
			}, // 扩展信息
			note: {
				type: String,
				default: ''
			}, // Tips
			thumbnail: {
				type: String,
				default: ''
			}, // 缩略图
			// 卡片模式 ， 可选值 basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片
			mode: {
				type: String,
				default: 'basic'
			},
			isFull: {
				// 内容区域是否通栏
				type: Boolean,
				default: false
			},
			isShadow: {
				// 是否开启阴影
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-card {
		margin-left: 24rpx;
		margin-right: 24rpx;
		background: #fff;
		box-shadow: none;
		position: relative;
		display: flex;
		flex-direction: column;
		border: 1px #ddd solid;
		border-radius: 6rpx;
		overflow: hidden;
        border-radius: 26rpx!important;
	}

	.uni-card__thumbnailimage {
		position: relative;
		height: 300rpx
	}

	.uni-card__thumbnailimage image {
		width: 100%;
		height: 100%
	}

	.uni-card__thumbnailimage-title {
		position: absolute;
		bottom: 0;
		padding: 15rpx 20rpx;
		font-size: 32rpx;
		width: 100%;
		color: #fff
	}

	.uni-card__title {
		display: flex;
		padding: 20rpx;
		border-bottom: 1px #f5f5f5 solid
	}

	.uni-card__title-header {
		flex-shrink: 0;
		width: 80rpx;
		height: 80rpx;
		overflow: hidden;
		border-radius: 10rpx
	}

	.uni-card__title-header image {
		width: 100%;
		height: 100%
	}

	.uni-card__title-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 20rpx;
		height: 80rpx;
		overflow: hidden
	}

	.uni-card__title-content-title {
		font-size: 30rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.uni-card__title-content-extra {
		font-size: 26rpx;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.uni-card__header {
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 16rpx;
		align-items: center
	}

	.uni-card__header:after {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}

	.uni-card__header-title {
		flex: 1;
		margin-right: 16rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center
	}

	.uni-card__header-title-text {
		font-size: 32rpx;
		flex: 1;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden
	}

	.uni-card__header-extra-img-view {
		display: flex
	}

	.uni-card__header-extra-img {
		height: 40rpx;
		width: 40rpx;
		margin-right: 16rpx
	}

	.uni-card__header-extra-text {
		flex: 0 0 auto;
		width: 30%;
		margin-left: 16rpx;
		font-size: 28rpx;
		text-align: right;
		color: #666;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden
	}

	.uni-card__content {
		color: #555
	}

	.uni-card__content--pd {
		padding: 16rpx
	}

	.uni-card__content-extra {
		padding-bottom: 20rpx;
		color: #999
	}

	.uni-card__footer {
		padding: 20rpx;
		color: #999;
		font-size: 24rpx;
		border-top: 1px #f5f5f5 solid
	}

	.uni-card--shadow {
		border: 1px #ddd solid;
		box-shadow: 0 1px 2px rgba(0, 0, 0, .2)
	}

	.uni-card--shadow:after {
		border: none
	}

	.uni-card--full {
		margin: 0;
		border-left: none;
		border-right: none;
		border-radius: 0
	}
</style>