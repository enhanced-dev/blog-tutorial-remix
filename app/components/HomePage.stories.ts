import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { allModes } from "../../.storybook/modes";
import { HomePage } from "./HomePage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Templates/HomePage",
  component: HomePage,
  decorators: [withRouter],
  parameters: {
    chromatic: {
      //🔶 Test each story for ArticleCard in two modes
      modes: {
        "light mobile": allModes["light mobile"],
        "dark desktop": allModes["dark desktop"],
      },
    },
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
