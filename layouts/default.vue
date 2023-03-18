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
	};
</script>

<style lang="scss">
	// PARTIALS SASS
	// =================================================
	@import "~/assets/scss/components/components-form";

	html {
		font-family: $font-main;
		color: $color-brand-2;
	}

	html,
	body,
	#__nuxt,
	#__layout,
	.layout {
		height: 100%;
	}

	.page {
		margin-top: 3.5rem;

		&__container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			min-height: calc(100vh - 3.5rem);

			> * {
				&:not(:last-child) {
					margin-bottom: 4rem;
				}
			}
		}

		&__inner {
			padding: 0 2rem;
		}
	}

	a {
		color: $color-brand-1;
		font-weight: bold;
	}
</style>
