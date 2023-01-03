<template>
	<div class="layout__inner container inner">
		<Title>Project</Title>

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
	import Navigation from '@/components/Exercises/Project/Navigation';
	import Subtitle from '@/components/Layout/Subtitle';
	import Title from '@/components/Layout/Title';

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

<style lang="scss" scoped>
	.layout {
		&__inner {
			min-height: 100rem;
			position: relative;

			&:before {
				content: '';
				display: inline-block;
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				z-index: -1;
				background-size: 50rem;
				background-repeat: no-repeat;
				background-position: 95% 0;
				background-image: url('~assets/images/exercises/project/background.png');
				opacity: 0.5;
			}
		}

		&__title,
		&__content {
			font-family: $font-ubuntu;
		}

		&__title {
			margin: 5rem 0 1.8rem;
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
