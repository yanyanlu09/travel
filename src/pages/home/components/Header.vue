<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont left-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont input-icon">&#xe632;</span>
			<input type="text" class="input-ipt" placeholder="输入城市/景点/游戏主题">
		</div>
		<div class="header-right">
			城市
			<span class="iconfont arrow-icon">&#xeb6d;</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeHeader'
	}
</script>
<!-- 原始写法 -->
<!-- @import '../../../assets/styles/varibles.styl' -->
<!-- 使用@符写法 -->
<!-- @import '~@/assets/styles/varibles.styl' -->
<!-- @import '~styles/varibles.styl'  这个是在config中配置过的写法 -->
<style lang="stylus" scoped>
	
	@import '~styles/varibles.styl'
	.header
		display:flex
		line-height:.86rem
		background:$bgColor
		color:#fff
		.header-left
			width:.64rem
			float:left
			.left-icon
				text-align:center
				font-size:.4rem
		.header-input
			flex:1
			height:.62rem
			line-height:.62rem
			margin-top:.12rem
			margin-left:.2rem
			background:#fff
			border-radius:.1rem
			color:#ccc
			.input-icon
				font-size:.4rem
				padding-left:.1rem
				padding-right:.1rem
			.input-ipt
				margin-top: -.16rem
		.header-right
			width:1.24rem
			float:right
			text-align:center
			.arrow-icon
				margin-left:-.05rem
				font-size:.26rem

</style>