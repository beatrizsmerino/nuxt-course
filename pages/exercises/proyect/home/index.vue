<template>
	<Layout class="layout-home">
		<template #title>
			Last Posts
		</template>
		<template #content>
			<PostsList
				:show-last-posts="true"
				class="last-posts"
			/>
		</template>
	</Layout>
</template>

<script>
	import Layout from '@/components/Exercises/Proyect/Layout.vue';
	import PostsList from '@/components/Exercises/Proyect/PostsList.vue';

	export default {
		components: {
			Layout,
			PostsList
		},
		layout: 'exercises'
	};
</script>

<style lang="scss">
	.last-posts {
		ul {
			justify-content: center;

			li {
				width: calc(33.333% - 2rem) !important;

				@include media('lg') {
					width: calc(50% - 2rem) !important;
				}

				@include media('sm') {
					width: 100% !important;
				}

				a {
					color: mix($color-white, $color-black, 30%) !important;
					background-color: mix(
						$color-white,
						$color-black,
						80%
					) !important;

					&:hover {
						color: $color-white !important;
						background-color: mix(
							$color-white,
							$color-black,
							50%
						) !important;
					}
				}
			}
		}
	}
</style>
