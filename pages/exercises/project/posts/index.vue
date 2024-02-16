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
	import Layout from "@/components/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectPosts",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"middleware": "log",
		"head": {
			"title": "Post List | Project Exercise",
		},
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
		},
	};
</script>
