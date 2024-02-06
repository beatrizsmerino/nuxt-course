<template>
	<h2 class="exercise-subtitle">
		<slot />
	</h2>
</template>

<script>
	export default {
		"name": "UIExerciseSubtitle",
	};
</script>

<style lang="scss" scoped>
	.exercise-subtitle {
		position: relative;
		margin: 3rem 0;
		color: $color-brand-2;
		font-size: 3.5rem;
	}
</style>
