<template>
	<div class="layout">
		<Header />
		<main class="main">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'

	export default {
		components: {
			Header
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
		height: calc(100% - 25rem);
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
</style>
