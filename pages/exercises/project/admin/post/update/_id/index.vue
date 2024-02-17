<template>
	<Layout>
		<template #title>
			Project
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
	import Layout from "@/components/Exercises/Project/Layout/Layout";
	import PostForm from "@/components/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostUpdate",
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
			"title": "Update Post | Project Exercise",
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
					this.$router.push("/exercises/project/admin");
				});
			},
		},
	};
</script>
