<template>
	<div class="container inner">
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
							<Icon
								icon-id="icon-chevron-down"
								icon-aria-label="Show more"
							/>
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
	export default {
		data() {
			return {
				exercisesList: [
					{
						url: '/exercises/users',
						name: 'Users',
						description:
							'<div class="exercise-steps"><ol><li>From Routes to Folders</li><li>Creating a Route with a Dynamic Path</li><li>Two-Way Data Binding to Custom Components in Vue.js</li><li>Adding Links & Navigating Around</li></ol></div> ',
						status: false
					}
				]
			};
		},
		methods: {
			showMore(exerciseId) {
				this.exercisesList[exerciseId].status = !this.exercisesList[
					exerciseId
				].status;
			}
		}
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
		background-color: mix(#fff, $color-brand-2, 90%);

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		&:hover {
			background-color: mix(#fff, $color-brand-2, 80%);
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			a {
				width: 100%;
				padding: 1.5rem;
				text-decoration: none;
				font-size: 2rem;
				font-weight: 600;
				color: $color-brand-3;
			}

			.icon {
				width: 3rem;
				height: 3rem;

				&__use {
					fill: $color-brand-2 !important;
				}
			}
		}

		&__content {
			display: none;
			padding: 0 1.5rem 1.5rem;

			/deep/ {
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
