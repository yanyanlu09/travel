<template>
	<div>
		<div class="banner-content" @click="handClick()">
			<img class="banner-pic" src="http://img1.qunarzz.com/sight/p0/1611/a2/a246388ce5e8330ea3.img.jpg_600x330_41fe50f4.jpg">
			<div class="banner-bottom">
				<div class="banner-title">
					紫清湖生态温泉(AAAA景区)
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe674;</span>
					34
				</div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @gallaryClick="gallaryClick"></common-gallary>
	</div>
</template>


<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name:'DetailBanner',
	components:{
		CommonGallary
	},
	data () {
		return {
			showGallary:false,
			imgs:[
				'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
				'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
			]
		}
	},
	methods: {
		handClick () {
			this.showGallary = true
		},
		gallaryClick () {
			this.showGallary = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner-content
		overflow:hidden
		position:relative
		width:100%
		height:0
		padding-bottom:55%
		.banner-pic
			width:100%
		.banner-bottom
			position:absolute
			display:flex
			width:100%
			left:0
			right:0
			bottom:0
			height:.6rem
			line-height:.6rem
			color:#fff
			background-image:linear-gradient(to bottom, rgba(0,0,0,0) ,rgba(0,0,0,.8))
			.banner-title
				flex:1
				font-size:.32rem
				padding:0 .2rem
			.banner-number
				height:.32rem
				line-height:.32rem
				padding:0 .14rem
				margin-top:.15rem
				border-radius:.2rem
				background:rgba(0,0,0,.8)
				font-size:.24rem
				.banner-icon
					font-size:.24rem


</style>