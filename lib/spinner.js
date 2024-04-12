// @ts-check

import { html, css, LitElement } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

export class LfSpinner extends LitElement {
	static styles = css`
		@keyframes spinner-draw-dash {
			0% {
				stroke-dasharray: 36, 257;
				stroke-dashoffset: -6;
			}

			25% {
				stroke-dashoffset: -6;
			}

			30% {
				stroke-dasharray: 240, 60;
			}

			100% {
				stroke-dasharray: 38, 258;
				stroke-dashoffset: -301;
			}
		}

		@keyframes forward-line-rotate {
			0% {
				transform: rotate(52deg);
			}

			30% {
				transform: rotate(305deg);
			}

			87% {
				transform: rotate(406deg);
			}

			100% {
				transform: rotate(409deg);
			}
		}

		@keyframes back-line-rotate {
			0% {
				transform: rotate(7deg);
			}

			25% {
				transform: rotate(7deg);
			}

			100% {
				transform: rotate(366deg);
			}
		}

		:host {
			--_lf-spinner-size: var(--lf-spinner-size, 60px);
			--_lf-spinner-color: var(--lf-spinner-color, #005aa0); /* blue */
			--_lf-spinner-accent-color: var(
				--lf-spinner-accent-color,
				#e30613
			); /* red */
			--_lf-spinner-divider-color: var(--lf-spinner-divider-color, #fff);
			--lf-spinner-animation-curve: cubic-bezier(0.53, 0, 0.49, 1);
			--lf-spinner-animation-time: 1.9s;

			position: relative;
			display: inline-block;
			background-color: var(--lf-spinner-divider-color);
			border-radius: 50%;
			transform: rotate(263deg);
		}

		svg {
			display: block;
			width: var(--_lf-spinner-size);
			height: var(--_lf-spinner-size);
		}

		:host([size="small"]) {
			--lf-spinner-size: var(--_lf-spinner-small-size, 40px);
		}

		:host([size="xsmall"]) {
			--lf-spinner-size: var(--_lf-spinner-xsmall-size, 25px);
		}

		:host([negative]) {
			--_lf-spinner-color: transparent;
			--_lf-spinner-divider-color: transparent;
		}

		.static-circle {
			fill: var(--_lf-spinner-divider-color);
			stroke: var(--_lf-spinner-color);
			stroke-dasharray: 314;
			stroke-width: 8;
		}

		.lf-spinner-dash {
			fill: transparent;
			stroke: var(--_lf-spinner-accent-color);
			-ms-stroke-dasharray: 240, 60;
			stroke-dasharray: 240, 60;
			-ms-stroke-dashoffset: -6;
			stroke-dashoffset: -6;
			stroke-width: 9;
			transform-origin: center center;
			animation: spinner-draw-dash var(--lf-spinner-animation-time) infinite
				var(--lf-spinner-animation-curve);
		}

		.lf-spinner-forward-line,
		.lf-spinner-back-line {
			stroke: var(--_lf-spinner-divider-color);
			stroke-width: 6px;
			transform: rotate(52deg);
			transform-origin: center;
			animation: forward-line-rotate var(--lf-spinner-animation-time) infinite
				cubic-bezier(0.51, 0.04, 0.46, 0.94);
		}

		.lf-spinner-back-line {
			transform: rotate(7deg);
			animation: back-line-rotate var(--lf-spinner-animation-time) infinite
				var(--lf-spinner-animation-curve);
		}
	`;

	static properties = {
		size: { type: String },
		negative: { type: Boolean },
	};

	constructor() {
		super();
	}

	render() {
		return html` <svg viewBox="0 0 105 105" x="0" y="0" role="animation">
			${unsafeSVG(`
						<circle class="static-circle" r="45%" cx="50%" cy="50%"/>
					  <circle class="lf-spinner-dash" r="45%" cx="50%" cy="50%"/>
					  <line class="lf-spinner-back-line" x1="50%" y1="50%" x2="100%" y2="50%"/>
					  <line class="lf-spinner-forward-line" x1="50%" y1="50%" x2="100%" y2="50%" />
					`)}
		</svg>`;
	}
}

customElements.define("lf-spinner", LfSpinner);
