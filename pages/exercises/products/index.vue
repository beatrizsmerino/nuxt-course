<template>
	<div class="container inner">
		<Title>Page Products</Title>

		<section>
			<article class="products-list">
				<ul>
					<li>
						<nuxt-link to="/exercises/products/1">
							Product 1
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/exercises/products/2">
							Product 2
						</nuxt-link>
					</li>
				</ul>
			</article>
		</section>
	</div>
</template>

<script>
	import Title from '~/components/Title.vue';

	export default {
		components: {
			Title
		},
		layout: 'exercises',
		data() {
			return {};
		}
	};
</script>

<style lang="scss">
	.products-list {
		width: 100%;

		ul {
			width: 100%;
			padding: 0;
			display: flex;
			justify-content: center;
			list-style: none;

			li {
				width: calc(50% - 2rem);
				margin: 1rem;

				a {
					width: 100%;
					height: 15rem;
					padding: 2rem;
					display: flex;
					justify-content: center;
					align-items: center;
					text-decoration: none;
					font-size: 2rem;
					font-weight: bold;
					color: $color-brand-3;
					background-color: mix($color-white, $color-brand-2, 90%);

					&:hover {
						background-color: mix($color-white, $color-brand-2, 80%);
					}
				}
			}
		}
	}
</style>
