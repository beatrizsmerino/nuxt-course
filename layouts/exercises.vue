<template>
	<div class="page layout">
		<PageHeader />
		<main class="page__main">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	import PageHeader from "@/components/Page/PageHeader";

	export default {
		"components": {
			PageHeader,
		},
		head() {
			return {
				"htmlAttrs": {
					"class": "layout--exercises",
				},
			};
		},
	};
</script>

<style lang="scss">
	// PARTIALS SASS
	// =================================================
	@import "~/assets/scss/components/components-form";

	.layout {
		&--exercises {
			height: inherit;

			.page {
				height: inherit;

				&__container {
					align-items: inherit;
					justify-content: inherit;
					max-width: 1200px;
					margin: 0 auto;
				}

				&__main {
					height: inherit;
					min-height: calc(100vh - 6rem);
					padding: 5rem 0 8rem;
				}
			}
		}
	}
</style>
