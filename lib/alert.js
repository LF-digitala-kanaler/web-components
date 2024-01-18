import { html, css, LitElement } from "lit";

export class Alert extends LitElement {
  static styles = css`
    :host {
      --_lf-alert-background-color: var(
        --lf-alert-background-color,
        var(--lf-color-info, #ccdeec)
      );
      --_lf-alert-border-color: var(--lf-alert-border-color, #005aa0);
      --_lf-alert-color: inherit;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      min-height: 3.2rem;
      border-style: solid;
      text-align: left;

      gap: var(--alert-gap, 0.5rem);
      border-width: var(--lf-alert-border-width, 0 0 0 2px);
      border-color: var(--_lf-alert-border-color, darkblue);
      background-color: var(--_lf-alert-background-color);
      border-radius: var(--lf-alert-border-radius, 0);
      padding: 0 var(--lf-alert-padding-x, var(--size-4, 1.5rem));
      color: var(--_lf-alert-color, inherit);
      font-size: var(--lf-alert-font-size, var(--lf-font-size-md, 16px));
      font-weight: var(--lf-alert-font-weight, var(--lf-font-weight-400, 400));
    }

    :host([variant="success"]) {
      --_lf-alert-background-color: var(
        --lf-alert-success-background-color,
        #e5fff0
      );
      --_lf-alert-border-color: #1b5e20;
      --_lf-alert-icon-color: var(--lf-alert-success-color, #1b5e20);
    }

    :host([variant="info"]) {
      --_lf-alert-background-color: var(
        --lf-alert-info-background-color,
        #ccdeec
      );
      --_lf-alert-border-color: var(--lf-alert-info-border-color, #005aa0);
      --_lf-alert-color: var(--lf-alert-info-color, #003660);
    }

    :host([variant="warning"]) {
      --_lf-alert-background-color: var(
        --lf-alert-warning-background-color,
        #ffffd6
      );
      --_lf-alert-border-color: #fdd835;
      --_lf-alert-icon-color: #fdd835;
    }

    :host([variant="danger"]) {
      --_lf-alert-background-color: var(
        --lf-alert-danger-background-color,
        #efcfd0
      );
      --_lf-alert-border-color: #ad1015;
      --_lf-alert-icon-color: #680a0d;
    }

    :host([banner]) {
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
      color: var(--_lf-alert-icon-color, inherit);
    }

    ::slotted([slot="start"]) {
      margin-left: -0.2rem;
    }

    ::slotted([slot="end"]) {
      margin-right: calc((var(--lf-alert-padding-x, 1.5rem) - 0.875rem) * -1);
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
      --lf-button-outline-border-color: var(--_lf-alert-border-color);
    }

    .content {
      margin: var(--lf-alert-padding-y, 0.9375rem) 0;
      flex: 1;
      line-height: 1.3;
    }
  `;

  static properties = {
    variant: {
      type: String,
      reflect: true,
    },
    closable: { type: Boolean },
    banner: { type: Boolean },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <slot name="start"></slot>
      <div class="content">
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </div>
      <slot name="end"></slot>
    `;
  }
}

customElements.define("lf-alert", Alert);
