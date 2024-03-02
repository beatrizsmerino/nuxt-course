<template>
	<i
		:class="`icon-${iconName} icon`"
		:aria-label="iconAriaLabel"
	>
		<svg-icon
			:name="iconName"
			:title="iconAriaLabel"
		/>
	</i>
</template>

<script>
	export default {
		"name": "UIIcon",
		"props": {
			"iconName": {
				"type": String,
				"required": true,
			},
			"iconAriaLabel": {
				"type": String,
				"required": true,
			},
		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.icon {
		$icon-size: 1.6rem;

		display: flex;
		align-items: center;
		justify-content: center;
		width: $icon-size;
		height: $icon-size;

		&__svg {
			display: inline-block;
			width: 100%;
			height: 100%;
		}
	}
</style>
