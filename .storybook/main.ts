import type { StorybookConfig } from "@storybook/react-vite";
import type { AddonOptionsVite } from "@storybook/addon-coverage";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "storybook-addon-react-router-v6",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/stories/**"],
        },
      },
    },
    "storybook-addon-pseudo-states",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [path.resolve("public")],
  env: (config) => ({
    ...config,
    NODE_ENV: "development",
  }),
};
export default config;
