// @ts-check

import { html, css, LitElement } from "lit";

export class Button extends LitElement {
  static styles = css`
    :host button {
      border-width: 2px solid blue;
      border-radius: 0.25rem;
      overflow: hidden;
      cursor: pointer;
    }

    :host[variant="primary"] button {
      background: var(--alert-info-background, lightblue);
      border-color: var(--alert-info-border, blue);
    }

    :host[variant="secondary"] button {
      background: var(--alert-background-success, lightgreen);
      border-col: var(--alert-info-green, green);
    }

    :host([variant="outline"]) button {
      background: transparent;
      border: 2px solid var(--lf-button-outline-border-color);
      padding: calc(0.25rem - 2px) calc(0.75rem - 2px);
      font-size: 1rem;
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
