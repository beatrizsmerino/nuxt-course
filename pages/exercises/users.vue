<template>
	<div class="page__container page__inner">
		<UIExerciseTitle>Users</UIExerciseTitle>

		<section>
			<article>
				<form
					id="formSelectUser"
					class="form-select-user form"
					novalidate="true"
					@submit.prevent
				>
					<div class="form__group">
						<div class="form__column">
							<div class="form__item">
								<FormLabel for="userId">
									Show the user with the id:
								</FormLabel>
								<FormField
									id="userId"
									v-model="user.id"
									name="userId"
									type="text"
									number
									placeholder="Write id user"
								/>
							</div>
						</div>
						<div class="form__column">
							<UIButton @button-click="loadUser">
								Show user {{ user.id }}
							</UIButton>
						</div>
					</div>
				</form>
				<nuxt-child />
			</article>
		</section>
	</div>
</template>

<script>
	import FormField from "@/components/Exercises/Users/Form/FormField";
	import FormLabel from "@/components/Exercises/Users/Form/FormLabel";
	import UIExerciseTitle from "@/components/UI/UIExerciseTitle";

	export default {
		"name": "ViewUsers",
		"components": {
			UIExerciseTitle,
			FormLabel,
			FormField,
		},
		"layout": "exercises",
		data() {
			return {
				"user": {
					"id": null,
				},
			};
		},
		"head": {
			"title": "Users Form | Users Exercise",
		},
		"methods": {
			loadUser() {
				this.$router.push(`/exercises/users/${this.user.id}`);
			},
		},
	};
</script>

<style lang="scss">
	.form-select-user {
		.form {
			&__group {
				align-items: flex-end;
				justify-content: flex-start;

				@include media("sm") {
					flex-direction: row !important;
				}
			}

			&__column {
				width: auto !important;

				&:not(:last-child) {
					@include media("sm") {
						margin-right: 2rem !important;
						margin-bottom: 0 !important;
					}
				}
			}
		}
	}
</style>
