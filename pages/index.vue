<template>
	<section class="container">
		<h1 class="title">
			Exercise
		</h1>

		<div class="exercise-steps">
			<ol>
				<li>
					Create two routes: /products and /products/:pid
				</li>
				<li>
					Add a button to the main page. The button should navigate (programmatically) to /products
				</li>
				<li>
					Add two links to the /products page. The links should go to /products/1 and /products/2
				</li>
				<li>
					Output the product id on the /products/:pid page
				</li>
			</ol>
		</div>
	</section>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.exercise-steps {
		width: 100%;
		max-width: 80rem;
		text-align: left;

		ol {
			li {
				&:not(:last-child) {
					margin-bottom: 1rem;
				}
			}
		}
	}
</style>
