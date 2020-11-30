<template>
	<div class="container">
		<h1 class="title">
			Products
		</h1>

		<div class="products-list">
			<ul>
				<li>
					<nuxt-link to="/products/1">
						Product 1
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/products/2">
						Product 2
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {

	}
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
					background-color: mix(#fff, $color-brand-2, 90%);

					&:hover {
						background-color: mix(#fff, $color-brand-2, 80%);
					}
				}
			}
		}
	}
</style>