<template>
	<Layout class="layout-home">
		<template #title>
			Last Posts
		</template>
		<template #content>
			<PostsList :show-last-posts="true" />
		</template>
	</Layout>
</template>

<script>
	import Layout from '@/components/Exercises/Proyect/Layout.vue';
	import PostsList from '@/components/Exercises/Proyect/PostsList.vue';

	export default {
		components: {
			Layout,
			PostsList
		},
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped></style>
