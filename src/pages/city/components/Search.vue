<template>
	<div>
		<div class="search">
			<input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyVal">
		</div>
		<div class="search-content" ref="search" v-show="keyVal">
			<ul>
				<li class="item-it border-bottom" 
					v-for="item of list" 
					:key="item.id"
					@click="handClick(item.name)"
				>
					{{item.name}}
				</li>
				<li class="item-it border-bottom" v-show="!listLength">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
	name : 'CitySearch',
	props:{
		cities:Object
	},
	data () {
		return {
			keyVal:'',
			list:[],
			timer:null
		}
	},
	watch: {
		keyVal (){
			if(this.timer){
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() => {
				const result = []
				if(!this.keyVal){
					this.list = []
					return 
				}
				for (let i in this.cities){
					this.cities[i].forEach((value) =>{
						if(value.spell.indexOf(this.keyVal) > -1 ||
							value.name.indexOf(this.keyVal) > -1){
							result.push(value)
						}
					})
				}
				this.list = result
			},100)
		}

	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.search)
	},
	computed:{
		listLength (){
			return this.list.length
		}
	},
	methods: {
		handClick(obj){
			// console.log(obj)
			// this.$store.dispatch('changeCity',obj)
			// 因为数量少，可以直接使用commit
			this.$store.commit('changeCity',obj)
		// 页面跳转
			this.$router.push('/')
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		width:100%
		height:.86rem
		padding:.1rem .2rem
		background:$bgColor
		box-sizing:border-box
		.search-input
			width:100%
			height:.6rem
			border-radius:.5rem
			text-align:center
			padding:0 .2rem 
			box-sizing:border-box
			color:#666
	.search-content
		overflow:hidden
		position:absolute
		z-index:12
		top:1.72rem
		left:0
		right:0
		bottom:0
		background:#eee
		
		.item-it
			line-height:.62rem
			padding-left:.2rem
			background:#fff
			color:#666

</style>