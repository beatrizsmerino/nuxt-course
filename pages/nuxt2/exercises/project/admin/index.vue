<template>
	<Layout class="layout-admin">
		<template #title>
			Project
		</template>
		<template #subtitle>
			Posts created
		</template>
		<template #content>
			<article>
				<PostList
					is-admin
					css-modifier="compacted"
				/>
			</article>
			<article class="layout-admin__button-list">
				<UIButton to="/nuxt2/exercises/project/admin/post/create">
					Create new post
				</UIButton>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Layout/Layout";
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
			margin-top: 3rem;

			:deep(.button) {
				display: inline-block;
			}
		}
	}
</style>
