<template>
	<nav class="navigation">
		<ul>
			<li>
				<Button to="/exercises/proyect/home">
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
	.navigation {
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

				a {
				}
			}
		}
	}
</style>
