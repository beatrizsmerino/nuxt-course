<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Posts created
		</template>
		<template #content>
			<article>
				<PostList
					:post-list-data="postList"
					is-admin
					css-modifier="compacted"
				/>
			</article>
			<article class="button-list">
				<UIButton to="/nuxt2/exercises/project/admin/post/create">
					Create new post
				</UIButton>
			</article>
		</template>
	</Layout>
</template>

<script>
	import postListData from "~/assets/data/data-post-list.json";
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectAdmin",
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

<style lang="scss" scoped>
	.button-list {
		display: flex;
		justify-content: flex-end;
		margin-top: 3rem;

		:deep(.button) {
			display: inline-block;
		}
	}
</style>
