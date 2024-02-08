import Vuex from "vuex";
import postListData from "~/assets/data/data-post-list.json";

// eslint-disable-next-line import/no-named-as-default-member
const createStore = () => new Vuex.Store({
	"state": {
		"postList": [],
		"isLoading": false,
		"isError": null,
	},
	"mutations": {
		setPostList(state, data) {
			state.postList = data;
		},
		setLoading(state, isLoading) {
			state.isLoading = isLoading;
		},
		setError(state, error) {
			state.isError = error;
		},
	},
	"actions": {
		nuxtServerInit(vuexContext, context) {
			vuexContext.commit("setLoading", true);
			vuexContext.commit("setError", null);

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					vuexContext.commit("setPostList", postListData);
					vuexContext.commit("setLoading", false);
					resolve();
				}, 1000);
			})
				.catch(error => {
					context.error(error);
					vuexContext.commit("setError", error);
					vuexContext.commit("setLoading", false);
				});
		},
		setPostList(vuexContext, data) {
			vuexContext.commit("setPostList", data);
		},
	},
	"getters": {
		getPostList(state) {
			return state.postList;
		},
	},
});

export default createStore;
