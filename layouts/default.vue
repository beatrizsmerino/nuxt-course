<template>
	<Nuxt />
</template>

<script>
	export default {};
</script>

<style lang="scss">
	// PARTIALS SASS
	// =================================================
	@import '~/assets/scss/components/components-form';

	html {
		font-family: $font-main;
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
