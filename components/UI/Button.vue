<template>
	<component
		:is="checkTag"
		:href="href"
		:to="to"
		:value="value"
		class="button"
		@click="buttonClick"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			href: {
				type: String,
				default: null
			},
			to: {
				type: String,
				default: null
			},
			value: {
				type: String,
				default: null
			}
		},
		computed: {
			checkTag() {
				if (this.href) {
					return 'a';
				} else if (this.to) {
					return 'nuxt-link';
				} else if (this.value) {
					return 'input';
				}

				return 'button';
			}
		},
		methods: {
			buttonClick() {
				this.$emit('button-click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.button {
		padding: 1.2rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: 110%;
		border: 0.2rem solid #000;
		border-radius: 0.5rem;
		outline: none;
		background-color: transparent;
		user-select: none;
		cursor: pointer;
		appearance: none;

		&--icon {
			padding: 1rem;
			border: none;
		}

		&--green {
			border-color: $color-brand-3;
			color: $color-brand-3;

			&:hover {
				color: #fff;
				border-color: $color-brand-3;
				background-color: $color-brand-3;
			}
		}

		&--grey {
			border-color: $color-brand-4;
			color: $color-brand-4;

			&:hover {
				color: #fff;
				border-color: $color-brand-4;
				background-color: $color-brand-4;
			}
		}
	}
</style>
