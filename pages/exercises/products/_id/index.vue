<template>
	<div class="container inner">
		<Title>Page Product</Title>

		<Breadcrumbs :breadcrumbs-list-data="breadcrumbsListData" />

		<Subtitle>Product with ID: {{ $route.params.id }}</Subtitle>
	</div>
</template>

<script>
	import Breadcrumbs from '@/components/Breadcrumbs.vue';
	import Subtitle from '@/components/Subtitle.vue';
	import Title from '@/components/Title.vue';

	export default {
		components: {
			Title,
			Subtitle,
			Breadcrumbs
		},
		layout: 'exercises',
		data() {
			return {
				breadcrumbsListData: [
					{
						url: '/exercises/products',
						name: 'Products'
					}
				]
			};
		}
	};
</script>

<style lang="scss"></style>
