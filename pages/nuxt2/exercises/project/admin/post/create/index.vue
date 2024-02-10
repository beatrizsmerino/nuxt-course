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
	import axios from "axios";

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
				axios
					.post("https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts.json", postData)
					.then(result => {
						const firebaseId = result.data.name;

						return axios.patch(
							`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${firebaseId}.json`,
							{ "id": firebaseId },
						);
					})
					.catch(error => console.log(error));
			},
		},
	};
</script>
