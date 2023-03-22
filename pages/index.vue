<template>
	<Tutorial class="page__container page__inner" />
</template>

<script>
	import Tutorial from "@/components/Tutorial";

	export default {
		"name": "Home",
		"components": {
			Tutorial,
		},
		head() {
			return {
				"htmlAttrs": {
					"class": "page--home",
				},
			};
		},
	};
</script>
