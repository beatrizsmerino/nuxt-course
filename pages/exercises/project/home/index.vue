<template>
	<Layout class="layout-home">
		<template #title>
			Last Posts
		</template>
		<template #content>
			<PostsList
				:show-last-posts="true"
				class="last-posts"
			/>
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

<style lang="scss"></style>
