<template>
	<Layout class="layout-home">
		<template #title>
			Last Posts
		</template>
		<template #content>
			<PostList :show-last-post-list="true" />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Layout/Layout";
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

<style lang="scss"></style>
