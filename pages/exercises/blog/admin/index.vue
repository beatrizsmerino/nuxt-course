<template>
	<Layout>
		<template #title>
			Blog
		</template>
		<template #subtitle>
			Posts created
		</template>
		<template #content>
			<PostList
				:post-list-data="getPostList"
				is-admin
				css-modifier="compacted"
				@delete-post="deletePost"
			/>
			<article class="button-list">
				<UIButton to="/exercises/blog/admin/post/create">
					Create new post
				</UIButton>
				<UIButton
					class="button--error"
					@button-click="onSignOut"
				>
					Sign out
				</UIButton>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Blog/Layout/Layout";
	import PostList from "@/components/Exercises/Blog/Post/PostList";

	export default {
		"name": "ViewBlogAdmin",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"middleware": [
			"auth-check",
			"auth-redirect",
		],
		"head": {
			"title": "Admin | Blog Exercise",
		},
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
		},
		"methods": {
			deletePost(postData) {
				// eslint-disable-next-line no-alert
				if (window.confirm("Do you really want to delete this post?")) {
					this.$store.dispatch("fetchDeletePost", postData.id);
				}
			},
			onSignOut() {
				this.$store.dispatch("fetchDeleteAuthUser");
				this.$router.push("/exercises/blog/admin/auth");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.button-list {
		display: flex;
		justify-content: flex-end;
		margin-top: 3rem;

		> * {
			&:not(:last-child) {
				margin-right: 2rem;
			}
		}

		:deep(.button) {
			display: inline-block;
		}
	}
</style>
