<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Create a new post
		</template>
		<template #content>
			<PostForm @save-post="createPost" />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Project/Layout/Layout";
	import PostForm from "@/components/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostCreate",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
		"middleware": "auth",
		"head": {
			"title": "Create Post | Project Exercise",
		},
		"methods": {
			createPost(postData) {
				this.$store.dispatch("fetchCreatePost", postData).then(() => {
					this.$router.push("/exercises/project/admin");
				});
			},
		},
	};
</script>
