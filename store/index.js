import { Store } from "vuex";
import axios from "axios";

const createStore = () => new Store({
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
			return axios
				.get("https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts.json")
				.then(response => {
					const postList = [];
					// eslint-disable-next-line guard-for-in
					for (const key in response.data) {
						postList.push({
							...response.data[key],
						});
					}
					vuexContext.commit("setPostList", postList);
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
