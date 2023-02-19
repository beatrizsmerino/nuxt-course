import Vue from "vue";
import LogoNuxt from "@/components/Logo/LogoNuxt";
import LogoGithub from "@/components/Logo/LogoGithub";
import LogoTwitter from "@/components/Logo/LogoTwitter";

const components = {
	LogoNuxt,
	LogoGithub,
	LogoTwitter,
};

Object.entries(components).forEach(([
	name,
	component,
]) => {
	Vue.component(name, component);
});
