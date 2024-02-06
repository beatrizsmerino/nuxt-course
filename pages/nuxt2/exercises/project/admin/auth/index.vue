<template>
	<Layout
		:layout-subtitle="true"
		:layout-navigation="true"
	>
		<template #title>
			Project
		</template>
		<template #subtitle>
			Auth
		</template>
		<template #content>
			<AuthForm />
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Layout/Layout";
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
