<template>
	<div>
		<div class="banner-content" @click="handClick()">
			<img class="banner-pic" :src="bannerImg">
			<div class="banner-bottom">
				<div class="banner-title">
					{{sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe674;</span>
					{{imglength}}
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
			showGallary:false
		}
	},
	props:{
		imgs:Array,
		bannerImg:String,
		sightName:String,
		imglength:Number
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