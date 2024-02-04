<template>
	<Layout class="layout-admin">
		<template #title>
			Create a new post
		</template>
		<template #content>
			<article class="create-new-post">
				<form
					id="formNewPost"
					class="form-new-post form"
					action=""
				>
					<div class="form__group">
						<div class="form__column">
							<FormField
								v-model="newPost.form.title"
								field-id="newPostTitle"
								field-label="Title"
								field-type="text"
								field-modifier="anim"
								:field-required="true"
							/>
						</div>
						<div class="form__column">
							<FormField
								v-model="newPost.form.author"
								field-id="newPostAuthor"
								field-label="Author"
								field-type="text"
								field-modifier="anim"
							/>
						</div>
					</div>
					<FormField
						v-model="newPost.form.link"
						field-id="newPostLink"
						field-label="Link"
						field-type="url"
						field-modifier="anim"
					/>
					<FormSelect
						v-model="newPost.form.category"
						select-label="Category"
						select-id="newPostCategory"
						:select-options="newPost.data.categoriesList"
						select-modifier="anim"
						:select-required="true"
					/>
					<FormField
						v-model="newPost.form.description"
						field-id="newPostDescription"
						field-label="Description"
						field-tag="textarea"
						field-modifier="anim"
						:field-required="true"
					/>
					<FormField
						v-model="newPost.form.text"
						field-id="newPostText"
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
			</article>
		</template>
	</Layout>
</template>

<script>
	import FormField from "@/components/Nuxt2/Exercises/Project/Form/FormField";
	import FormSelect from "@/components/Nuxt2/Exercises/Project/Form/FormSelect";
	import Layout from "@/components/Nuxt2/Exercises/Project/Layout";

	export default {
		"name": "ViewProjectAdminNewPost",
		"components": {
			FormField,
			FormSelect,
			Layout,
		},
		"layout": "exercises",
		data() {
			return {
				"newPost": {
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
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.create-new-post {
		margin-top: 4rem;

		.form {
			&__column {
				width: calc(50% - 1rem);

				&:not(:last-child) {
					margin-right: 3rem;
				}
			}
		}
	}
</style>
