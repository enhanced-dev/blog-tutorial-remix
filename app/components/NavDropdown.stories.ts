import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, fn } from "@storybook/test";
import { withRouter } from "storybook-addon-react-router-v6";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

import { NavDropdown } from "./NavDropdown";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecules/NavDropdown",
  component: NavDropdown,
  decorators: [
    withRouter,
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
        cupcake: "cupcake",
      },
      defaultTheme: "cupcake",
      attributeName: "data-theme",
    }),
  ],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof NavDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    // console.log(canvasElement);
    // const hasClass = canvasElement.getAttribute("class");
    // expect(hasClass).toBe("pseudo-hover");
    const menu = await canvas.findByTestId("navMenu");
    expect(menu).not.toBeNull();
    userEvent.click(menu);
    const navItem = await canvas.findByText("Home");
    expect(navItem).not.toBeNull();
    // await expect(args.onClick).toHaveBeenCalled();
  },
  parameters: { pseudo: { hover: true } },
};

export const CloseMenu: Story = {
  play: async (context) => {
    await Basic.play!(context);
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    userEvent.click(await canvas.findByTestId("navMenu"));
  },
};
