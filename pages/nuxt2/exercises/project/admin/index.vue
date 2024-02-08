<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Posts created
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
					is-admin
					css-modifier="compacted"
				/>
			</article>
			<article class="button-list">
				<UIButton to="/nuxt2/exercises/project/admin/post/create">
					Create new post
				</UIButton>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostList from "@/components/Nuxt2/Exercises/Project/Post/PostList";

	export default {
		"name": "ViewProjectAdmin",
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

<style lang="scss" scoped>
	.button-list {
		display: flex;
		justify-content: flex-end;
		margin-top: 3rem;

		:deep(.button) {
			display: inline-block;
		}
	}
</style>
