<template>
	<div class="page__container page__inner">
		<UIExerciseTitle>Product</UIExerciseTitle>

		<Breadcrumbs :breadcrumbs-list-data="breadcrumbsListData" />

		<UIExerciseSubtitle>Product</UIExerciseSubtitle>

		<section>
			<article>
				<p>Product ID: {{ $route.params.id }}</p>
			</article>
		</section>
	</div>
</template>

<script>
	import Breadcrumbs from "@/components/Nuxt2/Exercises/Products/Breadcrumbs";
	import UIExerciseTitle from "@/components/UI/UIExerciseTitle";
	import UIExerciseSubtitle from "@/components/UI/UIExerciseSubtitle";

	export default {
		"name": "ViewProductsDetail",
		"components": {
			UIExerciseTitle,
			UIExerciseSubtitle,
			Breadcrumbs,
		},
		"layout": "exercises",
		data() {
			return {
				"breadcrumbsListData": [
					{
						"url": "/nuxt2/exercises/products",
						"name": "Products",
					},
					{
						"url": null,
						"name": "Product",
					},
				],
			};
		},
	};
</script>
