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
					<div class="form__group form__group--column">
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

						<Button @button-click="loadUser">
							Show user {{ user.id }}
						</Button>
					</div>
				</form>
				<nuxt-child />
			</article>
		</section>
	</div>
</template>

<script>
	import Button from '~/components/UI/Button.vue';
	import Field from '~/components/UI/Form/Field.vue';
	import Label from '~/components/UI/Form/Label.vue';
	import Title from '~/components/Title.vue';

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

<style lang="scss"></style>
