<template>
	<div>
		<div class="group">
			<div class="" style="width: 375px; height: 120px; left: 0px; top: 0px; z-index: 5; background-color: rgb(48, 161, 234); font-size: 14px; padding: 0px; border-width: 1px; border-style: solid; text-align: center; line-height: 20px; font-weight: normal; font-style: normal; opacity: 1;">
				<div class="portrait">
					<div class="image-wrapper">
						<div class="wrapper"><img src="../../assets/portrait.png" draggable="false" style="display: block; height: auto;"></div>
					</div>
				</div>
				<div class="nickname">
					<div class="rich-text">
						<p style="line-height:0; margin-bottom:5px;"><span class="--mb--rich-text" data-boldtype="0" style="font-family:Arial; font-weight:400; font-size:20px; color:rgba(255, 255, 255, 1); font-style:normal; letter-spacing:0px; line-height:23px; text-decoration:none;">Colin</span></p>
					</div>
				</div>
				<div class="signal">
					<div class="rich-text">
						<p style="line-height:0; margin-bottom:5px;"><span class="--mb--rich-text" data-boldtype="0" style="font-family:Arial; font-weight:400; font-size:14px; color:rgba(255, 255, 255, 1); font-style:normal; letter-spacing:0px; line-height:16px; text-decoration:none;">What
								a kind guy!</span></p>
					</div>
				</div>
				
			</div>

		</div>
	</div>
</template>

<script>
</script>

<style>
	.info_group {
		left: 0px;
		top: 65px;
		width: 375px;
		height: 120px;
		position: absolute;
		z-index: 5;
		opacity: 1;
	}

	.nickname {
		width: 46px;
		height: 23px;
		left: 130px;
		top: 37px;
		z-index: 6;
		font-size: 14px;
		text-align: left;
		line-height: 0px;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		display: inline-block;
	}

	.signal {
		width: 105px;
		height: 16px;
		left: 130px;
		top: 70px;
		z-index: 7;
		font-size: 14px;
		text-align: left;
		line-height: 0px;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		display: inline-block;
	}

	.portrait {
		width: 75px;
		height: 75px;
		left: 30px;
		top: 23px;
		z-index: 8;
		border-radius: 203px;
		border-width: 0px;
		border-style: solid;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		display: inline-block;
	}
</style>
