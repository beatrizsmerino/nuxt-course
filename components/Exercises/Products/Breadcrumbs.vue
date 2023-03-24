<template>
	<div class="breadcrumbs">
		<ul>
			<li
				v-for="(item, index) in breadcrumbsListData"
				:key="`breadcrumb-${index}`"
			>
				<nuxt-link :to="item.url">
					{{ item.name }}
				</nuxt-link>

				<Icon
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
		ul {
			display: flex;
			align-items: center;
			padding: 0;
			list-style: none;

			li {
				display: flex;
				align-items: center;

				a {
					color: $color-brand-3;
					font-size: 2rem;
					text-decoration: none;

					&:hover {
						color: $color-brand-1;
						text-decoration: underline;
					}
				}

				.icon {
					margin: 0 1rem;
					fill: $color-brand-1 !important;
				}
			}
		}
	}
</style>
