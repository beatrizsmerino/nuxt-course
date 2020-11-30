<template>
	<Layout>
		<template #title>
			Posts
		</template>
		<template #content>
			<article class="posts-list">
				<ul>
					<li>
						<nuxt-link to="/exercises/proyect/posts/1">
							Post 1
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/exercises/proyect/posts/2">
							Post 2
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/exercises/proyect/posts/3">
							Post 3
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/exercises/proyect/posts/4">
							Post 4
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/exercises/proyect/posts/5">
							Post 5
						</nuxt-link>
					</li>
				</ul>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from '~/components/Exercises/Proyect/Layout.vue';

	export default {
		components: {
			Layout
		},
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped>
	.posts-list {
		ul {
			padding: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			li {
				width: calc(50% - 2rem);
				margin: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;

				@include media('sm') {
					width: calc(100% - 2rem);
				}

				a {
					width: 100%;
					padding: 2rem;
					text-align: center;
					text-decoration: none;
					color: $color-brand-3;
					background-color: mix($color-white, $color-brand-1, 80%);

					&:hover {
						background-color: mix($color-white, $color-brand-1, 60%);
					}
				}
			}
		}
	}
</style>
