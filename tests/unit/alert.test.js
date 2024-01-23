import { html } from "lit";
import { fixture, expect } from "@open-wc/testing";

import "../../lib/alert";

describe("lf-alert", () => {
  it('has "Message" as text conten', async () => {
    const el = await fixture(html`<lf-alert>Message</lf-alert>`);

    expect(el.textContent).to.equal("Message");
  });
});
