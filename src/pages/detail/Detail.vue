<template>
	<div ref="a">
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content"></div>
	</div>
</template>


<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader
	},
	methods:{
		handleScroll () {
			console.log('111')
		}
	},
	activated () {
		// 通过$refs获取dom元素
		console.log('111')
		this.box = this.$refs.a
		console.log(this.box)
		// 监听这个dom的scroll事件
		this.box.addEventListener('scroll', () => {
		    this.handleScroll();
		}, false)
		// window.addEventListener('scroll',this.handleScroll)
	}

}
</script>

<style lang="stylus" scoped>
	.content
		height:50rem
</style>