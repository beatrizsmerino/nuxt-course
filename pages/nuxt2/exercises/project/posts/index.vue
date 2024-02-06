<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			All Posts
		</template>
		<template #content>
			<article>
				<PostList />
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectPosts",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
	};
</script>
