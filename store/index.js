import { Store } from "vuex";
import axios from "axios";

const createStore = () => new Store({
	"state": {
		"postList": [],
		"postSelected": {},
		"isError": null,
	},
	"mutations": {
		setPostList(state, data) {
			state.postList = data;
		},
		setPostSelected(state, data) {
			state.postSelected = data;
		},
		createPost(state, data) {
			state.postList.push(data);
		},
		updatePost(state, data) {
			const postIndex = state.postList.findIndex(post => post.id === data.id);
			state.postList[postIndex] = data;
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
		setPostSelected(vuexContext, id) {
			return axios
				.get(`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${id}.json`)
				.then(result => {
					vuexContext.commit("setPostSelected", result.data);
				});
		},
		createPost(vuexContext, data) {
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

							vuexContext.commit("createPost", {
								...data,
								"id": resultUpdated.data.name,
							});
						});
				})
				.catch(error => console.log(error));
		},
		updatePost(vuexContext, data) {
			return axios
				.put(
					`https://nuxt-course-b5643-default-rtdb.firebaseio.com/posts/${data.id}.json`,
					data,
				)
				.then(result => {
					console.log(result);

					vuexContext.commit("updatePost", data);
				})
				.catch(error => console.log(error));
		},
	},
	"getters": {
		getPostList(state) {
			return state.postList;
		},
		getPostSelected(state) {
			return state.postSelected;
		},
	},
});

export default createStore;
