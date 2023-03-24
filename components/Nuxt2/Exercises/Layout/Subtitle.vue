<template>
	<h2 class="subtitle">
		<slot />
	</h2>
</template>

<script>
	export default {
		"name": "Subtitle",
	};
</script>

<style lang="scss" scoped>
	.subtitle {
		position: relative;
		margin: 3rem 0 5rem;
		color: $color-brand-2;
		font-size: 3.5rem;
	}
</style>
