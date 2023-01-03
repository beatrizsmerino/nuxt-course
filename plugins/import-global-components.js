import Vue from 'vue';
import Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Button';

const components = { Icon, Button };

Object.entries(components).forEach(([
	name,
	component
]) => {
	Vue.component(name, component);
});
