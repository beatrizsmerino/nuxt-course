<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			All Posts
		</template>
		<template #content>
			<PostList :post-list-data="getPostList" />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectPosts",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
		},
	};
</script>
