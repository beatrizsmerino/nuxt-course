<template>
	<div class="page__container page__inner">
		<Title>Exercises</Title>

		<div class="exercises-list">
			<ul>
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

						<Button
							class="button--icon"
							@button-click="showMore(index)"
						>
							<transition name="rotate">
								<Icon
									:class="{ 'is-rotate': item.status }"
									icon-name="chevron-down"
									icon-aria-label="Show more"
								/>
							</transition>
						</Button>
					</div>
					<div
						class="exercise__content"
						v-html="item.description"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Title from "@/components/Exercises/Layout/Title";

	export default {
		"components": {
			Title,
		},
		"layout": "exercises",
		data() {
			return {
				"exercisesList": [
					{
						"url": "/exercises/users",
						"name": "Users",
						"description":
							'<div class="exercise-steps"><ol><li>Creating components, layouts and pages</li><li>From Routes to Folders</li><li>Creating a Route with a Dynamic Path</li><li>Two-Way Data Binding to Custom Components in Vue.js</li><li>Adding Links & Navigating Around</li><li>Validating Parameters</li><li>Creating Nested Routes</li><li>Adding a Default Error Page</li></ol></div> ',
						"status": false,
					},
					{
						"url": "/exercises/products",
						"name": "Products",
						"description":
							'<div class="exercise-steps"><ol><li>Create two routes: /products and /products/:pid</li><li>Add a button to the main page. The button should navigate (programmatically) to /products</li><li>Add two links to the /products page. The links should go to /products/1 and /products/2</li><li>Output the product id on the /products/:pid page</li></ol></div>',
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
		"methods": {
			showMore(exerciseId) {
				this.exercisesList[exerciseId].status =
					!this.exercisesList[exerciseId].status;
			},
		},
	};
</script>

<style lang="scss">
	.exercises-list {
		ul {
			padding: 0;
			list-style: none;
		}
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
