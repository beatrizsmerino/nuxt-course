<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #content>
			<article>
				<p v-if="isError">
					Error loading data
				</p>
				<PostDetail
					v-else
					:post-data="getPostSelected"
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
			getPostSelected() {
				return this.getPostList.filter(item => item.id == this.$route.params.id)[0];
			},
			isError() {
				return this.$store.state.isError;
			},
		},
	};
</script>
