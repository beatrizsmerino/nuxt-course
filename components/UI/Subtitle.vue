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
		margin: 5rem 0 7rem;
		font-size: 3rem;
		position: relative;
		color: $color-brand-2;
	}
</style>
