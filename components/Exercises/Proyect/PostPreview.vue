<template>
	<nuxt-link
		to="/exercises/proyect/posts/0"
		class="post-preview"
	>
		<div class="post-preview__image">
			<img
				:src="require(`~/assets/images/default/default-placeholder.png`)"
				alt="Lorem ipsum dolor"
			>
		</div>
		<h3 class="post-preview__title">
			Post 0
		</h3>
	</nuxt-link>
</template>

<script>
	export default {
		name: 'PostPreview'
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
