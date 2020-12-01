<template>
	<div class="post-preview">
		<time
			:datetime="postData.date"
			class="post-preview__time"
		>
			{{ postData.date }}
		</time>
		<div class="post-preview__image">
			<img
				:src="require(`~/assets/images/exercises/proyect/posts/${postData.image}`)"
				:alt="postData.title"
			>
		</div>
		<h3 class="post-preview__title">
			{{ postData.title }}
		</h3>
	</div>
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
		position: relative;
		display: flex;
		flex-direction: column;

		&__time {
			width: 100%;
			height: calc(100% - 6.5rem);
			padding: 0.8rem;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			text-align: right;
			font-size: 1.4rem;
			font-weight: 500;
			font-style: italic;
			color: $color-white;
			background-color: rgba($color-black, 0.5);
		}

		&__image {
			height: 15rem;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__title {
			height: 6.5rem;
			padding: 0.8rem 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 1.4rem;
			font-weight: 500;
			line-height: 100%;
		}
	}
</style>
