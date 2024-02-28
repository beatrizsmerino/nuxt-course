<template>
	<Layout>
		<template #title>
			Blog
		</template>
		<template #content>
			<PostDetail :post-data="getPostSelected" />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Blog/Layout/Layout";
	import PostDetail from "@/components/Exercises/Blog/Post/PostDetail";

	export default {
		"name": "ViewBlogPostsDetail",
		"components": {
			Layout,
			PostDetail,
		},
		"layout": "exercises",
		asyncData({ store, params }) {
			return store.dispatch("fetchReadPostSelected", params.id);
		},
		"head": {
			"title": "Post Detail | Blog Exercise",
		},
		"computed": {
			getPostSelected() {
				return this.$store.getters.getPostSelected;
			},
		},
		beforeDestroy() {
			this.$store.dispatch("fetchDeletePostSelected");
		},
	};
</script>
