<template>
	<header class="header">
		<Logo />

		<ul>
			<li>
				<nuxt-link to="/">
					Exercise
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/products">
					Products
				</nuxt-link>
			</li>
		</ul>
	</header>
</template>

<script>
	import Logo from '@/components/Logo.vue'

	export default {
		name: 'Header',
		components: {
			Logo
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		height: 25rem;
		padding: 2rem 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: mix(#fff, $color-brand-1, 35%);

		ul {
			list-style: none;
			font-size: 3rem;
			font-weight: bold;

			li {
				&:not(:last-child) {
					margin-bottom: 0.5rem;
				}
			}

			a {
				padding: 1rem;
				text-decoration: none;
				color: $color-brand-2;

				&:hover {
					color: $color-brand-3;
				}
			}
		}
	}
</style>