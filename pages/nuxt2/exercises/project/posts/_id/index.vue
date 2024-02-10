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
	import axios from "axios";
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostDetail from "@/components/Nuxt2/Exercises/Project/Post/PostDetail";

	export default {
		"name": "ViewProjectPostsDetail",
		"components": {
			Layout,
			PostDetail,
		},
		"layout": "exercises",
		asyncData(context) {
			return axios
				.get(`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${context.params.id}.json`)
				.then(response => ({
					"getPostSelected": response.data,
				}));
		},
		"computed": {
			isError() {
				return this.$store.state.isError;
			},
		},
	};
</script>
