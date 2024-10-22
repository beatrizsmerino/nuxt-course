import dotenv from "dotenv";
import bodyParser from "body-parser";
import sass from "sass";

dotenv.config();

export default {

	// Rendering: https://v2.nuxt.com/docs/features/rendering-modes/ https://v2.nuxt.com/docs/configuration-glossary/configuration-target#the-target-property
	"ssr": true,
	"target": "server",

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

	// Animation transition between pages: https://v2.nuxt.com/docs/configuration-glossary/configuration-transition#the-pagetransition-property
	"pageTransition": {
		"name": "page",
		"mode": "out-in",
		beforeEnter(el) {
			console.log("Add pageTransition before enter...");
		},
	},

	// Animation transition between layouts: https://v2.nuxt.com/docs/configuration-glossary/configuration-transition#the-layouttransition-property
	"layoutTransition": {
		"name": "layout",
		"mode": "out-in",
		beforeEnter(el) {
			console.log("Add layoutTransition before enter...");
		},
	},

	// Enviroment variables: https://v2.nuxt.com/docs/configuration-glossary/configuration-env#the-env-property
	"env": {
		"NODE_ENV": process.env.NODE_ENV,
		"baseUrl": process.env.BASE_URL || "https://nuxt-course-6e533-default-rtdb.firebaseio.com",
		"firebaseAPIKey": process.env.FIREBASE_API_KEY || "",
		"repoName": process.env.PACKAGE_NAME || "Project name",
		"repoDescription": process.env.PACKAGE_DESCRIPTION || "Project description",
	},

	// Define the workspace of Nuxt application: https://v2.nuxt.com/docs/configuration-glossary/configuration-rootdir/
	"rootDir": "./",

	// Customize vue router: https://v2.nuxt.com/docs/configuration-glossary/configuration-router#the-router-property
	"router": {
		"base": "/",
		extendRoutes(routes, resolve) {
			routes.push({
				"path": "*",
				"component": resolve(__dirname, "pages/index.vue"),
			});
		},
		"linkActiveClass": "is-active",
		"middleware": "log",
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head() {
		return {
			"title": process.env.repoName,
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
					"content": process.env.repoDescription,
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
		};
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	"css": [
		"~/assets/css/styles.css",
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	"plugins": [
		"@/plugins/import-global-components.js",
		"@/plugins/date-filters.js",
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
				"baseURL": process.env.BASE_URL || "https://nuxt-course-6e533-default-rtdb.firebaseio.com",
				"credentials": false,
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
		"loaders": {
			"scss": {
				"implementation": sass,
				"sassOptions": {
					"silenceDeprecations": [

						//  Mute old JS API deprecation warnings: https://sass-lang.com/documentation/breaking-changes/legacy-js-api/#silencing-warnings
						"legacy-js-api",
					],
				},
			},
		},
	},

	// Server-Side middleware: https://v2.nuxt.com/docs/configuration-glossary/configuration-servermiddleware/
	"serverMiddleware": [
		bodyParser.json(),
		"~/api",
	],
};
