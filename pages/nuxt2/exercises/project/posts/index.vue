<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			All Posts
		</template>
		<template #content>
			<article>
				<PostList :post-list-data="getPostList" />
			</article>
		</template>
	</Layout>
</template>

<script>
	import postListData from "~/assets/data/data-post-list.json";
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectPosts",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		fetch(context) {
			if (context.store.state.postList.length > 0) {
				return null;
			}

			return new Promise((resolve, reject) => {
				// eslint-disable-next-line nuxt/no-timing-in-fetch-data
				setTimeout(() => {
					resolve({
						"postList": postListData,
					});
				}, 1000);
			})
				.then(data => {
					context.store.commit("setPostList", data.postList);
				})
				.catch(error => {
					context.error(error);
				});
		},
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
		},
	};
</script>
