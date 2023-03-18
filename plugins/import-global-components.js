import Vue from "vue";
import Icon from "@/components/UI/Icon";
import Button from "@/components/UI/Button";
import LogoNuxt from "@/components/Logo/LogoNuxt";
import LogoGithub from "@/components/Logo/LogoGithub";
import LogoTwitter from "@/components/Logo/LogoTwitter";

const components = {
	Icon,
	Button,
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
