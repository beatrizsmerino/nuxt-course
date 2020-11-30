<template>
	<Nuxt />
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

	html,
	body {
		height: 100%;
	}

	#__nuxt,
	#__layout,
	.layout {
		height: 100%;
	}
</style>
