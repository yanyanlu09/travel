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
			touchState:false,
			startY:0,
			timer:null
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
	update () {
		this.startY = this.$refs['A'][0].offsetTop
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
				if (this.timer) {
					clearTimeout(this.timer)
				}
				// 延迟16毫秒执行本次函数，如果在16毫秒内又执行本函数，则清除上次函数，执行本次函数，以此来提高性能
				this.timer = setTimeout( () => {
					const touchY = e.touches[0].clientY - 86
					const index = Math.floor((touchY - this.startY) / 20)
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change',this.letters[index])
					}
				},16)
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