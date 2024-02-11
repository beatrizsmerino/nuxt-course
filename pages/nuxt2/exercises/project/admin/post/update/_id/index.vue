<template>
	<Layout>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Update post #{{ getPostSelected.id }}
		</template>
		<template #content>
			<article>
				<p v-if="isError">
					Error loading data
				</p>
				<PostForm
					v-else
					:post-data="getPostSelected"
					@save-post="updatePost"
				/>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
	import PostForm from "@/components/Nuxt2/Exercises/Project/Post/PostForm";

	export default {
		"name": "ViewProjectAdminPostUpdate",
		"components": {
			Layout,
			PostForm,
		},
		"layout": "exercises",
		asyncData({ store, params }) {
			return store.dispatch("fetchReadPostSelected", params.id);
		},
		"computed": {
			getPostSelected() {
				return this.$store.getters.getPostSelected;
			},
			isError() {
				return this.$store.getters.getIsError;
			},
		},
		beforeDestroy() {
			this.$store.dispatch("fetchDeletePostSelected");
		},
		"methods": {
			updatePost(postData) {
				console.log("Data of updatePost", postData);

				this.$store.dispatch("fetchUpdatePost", postData).then(() => {
					this.$router.push("/nuxt2/exercises/project/admin");
				});
			},
		},
	};
</script>
