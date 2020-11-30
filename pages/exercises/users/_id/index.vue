<template>
	<div class="container inner">
		<Title>Page User</Title>

		<Subtitle>User with ID: {{ $route.params.id }}</Subtitle>
	</div>
</template>

<script>
	import Subtitle from '~/components/Subtitle.vue';
	import Title from '~/components/Title.vue';

	export default {
		components: {
			Title,
			Subtitle
		}
	};
</script>

<style lang="scss"></style>
