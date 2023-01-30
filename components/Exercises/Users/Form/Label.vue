<template>
	<label class="label">
		<slot />
	</label>
</template>

<script>
	export default {
		"name": "Label",
	};
</script>

<style lang="scss" scoped>
	.label {
		width: 100%;
		margin-bottom: 1rem;
		display: block;
		color: $color-brand-3;
		font-weight: bold;
		font-size: 1.8rem;
	}
</style>
