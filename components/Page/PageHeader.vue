<template>
	<header class="page-header page__inner">
		<nuxt-link
			to="/"
			class="page-header__logo"
		>
			<UIIcon
				icon-name="logo-nuxt-dark-theme"
				:icon-aria-label="getRepoName"
			/>
			<span class="page-header__title">
				{{ getRepoName }}
			</span>
		</nuxt-link>
		<PageNav />
	</header>
</template>

<script>
	import PageNav from "@/components/Page/PageNav";

	export default {
		"name": "PageHeader",
		"components": {
			PageNav,
		},
		"computed": {
			getRepoName() {
				return process.env.repoName;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.page-header {
		display: flex;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 6rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: $color-brand-4;

		&__logo {
			display: flex;
			align-items: center;
			color: $color-brand-1 !important;
			text-decoration: none;
			gap: 2rem;

			.icon {
				width: 4rem;
				height: 4rem;
				fill: $color-white !important;
			}
		}

		&__title {
			font-size: 2.5rem;

			@include media("sm") {
				display: none;
			}
		}
	}
</style>
