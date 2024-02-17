<template>
	<article class="auth-form">
		<form
			id="authForm"
			class="form"
			@submit.prevent="onSubmit"
		>
			<FormItem
				:field-value="form.username"
				field-id="authFormUsername"
				field-label="Username"
				field-type="text"
				field-modifier="anim"
				:field-required="true"
				@update:fieldValue="value => (form.username = value)"
			/>
			<FormItem
				:field-value="form.password"
				field-id="authFormPassword"
				field-label="Password"
				field-type="password"
				field-modifier="anim"
				:field-required="true"
				@update:fieldValue="value => (form.password = value)"
			/>
			<div class="form__button-list">
				<UIButton
					class="button--success"
					type="submit"
					@button-click="onSubmit"
				>
					{{ isSignIn ? "Sign in" : "Sign up" }}
				</UIButton>
				<UIButton
					class="button--brand-2-dark-line"
					type="button"
					@button-click="onSwitch"
				>
					Switch to {{ isSignIn ? "Sign up" : "Sign in" }}
				</UIButton>
			</div>
		</form>
	</article>
</template>

<script>
	import FormItem from "@/components/Exercises/Project/Form/FormItem";

	export default {
		"name": "AuthForm",
		"components": {
			FormItem,
		},
		data() {
			return {
				"isSignIn": true,
				"form": {
					"username": "",
					"password": "",
				},
			};
		},
		"methods": {
			onSubmit() {
				console.log(this.form);
			},
			onSwitch() {
				this.isSignIn = !this.isSignIn;
			},
		},
	};
</script>
