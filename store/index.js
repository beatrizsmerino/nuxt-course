import Vuex from "vuex";

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
