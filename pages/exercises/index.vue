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
							"<ol><li>Creating the Main 'Sections' (Pages)</li><li>Adding External Fonts</li><li>Creating the Landing Page</li><li>Splitting the Page into Components</li><li>Adding Static Assets - The Background Image</li><li>Adding the Header Component</li><li>Vue Router vs. Nuxt Router</li><li>Working on the Post Page</li><li>Creating an Admin Section</li><li>Preparing the Backend</li><li>Improving the App</li><li>Adding a Separate Layout to the Admin Area</li></ol><ol><li>Adding Dynamic Data</li><li>Preparing Data on the Server-Side (through Nuxt)</li><li>AsyncData on Client &amp; Server</li><li>A Closer Look at the Context Object</li><li>Adding Async Data to a Single Post</li><li>Handling Errors with a Callback</li><li>Using Promises in asyncData</li><li>Adding the Vuex Store</li><li>Vuex, fetch() and nuxtServerInit()</li></ol><ol><li>Executing Code on the Server</li><li>Adding Firebase as a Backend</li><li>Using Firebase to Store Data</li><li>Fetching Data from the Backend</li><li>Initializing our Store</li><li>Fetching all Posts</li><li>Editing Posts</li><li>Synchronizing Vuex and the Backend</li></ol><ol><li>The Nuxt Config File</li><li>The Loading Property</li><li>Working with Environment Variables</li><li>Manipulating Routing Settings</li><li>Animating Page Transitions</li><li>Adding Plugins</li><li>Registering a Date Filter</li><li>Understanding Modules</li></ol><ol><li>What is Middleware?</li><li>Adding User Signup</li><li>Adding User Login</li><li>Storing the Token</li><li>Using the Token for Authentication</li><li>Implementing a Middleware</li><li>Invalidating the Token</li><li>Persisting the Token Across Page Refreshes</li><li>Implementing Cookies</li><li>Fixing the Logout Timer</li><li>Adding the Logout Functionality</li><li>A Quick Bugfix</li></ol><ol><li>Adding Server Side Middleware</li><li>Testing the Middleware</li><li>Starting a Project with a Server Side Template</li></ol><ol><li>Universal vs SPA vs Static</li><li>Building our App as a Universal App</li><li>Deploying a Universal App</li><li>Building our App as a SPA</li><li>Fetching Data in the SPA</li><li>Building our App as a Static Website</li><li>Improving the Generate Process</li><li>Limiting the Amount of http Requests</li><li>Adjusting the Store</li><li>Deploying SPAs and Static Webpages</li></ol>",
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
