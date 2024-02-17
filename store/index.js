/* eslint-disable max-lines-per-function */
import { Store } from "vuex";

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
		setDeletePostSelected(state) {
			state.postSelected = {};
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
			return context.app.$axios
				.$get(`/posts.json`)
				.then(response => {
					const postList = [];
					// eslint-disable-next-line guard-for-in
					for (const key in response) {
						postList.push({
							...response[key],
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
			return this.$axios
				.$get(`/posts/${id}.json`)
				.then(result => {
					vuexContext.commit("setReadPostSelected", result);
				});
		},
		fetchDeletePostSelected(vuexContext) {
			vuexContext.commit("setDeletePostSelected");
		},
		fetchCreatePost(vuexContext, data) {
			this.$axios
				.$post(`/posts.json`, data)
				.then(result => {
					const firebaseId = result.name;

					return this.$axios
						.$patch(`/posts/${firebaseId}.json`, {
							"id": firebaseId,
						})
						.then(resultUpdated => {
							vuexContext.commit("setCreatePost", {
								...data,
								"id": firebaseId,
							});
						});
				})
				.catch(error => console.log(error));
		},
		fetchUpdatePost(vuexContext, data) {
			return this.$axios
				.$put(`/posts/${data.id}.json`, data)
				.then(result => {
					vuexContext.commit("setUpdatePost", data);
				})
				.catch(error => console.log(error));
		},
		fetchDeletePost(vuexContext, id) {
			return this.$axios
				.$delete(`/posts/${id}.json`)
				.then(() => {
					vuexContext.commit("setDeletePost", id);
				})
				.catch(error => console.error(error));
		},
		fetchCreateAuthUser(vuexContext, data) {
			const switchAuth = data.isSignIn ? `signInWithPassword` : `signUp`;

			return this.$axios
				.$post(
					`https://identitytoolkit.googleapis.com/v1/accounts:${switchAuth}?key=${process.env.firebaseAPIKey}`,
					{
						"email": data.email,
						"password": data.password,
						"returnSecureToken": true,
					},
				)
				.then(response => console.log(response))
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
		getIsError(state) {
			return state.isError;
		},
	},
});

export default createStore;
