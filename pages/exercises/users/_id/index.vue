<template>
	<div class="user-detail">
		<Subtitle>
			User
		</Subtitle>

		<p>
			User ID: {{ $route.params.id }}
		</p>
	</div>
</template>

<script>
	import Subtitle from '@/components/Layout/Subtitle';

	export default {
		components: {
			Subtitle
		},
		validate(data) {
			console.log(data);

			// eslint-disable-next-line no-unused-vars
			const equalTo1 = data.params.id === 1;

			// return equalTo1;

			const equalToNumber = (/^\d+$/u).test(data.params.id);

			return equalToNumber;
		}
	};
</script>

<style lang="scss">
	.user-detail {
		.subtitle {
			margin-bottom: 2rem !important;
		}
	}
</style>
