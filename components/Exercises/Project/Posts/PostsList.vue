<template>
	<article class="posts-list">
		<ul>
			<li
				v-for="(item, index) in getPosts"
				:key="`post-${index}`"
			>
				<PostPreview
					:post-data="item"
					:post-index="index"
					:post-modifier="getCssModifier"
				/>
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
			},
			getCssModifier() {
				if (this.showLastPosts) {
					return 'last-post';
				}

				return '';
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
			}
		}
	}
</style>
