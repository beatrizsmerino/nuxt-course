<template>
	<nav class="page-nav">
		<ul class="page-nav__list">
			<li
				v-for="link in getLinkList"
				:key="link.id"
				class="page-nav__item"
			>
				<nuxt-link
					class="page-nav__link"
					:exact="!link.activeSubPages"
					:to="link.path"
				>
					{{ link.name }}
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		"name": "PageNav",
		data() {
			return {
				"linkList": [
					{
						"name": "Home",
						"path": "/",
					},
					{
						"name": "About",
						"path": "/about",
					},
					{
						"name": "Exercises",
						"path": "/exercises",
						"activeSubPages": true,
					},
				],
			};
		},
		"computed": {
			getLinkList() {
				return this.linkList;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.page-nav {
		&__list {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			margin: 0;
			padding: 0;
			list-style: none;
		}

		&__item {
			display: flex;
			align-items: center;
			justify-content: center;

			&:not(:last-child) {
				margin-right: 1rem;
			}
		}

		&__link {
			padding: 0.5rem;
			color: $color-brand-3;
			font-size: 2rem;
			font-weight: bold;
			text-decoration: none;

			&.nuxt-link-active {
				color: $color-white;
			}

			&:hover {
				color: $color-brand-1;
			}
		}
	}
</style>
