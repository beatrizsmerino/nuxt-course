<template>
	<nuxt-link
		:class="`post-preview post-preview--${postModifier}`"
		:to="`/exercises/project/posts/${postIndex}`"
	>
		<time
			:datetime="postData.date"
			class="post-preview__time"
		>
			{{ postData.date }}
		</time>
		<div class="post-preview__image">
			<img
				:src="
					require(`~/assets/images/exercises/project/posts/${postData.image}`)
				"
				:alt="postData.title"
			>
		</div>
		<h3 class="post-preview__title">
			{{ postData.title }}
		</h3>
		<div class="post-preview__description">
			{{ shortDescription }}
		</div>
	</nuxt-link>
</template>

<script>
	export default {
		"name": "PostPreview",
		"props": {
			"postData": {
				"type": Object,
				"required": true,
			},
			"postIndex": {
				"type": Number,
				"required": true,
			},
			"postModifier": {
				"type": String,
				"required": true,
			},
		},
		data() {
			return {
				"maxCharacters": 250,
			};
		},
		"computed": {
			shortDescription() {
				return this.ellipsize(this.postData.description);
			},
		},
		"methods": {
			ellipsize(text) {
				if (
					typeof text !== "string" ||
					text.lenght <= this.maxCharacters
				) {
					return text;
				}

				return `${text.slice(0, this.maxCharacters)}...`;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.post-preview {
		width: 100%;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		border-radius: 2rem 0 2rem 2rem;
		background-color: mix($color-white, $color-brand-1, 40%);

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
			display: flex;
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
			color: $color-brand-3;
		}

		&__description {
			width: 100%;
			height: calc(100% - 6.5rem);
			padding: 1.2rem;
			position: absolute;
			font-size: 1.4rem;
			line-height: 120%;
			color: $color-white;
			background-color: $color-brand-3;
			opacity: 0;
			transition: opacity 0.4s ease-in-out 0s;
		}

		&:hover {
			background-color: mix($color-white, $color-brand-1, 20%);

			.post-preview {
				&__title {
					color: mix($color-white, $color-black, 15%);
				}
				&__description {
					opacity: 1;
				}
			}
		}

		&--last-post {
			background-color: mix($color-white, $color-black, 20%) !important;

			.post-preview {
				&__title {
					color: mix($color-white, $color-black, 50%) !important;
				}
			}

			&:hover {
				.post-preview {
					&__title {
						color: $color-white !important;
					}

					&__description {
						display: none;
					}
				}
			}
		}
	}
</style>
