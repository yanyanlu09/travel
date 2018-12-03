<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekens></home-weekens>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekens from './components/Weekens'
export default{
	name:'Home',
	components:{
		HomeHeader:HomeHeader,
		HomeSwiper:HomeSwiper,
		HomeIcons:HomeIcons,
		HomeRecommend:HomeRecommend,
		HomeWeekens:HomeWeekens
	}
}
</script>

<style>
	.home{
		font-size:23px;
	}
</style> 