<template>
	<div class="container inner">
		<Title>Users</Title>

		<section>
			<article>
				<form
					id="formSelectUser"
					class="form-select-user"
					action=""
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
	import Button from '@/components/UI/Button.vue';
	import Field from '@/components/UI/Form/Field.vue';
	import Label from '@/components/UI/Form/Label.vue';
	import Title from '@/components/Title.vue';

	export default {
		components: {
			Title,
			Button,
			Label,
			Field
		},
		layout: 'exercises',
		data() {
			return {
				user: {
					id: null
				}
			};
		},
		methods: {
			loadUser() {
				this.$router.push(`/exercises/users/${this.user.id}`);
			}
		}
	};
</script>

<style lang="scss">
	.form-select-user{
		.form{
			&__group {
				justify-content: flex-start;
				align-items: flex-end;

				@include media('sm') {
					flex-direction: row !important;
				}
			}

			&__column{
				width: auto !important;

				&:not(:last-child) {
					@include media('sm') {
						margin-right: 2rem !important;
						margin-bottom: 0 !important;
					}
				}
			}
		}
	}
</style>
