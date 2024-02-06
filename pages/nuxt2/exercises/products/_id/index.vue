<template>
	<Layout class="layout-products">
		<template #title>
			Products
		</template>
		<template #breadcrumbs>
			<Breadcrumbs :breadcrumbs-list-data="breadcrumbsListData" />
		</template>
		<template #content>
			<p>Product ID: {{ $route.params.id }}</p>
		</template>
	</Layout>
</template>

<script>
	import Breadcrumbs from "@/components/Nuxt2/Exercises/Products/Breadcrumbs";
	import Layout from "@/components/Layout/Layout";

	export default {
		"name": "ViewProductsDetail",
		"components": {
			Layout,
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

<style lang="scss"></style>
