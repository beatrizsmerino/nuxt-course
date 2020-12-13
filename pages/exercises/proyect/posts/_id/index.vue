<template>
	<Layout class="layout-post">
		<template #content>
			<PostDetail />
		</template>
	</Layout>
</template>

<script>
	import Layout from '@/components/Exercises/Proyect/Layout';
	import PostDetail from '@/components/Exercises/Proyect/Posts/PostDetail';

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
