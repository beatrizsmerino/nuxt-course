<template>
	<Layout class="layout-admin">
		<template #title>
			Admin
		</template>
		<template #content>
			<article>
				<Button to="/exercises/project/admin/posts/new">
					Create new post
				</Button>
			</article>
			<article>
				<h2>Posts created</h2>
				<PostList />
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
	article {
		&:not(:last-child) {
			margin-bottom: 3rem;
		}
	}
</style>
