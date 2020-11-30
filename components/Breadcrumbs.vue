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
					icon-id="icon-chevron-right"
					icon-aria-label="Breadcrumb arrow"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
	import Icon from '~/components/UI/Icon.vue';

	export default {
		name: 'Breadcrumbs',
		components: {
			Icon
		},
		props: {
			breadcrumbsListData: {
				type: Array,
				required: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.breadcrumbs {
		ul {
			padding: 0;
			display: flex;
			align-items: center;
			list-style: none;

			li {
				display: flex;
				align-items: center;

				a {
					text-decoration: none;
					font-size: 2rem;
					color: $color-brand-3;

					&:hover {
						text-decoration: underline;
						color: $color-brand-1;
					}
				}

				.icon {
					margin: 0 1rem;

					&__use {
						fill: $color-brand-1 !important;
					}
				}
			}
		}
	}
</style>
