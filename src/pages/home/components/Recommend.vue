<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
			<li class="more">
				<a href="javascript:;">查看所有产品</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		data () {
			return {
				
			}
		},
		props:{
			recommendList:Array
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
		display:flex
		height:1.9rem
		border-bottom:solid 1px #eee
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.1rem
		.item-info
			flex:1
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
			.item-button
				margin-top: .16rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				color:#fff
	.more
		height:.76rem
		line-height:.76rem
		text-align:center

</style>