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
			.page {
				&__container {
					width: 100%;
					max-width: 1200px;
					margin: 0 auto;
				}

				&__inner {
					padding-right: 3rem;
					padding-left: 3rem;
				}

				&__main {
					margin-top: 6rem;
					padding: 5rem 0 8rem;
					font-size: 1.6rem;
				}
			}
		}
	}
</style>
