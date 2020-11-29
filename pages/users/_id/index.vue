<template>
	<div class="container inner">
		<h1 class="title">
			Page User
		</h1>

		<h2>User ID: {{ $route.params.id }}</h2>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	.title {
		margin: 5rem 0 7rem;
		font-size: 4rem;
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
