export default {

	// Global page headers: https://go.nuxtjs.dev/config-head
	"head": {
		"title": "nuxt-exercises",
		"htmlAttrs": {
			"lang": "en",
		},
		"meta": [
			{ "charset": "utf-8" },
			{
				"name": "viewport",
				"content": "width=device-width, initial-scale=1",
			},
			{
				"hid": "description",
				"name": "description",
				"content": "",
			},
			{
				"name": "format-detection",
				"content": "telephone=no",
			},
		],
		"link": [
			{
				"rel": "icon",
				"type": "image/x-icon",
				"href": "/favicon.ico",
			},
			{
				"rel": "stylesheet",
				"href": "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	"css": [
		"~/assets/css/styles.css",
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	"plugins": [
		"@/plugins/import-global-components.js",
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	"components": false,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	"buildModules": [
		[
			// eslint: https://go.nuxtjs.dev/eslint
			"@nuxtjs/eslint-module",
			{
				"fix": true,
				"cache": true,
				"emitWarning": true,
			},
		],
		[

			// stylelint: https://go.nuxtjs.dev/stylelint
			"@nuxtjs/stylelint-module",
			{
				"fix": true,
				"cache": true,
				"emitWarning": true,
			},
		],
		[

			// svg-sprite: https://www.npmjs.com/package/@nuxtjs/svg-sprite
			"@nuxtjs/svg-sprite",
			{

				// Manipulate module options
				"input": "~/assets/images/icons/",
			},
		],
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	"modules": [
		[

			// axios: https://go.nuxtjs.dev/config-axios
			"@nuxtjs/axios",
			{

				// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
				"baseURL": "/",
			},
		],
		[

			// style-resources: https://www.npmjs.com/package/@nuxtjs/style-resources
			"@nuxtjs/style-resources",
			{
				"scss": [

					// Global SCSS (abstracts: variables, functions, mixins)
					"@/assets/scss/styles.scss",
				],
			},
		],
		[

			// nuxt-svg-sprite-module: https://www.npmjs.com/package/nuxt-svg-sprite-module
			"nuxt-svg-sprite-module",
			{
				"directory": "~/assets/images/icons",

				// Optional template location: defaults to __dirname + /app.html
				"templateLocation": "src/app.html",

				// Configuration options: https://github.com/jkphl/svg-sprite#configuration-basics
				"options": {},
			},
		],
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	"build": {

		// "extractCSS": true -> Causes duplicate css
		"extractCSS": false,
		"postcss": {
			"preset": {
				"postcss-import": {
					"path": [
						"node_modules",
						"assets/scss/**/*",
					],
				},
				"autoprefixer": {

					// Use the `.browserslistrc` file
					"browsers": false,
				},
			},
		},
	},
};
