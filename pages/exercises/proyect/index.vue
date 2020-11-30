<template>
	<Layout>
		<template #title>
			Last Posts
		</template>
		<template #content>
			<PostsList :posts-list-data="postsListData" />
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
		layout: 'exercises',
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
		}
	};
</script>

<style lang="scss" scoped></style>
