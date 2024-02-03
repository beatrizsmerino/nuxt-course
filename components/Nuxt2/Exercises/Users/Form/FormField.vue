<template>
	<component
		:is="checkTag"
		:class="`form__field ${checkTag}`"
		:value="getFieldValue"
		@input="updateData($event.target.value)"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		"name": "FormField",
		"props": {
			"fieldTag": {
				"type": String,
				"default": null,
			},
			"value": {
				"type": String,
				"default": "",
			},
		},
		"computed": {
			checkTag() {
				if (this.fieldTag === "textarea") {
					return "textarea";
				} else if (this.fieldTag === "select") {
					return "select";
				}

				return "input";
			},
		},
		"methods": {
			updateData(newValue) {
				this.$emit("input", newValue);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.form {
		&__field {
			width: 100%;
			padding: 1.2rem;
			border: 0.2rem solid $color-brand-3;
			border-radius: 0.5rem;
			font-size: 1.6rem;

			&::placeholder {
				color: $color-brand-3;
				font-weight: 100;
			}

			&:focus {
				outline-color: $color-brand-1;
			}
		}
	}

	.textarea {
		height: 16rem;
		min-height: 16rem;
		max-height: 29rem;
		resize: vertical;
	}
</style>
