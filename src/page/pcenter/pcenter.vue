<template>
	<div>
		<v-touch v-on:swiperight="backToHome" height="500px">
			<app-head headTitle='个人中心'></app-head>
			<user-info></user-info>
			<user-action name='发布新闻'></user-action>
			<user-action name='首页'></user-action>
		</v-touch>
	</div>
</template>

<script>
	import appHead from "../../components/common/app-head";
	import userInfo from "../../components/pcenter/user-info.vue";
	import userAction from "../../components/pcenter/user-action.vue";
	export default {
		
		components: {
			appHead,
			userInfo,
			userAction
		},
		methods:{
			backToHome(){
				window.location.href = "/";
			},
			jumpTo(){
				alert("success");
				
			}
		},
	}
</script>

<style>
</style>
