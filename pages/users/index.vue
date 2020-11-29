<template>
	<div class="container inner">
		<Title>
			Page users
		</Title>

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
			</article>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					id: null
				}
			};
		},
		methods: {
			loadUser() {
				this.$router.push(`/users/${this.user.id}`);
			}
		}
	};
</script>

<style lang="scss"></style>
