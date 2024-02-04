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
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(calc(100% - 2rem), 1fr));
			margin: 0;
			padding: 0;
			list-style: none;
			gap: 2rem;

			li {
				display: grid;
				place-items: center;
			}
		}

		&--expanded {
			ul {
				grid-template-columns: repeat(auto-fill, minmax(calc(50% - 2rem), 1fr));

				@include media("md") {
					grid-template-columns: repeat(auto-fill, minmax(calc(100% - 2rem), 1fr));
				}
			}
		}

		&--compacted {
			ul {
				gap: 1rem;
				grid-template-columns: repeat(auto-fill, minmax(calc(100% - 2rem), 1fr));
			}
		}

		&--last-post-list {
			ul {
				grid-template-columns: repeat(auto-fill, minmax(calc(33.333% - 2rem), 1fr));

				@include media("lg") {
					grid-template-columns: repeat(auto-fill, minmax(calc(50% - 2rem), 1fr));
				}

				@include media("sm") {
					grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
				}
			}
		}
	}
</style>
