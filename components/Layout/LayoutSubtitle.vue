<template>
	<h2 class="layout-subtitle">
		<slot />
	</h2>
</template>

<script>
	export default {
		"name": "LayoutSubtitle",
	};
</script>

<style lang="scss" scoped>
	.layout-subtitle {
		position: relative;
		margin: 3rem 0 5rem;
		color: $color-brand-2;
		font-size: 3.5rem;
	}
</style>
