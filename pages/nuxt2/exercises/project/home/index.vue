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
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
	};
</script>

<style lang="scss"></style>
