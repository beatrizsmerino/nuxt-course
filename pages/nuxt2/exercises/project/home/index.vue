<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Last Posts
		</template>
		<template #content>
			<article>
				<p v-if="isError">
					Error al cargar los datos
				</p>
				<PostList
					v-else
					:post-list-data="getPostList"
					:show-last-post-list="true"
				/>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectHome",
		"components": {
			Layout,
			PostList,
		},
		"layout": "exercises",
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
			isError() {
				return this.$store.state.isError;
			},
		},
	};
</script>
