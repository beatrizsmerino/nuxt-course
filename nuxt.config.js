export default {

	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'nuxt-app',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/css/styles.css'],

	// Global SCSS (abstracts: variables, functions, mixins)
	styleResources: {
		scss: ['@/assets/scss/styles.scss']
	},

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [

		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module'
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [

		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
		[
			'nuxt-svg-sprite-module',
			{
				directory: '~/assets/images/icons',

				/*
				 * Optional template location: defaults to __dirname + /app.html
				 *     templateLocation: "src/app.html",
				 */
				options: {

					/*
					 * Configuration options:
					 * https://github.com/jkphl/svg-sprite#configuration-basics
					 */
				}
			}
		]
	],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {}
};
