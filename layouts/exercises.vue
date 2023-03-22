<template>
	<div class="layout">
		<PageHeader />
		<main class="main">
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
	.layout {
		&--exercises {
			.container {
				width: 100%;
				max-width: 1200px;
				margin: 0 auto;
			}

			.inner {
				padding-right: 3rem;
				padding-left: 3rem;
			}

			.main {
				margin-top: 6rem;
				padding: 5rem 0 8rem;
				font-size: 1.6rem;
			}
		}
	}
</style>
