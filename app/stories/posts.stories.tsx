import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
// import { Outlet, useLoaderData, useMatches } from "@remix-run/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { json } from "@remix-run/node";

import Posts from "../routes/posts._index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "routes/posts",
  component: Posts,
  // tags: ["autodocs"],
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      let RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          loader: () => {
            return json({ posts: [] });
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};
