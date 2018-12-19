<template>
	<div ref="a">
		<router-link tag="div" class="header-abs" to="/" v-show="showabs">
			<div class="iconfont header-abs-icon">&#xe624;</div>
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showabs"
			:style="opacityStyle"
		>
			<router-link to="/">
				<div class="iconfont header-fixed-icon">&#xe624;</div>
			</router-link>
			紫清湖生态温泉(AAAA景区)
		</div>
	</div>
</template>

<script>
export default{
	name:'DetailHeader',
	data () {
		return {
			showabs:true,
			opacityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		handleScroll () {
			const top = document.documentElement.scrollTop
			// console.log(top)
			if(top > 60){
				let opacity = top/140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = {opacity}
				this.showabs = false
			}else{
				this.showabs = true
			}
		}
	},
	mounted () {
		window.addEventListener('scroll',this.handleScroll)
		// window.addEventListener('scroll',this.handleScroll)
	},
	destroyed () {
	    window.removeEventListener('scroll', this.handleScroll)
	  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header-abs
		position:absolute
		left:.2rem
		top:.2rem
		width:.8rem
		height:.8rem
		text-align:center
		line-height:.8rem
		color:#fff
		font-size:.4rem
		background:rgba(0,0,0,.8)
		border-radius:50%
	.header-fixed
		position:fixed
		left:0
		top:0
		right:0
		width:100%
		overflow:hidden
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		color:#fff
		font-size:.32rem
		background:$bgColor
		.header-fixed-icon
			position:absolute
			text-align:center
			font-size:.4rem
			color:#fff
			left:.1rem
			top:0
			
			
</style>