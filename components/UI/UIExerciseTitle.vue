<template>
	<h1 class="exercise-title">
		<slot />
	</h1>
</template>

<script>
	export default {
		"name": "UIExerciseTitle",
	};
</script>

<style lang="scss" scoped>
	.exercise-title {
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
