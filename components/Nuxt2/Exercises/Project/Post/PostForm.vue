<template>
	<form
		id="postForm"
		class="post-form form"
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
			@update:fieldValue="value => (form.shortDescription = value)"
		/>
		<FormItem
			:field-value="form.longDescription"
			field-id="postFormLongDescription"
			field-label="Long description"
			field-tag="textarea"
			field-modifier="anim"
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
</template>

<script>
	import { getDate } from "@/mixins/date-mixins.js";
	import FormItem from "@/components/Nuxt2/Exercises/Project/Form/FormItem";

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
			};
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
			onSave() {
				this.updateDate();
				this.$emit("save-post", this.form);
			},
			onCancel() {
				this.$router.push("/nuxt2/exercises/project/admin");
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
