<template>
	<article class="auth-form">
		<form
			id="authForm"
			class="form"
			@submit.prevent="onSubmit"
		>
			<FormItem
				:field-value="form.email"
				field-id="authFormEmail"
				field-label="Email"
				field-type="text"
				field-modifier="anim"
				:field-required="true"
				:field-error-text="validationErrors.email"
				@blur="validateEmail"
				@update:fieldValue="value => (form.email = value)"
			/>
			<FormItem
				:field-value="form.password"
				field-id="authFormPassword"
				field-label="Password"
				field-type="password"
				field-modifier="anim"
				:field-required="true"
				:field-error-text="validationErrors.password"
				@blur="validatePassword"
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
	import {
		validateFieldRequired,
		validateFieldMinLength,
		validateFieldMaxLength,
		validateFieldEmail,
		validateFieldContainsString,
		validateFieldContainsNumber,
		validateFieldContainsSpecialChar,
		validateFieldContainsUpperCase,
		validateFieldContainsLowerCase,
	} from "@/mixins/validation-mixins.js";
	import FormItem from "@/components/Exercises/Blog/Form/FormItem";

	export default {
		"name": "AuthForm",
		"components": {
			FormItem,
		},
		data() {
			return {
				"isSignIn": true,
				"form": {
					"email": "",
					"password": "",
				},
				"validationErrors": {},
			};
		},
		"computed": {
			isValid() {
				return Object.keys(this.validationErrors).length === 0;
			},
		},
		"methods": {
			updateErrorText(fieldName, errorMessage) {
				if (errorMessage) {
					this.$set(this.validationErrors, fieldName, errorMessage);
				} else {
					this.$delete(this.validationErrors, fieldName);
				}
			},
			validateEmail() {
				const errorText = validateFieldRequired(this.form.email) || validateFieldEmail(this.form.email);

				this.updateErrorText("email", errorText);
			},
			validatePassword() {
				const validators = [
					validateFieldRequired(this.form.password),
					validateFieldMinLength(this.form.password, 6),
					validateFieldMaxLength(this.form.password, 20),
					validateFieldContainsString(this.form.password),
					validateFieldContainsNumber(this.form.password),
					validateFieldContainsSpecialChar(this.form.password),
					validateFieldContainsUpperCase(this.form.password),
					validateFieldContainsLowerCase(this.form.password),
				];

				const errorText = validators.find(validation => validation !== "") || "";

				this.updateErrorText("password", errorText);
			},
			validateForm() {
				this.validationErrors = {};

				this.validateEmail();
				this.validatePassword();
			},
			onSubmit() {
				this.validateForm();
				if (this.isValid) {
					this.$emit("submit:auth", {
						...this.form,
						"isSignIn": this.isSignIn,
					});
				}
			},
			onSwitch() {
				this.isSignIn = !this.isSignIn;
			},
		},
	};
</script>
