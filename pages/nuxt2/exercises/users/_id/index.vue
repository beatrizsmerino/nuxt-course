<template>
	<Layout>
		<template #title>
			User
		</template>
		<template #content>
			<p>User ID: {{ $route.params.id }}</p>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Layout/Layout";

	export default {
		"name": "ViewUsersDetail",
		"components": {
			Layout,
		},
		validate(data) {
			console.log(data);

			// eslint-disable-next-line no-unused-vars
			const equalTo1 = data.params.id === 1;

			// return equalTo1;

			const equalToNumber = (/^\d+$/u).test(data.params.id);

			return equalToNumber;
		},
	};
</script>

<style lang="scss">
	.user-detail {
		.subtitle {
			margin-bottom: 2rem !important;
		}
	}
</style>
