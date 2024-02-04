<template>
	<Layout class="layout-admin">
		<template #title>
			Create a new post
		</template>
		<template #content>
			<article class="create-new-post">
				<PostNew />
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout";
	import PostNew from "@/components/Nuxt2/Exercises/Project/Post/PostNew";

	export default {
		"name": "ViewProjectAdminNewPost",
		"components": {
			Layout,
			PostNew,
		},
		"layout": "exercises",
	};
</script>
