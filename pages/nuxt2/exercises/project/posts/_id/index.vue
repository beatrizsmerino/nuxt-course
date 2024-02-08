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
		asyncData(context) {
			return new Promise((resolve, reject) => {
				// eslint-disable-next-line nuxt/no-timing-in-fetch-data
				setTimeout(() => {
					resolve({
						"postList": postListData,
					});
				}, 1000);
			})
				.then(data => data)
				.catch(error => {
					context.error(error);
				});
		},
		"computed": {
			getPost() {
				return this.postList[this.$route.params.id];
			},
		},
	};
</script>
