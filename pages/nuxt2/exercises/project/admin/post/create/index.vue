<template>
	<Layout class="layout-admin">
		<template #title>
			Create a new post
		</template>
		<template #content>
			<article class="create-new-post">
				<PostForm />
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostCreate",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
	};
</script>
