export default function(context) {
	console.log("[Middleware] Auth Check");
	if (process.client) {
		context.store.dispatch("fetchReadAuthUser", null);
	} else {
		context.store.dispatch("fetchReadAuthUser", context.req);
	}
}
