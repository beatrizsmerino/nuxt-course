<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Edit post #{{ $route.params.id }}
		</template>
		<template #content>
			<article>
				<PostForm :post-data="getPostSelected" />
			</article>
		</template>
	</Layout>
</template>

<script>
	import postListData from "~/assets/data/data-post-list.json";
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostEdit",
		"components": {
			Layout,
			PostForm,
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
			getPostSelected() {
				return this.postList.filter(item => item.id == this.$route.params.id)[0];
			},
		},
	};
</script>
