<template>
	<Layout class="layout-users">
		<template #title>
			Users
		</template>
		<template #content>
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
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Layout/Layout";
	import FormField from "@/components/Nuxt2/Exercises/Users/Form/FormField";
	import FormLabel from "@/components/Nuxt2/Exercises/Users/Form/FormLabel";

	export default {
		"name": "ViewUsers",
		"components": {
			Layout,
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
