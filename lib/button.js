// @ts-check

import { html, css, LitElement } from "lit";

export class Button extends LitElement {
	static styles = css`
		:host button {
			border: 2px solid transparent;
			border-radius: 0.25rem;
			overflow: hidden;
			cursor: pointer;
			font-weight: var(--lf-button-font-weight, 700);
			text-align: var(--lf-button-text-align, center);
		}

		:host([variant="primary"]) button {
			background: var(--button-primary-background, #ad1015);
			border-color: var(--button-primary-border-color, #ad1015);
			color: var(--button-primary-color, #fff);
			padding: var(
				--button-primary-padding,
				calc(0.5rem - 2px) calc(1rem - 2px)
			);
		}

		:host([variant="secondary"]) button {
			background: var(--button-secondary-background, transparent);
			border-color: var(--button-secondary-border-color, #00427a);
			color: var(--button-secondary-color, #00427a);
			padding: var(
				--button-secondary-padding,
				calc(0.5rem - 2px) calc(1rem - 2px)
			);
		}
	`;

	render() {
		return html`
    	<button>
      	<slot name="start" />
       <slot />
       <slot name="end" />
      </buttoon>
    `;
	}
}

customElements.define("lf-button", Button);
