<template>
	<article class="posts-list">
		<ul>
			<li
				v-for="(item, index) in getPosts"
				:key="`post-${index}`"
			>
				<PostPreview :post-data="item" />
			</li>
		</ul>
	</article>
</template>

<script>
	import PostPreview from '~/components/Exercises/Proyect/PostPreview.vue';

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
				postsListData: [
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-1.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-2.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-3.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-4.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-5.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-6.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-7.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-8.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-9.jpg'
					},
					{
						title: 'Post title',
						data: 'YYYY-MM-DD',
						author: 'Post Author name',
						description: 'Post description',
						image: 'post-10.jpg'
					}
				]
			};
		},
		computed: {
			getPosts() {
				if (this.showLastPosts) {
					return this.postsListData.slice(0, this.maxPostsList);
				}

				return this.postsListData;
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

				@include media('sm') {
					width: calc(100% - 2rem);
				}
			}
		}
	}
</style>
