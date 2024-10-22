<template>
	<div class="page">
		<PageHeader />
		<main class="page__main">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	import PageHeader from "@/components/Page/PageHeader";

	export default {
		"name": "Default",
		"components": {
			PageHeader,
		},
		head() {
			return {
				"htmlAttrs": {
					"class": "layout--default",
				},
			};
		},
	};
</script>

<style lang="scss">
	@use "~/assets/scss/animations/animations-page";
	@use "~/assets/scss/animations/animations-layout";

	html {
		color: $color-brand-2;
		font-family: $font-main;
	}

	textarea {
		font-family: $font-main;
	}

	html,
	body,
	.layout {
		width: 100%;
		height: 100%;
	}

	/* stylelint-disable selector-id-pattern */
	#__nuxt,
	#__layout {
		height: 100%;
	}

	/* stylelint-enable selector-id-pattern */

	.page {
		width: 100%;
		height: 100%;
		padding-top: 6rem;

		&__container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;

			> * {
				&:not(:last-child) {
					margin-bottom: 6.4rem;
				}
			}
		}

		&__inner {
			padding: 0 3rem;
		}

		&__main {
			display: flex;
			width: 100%;
			height: 100%;
			font-size: 1.6rem;

			> * {
				height: 100%;
			}
		}
	}

	a {
		color: $color-brand-1;
		font-weight: bold;
	}
</style>
