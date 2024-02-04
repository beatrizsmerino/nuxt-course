<template>
	<form
		id="postForm"
		class="post-form form"
		action=""
	>
		<div class="form__group">
			<div class="form__column">
				<FormField
					v-model="form.title"
					field-id="postFormTitle"
					field-label="Title"
					field-type="text"
					field-modifier="anim"
					:field-required="true"
				/>
			</div>
			<div class="form__column">
				<FormField
					v-model="form.author"
					field-id="postFormAuthor"
					field-label="Author"
					field-type="text"
					field-modifier="anim"
				/>
			</div>
		</div>
		<FormField
			v-model="form.link"
			field-id="postFormLink"
			field-label="Link"
			field-type="url"
			field-modifier="anim"
		/>
		<FormSelect
			v-model="form.category"
			select-label="Category"
			select-id="postFormCategory"
			:select-options="data.categoriesList"
			select-modifier="anim"
			:select-required="true"
		/>
		<FormField
			v-model="form.description"
			field-id="postFormDescription"
			field-label="Description"
			field-tag="textarea"
			field-modifier="anim"
			:field-required="true"
		/>
		<FormField
			v-model="form.text"
			field-id="postFormText"
			field-label="Text"
			field-tag="textarea"
			field-modifier="anim"
		/>
		<div class="form__button-list">
			<UIButton class="button--success">
				Save
			</UIButton>
			<UIButton class="button--error">
				Cancel
			</UIButton>
		</div>
	</form>
</template>

<script>
	import FormField from "@/components/Nuxt2/Exercises/Project/Form/FormField";
	import FormSelect from "@/components/Nuxt2/Exercises/Project/Form/FormSelect";

	export default {
		"name": "PostForm",
		"components": {
			FormField,
			FormSelect,
		},
		data() {
			return {
				"form": {
					"title": "",
					"author": "",
					"link": "",
					"category": "",
					"description": "",
					"text": "",
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
