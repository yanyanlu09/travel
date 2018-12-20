<template>
	<div ref="a">
		<detail-banner :bannerImg="bannerImg" :imgs="gallaryImgs" :imglength="gallaryImgsLength" :sightName="sightName"></detail-banner>
		<detail-header :sightName="sightName"></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>


<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			list:[]

		}
	},
	computed:{
		gallaryImgsLength () {
			return this.gallaryImgs.length
		}
	},
	methods:{
		getDetailInfo () {
			axios.get('/local/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.getDetailInfoSucc)
		},
		getDetailInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.list = data.categoryList
			}
		}
	},
	mounted () {
		this.getDetailInfo()
	}
	// 由于App.vue使用了keep-alive，所以不做任何处理时，进去不同的详情页但是也只会执行一次getDetailInfo=================可以配合使用activeted(){},或者在App.vue使用了keep-alive中加入  exclude=“不想被缓存的组件”


}
</script>

<style lang="stylus" scoped>
	.content
		height:50rem
</style>