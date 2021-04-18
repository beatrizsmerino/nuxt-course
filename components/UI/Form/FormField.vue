<template>
	<div
		class="form__item"
		:class="[formItemModifier,isEmpty ? 'is-empty' : '', isFocus ? 'is-focus' : '']"
	>
		<FormLabel
			:label-id="fieldId"
			:label-modifier="formLabelModifier"
			:label-text="fieldLabel"
		/>
		<component
			:is="checkTag"
			:id="fieldId"
			ref="field"
			:class="`${fieldTag} ${formFieldModifier}`"
			class="form__field"
			:name="fieldId"
			:type="fieldType"
			:value="fieldValue"
			:placeholder="fieldPlaceholder"
			@focus="onFocus"
			@blur="onBlur"
			@keypress="onKeyPress"
		/>
	</div>
</template>

<script>
	import FormLabel from '@/components/UI/Form/FormLabel';

	export default {
		name: 'FormField',
		components: {
			FormLabel
		},
		props: {
			fieldTag: {
				type: String,
				default: ''
			},
			fieldId: {
				type: String,
				required: true
			},
			fieldLabel: {
				type: String,
				required: true
			},
			fieldType: {
				type: String,
				default: null
			},
			fieldModifier: {
				type: String,
				default: ''
			},
			fieldPlaceholder: {
				type: String,
				default: ''
			},
			fieldModel: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				formItemModifier: '',
				formLabelModifier: '',
				formFieldModifier: '',
				fieldValue: '',
				isEmpty: false,
				isFocus: false
			};
		},
		computed: {
			checkTag() {
				if (this.fieldTag === 'textarea') {
					return 'textarea';
				}

				return 'input';
			}
		},
		created() {
			this.createdCSSModifier();
			this.onCreated();
		},
		methods: {
			createdCSSModifier() {
				if (this.fieldModifier !== '') {
					this.formLabelModifier = `label--${this.fieldModifier}`;
					this.formFieldModifier = `form__field--${this.fieldModifier}`;
				}

				if (this.fieldTag === 'textarea') {
					this.formItemModifier = 'form__item--textarea';
				}
			},
			updateValue() {
				this.fieldValue = this.$refs.field.value;
			},
			checkEmpty() {
				console.log(this.fieldValue);
				if (this.fieldValue === '') {
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
			onFocus() {
				this.updateValue();
				this.checkEmpty();
				this.addFocus();
			},
			onBlur() {
				this.updateValue();
				this.checkEmpty();
				this.removeFocus();
			},
			onKeyPress() {
				this.updateValue();
				this.checkEmpty();
			},
			onCreated() {
				this.checkEmpty();
			}
		}
	};
</script>

<style lang="scss" scoped>
	.form {
		&__field {
			width: 100%;
			padding: 1.2rem;
			font-size: 1.4rem;
			font-weight: 400;
			color: $color-black;
			border: 0.2rem solid $color-black;
			border-radius: 0.5rem;
			background-color: transparent;
			outline: none;

			&::-webkit-input-placeholder {
				/* Chrome/Opera/Safari */
				font-weight: 100;
				color: $color-brand-3;
			}

			&::-moz-placeholder {
				/* Firefox 19+ */
				font-weight: 100;
				color: $color-brand-3;
			}

			&:-ms-input-placeholder {
				/* IE 10+ */
				font-weight: 100;
				color: $color-brand-3;
			}

			&:-moz-placeholder {
				/* Firefox 18- */
				font-weight: 100;
				color: $color-brand-3;
			}

			&--line{
				border: 0.2rem solid $color-brand-3;
				border-radius: 0.5rem;
				background-color: transparent;
			}
		}

		&__item {
			&--textarea {
				.label {
					top: 1.2rem;
					transform: none;
				}
			}
		}
	}

	.textarea {
		height: 16rem;
		max-height: 29rem;
		min-height: 16rem;
		resize: vertical;
	}
</style>
