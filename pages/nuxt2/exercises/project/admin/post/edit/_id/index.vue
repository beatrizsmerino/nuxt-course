<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Edit post #{{ $route.params.id }}
		</template>
		<template #content>
			<article>
				<p v-if="isError">
					Error al cargar los datos
				</p>
				<PostForm
					v-else
					:post-data="getPostSelected"
				/>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostEdit",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
		"computed": {
			getPostList() {
				return this.$store.getters.getPostList;
			},
			getPostSelected() {
				return this.getPostList.filter(item => item.id == this.$route.params.id)[0];
			},
			isError() {
				return this.$store.state.isError;
			},
		},
	};
</script>
