<template>
	<ul class="logo-list">
		<li
			v-for="logo in logoList"
			:key="logo.id"
			class="logo-list__item"
		>
			<svg-icon :name="logo.name" />
		</li>
	</ul>
</template>

<script>
	export default {
		"name": "LogoList",
		"props": {
			"logoList": {
				"type": Array,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.logo-list {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		list-style: none;

		&:deep(.icon) {
			width: 16rem;
			height: 16rem;
		}
	}
</style>
