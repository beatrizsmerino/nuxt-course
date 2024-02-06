<template>
	<Layout class="layout-admin">
		<template #title>
			Auth
		</template>
		<template #content>
			<AuthForm />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Nuxt2/Exercises/Layout/Layout";
	import AuthForm from "@/components/Nuxt2/Exercises/Project/Auth/AuthForm";

	export default {
		"name": "ViewProjectAdminAuth",
		"components": {
			Layout,
			AuthForm,
		},
		"layout": "exercises",
	};
</script>

<style lang="scss" scoped></style>
