<template>
	<ul class="list">
		<li class="item" 
			v-for="item of letters" 
			:key="item" 
			@click="handClick"
			@touchstart="handTouchStart"
			@touchmove="handTouchMove"
			@touchend="handTouchEnd"
			:ref="item"
		>
			{{item}}
		</li>
	</ul>
</template>

<script>
export default {
	name : 'CityAlphabet',
	props:{
		cities:Object
	},
	data (){
		return {
			touchState:false
		}
	},
	computed:{
		letters () {
			const letters = []
			for (let i in this.cities){
				letters.push(i)
			}
			return letters
		}
	},
	methods:{
		handClick (e) {
			console.log(e.target.innerText)
			this.$emit('change',e.target.innerText)
		},
		handTouchStart () {
			this.touchState = true
		},
		handTouchMove (e) {
			if(this.touchState){
				const startY = this.$refs['A'][0].offsetTop
				const touchY = e.touches[0].clientY - 86
				const index = Math.floor((touchY - startY) / 20)
				if (index >= 0 && index < this.letters.length) {
					this.$emit('change',this.letters[index])
				}
			}
		},
		handTouchEnd () {
			this.touchState = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		top:1.72rem
		right:0
		bottom:0
		width:.4rem
		.item
			line-height:.4rem
			text-align:center
			color:$bgColor
</style>