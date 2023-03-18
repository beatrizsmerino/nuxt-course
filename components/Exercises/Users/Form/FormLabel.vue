<template>
	<label class="label">
		<slot />
	</label>
</template>

<script>
	export default {
		"name": "FormLabel",
	};
</script>

<style lang="scss" scoped>
	.label {
		display: block;
		width: 100%;
		margin-bottom: 1rem;
		color: $color-brand-3;
		font-size: 1.8rem;
		font-weight: bold;
	}
</style>
