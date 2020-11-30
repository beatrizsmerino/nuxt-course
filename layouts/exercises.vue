<template>
	<div class="layout">
		<Header />
		<main class="main">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
	}

	html {
		font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
			'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 10px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}

	body {
		font-size: 1rem;
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.inner {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.main {
		padding-top: 6rem;
		font-size: 1.6rem;
	}

	.form {
		&__item {
			min-width: 50%;

			&:not(:only-of-type) {
				margin-bottom: 1rem;
			}
		}

		&__group {
			.form {
				&__item {
					&:not(:last-child) {
						margin-right: 2rem;
					}
				}
			}

			&--column {
				display: flex;
				align-items: flex-end;
			}
		}

		&__info {
			margin-top: 0.5rem;
			font-size: 1.3rem;
			color: $color-brand-2;
		}
	}
</style>
