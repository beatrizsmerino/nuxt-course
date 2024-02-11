<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #content>
			<article>
				<PostDetail :post-data="getPostSelected" />
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostDetail from "@/components/Nuxt2/Exercises/Project/Post/PostDetail";

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
