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
	import Breadcrumbs from "@/components/Exercises/Products/Breadcrumbs";
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
		// eslint-disable-next-line consistent-return, complexity
		async asyncData(context) {
			try {
				const response = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
				if (!response.ok) {
					throw new Error("Error fetching products");
				}
				const product = await response.json();

				return { "productData": product };
			} catch (error) {
				const message =
					error.response && error.response.data && error.response.data.message
						? error.response.data.message
						: "Error fetching products";
				context.error({ "statusCode": 404,
					message });
			}
		},
		data() {
			return {
				"breadcrumbsListData": [
					{
						"url": "/exercises/products",
						"name": "Products",
					},
					{
						"url": null,
						"name": "Product",
					},
				],
			};
		},
		"head": {
			"title": "Product Detail | Products Exercise",
		},
	};
</script>
