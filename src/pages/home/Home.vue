<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekens :weekendList="weekendList"></home-weekens>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekens from './components/Weekens'
import axios from 'axios'
export default{
	name:'Home',
	components:{
		HomeHeader:HomeHeader,
		HomeSwiper:HomeSwiper,
		HomeIcons:HomeIcons,
		HomeRecommend:HomeRecommend,
		HomeWeekens:HomeWeekens
	},
	data () {
		return {
			city : '',
			iconList:[],
			recommendList:[],
			swiperList:[],
			weekendList:[]
		}
	},
	methods: {
		getHomeInfo () {
			axios.get('/api/index.json')
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data 
				this.city = data.city
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted () {
		this.getHomeInfo()
	}
}
</script>

<style>
	.home{
		font-size:23px;
	}
</style> 