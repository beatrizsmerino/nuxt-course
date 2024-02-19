// index.js
import functions from "firebase-functions";
import { Nuxt } from "nuxt-start";
import nuxtConfig from "./nuxt.config.js";

const config = {
	...nuxtConfig,
	"dev": false,
	"buildDir": "nuxt",
};

const nuxt = new Nuxt(config);

export const ssrapp = functions.https.onRequest(async (req, res) => {
	await nuxt.ready();
	nuxt.render(req, res);
});
