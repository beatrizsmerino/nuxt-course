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
	html {
		box-sizing: border-box;
		color: $color-brand-2;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		text-size-adjust: 100%;
		word-spacing: 0.1rem;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
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
