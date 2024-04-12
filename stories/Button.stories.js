import { html } from "lit";
import "../lib/button";
import "../.storybook/blocks/stack";

function Template({ variant, size, label, subLabel }) {
	return html` <lf-button variant="${variant}" size="${size}">
		${label || "Button label"}
		${subLabel
			? html`<span class="d-block text-sm font-weight-normal font-base"
					>${subLabel}</span
				>`
			: ""}
	</lf-button>`;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Components/Button",
	tags: ["autodocs"],
	component: "lf-button",
	render: Template,
};

export const PrimaryWithArrow = () => html`
	<lf-button variant="primary" arrow> Button label </lf-button>
`;

export const PrimaryWithArrowAndIcon = () => html`
	<lf-button variant="primary" arrow>
		<div
			slot="start"
			style="width: 24px; height: 24px; background: pink;"
		></div>
		Button label
	</lf-button>
`;

export const Secondary = {
	args: {
		variant: "secondary",
	},
};

export const SecondaryWithArrow = () => html`
	<lf-button variant="secondary" arrow> Button label </lf-button>
`;

export const test = () => html`
	<lf-button variant="primary"> Button label </lf-button>
	<lf-button variant="secondary"> Button label </lf-button>
`;

export const IconToRight = () => html`
	<lf-button variant="primary">
		Button label
		<div slot="end" style="width: 24px; height: 24px; background: pink;"></div>
	</lf-button>
`;

export const Small = {
	args: {
		variant: "primary",
		size: "small",
		label: "Small button",
	},
};

export const Default = {
	args: {
		variant: "primary",
		label: "Normal button",
	},
};

export const Large = {
	args: {
		variant: "primary",
		size: "large",
		label: "Large button",
	},
};

export const Sizes = () => html`
	<doc-stack>
		${Template(Small.args)} ${Template(Default.args)} ${Template(Large.args)}
	</doc-stack>
`;

export const LargeWithArrow = {
	args: {
		variant: "primary",
		size: "large",
		arrow: true,
	},
};

export const LoadingState = () => html`
	<lf-button
		variant="primary"
		loading
		@click="${() => console.log("You should not be able to see this message!")}"
	>
		Button label
	</lf-button>
`;

export const TwoLines = {
	args: {
		variant: "primary",
		label: "Gå vidare",
		subLabel: "och välj försäkring",
	},
};
