<template>
	<div
		class="form__item"
		:class="[formItemModifier, { 'is-empty': isEmpty, 'is-focus': isFocus, 'is-error': isError }]"
	>
		<FormLabel
			:label-id="fieldId"
			:label-modifier="formLabelModifier"
			:label-text="fieldLabel"
			:class="{ 'form__label--required': fieldRequired }"
		/>
		<component
			:is="checkTag"
			:id="fieldId"
			:class="`${fieldTag} ${formFieldModifier}`"
			class="form__field"
			:name="fieldId"
			:type="fieldType"
			:value="value"
			:placeholder="fieldPlaceholder"
			:required="fieldRequired ? true : false"
			@input="updateData($event.target.value)"
			@focus="onFocus"
			@blur="onBlur"
			@keypress="onKeyPress"
		/>
	</div>
</template>

<script>
	import FormLabel from "@/components/Nuxt2/Exercises/Project/Form/FormLabel";

	export default {
		"name": "FormField",
		"components": {
			FormLabel,
		},
		"props": {
			"fieldTag": {
				"type": String,
				"default": "input",
			},
			"fieldId": {
				"type": String,
				"required": true,
			},
			"fieldLabel": {
				"type": String,
				"required": true,
			},
			"fieldType": {
				"type": String,
				"default": null,
			},
			"fieldModifier": {
				"type": String,
				"default": "",
			},
			"value": {
				"type": String,
				"default": "",
			},
			"fieldPlaceholder": {
				"type": String,
				"default": "",
			},
			"fieldRequired": {
				"type": Boolean,
				"default": false,
			},
		},
		data() {
			return {
				"formItemModifier": "",
				"formLabelModifier": "",
				"formFieldModifier": "",
				"isEmpty": false,
				"isFocus": false,
				"isError": false,
			};
		},
		"computed": {
			checkTag() {
				if (this.fieldTag === "textarea") {
					return "textarea";
				}

				return "input";
			},
		},
		created() {
			this.createdCSSModifier();
			this.onCreated();
		},
		"methods": {
			createdCSSModifier() {
				if (this.fieldModifier !== "") {
					this.formLabelModifier = `form__label--${this.fieldModifier}`;
					this.formFieldModifier = `form__field--${this.fieldModifier}`;
				}

				if (this.fieldTag === "textarea") {
					this.formItemModifier = "form__item--textarea";
				}
			},
			updateData(newValue) {
				this.$emit("input", newValue);
			},
			checkEmpty() {
				// console.log(this.value);
				if (this.value === "") {
					this.isEmpty = true;
				} else {
					this.isEmpty = false;
				}
			},
			addFocus() {
				this.isFocus = true;
			},
			removeFocus() {
				this.isFocus = false;
			},
			checkError() {
				if (this.fieldRequired && this.isEmpty) {
					this.isError = true;
				} else {
					this.isError = false;
				}
			},
			onFocus() {
				this.checkEmpty();
				this.addFocus();
				this.checkError();
			},
			onBlur() {
				this.checkEmpty();
				this.removeFocus();
				this.checkError();
			},
			onKeyPress() {
				this.checkEmpty();
				this.checkError();
			},
			onCreated() {
				this.checkEmpty();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.form {
		&__field {
			width: 100%;
			padding: 1.2rem;
			border: 0.2rem solid $color-black;
			border-radius: 0.5rem;
			outline: none;
			background-color: transparent;
			color: $color-black;
			font-size: 1.4rem;
			font-weight: 400;

			&::placeholder {
				color: $color-brand-3;
				font-weight: 100;
			}

			&--line {
				border: 0.2rem solid $color-brand-3;
				border-radius: 0.5rem;
				background-color: transparent;
			}

			&--anim {
				padding: 2rem 1.2rem 0.4rem;
			}
		}

		&__label {
			&--anim {
				color: $color-brand-3;
			}
		}

		&__item {
			&--textarea {
				.form {
					&__label {
						&--anim {
							top: 1.2rem;
							transform: none;
						}
					}

					&__field {
						&--anim {
							padding: 2.4rem 1.2rem 1.2rem !important;
						}
					}
				}

				&.is-focus {
					.form {
						&__label {
							&--anim {
								top: 1rem;
							}
						}

						&__field {
							&--anim {
								padding: 2.4rem 1.2rem 1.2rem !important;
							}
						}
					}
				}
			}

			&.is-focus {
				.form {
					&__label {
						&--anim {
							color: $color-brand-3 !important;
						}
					}

					&__field {
						&--anim {
							border-color: $color-brand-3 !important;
							background-color: rgba($color-brand-3, 0.2) !important;
						}
					}
				}
			}

			&.is-empty {
				.form {
					&__field {
						&--anim {
							padding: 1.2rem;
						}
					}
				}
			}

			&:not(.is-empty),
			&.is-focus {
				.form {
					&__label {
						&--anim {
							top: 0.8rem;
							transform: translate(0, 0);
							transition: top 0.2s ease-in-out 0s;
							color: $color-brand-3;
							font-size: 1.2rem;
						}
					}

					&__field {
						&--anim {
							padding: 2rem 1.2rem 0.4rem !important;
						}
					}
				}
			}

			&.is-error {
				.form {
					&__label {
						&--anim {
							color: $color-error;
						}
					}

					&__field {
						&--anim {
							border-color: $color-error;
							background-color: rgba($color-error, 0.2);
						}
					}
				}
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
