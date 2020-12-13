<template>
	<Layout class="layout-admin">
		<template #title>
			Admin
		</template>
		<template #content>
			<article>
				<Button to="/exercises/project/admin/posts/new">
					Create new post
				</Button>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Button from '@/components/UI/Button';
	import Layout from '@/components/Exercises/Project/Layout';

	export default {
		components: {
			Button,
			Layout
		},
		layout: 'exercises'
	};
</script>

<style lang="scss" scoped></style>
