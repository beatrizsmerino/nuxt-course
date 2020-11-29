<template>
	<div class="container inner">
		<h1 class="title">
			Page Users
		</h1>

		<section>
			<article>
				<form
					id="formSelectUser"
					class="form-select-user"
					action=""
					novalidate="true"
					@submit.prevent
				>
					<label for="idUser">Go to the user with the id:</label>
					<input
						id="userId"
						v-model="userId"
						type="text"
						name="userId"
						placeholder="Write user id"
					>
					<button class="button button--green" @click="onLoadUser">
						Load User {{ userId }}
					</button>
				</form>
			</article>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userId: ''
			};
		},
		methods: {
			onLoadUser() {
				this.$router.push(`/users/${this.userId}`);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.title {
		margin: 5rem 0 7rem;
		font-size: 4rem;
		position: relative;
		color: $color-brand-1;

		&:after {
			content: '';
			display: inline-block;
			width: 15rem;
			height: 0.4rem;
			position: absolute;
			left: 0;
			bottom: -1rem;
			background-color: $color-brand-2;
		}
	}

	.form-select-user {
		label {
			width: 100%;
			margin-bottom: 1rem;
			display: inline-block;
			color: $color-brand-3;
			font-weight: bold;
			font-size: 1.8rem;
		}

		input {
			padding: 1.2rem;
			font-size: 1.6rem;
			border: 0.2rem solid $color-brand-3;
			border-radius: 0.5rem;

			&::-webkit-input-placeholder {
				/* Chrome/Opera/Safari */
				font-weight: 100;
				color: $color-brand-3;
			}

			&::-moz-placeholder {
				/* Firefox 19+ */
				font-weight: 100;
				color: $color-brand-3;
			}

			&:-ms-input-placeholder {
				/* IE 10+ */
				font-weight: 100;
				color: $color-brand-3;
			}

			&:-moz-placeholder {
				/* Firefox 18- */
				font-weight: 100;
				color: $color-brand-3;
			}

			&:focus {
				outline-color: $color-brand-1;
			}
		}
	}
</style>
