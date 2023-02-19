<template>
	<div class="container inner">
		<Title>Product</Title>

		<Breadcrumbs :breadcrumbs-list-data="breadcrumbsListData" />

		<Subtitle>Product ID: {{ $route.params.id }}</Subtitle>
	</div>
</template>

<script>
	import Breadcrumbs from "@/components/Exercises/Products/Breadcrumbs";
	import Subtitle from "@/components/Exercises/Layout/Subtitle";
	import Title from "@/components/Exercises/Layout/Title";

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
						"url": "/exercises/products",
						"name": "Products",
					},
				],
			};
		},
	};
</script>

<style lang="scss"></style>
