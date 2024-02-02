import type { Meta, StoryObj } from "@storybook/react";

import Index from "./_index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Pages/index",
  component: Index,
  // tags: ["autodocs"],
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
