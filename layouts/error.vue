<template>
	<div class="__nuxt-error-page">
		<h1>
			An error ocurred, we're sorry!
		</h1>
		<nuxt-link to="/">
			Back Home
		</nuxt-link>
	</div>
</template>

<style lang="scss" scoped>
	.__nuxt-error-page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $color-error;

		h1 {
			margin-bottom: 2rem;
			font-size: 4rem;
			color: mix($color-white, $color-error, 50%);
		}

		a {
			text-decoration: none;
			font-size: 2.5rem;
			font-weight: bold;
			color: mix($color-white, $color-error, 70%);

			&:hover {
				text-decoration: undeline;
			}
		}
	}
</style>
