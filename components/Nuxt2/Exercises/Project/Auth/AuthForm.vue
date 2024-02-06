<template>
	<form
		id="authForm"
		class="auth-form form"
		@submit.prevent="onLogin"
	>
		<FormField
			:field-value="form.username"
			field-id="authFormUsername"
			field-label="Username"
			field-type="text"
			field-modifier="anim"
			:field-required="true"
			@update:fieldValue="value => (form.username = value)"
		/>
		<FormField
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
				@button-click="onLogin"
			>
				{{ isLogin ? "Login" : "Signup" }}
			</UIButton>
			<UIButton
				class="button--brand-2-dark-line"
				type="button"
				@button-click="onSwitch"
			>
				Switch to {{ isLogin ? "Signup" : "Login" }}
			</UIButton>
		</div>
	</form>
</template>

<script>
	import FormField from "@/components/Nuxt2/Exercises/Project/Form/FormField";

	export default {
		"name": "AuthForm",
		"components": {
			FormField,
		},
		data() {
			return {
				"isLogin": true,
				"form": {
					"username": "",
					"password": "",
				},
			};
		},
		"methods": {
			onLogin() {
				console.log(this.form);
			},
			onSwitch() {
				this.isLogin = !this.isLogin;
			},
		},
	};
</script>
