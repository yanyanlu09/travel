<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
</template>

<script>
export default {
	name : 'CitySearch'
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

</style>