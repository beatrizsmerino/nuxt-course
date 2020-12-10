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
	// PARTIALS SASS
	// =================================================
	@import '~/assets/scss/components/components-form';

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
		margin-top: 6rem;
		padding: 5rem 0 8rem;
		font-size: 1.6rem;
	}
</style>
