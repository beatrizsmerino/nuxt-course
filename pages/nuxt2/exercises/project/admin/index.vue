<template>
	<Layout class="layout-admin">
		<template #title>
			Posts created
		</template>
		<template #content>
			<article class="layout-admin__button-list">
				<UIButton to="/nuxt2/exercises/project/admin/posts/new">
					Create new post
				</UIButton>
			</article>
			<article>
				<h2>Posts created</h2>
				<PostList css-modifier="compacted" />
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectAdmin",
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
			display: flex;
			justify-content: flex-end;
			margin-bottom: 3rem;

			:deep(.button) {
				display: inline-block;
			}
		}
	}
</style>
