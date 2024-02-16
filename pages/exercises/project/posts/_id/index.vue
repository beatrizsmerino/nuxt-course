<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #content>
			<PostDetail :post-data="getPostSelected" />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Project/Layout/Layout";
	import PostDetail from "@/components/Exercises/Project/Post/PostDetail";

	export default {
		"name": "ViewProjectPostsDetail",
		"components": {
			Layout,
			PostDetail,
		},
		"layout": "exercises",
		asyncData({ store, params }) {
			return store.dispatch("fetchReadPostSelected", params.id);
		},
		"head": {
			"title": "Post Detail | Project Exercise",
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
