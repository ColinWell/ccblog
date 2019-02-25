<template>
	<div>
		<v-touch v-on:swipeleft="jumpToCenter">
			<app-head headTitle='首页'></app-head>
			<article-item articleId='at123'></article-item>
		</v-touch>
	</div>
</template>

<script>
	
	import appHead from "../../components/common/app-head";
	import articleItem from "../../components/article/article-item.vue";
	
	export default {
		methods:{
			jumpToCenter(){
				window.location.href = "/#/pcenter";
			},
		},
		components: {
			appHead,
			articleItem
		}
	}
</script>

<style>
	
</style>
