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
		data() {
			return {
				"productList": [],
			};
		},
		created() {
			this.getProducts();
		},
		"methods": {
			getProducts() {
				try {
					setTimeout(async () => {
						const response = await fetch("https://fakestoreapi.com/products");
						const json = await response.json();
						json.map(product => (product.url = `/nuxt2/exercises/products/${product.id}`));
						this.productList = json;

						// console.log(json);
					}, 10000);
				} catch (error) {
					console.error("Error fetching products:", error);
				}
			},
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
