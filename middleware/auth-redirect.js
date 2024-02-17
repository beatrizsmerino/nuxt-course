export default function(context) {
	console.log("[Middleware] Auth Redirect");
	if (!context.store.getters.getIsAuthUser) {
		context.redirect("/exercises/project/admin/auth");
	}
}
