import type { Meta, StoryObj } from "@storybook/react";
// import React from "react";
// import { Outlet, useLoaderData, useMatches } from "@remix-run/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import Index from "../routes/_index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "routes/home",
  component: Index,
  // tags: ["autodocs"],
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      let RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          // loader: () => {
          //   return json({});
          // },
        },
      ]);

      return <RemixStub />;
    },
  ],
};
