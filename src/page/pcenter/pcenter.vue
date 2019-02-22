<template>
	<div>
		<app-head :title='个人中心'></app-head>
		<user-info></user-info>
		<user-action></user-action>
	</div>
</template>

<script>
	import appHead from "../../components/common/app-head";
	import userInfo from "../../components/pcenter/user-info.vue";
	import userAction from "../../components/pcenter/user-action.vue";
	export default {
		data(){
		    return{
		        title:test
		    }
		},
		components: {
			appHead,
			userInfo,
			userAction
		}
	}
</script>

<style>
</style>
