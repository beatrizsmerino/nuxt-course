<template>
	<div
		class="form__item"
		:class="{
			'is-empty': isEmpty,
			'is-focus': isFocus,
			'is-error': isError,
		}"
	>
		<FormLabel
			:label-id="selectId"
			:label-modifier="formLabelModifier"
			:label-text="selectLabel"
			:class="{ 'form__label--required': selectRequired }"
		/>

		<div class="select__wrapper">
			<select
				:id="selectId"
				v-model="updateSelectValue"
				:name="selectId"
				:class="formFieldModifier"
				class="select__field form__field"
				:required="selectRequired"
				@focus="onFocus"
				@blur="onBlur"
			>
				<option
					:value="isFocus && isEmpty ? '' : 'Select one option'"
					disabled
					hidden
				>
					{{ selectPlaceholder }}
				</option>
				<option
					v-for="(item, index) in selectOptions"
					:key="`option-${index}`"
					:value="item"
				>
					{{ item }}
				</option>
			</select>

			<UIButton class="select__button button--icon">
				<UIIcon
					icon-name="chevron-down"
					icon-aria-label="Show options"
					class="select__icon"
				/>
			</UIButton>
		</div>
	</div>
</template>

<script>
	import FormLabel from "@/components/Nuxt2/Exercises/Project/Form/FormLabel";

	export default {
		"name": "FormSelect",
		"components": {
			FormLabel,
		},
		"props": {
			"selectId": {
				"type": String,
				"required": true,
			},
			"selectLabel": {
				"type": String,
				"required": true,
			},
			"selectOptions": {
				"type": Array,
				"required": true,
			},
			"selectModifier": {
				"type": String,
				"default": "",
			},
			"selectValue": {
				"type": String,
				"default": "",
			},
			"selectPlaceholder": {
				"type": String,
				"default": "Select one option",
			},
			"selectRequired": {
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
			"updateSelectValue": {
				get() {
					return this.selectValue;
				},
				set(newValue) {
					this.$emit("update:selectValue", newValue);
				},
			},
			isEmpty() {
				return this.selectValue === "";
			},
			isError() {
				return this.selectRequired && this.isEmpty && this.userInteracted;
			},
		},
		created() {
			this.createdCSSModifier();
		},
		"methods": {
			createdCSSModifier() {
				if (this.selectModifier) {
					this.formLabelModifier = `form__label--${this.selectModifier}`;
					this.formFieldModifier = `form__field--${this.selectModifier}`;
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
	.select {
		&__wrapper {
			display: flex;
			position: relative;
			align-items: center;
		}

		&__field {
			width: 100%;
			padding: 1.2rem 3rem 1.2rem 1.2rem;
			border: 0.2rem solid $color-black;
			border-radius: 0.5rem;
			outline: none;
			background-color: transparent;
			color: $color-black;
			font-size: 1.4rem;
			font-weight: 400;
			cursor: pointer;
			appearance: none;
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

	.form {
		&__label {
			&--anim {
				color: $color-brand-3;
			}
		}

		&__field {
			&--anim {
				padding: 2rem 3rem 0.5rem 1.2rem;
			}
		}

		&__item {
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

				.select {
					&__button {
						::v-deep {
							.icon {
								fill: $color-brand-3 !important;
							}
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

				.select {
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
	}
</style>
