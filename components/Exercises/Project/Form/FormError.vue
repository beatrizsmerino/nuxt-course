<template>
	<div class="form-error">
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
		},
	};
</script>

<style lang="scss" scoped>
	.form-error {
		color: $color-error;
		font-size: 0.8em;
		text-align: right;
	}
</style>
