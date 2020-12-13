<template>
	<Layout class="layout-posts">
		<template #title>
			Posts
		</template>
		<template #content>
			<PostsList />
		</template>
	</Layout>
</template>

<script>
	import Layout from '@/components/Exercises/Project/Layout';
	import PostsList from '@/components/Exercises/Project/Posts/PostsList';

	export default {
		components: {
			Layout,
			PostsList
		},
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped>
</style>
