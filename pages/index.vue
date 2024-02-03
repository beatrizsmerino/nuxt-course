<template>
	<Tutorial class="page__container page__inner" />
</template>

<script>
	import Tutorial from "@/components/Tutorial";

	export default {
		"name": "ViewHome",
		"components": {
			Tutorial,
		},
		head() {
			return {
				"htmlAttrs": {
					"class": "layout--default page--home",
				},
			};
		},
		mounted() {
			console.log(process.env.NODE_ENV);
		},
	};
</script>
