import type { Meta, StoryObj } from "@storybook/react";

import { EmailSubscribe } from "./EmailSubscribe";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecules/EmailSubscribe",
  component: EmailSubscribe,
  // tags: ["autodocs"],
} satisfies Meta<typeof EmailSubscribe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
