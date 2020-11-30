<template>
	<div class="container inner">
		<Title>Proyect</Title>
		<Navigation />
	</div>
</template>

<script>
	import Navigation from '~/components/Exercises/Proyect/Navigation.vue';
	import Title from '~/components/Title.vue';

	export default {
		components: {
			Title,
			Navigation
		},
		layout: 'exercises'
	};
</script>

<style lang="scss"></style>
