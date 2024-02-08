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
	import postListData from "~/assets/data/data-post-list.json";
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostDetail from "@/components/Nuxt2/Exercises/Project/Post/PostDetail";

	export default {
		"name": "ViewProjectPostsDetail",
		"components": {
			Layout,
			PostDetail,
		},
		"layout": "exercises",
		data() {
			return {
				"postList": postListData,
			};
		},
		"computed": {
			getPost() {
				return this.postList[this.$route.params.id];
			},
		},
	};
</script>
