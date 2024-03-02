<template>
	<Layout>
		<template #title>
			Blog
		</template>
		<template #subtitle>
			Auth
		</template>
		<template #content>
			<AuthForm @submit:auth="onAuth" />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Blog/Layout/Layout";
	import AuthForm from "@/components/Exercises/Blog/Auth/AuthForm";

	export default {
		"name": "ViewBlogAdminAuth",
		"components": {
			Layout,
			AuthForm,
		},
		"layout": "exercises",
		"head": {
			"title": "Auth | Blog Exercise",
		},
		"methods": {
			onAuth(userData) {
				this.$store.dispatch("fetchCreateAuthUser", userData).then(() => {
					this.$router.push("/exercises/blog/admin");
				});
			},
		},
	};
</script>
