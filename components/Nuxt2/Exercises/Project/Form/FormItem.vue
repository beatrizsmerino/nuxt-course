<template>
	<div
		class="form__item form-item"
		:class="[
			`form-item--${fieldTag}`,
			{
				'is-empty': isEmpty,
				'is-focus': isFocus,
				'is-error': isError,
			},
		]"
	>
		<FormLabel
			:label-id="fieldId"
			:label-modifier="formLabelModifier"
			:label-text="fieldLabel"
			:class="{ 'form-label--required': fieldRequired }"
		/>
		<input
			v-if="fieldTag == 'input'"
			:id="fieldId"
			v-model="updateFieldValue"
			:class="`${fieldTag} ${formFieldModifier}`"
			class="form__field form-item__field"
			:name="fieldId"
			:type="fieldType"
			:placeholder="fieldPlaceholder"
			:required="fieldRequired"
			@focus="onFocus"
			@blur="onBlur"
		>
		<textarea
			v-if="fieldTag == 'textarea'"
			:id="fieldId"
			v-model="updateFieldValue"
			:class="`${fieldTag} ${formFieldModifier}`"
			class="form-item__field"
			:name="fieldId"
			:type="fieldType"
			:placeholder="fieldPlaceholder"
			:required="fieldRequired"
			@focus="onFocus"
			@blur="onBlur"
		/>
		<div
			v-if="fieldTag == 'select'"
			class="form-item__wrapper"
		>
			<select
				:id="fieldId"
				v-model="updateFieldValue"
				:name="fieldId"
				:class="formFieldModifier"
				class="form-item__field"
				:required="fieldRequired"
				@focus="onFocus"
				@blur="onBlur"
			>
				<option
					:value="isFocus && isEmpty ? '' : 'Select one option'"
					disabled
					hidden
				>
					{{ fieldPlaceholder || "Select one option" }}
				</option>
				<option
					v-for="(item, index) in fieldList"
					:key="`option-${index}`"
					:value="item"
				>
					{{ item }}
				</option>
			</select>

			<UIButton class="button--icon form-item__button">
				<UIIcon
					icon-name="chevron-down"
					icon-aria-label="Show options"
					class="form-item__icon"
				/>
			</UIButton>
		</div>
	</div>
</template>

<script>
	import FormLabel from "@/components/Nuxt2/Exercises/Project/Form/FormLabel";

	export default {
		"name": "FormItem",
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
			"fieldValue": {
				"type": String,
				"default": "",
			},
			"fieldList": {
				"type": Array,
				"default": () => [],
			},
			"fieldPlaceholder": {
				"type": String,
				"default": "...",
			},
			"fieldRequired": {
				"type": Boolean,
				"default": false,
			},
		},
		data() {
			return {
				"formLabelModifier": "",
				"formFieldModifier": "",
				"userInteracted": false,
				"isFocus": false,
			};
		},
		"computed": {
			"updateFieldValue": {
				get() {
					return this.fieldValue;
				},
				set(newValue) {
					this.$emit("update:fieldValue", newValue);
				},
			},
			isEmpty() {
				return this.fieldValue === "";
			},
			isError() {
				return this.fieldRequired && this.isEmpty && this.userInteracted;
			},
		},
		created() {
			this.createdCSSModifier();
		},
		"methods": {
			createdCSSModifier() {
				if (this.fieldModifier) {
					this.formLabelModifier = `form-label--${this.fieldModifier}`;
					this.formFieldModifier = `form-item__field--${this.fieldModifier}`;
				}
			},
			onFocus() {
				this.isFocus = true;
				this.userInteracted = true;
			},
			onBlur() {
				this.isFocus = false;
				this.userInteracted = true;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.form-item {
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

			&--anim {
				padding: 2rem 1.2rem 0.5rem;
			}
		}

		.form-label {
			&--anim {
				color: $color-brand-3;
			}
		}

		&--textarea {
			.form-label {
				&--anim {
					top: 1.2rem;
					transform: none;
				}
			}

			.form-item {
				&__field {
					height: 16rem;
					min-height: 16rem;
					max-height: 29rem;
					resize: vertical;

					&::placeholder {
						font-weight: 400 !important;
					}

					&--anim {
						padding: 2.4rem 1.2rem 1.2rem !important;
					}
				}
			}

			&.is-focus {
				.form-label {
					&--anim {
						top: 1rem;
					}
				}

				.form-item {
					&__field {
						&--anim {
							padding: 2.4rem 1.2rem 1.2rem !important;
						}
					}
				}
			}
		}

		&--select {
			.form-item {
				&__wrapper {
					display: flex;
					position: relative;
					align-items: center;
				}

				&__field {
					padding: 1.2rem 3rem 1.2rem 1.2rem;
					cursor: pointer;
					appearance: none;

					&--anim {
						padding: 2rem 3rem 0.5rem 1.2rem;
					}
				}

				&__button {
					display: inline-block;
					position: absolute;
					top: 50%;
					right: 0;
					transform: translate(0, -50%);
					pointer-events: none;

					::v-deep {
						.icon {
							width: 2rem;
							height: 2rem;
							fill: $color-black;
						}
					}
				}
			}
		}

		&.is-focus {
			.form-label {
				&--anim {
					color: $color-brand-3 !important;
				}
			}

			.form-item {
				&__field {
					&--anim {
						border-color: $color-brand-3 !important;
						background-color: rgba($color-brand-3, 0.2) !important;
					}
				}

				&__button {
					::v-deep {
						.icon {
							fill: $color-brand-3 !important;
						}
					}
				}
			}
		}

		&:not(.is-focus) {
			.form-item {
				&__field {
					&--anim {
						&::placeholder {
							color: transparent !important;
						}
					}
				}
			}
		}

		&.is-empty {
			.form-item {
				.form-item {
					&__field {
						&--anim {
							padding: 1.2rem;
						}
					}
				}

				&--select {
					.form-item {
						&__field {
							&--anim {
								padding: 1.2rem 3rem 1.2rem 1.2rem;
							}
						}
					}
				}
			}
		}

		&:not(.is-empty),
		&.is-focus {
			.form-label {
				&--anim {
					top: 0.8rem;
					transform: translate(0, 0);
					transition: top 0.2s ease-in-out 0s;
					color: $color-brand-3;
					font-size: 1.2rem;
				}
			}

			.form-item {
				&__field {
					&--anim {
						padding: 2rem 1.2rem 0.5rem !important;
					}
				}
			}
		}

		&.is-error {
			.form-label {
				&--anim {
					color: $color-error;
				}
			}

			.form-item {
				&__field {
					&--anim {
						border-color: $color-error;
						background-color: rgba($color-error, 0.2);
					}
				}

				&__button {
					::v-deep {
						.icon {
							fill: $color-error;
						}
					}
				}
			}
		}
	}
</style>
