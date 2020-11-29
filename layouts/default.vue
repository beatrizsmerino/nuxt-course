<template>
	<div>
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

	.button {
		margin: 1rem;
		padding: 1.2rem 3rem;
		text-decoration: none;
		font-size: 1.6rem;
		font-weight: bold;
		display: inline-block;
		border: 0.2rem solid #000;
		border-radius: 0.5rem;
		outline: none;
		cursor: pointer;

		&--green {
			border-color: $color-brand-3;
			color: $color-brand-3;

			&:hover {
				color: #fff;
				background-color: $color-brand-3;
			}
		}

		&--grey {
			border-color: $color-brand-2;
			color: $color-brand-2;

			&:hover {
				color: #fff;
				background-color: $color-brand-2;
			}
		}
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
</style>
