<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="item of recommendList" :key="item.id">
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
				recommendList:[{
					id:'001',
					imgUrl:'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
					title:'扬州温泉必游',
					desc:'冬天来啦，我们热热的泡个热汤！'
				},{
					id:'002',
					imgUrl:'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
					title:'扬州温泉必游',
					desc:'冬天来啦，我们热热的泡个热汤！'
				},{
					id:'003',
					imgUrl:'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
					title:'扬州温泉必游',
					desc:'冬天来啦，我们热热的泡个热汤！'
				}]
			}
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