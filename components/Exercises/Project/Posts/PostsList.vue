<template>
	<article class="posts-list">
		<ul>
			<li
				v-for="(item, index) in getPosts"
				:key="`post-${index}`"
			>
				<nuxt-link :to="`/exercises/project/posts/${index}`">
					<PostPreview :post-data="item" :class="{'last-post': showLastPosts}" />
				</nuxt-link>
			</li>
		</ul>
	</article>
</template>

<script>
	import PostPreview from './PostPreview';
	import postsListData from '~/assets/data/data-posts-list.json';

	export default {
		name: 'PostsList',
		components: {
			PostPreview
		},
		props: {
			showLastPosts: {
				type: Boolean,
				default: false
			},
			maxPostsList: {
				type: Number,
				default: 5
			}
		},
		data() {
			return {
				postsList: postsListData
			};
		},
		computed: {
			getPosts() {
				if (this.showLastPosts) {
					return this.postsList.slice(0, this.maxPostsList);
				}

				return this.postsList;
			}
		}
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

				@include media('md') {
					width: calc(100% - 2rem);
				}

				a {
					width: 100%;
					text-decoration: none;
					color: $color-brand-3;
					background-color: mix($color-white, $color-brand-1, 40%);

					&:hover {
						color: mix($color-white, $color-black, 15%);
						background-color: mix($color-white, $color-brand-1, 20%);
					}
				}
			}
		}
	}

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
							20%
						) !important;
					}
				}
			}
		}
	}
</style>
