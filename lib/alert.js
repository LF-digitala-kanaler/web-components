import { html, css, LitElement } from "lit";

/**
 * The magical Alert component that has 4 variants for all your needs!
 *
 * ## Accessibility Considerations
 *
 * For `LfAlert` components added dynamically to the DOM after the initial page
 * load, additional attributes are needed to ensure accessibility compliance and
 * optimal user experience for screen reader users.
 *
 * Specifically, when you dynamically create an `LfAlert` instance, add
 * `role="alert"` and `aria-live="polite"` attributes. This setup informs
 * assistive technologies to announce the alert message without interrupting the
 * user's current activity, making it essential for alerts that contain
 * important, non-emergency information.
 *
 * ### Example:
 *
 * ```
 * const alert = document.createElement("lf-alert");
 * alert.setAttribute("role", "alert");
 * alert.setAttribute("aria-live", "polite");
 * // Configure the alert with other necessary attributes or properties
 * document.body.appendChild(alert);
 *
 * Including these attributes makes the alert more accessible, ensuring that all users receive the alert information promptly and efficiently.
 * ```
 *
 * @version 0.0.1
 * @since 0.0.1
 * @example
 * 	<lf-alert variant="success" heading="Alert heading">
 * 		Text content here
 * 	</lf-alert>;
 *
 * @example
 * 	<lf-alert variant="info" heading="Info heading here">
 * 		<lf-icon name="info" size="24"></lf-icon>
 * 		Text here...
 * 	</lf-alert>;
 *
 * @example
 * 	<lf-alert variant="info" heading="Info heading here">
 * 		Text here...
 * 		<lf-button
 * 			slot="end"
 * 			variant="secondary"
 * 			size="small"
 * 			alert-action="close"
 * 		>
 * 			Custom close button
 * 		</lf-button>
 * 	</lf-alert>;
 *
 * @property {"info" | "success" | "warning" | "danger"} [variant=info] Variant
 *   of Alert. Default is `info`
 * @summary This is the Alert component!
 * @slot start - Before message to the left
 * @slot - Text content (default slot)
 * @slot end - After message to the right
 * @cssprop --lf-alert-background-color - Background color.
 * @cssprop --lf-alert-success-background-color - Background color for success messages.
 * @cssprop --lf-alert-warning-background-color - Background color for warning messages.
 * @cssprop --lf-alert-info-background-color - Background color for info messages.
 * @cssprop --lf-alert-danger-background-color - Background color for danger messages.
 * @cssprop --lf-alert-text-color - Text color
 * @cssprop --lf-alert-text-size - Font size.
 * @cssprop --lf-alert-text-weight - Font weight.
 * @cssprop --lf-alert-accent-color - Accent color used on icons and secondary buttons.
 * @cssprop --lf-alert-padding-x - Horizontal padding inside Alert.
 * @cssprop --lf-alert-padding-y - Vertical padding inside Alert.
 * @cssprop --lf-alert-border-radius - Border radius.
 * @cssprop --lf-alert-gap - Spacing between elements inside the Alert.
 * @dependency lf-button
 * @element lf-alert
 * @todo Closable vs. "Dismissible"
 *
 * @todo Banner "variant"
 */
export class LfAlert extends LitElement {
	static styles = css`
		:host {
			--_lf-alert-container-color: var(
				--lf-alert-info-container-color,
				#e5eff7
			);
			--_lf-alert-container-padding-x: var(
				--lf-alert-container-padding-x,
				1.5rem
			);
			--_lf-alert-container-padding-y: var(
				--lf-alert-container-padding-y,
				0.9375rem
			);
			--_lf-alert-container-shape: var(--lf-alert-container-shape, 8px);
			--_lf-alert-accent-color: var(--lf-alert-info-accent-color, #005aa0);
			--_lf-alert-text-color: var(--lf-alert-info-text-color, #222);
			--lf-button-label-text-color: var(--_lf-alert-text-color)
				--_close-active-opacity: 0.6;
			--_close-hover-color: var(--_lf-alert-accent-color);
			--_close-icon-width: 0.875rem;
			--_close-icon-path-width: 0.125rem;

			container-type: inline-size;
			position: relative;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			min-height: 3.2rem;
			text-align: left;
			box-shadow:
				0px 0.9px 1.2px 0px rgba(0, 0, 0, 0.03),
				0px 0.4px 0.6px 0px rgba(0, 0, 0, 0.03),
				0px 0.2px 0.2px 0px rgba(0, 0, 0, 0.02),
				0px 1.8px 2.6px 0px rgba(0, 0, 0, 0.04),
				0px 5px 7px 0px rgba(0, 0, 0, 0.06);

			gap: var(--alert-gap, 0.5rem);
			background-color: var(--_lf-alert-container-color);
			border-radius: var(--_lf-alert-container-shape);
			padding: 0 1.5rem;
			color: var(--_lf-alert-text-color);
			font-size: var(--lf-alert-text-size, 16px);
			font-weight: var(--lf-alert-text-weight, 400);
			width: 100%;
		}

		:host([variant="success"]) {
			--_lf-alert-container-color: var(
				--lf-alert-success-container-color,
				#e5fff0
			);
			--_lf-alert-accent-color: var(--lf-alert-success-accent-color, #1b5e20);
		}

		:host([variant="info"]) {
			--_lf-alert-container-color: var(
				--lf-alert-info-container-color,
				#e5eff7
			);
			--_lf-alert-accent-color: var(--lf-alert-info-accent-color, #005aa0);
		}

		:host([variant="warning"]) {
			--_lf-alert-container-color: var(
				--lf-alert-warning-container-color,
				#ffffd6
			);
			--_lf-alert-accent-color: var(--lf-alert-warning-accent-color, #fdd835);
		}

		:host([variant="danger"]) {
			--_lf-alert-container-color: var(
				--lf-alert-danger-container-color,
				#efcfd0
			);
			--_lf-alert-accent-color: var(--lf-alert-danger-accent-color, #ad1015);
		}

		:host([banner]) {
		}

		:host([closable=""]) {
			padding-right: 3rem;
		}

		::slotted([slot="start"]),
		::slotted([slot="end"]) {
			color: var(--_lf-alert-accent-color);
			--lf-button-label-text-color: var(--_lf-alert-text-color);
		}

		::slotted([slot="start"]) {
			margin-left: -0.2rem;
		}

		::slotted([slot="end"]) {
			margin-right: calc(
				(var(--_lf-alert-container-padding-x) - 0.875rem) * -1
			);
		}

		::slotted([slot="start"]),
		::slotted([slot="end"]) {
			color: var(--_lf-alert-accent-color);
			--lf-button-label-text-color: var(--_lf-alert-text-color);
		}

		.alert__close-button {
			--lf-button-secondary-outline-color: var(--_lf-alert-accent-color);
			--lf-button-hover-secondary-outline-color: var(--_lf-alert-accent-color);
			--lf-button-hover-secondary-container-color: var(
				--_lf-alert-accent-color
			);
			--lf-button-label-text-color: var(--_lf-alert-text-color);
			flex-basis: 100%;
			margin-bottom: var(--_lf-alert-container-padding-y);
		}

		.alert__close {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 2;
			padding: 1.171875rem 1.5rem;
			padding: 1.15rem 1.0625rem;
			color: #222;

			box-sizing: content-box;
			width: 0.875rem;
			height: 0.875rem;
			color: currentcolor;
			background: transparent;
			border: 0;
			opacity: 1;
		}

		.alert__close:active {
			opacity: var(--_close-active-opacity);
		}

		.alert__close:hover {
			color: var(--_close-hover-color);
		}

		.alert__close:before,
		.alert__close:after {
			position: absolute;
			top: 50%;
			left: 50%;
			width: var(--_close-icon-width);
			height: var(--_close-icon-path-width);
			margin: calc(var(--_close-icon-path-width) / 2 * -1) 0 0
				calc(var(--_close-icon-width) / 2 * -1);
			content: "";
			background: currentcolor;
			transform: rotate(45deg);
		}

		.alert__close:after {
			transform: rotate(135deg);
		}

		.content {
			margin: var(--_lf-alert-container-padding-y) 0;
			flex: 1;
			display: flex;
			gap: 0.75rem;
			flex-direction: column;
			line-height: 1.3;
		}

		.alert__heading {
			font-family: $font-family-sans-serif;
			font-weight: 700;
		}

		@container (min-width: 368px) {
			.content {
				flex-direction: row;
				gap: 1ch;
			}

			.alert__heading {
				display: block;
			}

			.alert__close-button {
				flex-basis: auto;
				margin-bottom: 0;
			}
		}
	`;

	static properties = {
		variant: { type: String },
		heading: { type: String },
		closable: { type: String },
		banner: { type: Boolean },
	};

	static labels = {
		info: "Informationsmeddelande",
		success: "Bekräftande meddelande",
		warning: "Varningsmeddelande",
		danger: "Felmeddelande",
	};

	constructor() {
		super();
		// this.setAttribute("role", "region");
	}

	connectedCallback() {
		super.connectedCallback();

		this.setAttribute("aria-label", LfAlert.labels[this.variant || "info"]);
		this.addEventListener("click", this.#clickHandler);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("click", this.#clickHandler);
	}

	#clickHandler({ target }) {
		if (target.closest("[alert-action]")) {
			switch (target.getAttribute("alert-action").toLowerCase()) {
				case "close":
					this.close();
					break;
			}
		}
	}

	close() {
		this.remove();
	}

	typeOfVariant() {}

	renderCloseButton() {
		const { closable, close } = this;
		if (closable?.length) {
			return html`
				<lf-button
					variant="secondary"
					size="small"
					class="alert__close-button"
					@click="${close}"
				>
					${closable}
				</lf-button>
			`;
		} else if (closable === "") {
			return html`<button
				class="alert__close"
				aria-label="Stäng meddelandet"
				@click="${close}"
				part="close"
			></button>`;
		}
	}

	render() {
		return html`
			<slot name="start"></slot>
			<div class="content">
				${this.heading
					? html`<span class="alert__heading">${this.heading}</span>`
					: ""}
				<slot></slot>
			</div>
			${this.renderCloseButton()}
			<slot name="end"></slot>
		`;
	}
}

customElements.define("lf-alert", LfAlert);
