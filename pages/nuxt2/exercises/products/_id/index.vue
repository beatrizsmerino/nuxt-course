<template>
	<div class="page__container page__inner">
		<Title>Product</Title>

		<Breadcrumbs :breadcrumbs-list-data="breadcrumbsListData" />

		<Subtitle>Product ID: {{ $route.params.id }}</Subtitle>
	</div>
</template>

<script>
	import Breadcrumbs from "@/components/Nuxt2/Exercises/Products/Breadcrumbs";
	import Subtitle from "@/components/Nuxt2/Exercises/Layout/Subtitle";
	import Title from "@/components/Nuxt2/Exercises/Layout/Title";

	export default {
		"components": {
			Title,
			Subtitle,
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
				],
			};
		},
	};
</script>

<style lang="scss"></style>
