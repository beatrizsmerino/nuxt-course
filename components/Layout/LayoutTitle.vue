<template>
	<h1 class="title">
		<slot />
	</h1>
</template>

<script>
	export default {
		"name": "LayoutTitle",
	};
</script>

<style lang="scss" scoped>
	.title {
		position: relative;
		margin: 0 0 7rem;
		color: $color-brand-1;
		font-size: 4.5rem;

		&:after {
			content: "";
			display: inline-block;
			position: absolute;
			bottom: -1rem;
			left: 0;
			width: 15rem;
			height: 0.4rem;
			background-color: $color-brand-2;
		}
	}
</style>
