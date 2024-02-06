<template>
	<div class="user-detail">
		<LayoutSubtitle>User</LayoutSubtitle>

		<p>User ID: {{ $route.params.id }}</p>
	</div>
</template>

<script>
	import LayoutSubtitle from "@/components/Nuxt2/Exercises/Project/Layout/LayoutSubtitle";

	export default {
		"name": "ViewUsersDetail",
		"components": {
			LayoutSubtitle,
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
