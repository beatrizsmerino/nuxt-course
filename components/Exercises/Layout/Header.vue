<template>
	<header class="header inner">
		<nuxt-link
			to="/"
			class="header__logo"
		>
			<Icon
				icon-id="icon-logo-nuxt-dark-theme"
				icon-aria-label="Nuxt App"
			/>
		</nuxt-link>
		<ul>
			<li>
				<nuxt-link to="/exercises">
					Exercises
				</nuxt-link>
			</li>
		</ul>
	</header>
</template>

<script>
	export default {
		"name": "Header",
	};
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		position: fixed;
		z-index: 999999;
		top: 0;
		left: 0;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: $color-brand-4;

		&__logo {
			.icon {
				width: 4rem;
				height: 4rem;

				&__use {
					fill: $color-white !important;
				}
			}
		}

		ul {
			font-size: 2rem;
			list-style: none;

			a {
				padding: 0.5rem;
				color: $color-white;
				font-weight: bold;
				text-decoration: none;

				&:last-child {
					padding-right: 0;
				}

				&.nuxt-link-active,
				&:hover {
					color: $color-brand-1;
				}
			}
		}
	}
</style>
