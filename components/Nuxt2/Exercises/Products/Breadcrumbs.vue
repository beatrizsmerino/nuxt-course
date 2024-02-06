<template>
	<div class="breadcrumbs">
		<ul class="breadcrumbs__list">
			<li
				v-for="(item, index) in breadcrumbsListData"
				:key="`breadcrumb-${index}`"
				class="breadcrumbs__item"
			>
				<nuxt-link
					v-if="item.url"
					class="breadcrumbs__link"
					:to="item.url"
				>
					{{ item.name }}
				</nuxt-link>
				<span
					v-else
					class="breadcrumbs__link breadcrumbs__link--current"
				>
					{{ item.name }}
				</span>

				<UIIcon
					v-if="index + 1 != breadcrumbsListData.length"
					class="breadcrumbs__icon"
					icon-name="chevron-right"
					icon-aria-label="Breadcrumb arrow"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		"name": "Breadcrumbs",
		"props": {
			"breadcrumbsListData": {
				"type": Array,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.breadcrumbs {
		&__list {
			display: flex;
			align-items: center;
			padding: 0;
			list-style: none;
		}

		&__item {
			display: flex;
			align-items: center;
		}

		&__link {
			color: $color-brand-3;
			font-size: 2rem;
			text-decoration: none;

			&:hover {
				color: $color-brand-1;
				text-decoration: underline;
			}

			&--current {
				font-weight: bold;
				text-decoration: underline;
			}
		}

		&__icon {
			.icon {
				margin: 0 1rem;
				fill: $color-brand-1 !important;
			}
		}
	}
</style>
