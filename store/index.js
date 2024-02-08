import Vuex from "vuex";
import postListData from "~/assets/data/data-post-list.json";

// eslint-disable-next-line import/no-named-as-default-member
const createStore = () => new Vuex.Store({
	"state": {
		"postList": [],
	},
	"mutations": {
		setPostList(state, data) {
			state.postList = data;
		},
	},
	"actions": {
		fetchPostList(vuexContext, context) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					vuexContext.commit("setPostList", postListData);
					resolve();
				}, 1000);
			})
				.then(data => {
					context.store.commit("setPostList", data.postList);
				})
				.catch(error => {
					context.error(error);
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
