<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Edit post #{{ $route.params.id }}
		</template>
		<template #content>
			<PostForm :post-data="getPostSelected" />
		</template>
	</Layout>
</template>

<script>
	import postListData from "~/assets/data/data-post-list.json";
	import Layout from "@/components/Layout/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostEdit",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
		data() {
			return {
				"postList": postListData,
			};
		},
		"computed": {
			getPostSelected() {
				return this.postList.filter(item => item.id == this.$route.params.id)[0];
			},
		},
	};
</script>
