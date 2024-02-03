<template>
	<Layout class="layout-admin">
		<template #title>
			Admin
		</template>
		<template #content>
			<h3>Create a new post</h3>
			<article class="create-new-post">
				<form
					id="formNewPost"
					class="form-new-post form"
					action=""
				>
					<div class="form__group">
						<div class="form__column">
							<FormField
								field-id="newPostTitle"
								field-label="Title"
								field-type="text"
								field-modifier="anim"
								:field-required="true"
							/>
						</div>
						<div class="form__column">
							<FormField
								field-id="newPostAuthor"
								field-label="Author"
								field-type="text"
								field-modifier="anim"
							/>
						</div>
					</div>
					<FormField
						field-id="newPostLink"
						field-label="Link"
						field-type="url"
						field-modifier="anim"
					/>
					<FormSelect
						select-label="Category"
						select-id="newPostCategory"
						:select-options="categoriesList"
						select-modifier="anim"
						:select-required="true"
					/>
					<FormField
						field-id="newPostDescription"
						field-label="Description"
						field-tag="textarea"
						field-modifier="anim"
						:field-required="true"
					/>
					<FormField
						field-id="newPostText"
						field-label="Text"
						field-tag="textarea"
						field-modifier="anim"
					/>
					<div class="form__button-list">
						<Button class="button--success">
							Save
						</Button>
						<Button class="button--error">
							Cancel
						</Button>
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
		"name": "ProjectAdminNewPost",
		"components": {
			FormField,
			FormSelect,
			Layout,
		},
		"layout": "exercises",
		data() {
			return {
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
