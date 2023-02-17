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
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	"css": [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	"plugins": [
		"@/plugins/import-global-components.js",
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	"components": false,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	"buildModules": [
		[

			// https://go.nuxtjs.dev/eslint
			"@nuxtjs/eslint-module",
			{
				"fix": true,
				"cache": true,
				"emitWarning": true,
			},
		],
		[

			// https://go.nuxtjs.dev/stylelint
			"@nuxtjs/stylelint-module",
			{
				"fix": true,
				"cache": true,
				"emitWarning": true,
			},
		],
		[

			// https://www.npmjs.com/package/@nuxtjs/svg-sprite
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

			// https://go.nuxtjs.dev/axios
			"@nuxtjs/axios",
			{

				// Axios module configuration: https://go.nuxtjs.dev/config-axios
				// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
				"baseURL": "/",
			},
		],
		[

			// https://www.npmjs.com/package/@nuxtjs/style-resources
			"@nuxtjs/style-resources",
			{
				"scss": [
					"@/assets/scss/styles.scss",
				],
			},
		],
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	"build": {
		"postcss": false,
	},
};
