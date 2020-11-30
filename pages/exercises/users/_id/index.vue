<template>
	<div class="container inner">
		<Title>User</Title>

		<Subtitle>User ID: {{ $route.params.id }}</Subtitle>
	</div>
</template>

<script>
	import Subtitle from '@/components/Subtitle.vue';
	import Title from '@/components/Title.vue';

	export default {
		components: {
			Title,
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

<style lang="scss"></style>
