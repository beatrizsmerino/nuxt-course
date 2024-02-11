<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Create a new post
		</template>
		<template #content>
			<article>
				<PostForm @save-post="createPost" />
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostCreate",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
		"methods": {
			createPost(postData) {
				console.log("Data of createPost", postData);

				this.$store.dispatch("fetchCreatePost", postData).then(() => {
					this.$router.push("/nuxt2/exercises/project/admin");
				});
			},
		},
	};
</script>
