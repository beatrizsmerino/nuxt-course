<template>
	<Layout>
		<template #title>
			Blog
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
	import Layout from "@/components/Exercises/Blog/Layout/Layout";
	import PostForm from "@/components/Exercises/Blog/Post/PostForm";

	export default {
		"name": "ViewBlogAdminPostCreate",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
		"middleware": [
			"auth-check",
			"auth-redirect",
		],
		"head": {
			"title": "Create Post | Blog Exercise",
		},
		"methods": {
			createPost(postData) {
				this.$store.dispatch("fetchCreatePost", postData).then(() => {
					this.$router.push("/exercises/blog/admin");
				});
			},
		},
	};
</script>
