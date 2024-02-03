import Vue from "vue";
import UIIcon from "@/components/UI/UIIcon";
import UIButton from "@/components/UI/UIButton";
import UILogoNuxt from "@/components/UI/Logo/UILogoNuxt";
import UILogoGithub from "@/components/UI/Logo/UILogoGithub";
import UILogoTwitter from "@/components/UI/Logo/UILogoTwitter";

const components = {
	UIIcon,
	UIButton,
	UILogoNuxt,
	UILogoGithub,
	UILogoTwitter,
};

Object.entries(components).forEach(([
	name,
	component,
]) => {
	Vue.component(name, component);
});
