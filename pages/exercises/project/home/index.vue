<template>
	<Layout>
		<template #title>
			Project
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
	import Layout from "@/components/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectHome",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"head": {
			"title": "Home | Project Exercise",
		},
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
		},
	};
</script>
