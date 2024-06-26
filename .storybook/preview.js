import "@lansforsakringar/components/dist/lfui/style.css";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";
import "../lib/alert";
import "../lib/button";
import "../lib/spinner";

setCustomElementsManifest(customElements);

/** @type {import("@storybook/web-components").Preview} */
const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
