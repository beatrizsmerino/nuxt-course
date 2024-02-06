<template>
	<div class="layout page__container page__inner">
		<LayoutTitle clas="layout__title">
			<slot name="title" />
		</LayoutTitle>

		<LayoutNavigation
			v-if="layoutNavigation"
			class="layout__navigation"
		/>

		<LayoutSubtitle
			v-if="layoutSubtitle"
			class="layout__subtitle"
		>
			<slot name="subtitle" />
		</LayoutSubtitle>

		<section class="layout__content">
			<slot name="content" />
		</section>
	</div>
</template>

<script>
	import LayoutNavigation from "@/components/Layout/LayoutNavigation";
	import LayoutSubtitle from "@/components/Layout/LayoutSubtitle";
	import LayoutTitle from "@/components/Layout/LayoutTitle";

	export default {
		"name": "Layout",
		"components": {
			LayoutTitle,
			LayoutNavigation,
			LayoutSubtitle,
		},
		"layout": "exercises",
		"props": {
			"layoutSubtitle": {
				"type": Boolean,
				"default": false,
			},
			"layoutNavigation": {
				"type": Boolean,
				"default": false,
			},
		},
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

		&__title {
			margin: 5rem 0 2.5rem;
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
