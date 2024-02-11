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
					:is-admin="isAdmin"
					:post-data="item"
					:post-modifier="getCssModifierList.map(item => `post-preview--${item}`)"
					@delete-post="onDelete"
				/>
			</li>
		</ul>
	</article>
</template>

<script>
	import PostPreview from "./PostPreview";

	export default {
		"name": "PostList",
		"components": {
			PostPreview,
		},
		"props": {
			"isAdmin": {
				"type": Boolean,
				"default": false,
			},
			"postListData": {
				"type": Array,
				"required": true,
			},
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
				"postList": this.postListData,
			};
		},
		"computed": {
			getPosts() {
				const postListSorted = this.postList.sort((a, b) => new Date(b.date) - new Date(a.date));

				if (this.showLastPostList) {
					return postListSorted.slice(0, this.maxPostList);
				}

				return postListSorted;
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
		"watch": {
			postListData(newValue) {
				this.postList = newValue;
			},
		},
		"methods": {
			onDelete(postData) {
				this.$emit("delete-post", postData);
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
