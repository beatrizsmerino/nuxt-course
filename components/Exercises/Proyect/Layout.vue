<template>
	<div class="container inner">
		<Title>Proyect</Title>

		<Navigation />

		<Subtitle class="layout__title">
			<slot name="title" />
		</Subtitle>

		<section class="layout__content">
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
	.layout {
		background-size: 40rem;
		background-repeat: no-repeat;
		background-position: 95% 10%;
		background-image: url('~assets/images/exercises/proyect/background.png');

		&__title,
		&__content {
			font-family: $font-ubuntu;
		}

		&__title {
			margin-bottom: 2rem !important;
		}

		&__content {
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
	}
</style>
