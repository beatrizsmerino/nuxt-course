<template>
	<Layout>
		<template #title>
			# {{ $route.params.id }} Post
		</template>
		<template #content>
			<PostDetail />
		</template>
	</Layout>
</template>

<script>
	import Layout from '@/components/Exercises/Proyect/Layout.vue';
	import PostDetail from '@/components/Exercises/Proyect/PostDetail.vue';

	export default {
		components: {
			Layout,
			PostDetail
		},
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped>
</style>
