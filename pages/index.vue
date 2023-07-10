<template>
	<div class="home">
		<section>
			<Tutorial class="page__container page__inner" />
		</section>
	</div>
</template>

<script>
	import Tutorial from "@/components/Tutorial";

	export default {
		"name": "Home",
		"components": {
			Tutorial,
		},
		mounted() {
			console.log(process.env.NODE_ENV);
		},
	};
</script>
