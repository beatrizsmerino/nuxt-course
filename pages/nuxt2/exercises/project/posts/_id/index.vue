<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #content>
			<article>
				<p v-if="isLoading">
					Cargando datos...
				</p>
				<p v-else-if="isError">
					Error al cargar los datos
				</p>
				<PostDetail
					v-else
					:post-data="getPost"
				/>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostDetail from "@/components/Nuxt2/Exercises/Project/Post/PostDetail";

	export default {
		"name": "ViewProjectPostsDetail",
		"components": {
			Layout,
			PostDetail,
		},
		"layout": "exercises",
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
			getPost() {
				return this.getPostList[this.$route.params.id];
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
