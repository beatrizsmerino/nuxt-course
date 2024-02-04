<template>
	<Layout class="layout-posts">
		<template #title>
			All Posts
		</template>
		<template #content>
			<PostList />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectPosts",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
	};
</script>

<style lang="scss" scoped></style>
