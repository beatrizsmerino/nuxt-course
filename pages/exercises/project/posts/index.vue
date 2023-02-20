<template>
	<Layout class="layout-posts">
		<template #title>
			Posts
		</template>
		<template #content>
			<PostList />
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

<style lang="scss" scoped></style>
