<template>
	<label
		:for="labelId"
		class="label"
		:class="labelModifier"
	>
		{{ labelText }}
	</label>
</template>

<script>
	export default {
		name: 'FormLabel',
		props: {
			labelId: {
				type: String,
				required: true
			},
			labelText: {
				type: String,
				required: true
			},
			labelModifier: {
				type: String,
				default: ''
			}
		}
	};
</script>

<style lang="scss" scoped>
	.label {
		width: 100%;
		margin-bottom: 0.5rem;
		display: inline-block;
		font-size: 1.4rem;
		font-weight: 500;
		color: $color-brand-4;

		&--anim {
			width: auto;
			margin-bottom: 0;
			position: absolute;
			top: 50%;
			left: 1.2rem;
			transform: translate(0, -50%);
		}
	}
</style>
