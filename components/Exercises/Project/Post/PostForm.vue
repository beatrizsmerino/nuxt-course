<template>
	<article class="post-form">
		<p v-if="isError">
			Error loading data
		</p>
		<form
			v-else
			id="postForm"
			class="form"
			@submit.prevent="onSave"
		>
			<div class="form__group">
				<div class="form__column">
					<FormItem
						:field-value="form.title"
						field-id="postFormTitle"
						field-label="Title"
						field-type="text"
						field-placeholder="The hook that captures glances"
						field-modifier="anim"
						:field-required="true"
						:field-error-text="validationErrors.title"
						@blur="validateTitle"
						@update:fieldValue="value => (form.title = value)"
					/>
				</div>
				<div class="form__column">
					<FormItem
						:field-value="form.author"
						field-id="postFormAuthor"
						field-label="Author"
						field-type="text"
						field-placeholder="Who is the genius behind the work?"
						field-modifier="anim"
						:field-error-text="validationErrors.author"
						@blur="validateAuthor"
						@update:fieldValue="value => (form.author = value)"
					/>
				</div>
			</div>
			<FormItem
				:field-value="form.category"
				field-label="Category"
				field-id="postFormCategory"
				field-tag="select"
				:field-list="data.categoriesList"
				field-placeholder="Choose the kingdom of your creation"
				field-modifier="anim"
				:field-required="true"
				:field-error-text="validationErrors.category"
				@blur="validateCategory"
				@update:fieldValue="value => (form.category = value)"
			/>
			<div class="form__group">
				<div class="form__column">
					<FormItem
						:field-value="form.link"
						field-id="postFormLink"
						field-label="Link"
						field-type="url"
						field-placeholder="Paste the link to your source of inspiration"
						field-modifier="anim"
						:field-error-text="validationErrors.link"
						@blur="validateLink"
						@update:fieldValue="value => (form.link = value)"
					/>
				</div>
				<div class="form__column">
					<FormItem
						:field-value="form.image"
						field-id="postFormImage"
						field-label="Image link"
						field-type="url"
						field-placeholder="Paste the link of your awesome image"
						field-modifier="anim"
						:field-error-text="validationErrors.image"
						@blur="validateImage"
						@update:fieldValue="value => (form.image = value)"
					/>
				</div>
			</div>

			<FormItem
				:field-value="form.shortDescription"
				field-id="postFormShortDescription"
				field-label="Short description"
				field-placeholder="Capture the essence in a sentence"
				field-tag="textarea"
				field-modifier="anim"
				:field-height="4.3 * 2"
				:field-required="true"
				:field-error-text="validationErrors.shortDescription"
				@blur="validateShortDescription"
				@update:fieldValue="value => (form.shortDescription = value)"
			/>
			<FormItem
				:field-value="form.longDescription"
				field-id="postFormLongDescription"
				field-label="Long description"
				field-tag="textarea"
				field-modifier="anim"
				:field-error-text="validationErrors.longDescription"
				@blur="validateLongDescription"
				@update:fieldValue="value => (form.longDescription = value)"
			/>
			<div class="form__button-list">
				<UIButton
					class="button--success"
					type="button"
					@button-click="onSave"
				>
					Save
				</UIButton>
				<UIButton
					class="button--error"
					type="button"
					@button-click="onCancel"
				>
					Cancel
				</UIButton>
			</div>
		</form>
	</article>
</template>

<script>
	import {
		validateFieldString,
		validateFieldUrl,
		validateFieldRequired,
		validateFieldMaxLength,
	} from "@/mixins/validation-mixins.js";
	import FormItem from "@/components/Exercises/Project/Form/FormItem";

	export default {
		"name": "PostForm",
		"components": {
			FormItem,
		},
		"props": {
			"postData": {
				"type": Object,
				"required": false,
			},
		},
		data() {
			return {
				"form": this.postData
					? { ...this.postData }
					: {
						"id": "",
						"title": "",
						"dateCreation": "",
						"dateEdition": "",
						"author": "",
						"category": "",
						"shortDescription": "",
						"longDescription": "",
						"image": "",
						"link": "",
					},
				"data": {
					"categoriesList": [
						"Without",
						"Frontend",
						"Backend",
						"Big Data",
						"Cibersecurity",
						"IT",
						"Social media",
						"Robotics",
						"Technology",
						"Mobile",
						"Legal",
					],
				},
				"validationErrors": {},
			};
		},
		"computed": {
			isError() {
				return this.$store.getters.getIsError;
			},
			isValid() {
				return Object.keys(this.validationErrors).length === 0;
			},
		},
		mounted() {
			this.getId();
		},
		"methods": {
			getId() {
				if (!this.form.id) {
					this.form.id = crypto.randomUUID();
				}
			},
			saveDate() {
				if (!this.form.dateCreation) {
					this.form.dateCreation = new Date();
					this.form.dateEdition = new Date();
				} else {
					this.form.dateEdition = new Date();
				}
			},
			updateErrorText(fieldName, errorMessage) {
				if (errorMessage) {
					this.$set(this.validationErrors, fieldName, errorMessage);
				} else {
					this.$delete(this.validationErrors, fieldName);
				}
			},
			validateTitle() {
				const errorText =
					validateFieldMaxLength(this.form.title, 100) ||
					validateFieldString(this.form.title) ||
					validateFieldRequired(this.form.title);

				this.updateErrorText("title", errorText);
			},
			validateAuthor() {
				const errorText = validateFieldMaxLength(this.form.author, 50) || validateFieldString(this.form.author);

				this.updateErrorText("author", errorText);
			},
			validateCategory() {
				const errorText = validateFieldRequired(this.form.category);

				this.updateErrorText("category", errorText);
			},
			validateLink() {
				const errorText = validateFieldUrl(this.form.link);

				this.updateErrorText("link", errorText);
			},
			validateImage() {
				const errorText = validateFieldUrl(this.form.image);

				this.updateErrorText("image", errorText);
			},
			validateShortDescription() {
				const errorText =
					validateFieldMaxLength(this.form.shortDescription, 285) ||
					validateFieldString(this.form.shortDescription) ||
					validateFieldRequired(this.form.shortDescription);

				this.updateErrorText("shortDescription", errorText);
			},
			validateLongDescription() {
				const errorText =
					validateFieldMaxLength(this.form.longDescription, 10000) ||
					validateFieldString(this.form.longDescription);

				this.updateErrorText("longDescription", errorText);
			},
			validateForm() {
				this.validationErrors = {};

				this.validateTitle();
				this.validateAuthor();
				this.validateCategory();
				this.validateLink();
				this.validateImage();
				this.validateShortDescription();
				this.validateLongDescription();
			},
			onSave() {
				this.validateForm();
				if (this.isValid) {
					this.saveDate();
					this.$emit("save-post", this.form);
				}
			},
			onCancel() {
				this.$router.push("/exercises/project/admin");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.form {
		&__column {
			width: calc(50% - 1rem);

			&:not(:last-child) {
				margin-right: 3rem;
			}
		}
	}
</style>
