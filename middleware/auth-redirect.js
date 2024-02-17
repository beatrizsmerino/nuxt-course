export default function(context) {
	if (!context.store.getters.getIsAuthUser) {
		context.redirect("/exercises/project/admin/auth");
	}
}
