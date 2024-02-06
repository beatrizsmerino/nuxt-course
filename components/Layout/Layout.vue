<template>
	<div class="layout__inner page__container page__inner">
		<LayoutTitle>Project</LayoutTitle>

		<LayoutNavigation />

		<LayoutSubtitle class="layout__title">
			<slot name="title" />
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
	};
</script>

<style lang="scss" scoped>
	.layout {
		&__inner {
			position: relative;
			min-height: 100rem;

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
		}

		&__title,
		&__content {
			font-family: $font-ubuntu;
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
