<template>
	<div class="odds">
		<div class="odds_left">
			<van-icon name="bill-o" />
		</div>
		<div class="odds_center">
			<p>邀请好友注册APP,享多重好礼</p>
			<p>限时特惠，多邀多得</p>
		</div>
		<div class="odds_left">
			<van-icon name="arrow" />
		</div>
	</div>
</template>
<script>

</script>
<style scoped>
.odds {
	width: 100%;
	height: 1rem;
	border-radius: 50px;
	background: linear-gradient(to right,#EB6201,#F29858);
	
	margin-top: 0.5rem;
	display: inline-flex;
	align-items: center;

}
	.odds_left {
		width: 20%;
		font-size: 0.6rem;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.odds_center {
		width: 60%;
		height: 100%;
		color: #fff;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
	}
</style>
