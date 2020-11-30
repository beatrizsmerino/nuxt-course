<template>
	<div class="container inner">
		<Title>Proyect</Title>

		<Navigation />

		<Subtitle class="proyect__title">
			<slot name="title" />
		</Subtitle>

		<section class="proyect__content">
			<slot name="content" />
		</section>
	</div>
</template>

<script>
	import Navigation from '~/components/Exercises/Proyect/Navigation.vue';
	import Subtitle from '~/components/Subtitle.vue';
	import Title from '~/components/Title.vue';

	export default {
		name: 'Layout',
		components: {
			Title,
			Navigation,
			Subtitle
		},
		layout: 'exercises'
	};
</script>

<style lang="scss">
	.proyect__title {
		margin-bottom: 2rem !important;
	}

	.proyect__content {
		font-size: 1.8rem;

		p {
			&:not(:last-child) {
				margin-bottom: 1rem;
			}

			&:only-child {
				margin-bottom: 0;
			}
		}
	}
</style>
