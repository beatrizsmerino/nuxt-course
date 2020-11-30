<template>
	<h2 class="subtitle">
		<slot />
	</h2>
</template>

<script>
	export default {
		name: 'Subtitle'
	};
</script>

<style lang="scss" scoped>
	.subtitle {
		margin: 3rem 0 5rem;
		font-size: 3.5rem;
		position: relative;
		color: $color-brand-2;
	}
</style>
