<template>
	<nuxt-link
		to="/exercises/proyect/posts/0"
		class="post-preview"
	>
		<div class="post-preview__image">
			<img
				:src="require(`~/assets/images/exercises/proyect/posts/${postData.image}`)"
				:alt="postData.title"
			>
		</div>
		<h3 class="post-preview__title">
			{{ postData.title }}
		</h3>
	</nuxt-link>
</template>

<script>
	export default {
		name: 'PostPreview',
		props: {
			postData: {
				type: Object,
				required: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.post-preview {
		width: 100%;
		text-align: center;
		text-decoration: none;
		color: $color-brand-3;
		background-color: mix($color-white, $color-brand-1, 80%);

		&:hover {
			background-color: mix($color-white, $color-brand-1, 60%);
		}

		&__image {
			img {
				width: 100%;
				height: 15rem;
				object-fit: cover;
			}
		}

		&__title {
			padding: 1.5rem 1rem;
		}
	}
</style>
