<template>
	<article :class="`post-list post-list--${getCssModifier}`">
		<ul>
			<li
				v-for="(item, index) in getPosts"
				:key="`post-${index}`"
			>
				<PostPreview
					:post-data="item"
					:post-index="index"
					:post-modifier="getCssModifier"
				/>
			</li>
		</ul>
	</article>
</template>

<script>
	import PostPreview from "./PostPreview";
	import postListData from "~/assets/data/data-post-list.json";

	export default {
		"name": "PostList",
		"components": {
			PostPreview,
		},
		"props": {
			"showLastPostList": {
				"type": Boolean,
				"default": false,
			},
			"maxPostList": {
				"type": Number,
				"default": 5,
			},
		},
		data() {
			return {
				"postList": postListData,
			};
		},
		"computed": {
			getPosts() {
				if (this.showLastPostList) {
					return this.postList.slice(0, this.maxPostList);
				}

				return this.postList;
			},
			getCssModifier() {
				if (this.showLastPostList) {
					return "last-post-list";
				}

				return "";
			},
		},
	};
</script>

<style lang="scss" scoped>
	.post-list {
		ul {
			padding: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			li {
				width: calc(50% - 2rem);
				margin: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;

				@include media("md") {
					width: calc(100% - 2rem);
				}
			}
		}

		&--last-post-list {
			ul {
				justify-content: center;

				li {
					width: calc(33.333% - 2rem) !important;

					@include media("lg") {
						width: calc(50% - 2rem) !important;
					}

					@include media("sm") {
						width: 100% !important;
					}
				}
			}
		}
	}
</style>
