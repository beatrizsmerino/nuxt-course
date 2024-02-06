<template>
	<div class="user-detail">
		<UIExerciseSubtitle>User</UIExerciseSubtitle>

		<section>
			<article>
				<p>User ID: {{ $route.params.id }}</p>
			</article>
		</section>
	</div>
</template>

<script>
	import UIExerciseSubtitle from "@/components/UI/UIExerciseSubtitle";

	export default {
		"name": "ViewUsersDetail",
		"components": {
			UIExerciseSubtitle,
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
