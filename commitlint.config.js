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
		"footer-max-line-length": [
			2,
			"always",
			10000,
		],
	},
};
