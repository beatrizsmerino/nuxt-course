<template>
	<Layout>
		<template #title>
			Blog
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
	import Layout from "@/components/Exercises/Blog/Layout/Layout";
	import PostList from "@/components/Exercises/Blog/Post/PostList";

	export default {
		"name": "ViewBlogPosts",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"head": {
			"title": "Post List | Blog Exercise",
		},
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
		},
	};
</script>
