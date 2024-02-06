<template>
	<Layout>
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
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout/Layout";
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
