<template>
	<component
		:is="checkTag"
		ref="field"
		:class="`form__field ${checkTag}`"
		:value="getFieldValue"
		@input="updateDate()"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		name: 'Field',
		props: {
			fieldTag: {
				type: String,
				default: null
			},
			fieldValue: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				localValue: this.fieldValue
			};
		},
		computed: {
			getFieldValue() {
				const fieldValue = this.localValue;

				return fieldValue;
			},
			checkTag() {
				if (this.fieldTag === 'textarea') {
					return 'textarea';
				} else if (this.fieldTag === 'select') {
					return 'select';
				}

				return 'input';
			}
		},
		watch: {
			localValue(newValue) {
				this.$emit('input', newValue);
			},
			fieldValue(newValue) {
				this.localValue = this.fieldValue;
			}
		},
		methods: {
			updateDate() {
				const fieldValue = this.$refs.field.value;
				this.$emit('input', fieldValue);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.form {
		&__field {
			width: 100%;
			padding: 1.2rem;
			font-size: 1.6rem;
			border: 0.2rem solid $color-brand-3;
			border-radius: 0.5rem;

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

			&:focus {
				outline-color: $color-brand-1;
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
