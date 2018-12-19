<template>
	<div class="container" @click="handGallaryClick()">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide v-for="(item,index) of imgs" :key="index">
			    	<img class="swiper-image" :src="item">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CommonGallary',
		data () {
			return {
				swiperOptions :{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					// 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
					observer:true,
					// 当Swiper的父元素变化时，例如window.resize，Swiper更新。
					observeParents:true
				}
			}
		},
		props: {
			imgs: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods:{
			handGallaryClick () {
				this.$emit('gallaryClick')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		display:flex
		flex-direction:column
		justify-content:center
		z-index:99
		position:fixed
		left:0
		top:0
		right:0
		bottom:0
		background:#000
		.wrapper
			width:100%
			height:0
			padding-bottom:100%
			.swiper-image
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem

</style>
