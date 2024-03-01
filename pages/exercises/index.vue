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
						"description":
							"<ol><li>Creating the main 'sections' (pages)</li><li>Adding external fonts</li><li>Creating the landing page</li><li>Splitting the page into components</li><li>Adding static assets - the background image</li><li>Adding the header component</li><li>Vue router vs. Nuxt router</li><li>Working on the post page</li><li>Creating an admin section</li><li>Preparing the backend</li><li>Improving the app</li><li>Adding a separate layout to the admin area</li></ol><ol><li>Adding dynamic data</li><li>Preparing data on the server-side (through Nuxt)</li><li>asyncData on client & server</li><li>A closer look at the context object</li><li>Adding async data to a single post</li><li>Handling errors with a callback</li><li>Using promises in asyncData</li><li>Adding the Vuex store</li><li>Vuex, fetch() and nuxtServerInit()</li></ol><ol><li>Executing code on the server</li><li>Adding Firebase as a backend</li><li>Using Firebase to store data</li><li>Fetching data from the backend</li><li>Initializing our store</li><li>Fetching all posts</li><li>Editing posts</li><li>Synchronizing Vuex and the backend</li></ol><ol><li>The Nuxt config file</li><li>The loading property</li><li>Working with environment variables</li><li>Manipulating routing settings</li><li>Animating page transitions</li><li>Adding plugins</li><li>Registering a date filter</li><li>Understanding modules</li></ol><ol><li>What is middleware?</li><li>Adding user signup</li><li>Adding user login</li><li>Storing the token</li><li>Using the token for authentication</li><li>Implementing a middleware</li><li>Invalidating the token</li><li>Persisting the token across page refreshes</li><li>Implementing cookies</li><li>Fixing the logout timer</li><li>Adding the logout functionality</li><li>A quick bugfix</li></ol><ol><li>Adding server side middleware</li><li>Testing the middleware</li><li>Starting a project with a server side template</li></ol><ol><li>Universal vs SPA vs static</li><li>Building our app as a universal app</li><li>Deploying a universal app</li><li>Building our app as a SPA</li><li>Fetching data in the SPA</li><li>Building our app as a static website</li><li>Improving the generate process</li><li>Limiting the amount of http requests</li><li>Adjusting the store</li><li>Deploying SPAs and static webpages</li></ol>",
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
			flex-direction: column;
			padding: 0 1.5rem 1.5rem;

			>* {
				&:not(:last-child) {
					margin-bottom: 1rem;
				}
			}

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
