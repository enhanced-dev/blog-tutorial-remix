import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./Hero";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecules/Hero",
  component: Hero,
  // tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
