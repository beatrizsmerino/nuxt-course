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
		border: 0.2rem solid $color-black;
		border-radius: 0.5rem;
		outline: none;
		background-color: transparent;
		user-select: none;
		cursor: pointer;
		appearance: none;

		&.nuxt-link-active,
		&:hover {
			color: $color-white;
			border-color: mix($color-white, $color-black, 20%);
			background-color: mix($color-white, $color-black, 20%);
		}

		&--icon {
			padding: 1rem;
			border: none;
		}

		&--black {
			color: $color-white;
			border-color: $color-black;
			background-color: $color-black;

			&:hover {
				border-color: mix($color-white, $color-black, 20%);
				background-color: mix($color-white, $color-black, 20%);
			}
		}

		&--brand-1-dark-line {
			border-color: $color-brand-3;
			color: $color-brand-3;

			&:hover {
				color: $color-white;
				border-color: $color-brand-3;
				background-color: $color-brand-3;
			}
		}

		&--brand-2-dark-line {
			border-color: $color-brand-4;
			color: $color-brand-4;

			&:hover {
				color: $color-white;
				border-color: $color-brand-4;
				background-color: $color-brand-4;
			}
		}
	}
</style>
