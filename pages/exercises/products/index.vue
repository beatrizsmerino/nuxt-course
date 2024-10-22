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
							{{ product.title }}
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
		// eslint-disable-next-line consistent-return, complexity
		async asyncData(context) {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				if (!response.ok) {
					throw new Error("Error fetching products");
				}
				const products = await response.json();

				products.forEach(product => {
					product.url = `${context.route.path}/${product.id}`;
				});

				return { "productList": products };
			} catch (error) {
				const message =
					error.response && error.response.data && error.response.data.message
						? error.response.data.message
						: "Error fetching products";
				context.error({ "statusCode": 404,
					message });
			}
		},
		"head": {
			"title": "Product List | Products Exercise",
		},
	};
</script>

<style lang="scss">
	.products-list {
		width: 100%;

		ul {
			display: flex;
			flex-wrap: wrap;
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
					background-color: color.mix($color-white, $color-brand-2, 90%);
					color: $color-brand-3;
					font-size: 2rem;
					font-weight: bold;
					text-decoration: none;

					&:hover {
						background-color: color.mix($color-white, $color-brand-2, 80%);
					}
				}
			}
		}
	}
</style>
