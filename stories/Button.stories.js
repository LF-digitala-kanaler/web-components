import { html } from "lit";
import "../lib/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render: ({ variant }) =>
    html`<lf-button variant="${variant}" }>Button label</lf-button> `,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};
