<template>
	<h1
		class="page-title"
		v-html="pageTitle"
	/>
</template>

<script>
	export default {
		"name": "PageTitle",
		"props": {
			"pageTitle": {
				"type": String,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.page-title {
		text-align: center;

		:deep(.page-title__highlight) {
			background-clip: text;
			background-color: $color-brand-1;
			background-image: linear-gradient(45deg, $color-brand-2, $color-brand-1, $color-brand-3);
			background-repeat: repeat;
			background-size: 100%;
			font-size: 4rem;
			font-weight: 900;
			-webkit-text-fill-color: transparent;
			-moz-text-fill-color: transparent;
		}
	}
</style>
