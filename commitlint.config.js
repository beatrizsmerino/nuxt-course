export default {
	"extends": [
		"@commitlint/config-conventional",
	],
	"rules": {
		"body-max-line-length": [
			2,
			"always",
			10000,
		],
		"footer-leading-blank": [
			0,
			"always",
		],
		"footer-max-line-length": [
			2,
			"always",
			10000,
		],
	},
};
