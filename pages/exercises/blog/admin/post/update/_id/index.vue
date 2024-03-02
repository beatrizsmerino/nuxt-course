<template>
	<Layout>
		<template #title>
			Blog
		</template>
		<template #subtitle>
			Update post #{{ getPostSelected.id }}
		</template>
		<template #content>
			<PostForm
				:post-data="getPostSelected"
				@save-post="updatePost"
			/>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Blog/Layout/Layout";
	import PostForm from "@/components/Exercises/Blog/Post/PostForm";

	export default {
		"name": "ViewBlogAdminPostUpdate",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
		"middleware": [
			"auth-check",
			"auth-redirect",
		],
		asyncData({ store, params }) {
			return store.dispatch("fetchReadPostSelected", params.id);
		},
		"head": {
			"title": "Update Post | Blog Exercise",
		},
		"computed": {
			getPostSelected() {
				return this.$store.getters.getPostSelected;
			},
		},
		beforeDestroy() {
			this.$store.dispatch("fetchDeletePostSelected");
		},
		"methods": {
			updatePost(postData) {
				this.$store.dispatch("fetchUpdatePost", postData).then(() => {
					this.$router.push("/exercises/blog/admin");
				});
			},
		},
	};
</script>
