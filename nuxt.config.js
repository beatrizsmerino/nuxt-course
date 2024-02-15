import dotenv from "dotenv";
import { getRepoName, getRepoDescription } from "./mixins/repo-mixins.js";

dotenv.config();

export default {

	// Rendering: https://v2.nuxt.com/docs/features/rendering-modes/ https://v2.nuxt.com/docs/configuration-glossary/configuration-target#the-target-property
	"ssr": true,
	"target": "static",

	// Development or production mode: https://v2.nuxt.com/docs/configuration-glossary/configuration-dev/
	"dev": true,

	// Customize progress bar: https://v2.nuxt.com/docs/features/loading/
	"loading": {
		"color": "#00c58e",
		"failedColor": "#f58688",
		"height": "4px",
		"duration": 5000,
		"throttle": 0,
	},

	// Enviroment variables: https://v2.nuxt.com/docs/configuration-glossary/configuration-env#the-env-property
	"env": {
		"NODE_ENV": process.env.NODE_ENV,
		"baseUrl": process.env.BASE_URL || "https://nuxt-course-b5643-default-rtdb.firebaseio.com",
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	"head": {
		"title": getRepoName(),
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
				"content": getRepoDescription(),
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
				"elementClass": "icon__svg",
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
