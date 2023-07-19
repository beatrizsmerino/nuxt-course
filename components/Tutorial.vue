<!-- Please remove this file from your project -->
<template>
	<div class="tutorial bg-gray-100">
		<div class="relative flex items-top justify-center sm:items-center sm:pt-0">
			<link
				href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
				rel="stylesheet"
			>
			<div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
				<a
					class="flex justify-center pt-8 sm:pt-0"
					href="https://nuxtjs.org"
					target="_blank"
				>
					<LogoNuxt logo-type="imagotype" />
				</a>
				<article class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
					<h2 class="text-2xl leading-7 font-semibold">
						Welcome to your Nuxt Application
					</h2>
					<p class="mt-3 text-gray-600">
						We recommend you take a look at the
						<a
							href="https://nuxtjs.org"
							target="_blank"
							class="button--doc text-green-500 hover:underline"
						>
							Nuxt Documentation
						</a>
						, whether you are new or have previous experience with the framework.
						<br >
					</p>
					<p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
						To get started, remove
						<code class="bg-gray-100 text-sm p-1 rounded border">
							components/Tutorial.vue
						</code>
						and start coding in
						<code class="bg-gray-100 text-sm p-1 rounded border">
							pages/index.vue
						</code>
						. Have fun!
					</p>
				</article>
				<article class="flex justify-center pt-4 space-x-2">
					<a
						href="https://github.com/nuxt/nuxt.js"
						target="_blank"
					>
						<LogoGithub class="text-gray-600 hover:text-gray-800" />
					</a>
					<a
						href="https://twitter.com/nuxt_js"
						target="_blank"
					>
						<LogoTwitter class="text-gray-600 hover:text-gray-800" />
					</a>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		"name": "Tutorial",
	};
</script>

<style lang="scss" scoped>
	.tutorial {
		p {
			> * {
				display: inline-block;
			}
		}

		&:deep(.logo-nuxt--imagotype) {
			width: 218px;
			height: 45px;
		}

		&:deep(.logo-nuxt--symbol) {
			width: 80px;
			height: 80px;
		}

		&:deep(.logo-twitter--symbol) {
			width: 32px;
			height: 32px;
		}

		&:deep(.logo-github--symbol) {
			width: 32px;
			height: 32px;
		}
	}
</style>
