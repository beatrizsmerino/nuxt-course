<template>
	<article class="posts-detail">
		<div class="post-detail__image">
			<span class="post-detail__index">
				#{{ $route.params.id }}
			</span>
			<img
				:src="require(`~/assets/images/exercises/project/posts/${postDetail.image}`)"
				:alt="postDetail.title"
			>
		</div>
		<div class="post-detail__header">
			<h2 class="post-detail__title">
				{{ postDetail.title }}
			</h2>
			<span class="post-detail__time">
				Last updated on:
				<time :datetime="postDetail.date">
					{{ postDetail.date }}
				</time>
			</span>
			<span class="post-detail__author">
				Written by {{ postDetail.author }}
			</span>
		</div>
		<div class="post-detail__content">
			<div
				class="post-detail__text"
				v-html="postDetail.text"
			/>
			<Button
				:href="postDetail.url"
				class="post-detail__button"
				target="_blank"
			>
				Show more
			</Button>
			<div class="post-detail__feedback">
				<p>
					Let me know that you think about the post, send a email to <a href="mailto:feedback@project.com">feedback@project.com</a>
				</p>
			</div>
		</div>
	</article>
</template>

<script>
	import postsListData from '~/assets/data/data-posts-list.json';

	export default {
		name: 'PostDetail',
		data() {
			return {
				postsList: postsListData,
				postDetail: []
			};
		},
		created() {
			this.postDetail = this.postsList[this.$route.params.id];
		}
	};
</script>

<style lang="scss" scoped>
	.post-detail {
		&__index {
			width: 8rem;
			height: 8rem;
			padding: 2rem 0 0 2rem;
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: 9;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 2rem;
			font-weight: 500;
			color: $color-white;
			border-radius: 8rem 0 0 0rem;
			background-color: rgba($color-brand-2, 0.8);
		}

		&__image {
			height: 30rem;
			margin-bottom: 2rem;
			position: relative;
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

		&__time,
		&__author {
			width: 100%;
			display: inline-block;
			font-weight: 300;
			font-style: italic;
		}

		&__time {
			margin-bottom: 0.5rem;

			time {
			}
		}

		&__author {
		}

		&__content {
			margin-top: 2rem;
		}

		&__text {
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

					& + h4,
					& + h5,
					& + h6 {
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
			margin-top: 3rem;
		}

		&__feedback {
			margin-top: 2rem;
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
