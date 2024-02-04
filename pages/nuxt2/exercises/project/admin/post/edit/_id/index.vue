<template>
	<Layout class="layout-admin">
		<template #title>
			Edit post #{{ $route.params.id }}
		</template>
		<template #content>
			<PostForm />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostEdit",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
	};
</script>
