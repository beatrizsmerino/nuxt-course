<template>
	<h1 class="title">
		<slot />
	</h1>
</template>

<script>
	export default {
		name: 'Title'
	};
</script>

<style lang="scss" scoped>
	.title {
		margin: 0 0 7rem;
		font-size: 4.5rem;
		position: relative;
		color: $color-brand-1;

		&:after {
			content: '';
			display: inline-block;
			width: 15rem;
			height: 0.4rem;
			position: absolute;
			left: 0;
			bottom: -1rem;
			background-color: $color-brand-2;
		}
	}
</style>
