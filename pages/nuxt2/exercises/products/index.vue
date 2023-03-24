<template>
	<div class="page__container page__inner">
		<Title>Products</Title>

		<section>
			<article class="products-list">
				<ul>
					<li>
						<nuxt-link to="/nuxt2/exercises/products/1">
							Product 1
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/nuxt2/exercises/products/2">
							Product 2
						</nuxt-link>
					</li>
				</ul>
			</article>
		</section>
	</div>
</template>

<script>
	import Title from "@/components/Nuxt2/Exercises/Layout/Title";

	export default {
		"components": {
			Title,
		},
		"layout": "exercises",
		data() {
			return {};
		},
	};
</script>

<style lang="scss">
	.products-list {
		width: 100%;

		ul {
			display: flex;
			justify-content: center;
			width: 100%;
			padding: 0;
			list-style: none;

			li {
				width: calc(50% - 2rem);
				margin: 1rem;

				a {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 15rem;
					padding: 2rem;
					background-color: mix($color-white, $color-brand-2, 90%);
					color: $color-brand-3;
					font-size: 2rem;
					font-weight: bold;
					text-decoration: none;

					&:hover {
						background-color: mix(
							$color-white,
							$color-brand-2,
							80%
						);
					}
				}
			}
		}
	}
</style>
