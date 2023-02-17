const autoprefixer = require("autoprefixer");
const browserslist = require("browserslist");

module.exports = {
	"plugins": [
		autoprefixer({
			"overrideBrowserslist": browserslist(),
		}),
	],
};
