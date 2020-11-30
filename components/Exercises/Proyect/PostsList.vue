<template>
	<article class="posts-list">
		<ul>
			<li>
				<PostPreview />
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
