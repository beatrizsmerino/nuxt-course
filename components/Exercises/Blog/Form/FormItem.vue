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
		<div class="form-item__inner">
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
				:class="formFieldModifier"
				class="form__field form-field"
				:name="fieldId"
				:type="fieldType"
				:placeholder="fieldPlaceholder"
				:required="fieldRequired"
				@focus="onFocus"
				@blur="onBlur"
			/>
			<textarea
				v-if="fieldTag == 'textarea'"
				:id="fieldId"
				:ref="fieldId"
				v-model="updateFieldValue"
				:class="formFieldModifier"
				class="form__field form-field"
				:style="`height: ${fieldHeight}rem; min-height: ${fieldHeight}rem;`"
				:name="fieldId"
				:type="fieldType"
				:placeholder="fieldPlaceholder"
				:required="fieldRequired"
				@input="autoGrow"
				@focus="onFocus"
				@blur="onBlur"
			/>
			<div
				v-if="fieldTag == 'select'"
				class="form-field__wrapper"
			>
				<select
					:id="fieldId"
					v-model="updateFieldValue"
					:name="fieldId"
					:class="formFieldModifier"
					class="form__field form-field"
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

				<UIButton class="button--icon form-field__button">
					<UIIcon
						icon-name="chevron-down"
						icon-aria-label="Show options"
						class="form-field__icon"
					/>
				</UIButton>
			</div>
		</div>
		<FormError
			v-if="isError"
			:error-text="fieldErrorText"
			:error-modifier="formErrorModifier"
		/>
	</div>
</template>

<script>
	import FormLabel from "@/components/Exercises/Blog/Form/FormLabel";
	import FormError from "@/components/Exercises/Blog/Form/FormError";

	export default {
		"name": "FormItem",
		"components": {
			FormLabel,
			FormError,
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
			"fieldHeight": {
				"type": Number,
				"default": 16,
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
			"fieldErrorText": {
				"type": String,
				"default": "",
			},
		},
		data() {
			return {
				"formLabelModifier": "",
				"formFieldModifier": "",
				"formErrorModifier": "",
				"isInteracted": false,
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
				return this.fieldErrorText !== "";
			},
		},
		mounted() {
			this.onLoad();
			window.addEventListener("resize", this.onResize);
		},
		beforeDestroy() {
			window.removeEventListener("resize", this.onResize);
		},
		"methods": {
			createdCSSModifier() {
				if (this.fieldModifier) {
					this.formLabelModifier = `form-label--${this.fieldModifier}`;
					this.formFieldModifier = `form-field--${this.fieldModifier}`;
					this.formErrorModifier = `form-error--${this.fieldModifier}`;
				}
			},
			autoGrow() {
				if (this.fieldTag === "textarea" && this.fieldValue !== "") {
					const element = this.$refs[this.fieldId];
					element.style.height = "auto";
					element.style.height = `${element.scrollHeight * 0.1}rem`;
				}
			},
			onLoad() {
				this.createdCSSModifier();
				this.$nextTick(this.autoGrow);
			},
			onFocus() {
				this.isFocus = true;
				this.isInteracted = true;
				this.$nextTick(this.autoGrow);
			},
			onBlur() {
				this.isFocus = false;
				this.isInteracted = true;
				this.$nextTick(this.autoGrow);
				this.$emit("blur");
			},
			onResize() {
				this.autoGrow();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.form-item {
		display: flex;
		flex-direction: column;

		&__inner {
			position: relative;
		}

		.form-field {
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
		}

		.form-label {
			&--anim {
				color: $color-brand-3;
			}
		}

		&.is-focus {
			.form-label {
				&--anim {
					color: $color-brand-3;
				}
			}

			.form-field {
				&--anim {
					border-color: $color-brand-3;
					background-color: rgba($color-brand-3, 0.2);
				}

				&__button {
					::v-deep {
						.icon {
							fill: $color-brand-3;
						}
					}
				}
			}
		}

		&:not(.is-focus) {
			.form-field {
				&--anim {
					&::placeholder {
						color: transparent !important;
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

			.form-field {
				&--anim {
					padding-top: 2rem;
					padding-bottom: 0.5rem;
				}
			}
		}

		&.is-error {
			.form-label {
				&--anim {
					color: $color-error;
				}
			}

			.form-field {
				&::placeholder {
					color: $color-error;
				}

				&--anim {
					border-color: $color-error;
					background-color: rgba($color-error, 0.2);
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

		&--textarea {
			.form-label {
				&--anim {
					top: 1.2rem;
					transform: none;
				}
			}

			.form-field {
				max-height: 29rem;
				resize: vertical;

				&::placeholder {
					font-weight: 400;
				}

				&--anim {
					height: inherit;
					max-height: inherit;
					padding-top: 2.4rem !important;
					padding-bottom: 1.5rem !important;
					overflow-y: hidden;
					resize: none;
				}
			}
		}

		&--select {
			.form-field {
				padding-right: 3rem;
				cursor: pointer;
				appearance: none;

				&__wrapper {
					display: flex;
					position: relative;
					align-items: center;
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

			&:not(.is-empty),
			&.is-focus {
				.form-field {
					&--anim {
						padding-top: 2rem;
						padding-bottom: 0.5rem;
					}
				}
			}
		}
	}
</style>
