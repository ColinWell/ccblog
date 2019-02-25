<template>
	<div>
		<v-touch v-on:swiperight="backToHome" height="500px">
		<h1>HHHHHahahha</h1>
		<h2>{{articleId}}</h2>
		</v-touch>
	</div>
</template>

<script>
	export default{
		created:function(){
			
		},
		methods:{
			backToHome(){
				window.location.href = "/";
			},
		},
		computed:{
			articleId:function(){
				return this.$route.query.id;
			}
		}
	}
</script>

<style>
</style>
