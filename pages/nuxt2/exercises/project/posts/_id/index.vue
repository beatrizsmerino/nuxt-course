<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #content>
			<article>
				<PostDetail :post-data="getPost" />
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
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
			getPost() {
				return this.getPostList[this.$route.params.id];
			},
		},
	};
</script>
