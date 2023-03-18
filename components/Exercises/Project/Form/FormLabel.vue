<template>
	<label
		:for="labelId"
		class="form__label"
		:class="labelModifier"
	>
		{{ labelText }}
	</label>
</template>

<script>
	export default {
		"name": "FormLabel",
		"props": {
			"labelId": {
				"type": String,
				"required": true,
			},
			"labelText": {
				"type": String,
				"required": true,
			},
			"labelModifier": {
				"type": String,
				"default": "",
			},
		},
	};
</script>

<style lang="scss" scoped>
	.form {
		&__label {
			display: inline-block;
			width: 100%;
			margin-bottom: 0.5rem;
			color: $color-brand-4;
			font-size: 1.4rem;
			font-weight: 500;

			&--anim {
				position: absolute;
				top: 50%;
				left: 1.2rem;
				width: auto;
				margin-bottom: 0;
				transform: translate(0, -50%);
			}

			&--required {
				position: relative;

				&:after {
					content: "*";
					display: inline-block;
					position: absolute;
					top: -0.2rem;
					padding-left: 0.2rem;
				}

				&.form {
					&__label {
						&--anim {
							position: absolute;
						}
					}
				}
			}
		}
	}
</style>
