<template>
	<div class="layout">
		<Header />
		<main class="main">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.inner {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.main {
		margin-top: 6rem;
		padding: 5rem 0 8rem;
		font-size: 1.6rem;
	}

	.form {
		&__item {
			min-width: 50%;

			&:not(:only-of-type) {
				margin-bottom: 1rem;
			}
		}

		&__group {
			.form {
				&__item {
					&:not(:last-child) {
						margin-right: 2rem;
					}
				}
			}

			&--column {
				display: flex;
				align-items: flex-end;
			}
		}

		&__info {
			margin-top: 0.5rem;
			font-size: 1.3rem;
			color: $color-brand-2;
		}
	}
</style>
