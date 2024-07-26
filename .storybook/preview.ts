import type { Loader, Preview } from "@storybook/react";
// import type { LinkDescriptor } from "@remix-run/node";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
// import { initialize, mswLoader } from "msw-storybook-addon";

import "../app/tailwind.css";

const preview: Preview = {
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", right: "🇺🇸", title: "English" },
          { value: "fr", right: "🇫🇷", title: "Français" },
          { value: "es", right: "🇪🇸", title: "Español" },
          { value: "zh", right: "🇨🇳", title: "中文" },
          { value: "kr", right: "🇰🇷", title: "한국어" },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        small: { name: "Small", styles: { width: "640px", height: "800px" } },
        large: { name: "Large", styles: { width: "1024px", height: "1000px" } },
        xLarge: {
          name: "X-Large",
          styles: { width: "1200px", height: "1080px" },
        },
      },
    },
    // backgrounds: {
    //   default: "light",
    // },
  },
  // loaders: loaders,
  // Provide the MSW addon loader globally
  // loaders: [mswLoader],
};

export default preview;

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
      cupcake: "cupcake",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];
