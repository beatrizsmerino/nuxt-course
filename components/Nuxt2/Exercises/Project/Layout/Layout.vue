<template>
	<div class="layout page__container page__inner">
		<LayoutTitle clas="layout__title">
			<slot name="title" />
		</LayoutTitle>

		<LayoutNavigation class="layout__navigation" />

		<LayoutSubtitle class="layout__subtitle">
			<slot name="subtitle" />
		</LayoutSubtitle>

		<section class="layout__content">
			<slot name="content" />
		</section>
	</div>
</template>

<script>
	import LayoutNavigation from "@/components/Nuxt2/Exercises/Project/Layout/LayoutNavigation";
	import LayoutSubtitle from "@/components/UI/LayoutSubtitle";
	import LayoutTitle from "@/components/UI/LayoutTitle";

	export default {
		"name": "Layout",
		"components": {
			LayoutTitle,
			LayoutNavigation,
			LayoutSubtitle,
		},
		"layout": "exercises",
	};
</script>

<style lang="scss" scoped>
	.layout {
		position: relative;
		min-height: 100rem;
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
			background-image: url("~assets/images/nuxt2/exercises/project/background.png");
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
