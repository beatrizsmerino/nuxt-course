<template>
	<div class="page__container page__inner">
		<LayoutTitle>Product</LayoutTitle>

		<Breadcrumbs :breadcrumbs-list-data="breadcrumbsListData" />

		<LayoutSubtitle>Product</LayoutSubtitle>

		<p>Product ID: {{ $route.params.id }}</p>
	</div>
</template>

<script>
	import Breadcrumbs from "@/components/Nuxt2/Exercises/Products/Breadcrumbs";
	import LayoutSubtitle from "@/components/Layout/LayoutSubtitle";
	import LayoutTitle from "@/components/Layout/LayoutTitle";

	export default {
		"name": "ViewProductsDetail",
		"components": {
			LayoutTitle,
			LayoutSubtitle,
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
