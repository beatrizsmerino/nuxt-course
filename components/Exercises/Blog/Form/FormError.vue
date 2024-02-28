<template>
	<div
		class="form-error"
		:class="errorModifier"
	>
		<p>
			{{ errorText }}
		</p>
	</div>
</template>

<script>
	export default {
		"name": "FormError",
		"props": {
			"errorText": {
				"type": String,
				"default": "",
			},
			"errorModifier": {
				"type": String,
				"default": "",
			},
		},
	};
</script>

<style lang="scss" scoped>
	.form-error {
		margin-top: 0.5rem;
		color: $color-error;
		font-size: 0.8em;
		text-align: right;
	}
</style>
