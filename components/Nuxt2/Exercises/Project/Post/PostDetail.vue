<template>
	<article class="post-detail">
		<div class="post-detail__image">
			<span class="post-detail__index">
				#{{ $route.params.id }}
			</span>
			<img
				:src="postData.image"
				:alt="postData.title"
			>
		</div>
		<div class="post-detail__header">
			<h2 class="post-detail__title">
				{{ postData.title }}
			</h2>
			<span class="post-detail__date">
				Last updated on:
				<time :datetime="postData.date">
					{{ postData.date }}
				</time>
			</span>
			<span class="post-detail__author">
				Written by {{ postData.author }}
			</span>
		</div>
		<div class="post-detail__content">
			<div
				class="post-detail__long-description"
				v-html="postData.longDescription"
			/>
			<UIButton
				:href="postData.link"
				class-type="link"
				class="post-detail__button"
				target="_blank"
			>
				Read more
			</UIButton>
			<div class="post-detail__feedback">
				<p>
					Let me know that you think about the post, send a email to
					<a href="mailto:feedback@project.com">
						feedback@project.com
					</a>
				</p>
			</div>
		</div>
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
	};
</script>

<style lang="scss" scoped>
	.post-detail {
		&__index {
			display: flex;
			position: absolute;
			z-index: 9;
			right: 0;
			bottom: 0;
			align-items: center;
			justify-content: center;
			width: 8rem;
			height: 8rem;
			padding: 2rem 0 0 2rem;
			border-radius: 8rem 0 0;
			background-color: rgba($color-brand-2, 0.8);
			color: $color-white;
			font-size: 2rem;
			font-weight: 500;
		}

		&__image {
			position: relative;
			height: 30rem;
			margin-bottom: 2rem;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__title {
			margin-bottom: 2rem;
		}

		&__date,
		&__author {
			display: inline-block;
			width: 100%;
			font-style: italic;
			font-weight: 300;
		}

		&__date {
			margin-bottom: 0.5rem;
		}

		&__content {
			margin-top: 2rem;
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

		&__button {
			margin-top: 2rem;
		}

		&__feedback {
			margin-top: 3rem;
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
