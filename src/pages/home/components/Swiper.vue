<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <swiper-slide>
	    	<img class="swiper-image" src="http://img1.qunarzz.com/piao/fusion/1811/9a/d7c5938126f72902.jpg_890x330_2e5663f2.jpg">
	    </swiper-slide>
	    <swiper-slide>
	    	<img class="swiper-image" src="http://img1.qunarzz.com/piao/fusion/1811/6f/58c1855640b17202.jpg_890x330_20a88210.jpg">
		</swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
export default{
	name:'HomeSwiper',
	data () {
		return {
			swiperOption: {
				pagination:'.swiper-pagination'
			}
		}
	}
}
</script>

<style lang='stylus' scoped>
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:37.08%
		cursor:pointer
		.swiper-image
			width:100%
</style>