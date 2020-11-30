<template>
	<div class="layout">
		<Header />
		<main class="main">
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue'

	export default {
		components: {
			Header,
			Footer
		}
	}
</script>

<style>
	html {
		height: 100%;
		font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
		font-size: 10px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}

	body {
		height: 100%;
		font-size: 1rem;
	}

	#__nuxt,
	#__layout,
	.layout {
		height: 100%;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	.main {
		height: calc(100% - 25rem - 7rem);
		padding: 3rem;
		font-size: 1.8rem;
	}

	.container {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		width: 100%;
		margin-bottom: 4rem;
		font-family: "Quicksand", "Source Sans Pro", -apple-system,
			BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
			sans-serif; /* 1 */
		display: block;
		font-weight: 300;
		font-size: 6rem;
		color: #35495e;
		letter-spacing: 1px;
	}

	.subtitle {
		font-weight: 300;
		font-size: 4rem;
		color: #526488;
		word-spacing: 5px;
		margin-bottom: 2rem;
	}
</style>
