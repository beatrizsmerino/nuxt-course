<template>
	<article
		class="post-list"
		:class="getCssModifierList.map(item => `post-list--${item}`)"
	>
		<ul>
			<li
				v-for="(item, index) in getPosts"
				:key="`post-${index}`"
			>
				<PostPreview
					:post-data="item"
					:post-index="index"
					:post-modifier="getCssModifierList.map(item => `post-preview--${item}`)"
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
			"cssModifier": {
				"type": String,
				"validator": function(value) {
					return [
						"expanded",
						"compacted",
					].includes(value);
				},
				"default": "expanded",
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
			getCssModifierList() {
				const classCss = [];

				if (this.showLastPostList) {
					classCss.push("last-post-list");
				}

				if (this.cssModifier) {
					classCss.push(this.cssModifier);
				}

				return classCss;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.post-list {
		ul {
			width: 100%;
			padding: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;

			li {
				width: calc(100% - 2rem);
				margin: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		&--expanded {
			ul {
				align-items: center;

				li {
					width: calc(50% - 2rem);

					@include media("md") {
						width: calc(100% - 2rem);
					}
				}
			}
		}

		&--compacted {
			ul {
				flex-direction: column;

				li {
					width: calc(100% - 2rem);
					margin-bottom: 0rem;
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
