/* eslint-disable max-lines-per-function */
import { Store } from "vuex";
import axios from "axios";

const createStore = () => new Store({
	"state": {
		"postList": [],
		"postSelected": {},
		"isError": null,
	},
	"mutations": {
		setReadPostList(state, data) {
			state.postList = data;
		},
		setReadPostSelected(state, data) {
			state.postSelected = data;
		},
		setCreatePost(state, data) {
			state.postList.push(data);
		},
		setUpdatePost(state, data) {
			const postIndex = state.postList.findIndex(post => post.id === data.id);
			state.postList[postIndex] = data;
		},
		setDeletePost(state, id) {
			state.postList = state.postList.filter(post => post.id !== id);
		},
		setCreateError(state, error) {
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
					vuexContext.commit("setReadPostList", postList);
				})
				.catch(error => {
					vuexContext.commit("setCreateError", error);
				});
		},
		fetchReadPostList(vuexContext, data) {
			vuexContext.commit("setReadPostList", data);
		},
		fetchReadPostSelected(vuexContext, id) {
			return axios
				.get(`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${id}.json`)
				.then(result => {
					vuexContext.commit("setReadPostSelected", result.data);
				});
		},
		fetchCreatePost(vuexContext, data) {
			axios
				.post("https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts.json", data)
				.then(result => {
					console.log(result);

					const firebaseId = result.data.name;

					return axios
						.patch(`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${firebaseId}.json`, {
							"id": firebaseId,
						})
						.then(resultUpdated => {
							console.log(resultUpdated);

							vuexContext.commit("setCreatePost", {
								...data,
								"id": resultUpdated.data.name,
							});
						});
				})
				.catch(error => console.log(error));
		},
		fetchUpdatePost(vuexContext, data) {
			return axios
				.put(
					`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${data.id}.json`,
					data,
				)
				.then(result => {
					console.log(result);

					vuexContext.commit("setUpdatePost", data);
				})
				.catch(error => console.log(error));
		},
		fetchDeletePost(vuexContext, id) {
			return axios
				.delete(`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${id}.json`)
				.then(() => {
					vuexContext.commit("setDeletePost", id);
				})
				.catch(error => console.error(error));
		},
	},
	"getters": {
		getPostList(state) {
			return state.postList;
		},
		getPostSelected(state) {
			return state.postSelected;
		},
		getIsError(state) {
			return state.isError;
		},
	},
});

export default createStore;
