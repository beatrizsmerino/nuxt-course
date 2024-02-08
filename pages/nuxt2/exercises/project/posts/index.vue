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
				<p v-if="isLoading">
					Cargando datos...
				</p>
				<p v-else-if="isError">
					Error al cargar los datos
				</p>
				<PostList
					v-else
					:post-list-data="getPostList"
				/>
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
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
			isLoading() {
				return this.$store.state.isLoading;
			},
			isError() {
				return this.$store.state.isError;
			},
		},
	};
</script>
