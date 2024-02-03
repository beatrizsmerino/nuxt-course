import { mount } from "@vue/test-utils";
import LogoNuxt from "~/components/UI/Logo/UILogoNuxt.vue";

describe("LogoNuxt", () => {
	test("is a Vue instance", () => {
		const wrapper = mount(LogoNuxt);
		expect(wrapper.vm).toBeTruthy();
	});
});
