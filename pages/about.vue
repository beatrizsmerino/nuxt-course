<template>
	<div class="about">
		<section class="page__container page__inner">
			<PageTitle :page-title="pageTitle" />
			<article>
				<LogoList :logo-list="logoList" />
				<h2 class="title">
					nuxt-app
				</h2>
				<ButtonList :button-list="buttonList" />
			</article>
		</section>
	</div>
</template>

<script>
	import PageTitle from "@/components/Page/PageTitle";
	import LogoList from "@/components/Logo/LogoList";
	import ButtonList from "@/components/Button/ButtonList";

	export default {
		"name": "About",
		"components": {
			PageTitle,
			LogoList,
			ButtonList,
		},
		data() {
			return {
				"pageTitle": `This is an <span class="page-title__highlight">${this.$route.name}</span> page`,
				"logoList": [
					{
						"id": 1,
						"name": "logo-vue-js",
					},
					{
						"id": 2,
						"name": "logo-nuxt-js",
					},
				],
				"buttonList": [
					{
						"id": 1,
						"name": "Documentation",
						"path": "https://nuxtjs.org/",
						"modifier": "button--green",
					},
					{
						"id": 2,
						"name": "GitHub",
						"path": "https://github.com/nuxt/nuxt.js",
						"modifier": "button--grey",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.title {
		margin-bottom: 1rem;
		color: $color-brand-1;
		font-family:
			Quicksand,
			'Source Sans Pro',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			sans-serif;
		font-size: 3.5rem;
		font-weight: 300;
		letter-spacing: 0.1rem;
		text-align: center;
	}
</style>
