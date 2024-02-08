<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Last Posts
		</template>
		<template #content>
			<article>
				<PostList
					:post-list-data="postList"
					:show-last-post-list="true"
				/>
			</article>
		</template>
	</Layout>
</template>

<script>
	import postListData from "~/assets/data/data-post-list.json";
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectHome",
		"components": {
			Layout,
			PostList,
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
	};
</script>
