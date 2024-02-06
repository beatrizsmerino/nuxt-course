<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #content>
			<PostDetail />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Layout/Layout";
	import PostDetail from "@/components/Nuxt2/Exercises/Project/Post/PostDetail";

	export default {
		"name": "ViewProjectPostsDetail",
		"components": {
			Layout,
			PostDetail,
		},
		"layout": "exercises",
	};
</script>
