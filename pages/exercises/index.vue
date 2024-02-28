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
						"url": "/exercises/project/home",
						"name": "Project",
						"description": "",
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

			::v-deep {
				ul,
				ol {
					padding-left: 3rem;

					li {
						&:not(:last-child) {
							margin-bottom: 1rem;
						}
					}
				}
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
