<template>
	<footer class="footer">
		<Button to="/products">
			Products
		</Button>
	</footer>
</template>

<script>
	import Button from '@/components/Button.vue';

	export default {
		name: 'Footer',
		components: {
			Button
		}
	}
</script>

<style lang="scss">
	.footer {
		width: 100%;
		height: 7rem;
		padding: 1.2rem 3rem;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: mix(#fff, $color-brand-2, 85%);
	}
</style>