<template>
	<i
		:class="`${iconId} icon`"
		:aria-label="iconAriaLabel"
	>
		<svg class="icon__svg">
			<use
				class="icon__use"
				:xlink:href="`#${iconId}`"
				:style="`${iconColor == '' ? '' : 'fill:' + iconColor};`"
			/>
		</svg>
	</i>
</template>

<script>
	export default {
		name: 'Icon',
		props: {
			iconId: {
				type: String,
				required: true
			},
			iconAriaLabel: {
				type: String,
				required: true
			},
			iconColor: {
				type: String,
				default: ''
			}
		},
		data() {
			return {};
		}
	};
</script>

<style lang="scss" scoped>
	.icon {
		$icon-size: 1.6rem;

		width: $icon-size;
		height: $icon-size;
		display: flex;
		align-items: center;
		justify-content: center;

		&__svg {
			width: 100%;
			height: 100%;
			display: inline-block;
		}

		&__use {
		}
	}
</style>
