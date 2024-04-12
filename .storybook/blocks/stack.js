import { html, css, LitElement } from "lit";

export class DocStack extends LitElement {
	static styles = css`
		:host {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 16px;
			width: 100%;
		}
	`;

	render() {
		return html`<slot></slot>`;
	}
}

customElements.define("doc-stack", DocStack);
