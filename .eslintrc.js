module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:nuxt/recommended',
		'plugin:json/recommended'
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'always'
			}
		],
		'vue/singleline-html-element-content-newline': [
			'error',
			{
				ignoreWhenEmpty: true
			}
		]
	}
}
