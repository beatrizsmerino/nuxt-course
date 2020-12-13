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
				:src="require(`~/assets/images/exercises/project/posts/${postData.image}`)"
				:alt="postData.title"
			>
		</div>
		<h3 class="post-preview__title">
			{{ postData.title }}
		</h3>
		<div class="post-preview__description">
			{{ shortDescription }}
		</div>
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
		},
		data() {
			return {
				maxCharacters: 250
			};
		},
		computed: {
			shortDescription() {
				return this.ellipsize(this.postData.description);
			}
		},
		methods: {
			ellipsize(text) {
				if (typeof text !== 'string' || text.lenght <= this.maxCharacters) {
					return text;
				}

				return `${text.slice(0, this.maxCharacters)}...`;
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
			padding: 0.8rem 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 120%;
		}

		&__description{
			width: 100%;
			height: calc(100% - 6.5rem);
			padding: 1.2rem;
			position: absolute;
			font-size: 1.4rem;
			line-height: 120%;
			background-color: mix($color-black, $color-brand-1, 5%);
			opacity: 0;
			transition: opacity 0.4s ease-in-out 0s;
		}

		&:hover{
			.post-preview{
				&__description{
					opacity: 1;
				}
			}
		}

		&.last-post{
			&:hover{
				.post-preview {
					&__description{
						display: none;
					}
				}
			}
		}
	}
</style>
