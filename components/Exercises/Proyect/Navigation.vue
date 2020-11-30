<template>
	<nav class="proyect__navigation">
		<ul>
			<li>
				<Button to="/exercises/proyect">
					Home
				</Button>
			</li>
			<li>
				<Button to="/exercises/proyect/about-us">
					About Us
				</Button>
			</li>
			<li>
				<Button to="/exercises/proyect/posts">
					Posts
				</Button>
			</li>
			<li>
				<Button to="/exercises/proyect/admin">
					Admin
				</Button>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Navigation',
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped>
	.proyect__navigation {
		margin-bottom: 3rem;

		ul {
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			list-style: none;

			li {
				width: calc(25% - 2rem);
				margin: 1rem;

				@include media('md') {
					width: calc(50% - 2rem);
				}
			}
		}
	}
</style>
