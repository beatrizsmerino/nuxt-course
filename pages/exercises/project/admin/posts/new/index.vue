<template>
	<Layout class="layout-admin">
		<template #title>
			Admin
		</template>
		<template #content>
			<h3>
				Create a new post
			</h3>
			<article class="create-new-post">
				<form id="formNewPost" class="form-new-post" action="">
					<div class="form__group">
						<div class="form__column">
							<FormField field-id="newPostTitle" field-label="Title" field-type="text" />
							<FormField field-id="newPostDate" field-label="Date" field-type="text" field-placeholder="YYYY/MM/DD" />
						</div>
						<div class="form__column">
							<FormField field-id="newPostAuthor" field-label="Author" field-type="text" />
							<FormField field-id="newPostLink" field-label="Link" field-type="url" />
						</div>
					</div>
					<FormField field-id="newPostDescription" field-label="Description" field-tag="textarea" />
					<FormField field-id="newPostText" field-label="Text" field-tag="textarea" />
				</form>
			</article>
		</template>
	</Layout>
</template>

<script>
	import FormField from '@/components/UI/Form/FormField';
	import Layout from '@/components/Exercises/Project/Layout';

	export default {
		components: {
			Layout,
			FormField
		},
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped>
	.create-new-post{
		margin-top: 4rem;

		.form{
			&__column{
				width: calc(50% - 1rem);

				&:not(:last-child) {
					margin-right: 3rem;
				}
			}
		}
	}
</style>
