<template>
	<article class="posts-detail">
		<div class="post-detail__image">
			<img
				:src="require(`~/assets/images/default/default-placeholder.png`)"
				alt="Lorem ipsum dolor"
			>
		</div>
		<div class="post-detail__header">
			<h2 class="post-detail__title">
				Title of the post
			</h2>
			<span class="post-detail__time">
				Last updated on:
				<time>
					YYYY-MM-DD
				</time>
			</span>
			<span class="post-detail__author">
				Written by Author name
			</span>
		</div>
		<div class="post-detail__content">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus voluptatibus, molestiae sapiente repellendus iusto, sequi ullam vitae nostrum nam quas quod eligendi quae doloribus omnis nulla accusamus sed quidem.<br>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tempora. Facilis impedit voluptatum veniam harum, eaque sunt. In, accusamus fugit? Vitae, qui repellendus repellat deserunt molestias cupiditate voluptates nulla autem.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur, nisi tempora corporis magni ipsa quo labore sed aut ipsam explicabo eum vel odio iusto impedit error, quas iste? Animi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ea vitae maiores quaerat neque aperiam quam architecto tenetur ipsa? Nisi dolorum corporis minus sed in voluptatum eveniet, esse voluptate eum.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae, ut consectetur, at rerum architecto iure pariatur unde necessitatibus eveniet ullam iste? Odit dolores aspernatur illo iste consequuntur quibusdam itaque!
			</p>
		</div>
		<div class="post-detail__feedback">
			<p>
				Let me know that you think about the post, send a email to <a href="mailto:feedback@proyect.com">feedback@proyect.com</a>
			</p>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'PostDetail'
	};
</script>

<style lang="scss" scoped>
	.post-detail {
		&__image {
			margin-bottom: 2rem;

			img {
				width: 100%;
				height: 30rem;
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
		}

		&__time {
			margin-bottom: 0.5rem;

			time {
				font-style: italic;
			}
		}

		&__author {
			font-style: italic;
		}

		&__content {
			margin-top: 2rem;
			font-weight: 300;
		}

		&__feedback {
			margin-top: 2rem;
			font-style: italic;
		}
	}
</style>
