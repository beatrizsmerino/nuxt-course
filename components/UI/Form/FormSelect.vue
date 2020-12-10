<template>
	<div
		class="form__item"
		:class="{'is-empty' : isEmpty, 'is-focus' : isFocus}"
	>
		<label
			:for="selectId"
			:class="formLabelModifier"
			class="label"
		>
			{{ selectLabel }}
		</label>

		<div class="select__wrapper">
			<select
				:id="selectId"
				:name="selectId"
				:class="formFieldModifier"
				class="select__field form__field"
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
					icon-id="icon-arrow-bottom"
					icon-aria-label="Show options"
					icon-color="#2956A6"
					class="select__icon"
				/>
			</Button>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/UI/Button';
	import Icon from '@/components/UI/Icon';

	export default {
		name: 'Select',
		components: {
			Button,
			Icon
		},
		props: {
			selectId: {
				type: String,
				required: true
			},
			selectLabel: {
				type: String,
				required: true
			},
			selectOptions: {
				type: Array,
				required: true
			},
			selectModifier: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				formLabelModifier: '',
				formFieldModifier: '',
				isEmpty: false,
				isFocus: false
			};
		},
		created() {
			this.createdCSSModifier();
		},
		methods: {
			createdCSSModifier() {
				if (this.selectModifier !== '') {
					this.formLabelModifier = `label--${this.selectModifier}`;
					this.formFieldModifier = `form__field--${this.selectModifier}`;
				}
			}
		}
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
			border: 1px solid transparent;
			outline: none;
			background-color: rgba($color-brand-1, 0.4);
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

			.icon {
				width: 1.2rem;
				height: 1.2rem;

				&__use {
					fill: $color-brand-1;
				}
			}
		}

		&--anim {
			.select {
				&__field {
					padding-right: 3rem !important;
				}
			}
		}
	}
</style>