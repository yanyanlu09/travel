<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" :letter="letter" :hotCities="hotCities"></city-list>
		<city-alphabet :cities="cities" @change="handClick"></city-alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
	name : 'City',
	components:{
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data () {
		return {
			cities:{},
			hotCities:[],
			letter:''
		}
	},
	methods:{
		getCityInfo () {
			axios.get('/local/city.json')
			.then(this.cityInfoSucc)
		},
		cityInfoSucc (res){
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
			
		},
		handClick (obj) {
			this.letter = obj
			console.log(obj)
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>

</style>