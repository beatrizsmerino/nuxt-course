<template>
	<div class="page__container page__inner">
		<PageTitle :page-title="pageTitle" />

		<ul class="exercises-list">
			<li
				v-for="(item, index) in exercisesList"
				:key="`exercise-${index}`"
				class="exercise"
				:class="{ 'is-show': item.status }"
			>
				<div class="exercise__header">
					<nuxt-link :to="item.url">
						{{ item.name }}
					</nuxt-link>

					<UIButton
						v-if="item.description"
						class="button--icon"
						@button-click="showMore(index)"
					>
						<transition name="rotate">
							<UIIcon
								:class="{ 'is-rotate': item.status }"
								icon-name="chevron-down"
								icon-aria-label="Show more"
							/>
						</transition>
					</UIButton>
				</div>
				<div
					v-if="item.description"
					class="exercise__content"
					v-html="item.description"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
	import PageTitle from "@/components/Page/PageTitle";

	export default {
		"name": "ViewExercises",
		"components": {
			PageTitle,
		},
		"layout": "exercises",
		data() {
			return {
				"pageTitle": `<span class="page-title__highlight">Exercises</span></br>made with</br><span class="page-title__highlight">Nuxt 2</span>`,
				"exercisesList": [
					{
						"url": "/exercises/users",
						"name": "Users",
						"description":
							"<ol><li>Creating components, layouts and pages.</li><li>From routes to folders.</li><li>Creating a route with a dynamic path.</li><li>Two-way data binding to custom components in Vue.js.</li><li>Adding links & navigating around.</li><li>Validating parameters.</li><li>Creating nested routes.</li><li>Adding a default <code>error</code> page.</li></ol>",
						"status": false,
					},
					{
						"url": "/exercises/products",
						"name": "Products",
						"description":
							"<ol><li>Create two routes: <code>/products</code> and <code>/products/:id</code>.</li><li>Add a button to the main page. The button should navigate (programmatically) to <code>/products</code>.</li><li>Add two links to the <code>/products</code> page. The links should go to <code>/products/1</code> and <code>/products/2</code>.</li><li>Output the product id on the <code>/products/:id</code> page.</li><li>Use a fake API to get a product list and a product data.</li></ol>",
						"status": false,
					},
					{
						"url": "/exercises/blog/home",
						"name": "Blog",
						"description": "<ul><li>It uses <code>router</code> and <code>nuxt-link</code>, incorporating a navigation menu that facilitates the access to the different sections of the blog: Home, About Us, Posts and Admin.</li><li>The <code>About</code> page uses a fake text with lorem ipsum.</li><li>Reuse of components in different situations, showing a dynamic and flexible approach to component design. The <code>PostForm</code> component is reused on several pages, for example when creating a new entry or updating an existing one. The <code>PostList</code> component displays posts in different contexts: on the <code>Home</code> page with a limit of the last five posts, on the <code>Posts</code> page displaying all posts, and on the <code>Admin</code> page in a compact style with additional management functions such as delete buttons.The <code>AuthForm</code> component is reused for registration and login forms.</li><li>Application state management uses a combination of <code>props</code>, <code>$emit</code>, <code>vuex</code>, <code>asyncData</code>, <code>fetch</code> and <code>nuxtSeverInit</code>, to efficiently manage state across different components and server/client environments.</li><li>Implementation of a complete <code>CRUD</code> (Create, Read, Update and Delete) interface using <code>Vuex</code> and <code>Firebase</code>, allowing data management of blog posts.</li><li>Integration of <code>email</code> and <code>password</code> authentication using <code>Firebase</code> to manage user sign-up, sign-out and sign-in processes.</li><li>Create a persistent user state by storing the authenticated user <code>ID</code> and <code>session expiration time</code> through server-side <code>cookies</code> and client-side <code>local storage</code>.</li><li>The application leverages Vue <code>mixins</code> to encapsulate, abstract logic and reuse common functionality throughout the project. For example, helper functions to format a date or text strings, get the project name and description or validate form data. This methodology promotes DRY (Don&#39;t Repeat Yourself) principles, simplifying code maintenance and ensuring consistency between components.</li><li>It incorporates <code>plugins</code> to extend the Vue.js core. For example, to globally register filters or to automatically register common components globally, streamlining the component import process and reducing rework. This approach contributes to a more efficient and modular code base.</li><li>Apply form <code>validations</code> to ensure that user-entered data meets specific criteria before submission. These checks are performed using reusable <code>mixins</code> and providing real-time feedback to users to correct any errors.</li><li>Implements Vue <code>filters</code> through <code>plugins</code> to transform raw data before displaying it to users. The <code>dateFormatted</code> filter is used to format date strings into a more readable format, allowing consistent date display throughout the application without having to repeatedly write the same formatting logic in each component.</li></ul>",
						"status": false,
					},
				],
			};
		},
		"head": {
			"title": "Exercises Nuxt 2",
		},
		"methods": {
			showMore(exerciseId) {
				this.exercisesList[exerciseId].status = !this.exercisesList[exerciseId].status;
			},
		},
	};
</script>

<style lang="scss">
	.exercises-list {
		padding: 0;
		list-style: none;
	}

	.exercise {
		background-color: mix($color-white, $color-brand-2, 90%);

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		&:hover {
			background-color: mix($color-white, $color-brand-2, 80%);
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			a {
				width: 100%;
				padding: 1.5rem;
				color: $color-brand-3;
				font-size: 2rem;
				font-weight: 600;
				text-decoration: none;
			}

			.icon {
				width: 3rem;
				height: 3rem;
				transition: transform 0.5s ease-in-out 0s;
				fill: $color-brand-2 !important;

				&.is-rotate {
					transform: rotate(180deg);
				}
			}
		}

		&__content {
			display: none;
			padding: 0 1.5rem 1.5rem;

			ul,
			ol {
				padding-left: 3rem;

				li {
					line-height: 1.5;
				}
			}

			code {
				padding: 0.2rem 0.6rem;
				border-radius: 0.5rem;
				background-color: $color-brand-2;
				color: $color-brand-1;
			}
		}

		&.is-show {
			.exercise {
				&__content {
					display: flex;
				}
			}
		}
	}
</style>
