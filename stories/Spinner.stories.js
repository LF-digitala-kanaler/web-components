import { html } from "lit";
import "../lib/spinner";
import "../.storybook/blocks/stack";

function Template({ size, negative }) {
	return html`
		<lf-spinner
			size="${size}"
			${negative ? 'negative="true"' : ""}
		></lf-spinner>
	`;
}

function TemplateNegative({ size }) {
	return html` <lf-spinner size="${size}" negative></lf-spinner> `;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Components/Spinner",
	tags: ["autodocs"],
	component: "lf-spinner",
	render: Template,
};

export const Default = {
	args: {},
};

export const Small = {
	args: {
		size: "small",
	},
};

export const Xsmall = {
	args: {
		size: "xsmall",
	},
};

export const NegativeDefault = TemplateNegative.bind({});
NegativeDefault.args = {};

export const NegativeSmall = TemplateNegative.bind({});
NegativeSmall.args = {
	size: "small",
};

export const NegativeXsmall = TemplateNegative.bind({});
NegativeXsmall.args = {
	size: "xsmall",
};
