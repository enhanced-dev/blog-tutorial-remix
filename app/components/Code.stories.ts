import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atoms/Code",
  component: Code,
  // tags: ["autodocs"],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
