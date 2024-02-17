<template>
	<Layout>
		<template #title>
			Project
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
	import Layout from "@/components/Exercises/Project/Layout/Layout";
	import AuthForm from "@/components/Exercises/Project/Auth/AuthForm";

	export default {
		"name": "ViewProjectAdminAuth",
		"components": {
			Layout,
			AuthForm,
		},
		"layout": "exercises",
		"head": {
			"title": "Auth | Project Exercise",
		},
		"methods": {
			onAuth(userData) {
				console.log("onAuth", userData);
				this.$store.dispatch("fetchCreateAuthUser", userData).then(() => {
					this.$router.push("/exercises/project/admin");
				});
			},
		},
	};
</script>
