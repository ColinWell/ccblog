<template>
	<div>
		<h2 @click="jumpTo">{{name}}</h2>
	</div>
</template>

<script>
	export default{
		props:['name'],
		methods:{
			jumpTo(){
				switch(this.name){
					case '首页':
						window.location.href='/';
						break;
					case '发布新闻':
						alert("敬请期待");
						break;
				}
				//this.$emit('jumpTo');
			},
		}
	}
</script>

<style>
</style>
