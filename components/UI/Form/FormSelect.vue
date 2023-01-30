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
				ref="field"
				:name="selectId"
				:class="formFieldModifier"
				class="select__field form__field"
				:required="selectRequired ? true : false"
				@focus="onFocus"
				@blur="onBlur"
			>
				<option
					value="0"
					selected
					disabled
					hidden
				>
					Select one option
				</option>
				<option
					v-for="(item, index) in selectOptions"
					:key="`option-${index}`"
					:value="item"
				>
					{{ item }}
				</option>
			</select>

			<Button class="select__button button--icon">
				<Icon
					icon-id="icon-chevron-down"
					icon-aria-label="Show options"
					class="select__icon"
				/>
			</Button>
		</div>
	</div>
</template>

<script>
	import FormLabel from "@/components/UI/Form/FormLabel";

	export default {
		"name": "Select",
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
			"selectRequired": {
				"type": Boolean,
				"default": false,
			},
		},
		data() {
			return {
				"formLabelModifier": "",
				"formFieldModifier": "",
				"fieldValue": "",
				"isEmpty": false,
				"isFocus": false,
				"isError": false,
			};
		},
		created() {
			this.createdCSSModifier();
			this.onCreated();
		},
		"methods": {
			createdCSSModifier() {
				if (this.selectModifier !== "") {
					this.formLabelModifier = `form__label--${this.selectModifier}`;
					this.formFieldModifier = `form__field--${this.selectModifier}`;
				}
			},
			updateValue() {
				this.fieldValue = this.$refs.field.value;
			},
			checkEmpty() {
				console.log(this.fieldValue);
				if (this.fieldValue == 0) {
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
				if (this.selectRequired && this.isEmpty) {
					this.isError = true;
				} else {
					this.isError = false;
				}
			},
			onFocus() {
				this.updateValue();
				this.checkEmpty();
				this.addFocus();
				this.checkError();
			},
			onBlur() {
				this.updateValue();
				this.checkEmpty();
				this.removeFocus();
				this.checkError();
			},
			onCreated() {
				this.checkEmpty();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.select {
		&__wrapper {
			display: flex;
			align-items: center;
			position: relative;
		}

		&__label {
		}

		&__field {
			width: 100%;
			padding: 1.2rem 3rem 1.2rem 1.2rem;
			font-size: 1.4rem;
			font-weight: 400;
			color: $color-black;
			border: 0.2rem solid $color-black;
			border-radius: 0.5rem;
			background-color: transparent;
			outline: none;
			cursor: pointer;
			appearance: none;
		}

		&__button {
			margin: 0 1rem;
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

					&__use {
						fill: $color-black;
					}
				}
			}
		}
	}

	.form {
		&__label {
			&--anim {
				top: 0.8rem;
				font-size: 1.2rem;
				color: $color-brand-3;
				transform: translate(0, 0);
				transition: top 0.2s ease-in-out 0s;
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
							background-color: rgba(
								$color-brand-3,
								0.2
							) !important;
						}
					}
				}

				.select {
					&__button {
						::v-deep {
							.icon {
								&__use {
									fill: $color-brand-3 !important;
								}
							}
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
								&__use {
									fill: $color-error;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
