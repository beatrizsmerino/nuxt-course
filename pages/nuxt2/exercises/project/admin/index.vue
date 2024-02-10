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
				<p v-if="isError">
					Error loading data
				</p>
				<PostList
					v-else
					:post-list-data="getPostList"
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
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectAdmin",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
			isError() {
				return this.$store.state.isError;
			},
		},
		"methods": {
			deletePost(postData) {
				// eslint-disable-next-line no-alert
				if (window.confirm("Do you really want to delete this post?")) {
					this.$store.dispatch("deletePost", postData.id);
				}
			},
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
