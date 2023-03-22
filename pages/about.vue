<template>
	<section class="page__container page__inner">
		<PageTitle :page-title="pageTitle" />
		<article>
			<LogoList :logo-list="logoList" />
			<h2 class="title">
				nuxt-app
			</h2>
			<ul class="button-list">
				<li
					v-for="button in buttonList"
					:key="button.id"
					class="button-list__item"
				>
					<Button
						:to="button.to"
						:href="button.href"
						:class-modifier="button.modifier"
					>
						{{ button.name }}
					</Button>
				</li>
			</ul>
		</article>
	</section>
</template>

<script>
	import PageTitle from "@/components/Page/PageTitle";
	import LogoList from "@/components/Logo/LogoList";

	export default {
		"name": "About",
		"components": {
			PageTitle,
			LogoList,
		},
		data() {
			return {
				"pageTitle": `This is an <span class="page-title__highlight">${this.$route.name}</span> page`,
				"logoList": [
					{
						"id": 1,
						"name": "logo-vue-light-theme",
					},
					{
						"id": 2,
						"name": "logo-nuxt-light-theme",
					},
				],
				"buttonList": [
					{
						"id": 1,
						"name": "Documentation",
						"path": "https://nuxtjs.org/",
						"modifier": "button--brand-1-dark-line",
					},
					{
						"id": 2,
						"name": "GitHub",
						"path": "https://github.com/nuxt/nuxt.js",
						"modifier": "button--brand-2-dark-line",
					},
					{
						"id": 3,
						"name": "Exercises",
						"to": "/exercises",
						"modifier": "button--black",
					},
				],
			};
		},
		head() {
			return {
				"htmlAttrs": {
					"class": "page--about",
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.title {
		margin-bottom: 1rem;
		color: $color-brand-1;
		font-family: Quicksand, "Source Sans Pro", -apple-system,
			BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
			sans-serif;
		font-size: 3.5rem;
		font-weight: 300;
		letter-spacing: 0.1rem;
		text-align: center;
	}

	.button-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0;
		padding: 0;
		list-style: none;

		&__item {
			&:not(:last-child) {
				margin-right: 1.5rem;
			}
		}
	}
</style>
