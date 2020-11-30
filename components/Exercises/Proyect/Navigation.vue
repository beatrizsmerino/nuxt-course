<template>
	<section class="proyect-navigation">
		<article>
			<Button to="/exercises/proyect">
				Home
			</Button>
		</article>
		<article>
			<Button to="/exercises/proyect/about-us">
				About Us
			</Button>
		</article>
		<article>
			<Button to="/exercises/proyect/posts">
				Posts
			</Button>
		</article>
		<article>
			<Button to="/exercises/proyect/admin">
				Admin
			</Button>
		</article>
	</section>
</template>

<script>
	export default {
		name: 'Navigation',
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped>
	.proyect-navigation {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		article {
			width: calc(25% - 2rem);
			margin: 1rem;

			@include media('md') {
				width: calc(50% - 2rem);
			}
		}
	}
</style>
