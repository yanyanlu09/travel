<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="item of weekendList" :key="item.id">
				<div class="item-img-warpper">
					<img class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeWeekens',
		data () {
			return {
			}
		},
		props:{
			weekendList:Array
		}
	}
</script>

<style lang='stylus' scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top:.1rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item
		overflow:hidden
		height:4.048rem
		border-bottom:solid 1px #eee
		.item-img-warpper
			overflow:hidden
			width:100%
			height:0
			padding-bottom:37.4375%
			.item-img
				width:100%
		.item-info
			padding:.1rem
			min-width:0
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()

</style>