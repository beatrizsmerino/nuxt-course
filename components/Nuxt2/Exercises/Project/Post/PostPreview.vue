<template>
	<nuxt-link
		:class="`post-preview ${postModifier.join(' ')}`"
		:to="`/nuxt2/exercises/project/posts/${postData.id}`"
	>
		<template v-if="checkCssModifier === 'expanded'">
			<time
				:datetime="postData.date"
				class="post-preview__time"
			>
				{{ postData.date }}
			</time>
			<div class="post-preview__image">
				<img
					:src="require(`~/assets/images/nuxt2/exercises/project/posts/${postData.image}`)"
					:alt="postData.title"
				>
			</div>
			<h3 class="post-preview__title">
				{{ postData.title }}
			</h3>
			<div class="post-preview__short-description">
				{{ shortDescription }}
			</div>
		</template>
		<template v-if="checkCssModifier === 'compacted'">
			<time
				:datetime="postData.date"
				class="post-preview__time"
			>
				{{ postData.date }}
			</time>
			<h3 class="post-preview__title">
				{{ postData.title }}
			</h3>
		</template>
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
			"postModifier": {
				"type": Array,
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
			checkCssModifier() {
				const isExpanded = this.postModifier.find(item => item.includes("expanded"));
				const isCompacted = this.postModifier.find(item => item.includes("compacted"));

				if (isCompacted) {
					return "compacted";
				}

				if (isExpanded) {
					return "expanded";
				}

				return "expanded";
			},
		},
		"methods": {
			ellipsize(text) {
				if (typeof text !== "string" || text.lenght <= this.maxCharacters) {
					return text;
				}

				return `${text.slice(0, this.maxCharacters)}...`;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.post-preview {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		overflow: hidden;
		border-radius: 2rem 0 2rem 2rem;
		text-decoration: none;

		&__time {
			display: inline-block;
			padding: 0.8rem;
			font-size: 1.4rem;
			font-style: italic;
			font-weight: 500;
			text-align: right;
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
			display: flex;
			align-items: center;
			padding: 0.8rem 2rem;
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 120%;
		}

		&__short-description {
			position: absolute;
			width: 100%;
			height: calc(100% - 6.5rem);
			padding: 1.2rem;
			transition: opacity 0.4s ease-in-out 0s;
			opacity: 0;
			background-color: $color-brand-3;
			color: $color-white;
			font-size: 1.4rem;
			line-height: 120%;
		}

		&--expanded,
		&--last-post-list {
			background-color: mix($color-white, $color-brand-1, 40%);

			.post-preview {
				&__time {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					background-color: rgba($color-black, 0.5);
					color: $color-white;
				}

				&__title {
					justify-content: center;
					height: 6.5rem;
					color: $color-brand-3;
					text-align: center;
				}
			}

			&:hover {
				background-color: mix($color-white, $color-brand-1, 20%);

				.post-preview {
					&__title {
						color: mix($color-white, $color-black, 15%);
					}

					&__short-description {
						opacity: 1;
					}
				}
			}
		}

		&--compacted {
			flex-direction: row-reverse;
			border: 0.1rem solid mix($color-white, $color-black, 20%);
			background-color: $color-white;

			.post-preview {
				&__time {
					width: 10rem;
					color: $color-brand-2;
				}

				&__title {
					width: calc(100% - 10rem);
					color: $color-brand-1;
					text-align: left;
				}
			}

			&:hover {
				background-color: $color-light;

				.post-preview {
					&__title {
						color: $color-brand-3;
					}
				}
			}
		}

		&--last-post-list {
			&:hover {
				.post-preview {
					&__short-description {
						display: none;
					}
				}
			}
		}
	}
</style>
