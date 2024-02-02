/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}", "**/*.stories.*"],
  postcss: true,
  serverModuleFormat: "cjs",
  tailwind: true,
  serverDependenciesToBundle: ["@prisma/client", "marked"],
};
