<template>
	<div>
		<Header />
		<main class="main">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	export default {}
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

	.button--green {
		display: inline-block;
		border-radius: 4px;
		border: 1px solid #3b8070;
		color: #3b8070;
		text-decoration: none;
		padding: 10px 30px;
	}

	.button--green:hover {
		color: #fff;
		background-color: #3b8070;
	}

	.button--grey {
		display: inline-block;
		border-radius: 4px;
		border: 1px solid #35495e;
		color: #35495e;
		text-decoration: none;
		padding: 10px 30px;
		margin-left: 15px;
	}

	.button--grey:hover {
		color: #fff;
		background-color: #35495e;
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
