<template>
	<div class="__nuxt-error-page">
		<h1>An error ocurred, we're sorry!</h1>
		<nuxt-link to="/">
			Back Home
		</nuxt-link>
	</div>
</template>

<script>
	export default {
		"name": "Error",
		head() {
			return {
				"htmlAttrs": {
					"class": "layout--error",
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "~/assets/scss/animations/animations-page";
	@import "~/assets/scss/animations/animations-layout";

	.layout {
		&--error {
			/* stylelint-disable selector-class-pattern */
			.__nuxt-error-page {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
				background-color: $color-error;

				h1 {
					margin-bottom: 2rem;
					color: mix($color-white, $color-error, 50%);
					font-size: 4rem;
				}

				a {
					color: mix($color-white, $color-error, 70%);
					font-size: 2.5rem;
					font-weight: bold;
					text-decoration: none;

					&:hover {
						text-decoration: undeline;
					}
				}
			}
		}
	}
</style>
