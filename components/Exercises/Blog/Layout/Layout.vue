<template>
	<div class="layout page__container page__inner">
		<UIExerciseTitle clas="layout__title">
			<slot name="title" />
		</UIExerciseTitle>

		<LayoutNavigation class="layout__navigation" />

		<UIExerciseSubtitle class="layout__subtitle">
			<slot name="subtitle" />
		</UIExerciseSubtitle>

		<section class="layout__content">
			<slot name="content" />
		</section>
	</div>
</template>

<script>
	import LayoutNavigation from "@/components/Exercises/Blog/Layout/LayoutNavigation";
	import UIExerciseTitle from "@/components/UI/UIExerciseTitle";
	import UIExerciseSubtitle from "@/components/UI/UIExerciseSubtitle";

	export default {
		"name": "Layout",
		"components": {
			UIExerciseTitle,
			LayoutNavigation,
			UIExerciseSubtitle,
		},
		"layout": "exercises",
	};
</script>

<style lang="scss" scoped>
	.layout {
		position: relative;
		min-height: 100rem;
		overflow: hidden;
		font-family: $font-ubuntu;

		&:before {
			content: "";
			display: inline-block;
			position: absolute;
			z-index: -1;
			top: 0;
			width: 100%;
			height: 100%;
			opacity: 0.5;
			background-image: url("~assets/images/exercises/blog/background.png");
			background-repeat: no-repeat;
			background-position: 95% 0;
			background-size: 50rem;
		}

		textarea {
			font-family: $font-ubuntu;
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
