<template>
	<Layout class="layout-admin">
		<template #title>
			Project
		</template>
		<template #subtitle>
			Create a new post
		</template>
		<template #content>
			<PostForm />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Layout/Layout";
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
