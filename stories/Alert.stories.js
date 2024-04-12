import { html } from "lit";

import "../lib/alert";
import "../lib/button";
import "../.storybook/blocks/stack";

// const placeholderIcon = '<div style="width: 20px; height:20px; border: 2px solid currentColor; border-radius: 50%;" slot="start"></div>';

function Template({ variant, message = "Message here" }) {
	return html`<lf-alert variant="${variant}">${message}</lf-alert>`;
}

export default {
	title: "Components/Alert",
	// tags: ["autodocs"],
	component: "lf-alert",
	render: Template,
};

export const Info = {
	args: {
		variant: "info",
	},
};

export const Success = {
	args: {
		variant: "success",
	},
};

export const Warning = {
	args: {
		variant: "warning",
	},
};

export const Danger = {
	args: {
		variant: "danger",
	},
};

export const Variants = {
	render: () => html`
		<doc-stack>
			${Template({ ...Info.args, message: "Info" })}
			${Template({ ...Success.args, message: "Success" })}
			${Template({ ...Warning.args, message: "Warning" })}
			${Template({ ...Danger.args, message: "Danger" })}
		</doc-stack>
	`,
};

export const WithCloseButton = () => html`
	<lf-alert closable> Message here </lf-alert>
`;

export const WithHeading = () => html`
	<lf-alert closable="Got it!" heading="Heading of alert">
		Message here
	</lf-alert>
`;

export const CustomCloseButton = () => html`
	<lf-alert heading="Heading of alert">
		Message here
		<lf-button slot="end" variant="secondary" size="small" alert-action="close"
			>Close me!</lf-button
		>
	</lf-alert>
`;

export const WithButton = () => html`
	<lf-alert variant="danger" closable="Got it!"> Message here </lf-alert>
`;
