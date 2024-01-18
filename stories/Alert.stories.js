import { html } from "lit";
import "../lib/alert";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Alert",
  tags: ["autodocs"],
  render: ({ variant, closable }) =>
    html`<lf-alert variant="${variant}" ${closable ? "closable" : ""}}>
      Message here
    </lf-alert> `,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
