<template>
	<article class="post-detail">
		<p v-if="isError">
			Error loading data
		</p>
		<p v-else-if="isRequiredEmpty">
			Some of the data in this post is not yet complete, continue editing!
		</p>
		<template v-else>
			<div class="post-detail__header">
				<div class="post-detail__image">
					<span class="post-detail__index">
						#{{ postData.id }}
					</span>
					<img
						:src="postData.image"
						:alt="postData.title"
					/>
				</div>
				<h2 class="post-detail__title">
					{{ postData.title }}
				</h2>
				<div class="post-detail__info">
					<span class="post-detail__category">
						{{ postData.category }}
					</span>
					<span
						v-if="postData.dateEdition"
						class="post-detail__date"
					>
						Last updated on:
						<time :datetime="postData.dateEdition">
							{{ postData.dateEdition | dateFormatted }}
						</time>
					</span>
					<span
						v-if="postData.author"
						class="post-detail__author"
					>
						Written by {{ postData.author }}
					</span>
				</div>
			</div>
			<div class="post-detail__content">
				<div
					v-if="postData.longDescription"
					class="post-detail__long-description"
					v-html="postData.longDescription"
				/>
				<UIButton
					v-if="postData.link"
					:href="postData.link"
					class-type="link"
					class="post-detail__link"
					target="_blank"
				>
					Read more
				</UIButton>
				<div class="post-detail__feedback">
					<p>
						Let me know that you think about the post, send a email to
						<a href="mailto:feedback@blog.com">
							feedback@blog.com
						</a>
					</p>
				</div>
			</div>
		</template>
	</article>
</template>

<script>
	export default {
		"name": "PostData",
		"props": {
			"postData": {
				"type": Object,
				"required": true,
			},
		},
		"computed": {
			isRequiredEmpty() {
				const requiredFields = [
					"title",
					"category",
					"shortDescription",
				];
				const isInvalidPostData = requiredFields.some(field => this.postData[field] === null || this.postData[field] === "");

				return isInvalidPostData;
			},
			isError() {
				return this.$store.getters.getIsError;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.post-detail {
		> * {
			&:not(:last-child) {
				margin-bottom: 4rem;
			}
		}

		&__header {
			> * {
				&:not(:last-child) {
					margin-bottom: 2rem;
				}
			}
		}

		&__info {
			> * {
				&:not(:last-child) {
					margin-bottom: 0.5rem;
				}
			}
		}

		&__content {
			> * {
				&:not(:last-child) {
					margin-bottom: 2rem;
				}
			}
		}

		&__index {
			display: flex;
			position: absolute;
			z-index: 9;
			right: 0;
			bottom: 0;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: max-content;
			padding: 2rem 1rem;
			background-color: rgba($color-brand-2, 0.8);
			color: $color-white;
			font-size: 2rem;
			font-weight: 500;
		}

		&__image {
			display: flex;
			position: relative;
			align-items: center;
			justify-content: center;
			height: 30rem;
			margin-bottom: 2rem;
			overflow: hidden;
			background-image: url("~/assets/images/default/default-placeholder.png");
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;

				&[alt] {
					color: $color-error;
					font-weight: bold;
					line-height: 15;
					text-align: center;
					text-shadow: -0.1rem -0.1rem $color-black;
				}
			}
		}

		&__date,
		&__author {
			display: inline-block;
			width: 100%;
			font-style: italic;
			font-weight: 300;
		}

		&__category {
			display: flex;
			max-width: max-content;
			padding: 0.8rem 1.5rem;
			border: 0.1rem solid $color-black;
			border-radius: 2rem;
			font-size: 0.8em;
			user-select: none;
		}

		&__long-description {
			::v-deep {
				h4,
				h5,
				h6 {
					margin-bottom: 1rem;
					font-size: 1.8rem;
				}

				p {
					&:not(:last-child) {
						margin-bottom: 1rem;
					}

					+ h4,
					+ h5,
					+ h6 {
						margin-top: 2rem;
					}
				}

				ol,
				ul {
					margin-bottom: 1rem;

					li {
						&:not(:last-child) {
							margin-bottom: 1rem;
						}
					}
				}
			}
		}

		&__feedback {
			font-style: italic;

			a {
				color: $color-brand-3;

				&:hover {
					color: $color-brand-1;
				}
			}
		}
	}
</style>
