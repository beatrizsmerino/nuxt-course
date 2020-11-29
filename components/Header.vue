<template>
	<header class="header inner">
		<nuxt-link to="/" class="header__logo">
			<Icon
				icon-id="icon-logo-nuxt-dark-theme"
				icon-aria-label="Nuxt App"
			/>
		</nuxt-link>
		<ul>
			<li>
				<nuxt-link to="/users">
					Users
				</nuxt-link>
			</li>
		</ul>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		components: {}
	};
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: $color-brand-4;

		&__logo {
			.icon {
				width: 4rem;
				height: 4rem;

				&__use {
					fill: #fff !important;
				}
			}
		}

		ul {
			list-style: none;
			font-size: 2rem;

			a {
				padding: 0.5rem;
				text-decoration: none;
				color: #fff;
				font-weight: bold;

				&:last-child {
					padding-right: 0;
				}

				&:hover {
					color: $color-brand-1;
				}
			}
		}
	}
</style>
