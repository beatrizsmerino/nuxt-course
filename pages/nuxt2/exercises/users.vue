<template>
	<div class="page__container page__inner">
		<Title>Users</Title>

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
								<Label for="userId">
									Show the user with the id:
								</Label>
								<Field
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
							<Button @button-click="loadUser">
								Show user {{ user.id }}
							</Button>
						</div>
					</div>
				</form>
				<nuxt-child />
			</article>
		</section>
	</div>
</template>

<script>
	import Field from "@/components/Nuxt2/Exercises/Users/Form/FormField";
	import Label from "@/components/Nuxt2/Exercises/Users/Form/FormLabel";
	import Title from "@/components/Nuxt2/Exercises/Layout/Title";

	export default {
		"name": "ViewUsers",
		"components": {
			Title,
			Label,
			Field,
		},
		"layout": "exercises",
		data() {
			return {
				"user": {
					"id": null,
				},
			};
		},
		"methods": {
			loadUser() {
				this.$router.push(`/nuxt2/exercises/users/${this.user.id}`);
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
