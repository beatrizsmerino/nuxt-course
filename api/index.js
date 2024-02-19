import express from "express";

// eslint-disable-next-line new-cap
const router = express.Router();
const app = express();

router.use((request, response, next) => {
	Object.setPrototypeOf(request, app.request);
	Object.setPrototypeOf(response, app.response);
	request.res = response;
	response.req = request;
	next();
});

router.post("/track-data", (request, response) => {
	console.log("Stored data!", request.body.data);
	response.status(200).json({ "message": "Success!" });
});

const apiRoute = {
	"path": "/api",
	"handler": router,
};

export default apiRoute;
