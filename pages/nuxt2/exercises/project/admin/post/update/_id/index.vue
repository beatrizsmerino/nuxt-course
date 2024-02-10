<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Update post #{{ getPostSelected.id }}
		</template>
		<template #content>
			<article>
				<p v-if="isError">
					Error loading data
				</p>
				<PostForm
					v-else
					:post-data="getPostSelected"
					@save-post="updatePost"
				/>
			</article>
		</template>
	</Layout>
</template>

<script>
	import axios from "axios";

	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostUpdate",
		"components": {
			Layout,
			PostForm,
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
		"methods": {
			updatePost(postData) {
				console.log("Data of updatePost", postData);

				this.$store.dispatch("updatePost", postData).then(() => {
					this.$router.push("/nuxt2/exercises/project/admin");
				});
			},
		},
	};
</script>
