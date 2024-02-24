<template>
	<div class="page__container page__inner">
		<UIExerciseTitle>Product</UIExerciseTitle>

		<Breadcrumbs :breadcrumbs-list-data="breadcrumbsListData" />

		<UIExerciseSubtitle>Product</UIExerciseSubtitle>

		<section>
			<article>
				<p>
					<strong>ID:</strong>
					{{ productData.id }}
				</p>
				<p>
					<strong>Title:</strong>
					{{ productData.title }}
				</p>
				<p>
					<strong>Description:</strong>
					{{ productData.description }}
				</p>
				<p>
					<strong>Category:</strong>
					{{ productData.category }}
				</p>
				<p>
					<strong>Price:</strong>
					{{ productData.price }}
				</p>
				<p>
					<strong>Rating rate:</strong>
					{{ productData.rating.rate }}
				</p>
				<p>
					<strong>Rating count:</strong>
					{{ productData.rating.count }}
				</p>
				<img
					width="50%"
					:src="productData.image"
					:alt="productData.title"
				>
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

				return {
					"productData": product,
					"breadcrumbsListData": [
						{
							"url": "/exercises/products",
							"name": "Products",
						},
						{
							"url": null,
							"name": `Product: ${product.title}`,
						},
					],
				};
			} catch (error) {
				const message =
					error.response && error.response.data && error.response.data.message
						? error.response.data.message
						: "Error fetching products";
				context.error({ "statusCode": 404,
					message });
			}
		},
		"head": {
			"title": "Product Detail | Products Exercise",
		},
	};
</script>
