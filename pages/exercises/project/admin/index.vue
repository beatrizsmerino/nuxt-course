<template>
	<Layout class="layout-admin">
		<template #title>
			Admin
		</template>
		<template #content>
			<article class="layout-admin__button-list">
				<Button to="/exercises/project/admin/posts/new">
					Create new post
				</Button>
			</article>
			<article>
				<h2>Posts created</h2>
				<PostList css-modifier="compacted" />
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Project/Layout";
	import PostList from "@/components/Exercises/Project/Post/PostList";

	export default {
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
	};
</script>

<style lang="scss" scoped>
	.layout-admin {
		&__button-list {
			margin-bottom: 3rem;
			display: flex;
			justify-content: flex-end;

			:deep(.button) {
				display: inline-block;
			}
		}
	}
</style>
