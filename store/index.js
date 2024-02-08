import Vuex from "vuex";
import postListData from "~/assets/data/data-post-list.json";

// eslint-disable-next-line import/no-named-as-default-member
const createStore = () => new Vuex.Store({
	"state": {
		"postList": [],
		"isError": null,
	},
	"mutations": {
		setPostList(state, data) {
			state.postList = data;
		},
		setError(state, error) {
			state.isError = error;
		},
	},
	"actions": {
		nuxtServerInit(vuexContext, context) {
			vuexContext.commit("setError", null);

			return new Promise((resolve, reject) => {
				vuexContext.commit("setPostList", postListData);
				resolve();
			})
				.catch(error => {
					vuexContext.commit("setError", error);
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
