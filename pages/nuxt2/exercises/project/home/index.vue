<template>
	<Layout
		:layout-subtitle="true"
		:layout-navigation="true"
	>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Last Posts
		</template>
		<template #content>
			<PostList :show-last-post-list="true" />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectHome",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
	};
</script>
