<template>
	<div class="app_head" id="app_head">
		<span class="text">{{headTitle}}</span>
	</div>
</template>

<script>
	export default {
		props:['headTitle'],
		
	}
</script>

<style>
	.text {
		background: #F8F8F8;
	}

	.app_head {
		width: 100%;
		height: 45px;
		left: 0px;
		top: 20px;
		z-index: 4;
		font-size: 18px;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		background-color: #f8f8f8;
	}
</style>
