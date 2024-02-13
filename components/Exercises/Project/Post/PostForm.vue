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
						@update:fieldValue="value => (form.image = value)"
					/>
				</div>
			</div>

			<FormItem
				:field-value="form.shortDescription"
				field-id="postFormShortDescription"
				field-label="Short description"
				field-placeholder="Capture the essence in a sentence"
				field-modifier="anim"
				:field-required="true"
				:field-error-text="validationErrors.shortDescription"
				@update:fieldValue="value => (form.shortDescription = value)"
			/>
			<FormItem
				:field-value="form.longDescription"
				field-id="postFormLongDescription"
				field-label="Long description"
				field-tag="textarea"
				field-modifier="anim"
				:field-error-text="validationErrors.longDescription"
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
	import { getDate } from "@/mixins/date-mixins.js";
	import { isString, isUrl, isEmpty, isMaxLength } from "@/mixins/validation-mixins.js";
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
						"date": "",
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
				"isValid": true,
				"validationErrors": {},
			};
		},
		"computed": {
			isError() {
				return this.$store.getters.getIsError;
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
			updateDate() {
				this.form.date = getDate();
			},
			validateFieldTitle() {
				if (!isMaxLength(this.form.title, 30)) {
					this.validationErrors.title = "Title cannot exceed 30 characters";
				}
			},
			validateFieldAuthor() {
				if (!isMaxLength(this.form.author, 50)) {
					this.validationErrors.author = "Author cannot exceed 50 characters";
				}
			},
			validateFieldShortDescription() {
				if (!isMaxLength(this.form.shortDescription, 285)) {
					this.validationErrors.shortDescription = "Short description cannot exceed 285 characters";
				}
			},
			validateFieldLongDescription() {
				if (!isMaxLength(this.form.longDescription, 2000)) {
					this.validationErrors.longDescription = "Long description cannot exceed 2000 characters";
				}
			},
			validateFieldUrl() {
				const urlFields = {
					"link": "Link must be a url",
					"image": "Image must be a url",
				};

				Object.keys(urlFields).forEach(field => {
					if (!isUrl(this.form[field])) {
						this.validationErrors[field] = urlFields[field];
					}
				});
			},
			validateFieldString() {
				const stringFields = {
					"title": "Title must be a string",
					"author": "Author must be a string",
					"shortDescription": "Short description must be a string",
					"longDescription": "Long description must be a string",
				};

				Object.keys(stringFields).forEach(field => {
					if (!isString(this.form[field])) {
						this.validationErrors[field] = stringFields[field];
					}
				});
			},
			validateFieldRequired() {
				const requiredFields = {
					"title": "Title is required",
					"category": "Category is required",
					"shortDescription": "Short description is required",
				};

				Object.keys(requiredFields).forEach(field => {
					if (isEmpty(this.form[field])) {
						this.validationErrors[field] = requiredFields[field];
					}
				});
			},
			// eslint-disable-next-line max-statements
			validateForm() {
				this.validationErrors = {};

				this.validateFieldTitle();
				this.validateFieldAuthor();
				this.validateFieldShortDescription();
				this.validateFieldLongDescription();
				this.validateFieldString();
				this.validateFieldUrl();
				this.validateFieldRequired();

				if (Object.keys(this.validationErrors)) {
					this.isValid = false;
				} else {
					this.isValid = true;
				}

				return this.isValid;
			},
			onSave() {
				if (this.validateForm()) {
					this.updateDate();
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
