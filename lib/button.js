import { html, css, LitElement } from "lit";

/*
	TODO:
	- [ ] Link button
	- [ ] Include in print
	- [x] Hover state
	- [x] Animate Arrow
*/

/**
	@slot start - Before the button label
	@slot default - Button label (default slot)
	@slot end - After the button label
	@cssprop --lf-button-gap
	@cssprop --lf-button-padding-y
	@cssprop --lf-button-small-padding-y
	@cssprop --lf-button-large-padding-y
	@cssprop --lf-button-padding-x
	@cssprop --lf-button-small-padding-x
	@cssprop --lf-button-large-padding-x
	@cssprop --lf-button-outline-width
	@cssprop --lf-button-outline-width
	@cssprop --lf-button-label-text-weight
	@cssprop --lf-button-primary-container-color
	@cssprop --lf-button-primary-hover-container-color
	@cssprop --lf-button-primary-pressed-container-color
	@cssprop --lf-button-primary-accent-color
	@cssprop --lf-button-primary-outline-color
	@cssprop --lf-button-secondary-container-color
	@cssprop --lf-button-secondary-hover-container-color
	@cssprop --lf-button-secondary-pressed-container-color
	@cssprop --lf-button-secondary-accent-color
	@cssprop --lf-button-secondary-outline-color
	@property {'primary', 'secondary'} [variant="secondary"] Variant of button
	@property {'small','normal','large'} [size=normal] Size of the button
*/
export class LfButton extends LitElement {
	static styles = css`
		:host {
			--_lf-button-container-color: var(--lf-button-secondary-container-color, transparent);
			--_lf-button-outline-color: var(--lf-button-secondary-outline-color, #00427a);
			--_lf-button-outline-width: var(--lf-button-outline-width, 2px);
			--_lf-button-accent-color: var(--lf-button-secondary-accent-color, #00427a);
			--_lf-button-label-text-weight: 700;

			--_lf-button-hover-container-color: color-mix(
				in srgb,
				var(--lf-button-hover-secondary-container-color, rgb(0, 66, 123)) 10%,
				transparent
			);

			--_lf-button-hover-outline-color: var(--lf-button-hover-secondary-outline-color, #00427a)
			--_lf-button-on-container-color: var(--lf-button-on-secondary-container-color, transparent);
			--_lf-button-height: var(--lf-button-height, 40px);
			--lf-spinner-divider-color: var(--_lf-button-container-color);
			--_lf-button-container-padding: var(--lf-button-container-padding-y) var(--lf-button-container-padding-x);

			--_lf-button-padding-x: var();
			--_lf-button-padding-y: var();

			display: block;
			color: var(	--lf-button-label-text-color, var(--_lf-button-accent-color));
			cursor: pointer;
		}

		button {
			display: flex;
			gap: 1rem;
			align-items: center;
	  	position: relative;
			flex-wrap: no-wrap;
			transition: background-color 150ms ease-in-out;
			border: var(--_lf-button-outline-width) solid var(--_lf-button-outline-color);
			width: 100%;
			min-height: var(--_lf-button-height);
			line-height: 1.34;
			border-radius: 0.25rem;
			overflow: hidden;
			justify-content:center;
			cursor: inherit;
			background-color: var(--_lf-button-container-color);
			font-weight: var(--_lf-button-label-text-weight, 700);
			font-size: var(--_lf-button-text-size, 1.125rem);
			color: inherit;
			padding: 0 calc(1rem - 2px);
			/* padding: calc(0.5rem - 2px) calc(1rem - 2px); */
		}

		.arrow {
			display: inline-block;
			width: 28px;
			height: 16px;
			transition: transform .1s linear;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 28 17'%3E%3Cpath fill='%23fff' d='m23.586 7.329-5.293-5.293L19.707.62l7.707 7.708-7.707 7.707-1.414-1.415 5.293-5.292H0v-2h23.586Z'/%3E%3C/svg%3E");
			background-repeat: no-repeat;
		}

		:host(:hover) .arrow {
		  transform: translateX(2px);
		}

		:host([variant="secondary"]) .arrow {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 28 17'%3E%3Cpath fill='%2300427a' d='m23.586 7.329-5.293-5.293L19.707.62l7.707 7.708-7.707 7.707-1.414-1.415 5.293-5.292H0v-2h23.586Z'/%3E%3C/svg%3E");
		}

		::slotted([slot="start"]),
		::slotted([slot="end"]),
		.arrow {
		  flex-shrink: 0;
		}

		.button__label-group {
			align-items: inherit;
			display: flex;
			gap: 1rem;
		}

		.button__label {
			text-align: left;
		}

		:host(:not([loading])) button:active {
			border-color: var(--_lf-button-hover-outline-color);
			background-color: var(--_lf-button-hover-container-color);
		}

		:host([loading]) {
			cursor: default;
		}

		:host button:focus-visible {
			outline: var(--lf-focus-ring-width, 6px) solid var(--lf-focus-ring-color, yellow);
		}

		:host([variant="primary"]) {
			--_lf-button-hover-container-color: color-mix(
				in srgb,
				var(--lf-button-hover-primary-container-color, rgb(173,16,21)) 90%,
				black
			);
			--_lf-button-container-color: var(
				--lf-button-primary-container-color,
				#ad1015
			);
			--_lf-button-outline-color: var(
				--lf-button-primary-outline-color,
				#ad1015
			);
			--_lf-button-hover-outline-color: color-mix(
				in srgb,
				var(--lf-button-hover-primary-outline-color, rgb(173,16,21)) 90%,
				black
			);
			--_lf-button-accent-color: var(
				--lf-button-primary-accent-color,
				#fff
			);

			--lf-spinner-color: var(--_lf-button-accent-color);
			--lf-spinner-accent-color: var(--_lf-button-container-color);
		}

		:host([variant="secondary"]) {
			--_lf-button-hover-container-color: color-mix(
				in srgb,
				var(--lf-button-hover-secondary-container-color, rgb(0, 66, 123)) 10%,
				transparent
			);
			--_lf-button-container-color: var(
				--lf-button-secondary-container-color,
				transparent
			);
			--_lf-button-outline-color: var(
				--lf-button-secondary-outline-color,
				#00427a
			);

			--_lf-button-hover-outline-color: var(
				--lf-button-hover-secondary-outline-color,
				#00427a
			);

			--_lf-button-accent-color: var(
				--lf-button-secondary-accent-color,
				#00427a
			);
		}

		:host([variant="secondary"]) button:hover {
			box-shadow:
				inset 0 0 0 1px var(--_lf-button-outline-color),
				inset 0 0 0 1px var(--_lf-button-outline-color),
				inset 0 0 0 1px var(--_lf-button-outline-color),
				inset 0 0 0 1px var(--_lf-button-outline-color);
		}

		:host([size="small"]) {
			--_lf-button-height: 2rem;
			--_lf-button-text-size: 1rem;
			--_lf-button-container-padding: var(--lf-button-container-small-padding-y) var(--lf-button-container-small-padding-x);
			line-height: 1;
		}

		:host([size="large"]) {
			--_lf-button-height: 2.75rem;
			--_lf-button-text-size: 1.25rem;
			--_lf-button-container-padding: var(--lf-button-container-large-padding-y) var(--lf-button-container-large-padding-x);
			line-height: 1.2;
		}

		@media (min-width: 368px) {
			:host {
				display: inline-block;
			}
		}
	`;

	static properties = {
		size: { type: String },
		variant: { type: String },
		arrow: { type: Boolean },
		loading: { type: Boolean, reflect: true }
	}

	constructor() {
		super();
		this.slotEndInUse = false;
		this.addEventListener('click', (event) => {
			if(this.loading) {
				event.stopImmediatePropagation()
			}
		})
	}

	renderLoadingState() {
		return html`
			<div class="button__label-group">
				<div class="button__label">
					Laddar...
				</div>
				<lf-spinner size="xsmall"></lf-spinner>
			</div>`
	}

	render() {
		return html`
			<button>
				${this.loading ? this.renderLoadingState() : html`
					<div class="button__label-group">
			     		<slot name="start"></slot>
			       	<div class="button__label">
									<slot></slot>
							</div>
	        </div>
	        <slot name="end">
							${this.arrow ? html`<div part="arrow" class="arrow"></div>` : ''}
					</slot>
        `}
      </button>
    `;
	}
}

customElements.define("lf-button", LfButton);
