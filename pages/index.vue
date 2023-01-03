<template>
	<div class="container inner">
		<div>
			<div class="logo__list">
				<svg-icon
					class="logo"
					name="logo-vue-js"
				/>
				<svg-icon
					class="logo"
					name="logo-nuxt-js"
				/>
			</div>

			<h1 class="title">
				nuxt-app
			</h1>

			<div class="links">
				<Button
					href="https://nuxtjs.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="button button--brand-1-dark-line"
				>
					Documentation
				</Button>
				<Button
					href="https://github.com/nuxt/nuxt.js"
					target="_blank"
					rel="noopener noreferrer"
					class="button button--brand-2-dark-line"
				>
					GitHub
				</Button>
				<Button
					to="/exercises"
					class="button button--black"
				>
					Exercises
				</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.container {
		margin: 0 auto;
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
			BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
			sans-serif;
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: #35495e;
		letter-spacing: 1px;
	}

	.subtitle {
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}

	.links {
		padding-top: 15px;
		display: flex;
		align-items: center;
		justify-content: center;

		> * {
			&:not(:last-child) {
				margin-right: 2rem;
			}
		}
	}
</style>
