<template>
	<Layout>
		<template #title>
			Blog
		</template>
		<template #subtitle>
			Last Posts
		</template>
		<template #content>
			<PostList
				:post-list-data="getPostList"
				:show-last-post-list="true"
			/>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Blog/Layout/Layout";
	import PostList from "@/components/Exercises/Blog/Post/PostList";

	export default {
		"name": "ViewBlogHome",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"head": {
			"title": "Home | Blog Exercise",
		},
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
		},
	};
</script>
