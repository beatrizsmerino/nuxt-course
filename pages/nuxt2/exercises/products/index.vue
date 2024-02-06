<template>
	<div class="page__container page__inner">
		<UIExerciseTitle>Products</UIExerciseTitle>

		<section>
			<article class="products-list">
				<ul>
					<li
						v-for="product in productList"
						:key="product.id"
					>
						<nuxt-link :to="product.url">
							{{ product.name }}
						</nuxt-link>
					</li>
				</ul>
			</article>
		</section>
	</div>
</template>

<script>
	import UIExerciseTitle from "@/components/UI/UIExerciseTitle";

	export default {
		"name": "ViewProducts",
		"components": {
			UIExerciseTitle,
		},
		"layout": "exercises",
		data() {
			return {
				"productList": [
					{
						"id": "1",
						"name": "Product 1",
						"url": "/nuxt2/exercises/products/1",
					},
					{
						"id": "2",
						"name": "Product 2",
						"url": "/nuxt2/exercises/products/2",
					},
				],
			};
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
						background-color: mix($color-white, $color-brand-2, 80%);
					}
				}
			}
		}
	}
</style>
